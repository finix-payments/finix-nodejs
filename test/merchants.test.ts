import {Client, Environment, Models} from '../src/api';

describe('Merchants API', () => {

    let client: Client;
    let merchantID: string;
    let identityId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Provision a merchant", async() => {
        const createIdentityRequest: Models.CreateIdentityRequest = {
            additionalUnderwritingData: {
                merchantAgreementAccepted: true, 
                merchantAgreementIpAddress: "42.1.1.113",
                averageAchTransferAmount: 200000,
                annualAchVolume: 200000,
            }, 
            tags: {
                "Studio Rating": "4.7"
            },
            entity: {
                lastName: "Sunkhronos",
                firstName: "dwayne",
                email: "user@example.org",
                phone: "1234567890"
            }
        }
        const createdIdentity = await client.Identities.create(createIdentityRequest, {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        identityId = <string>createdIdentity.id;
        const paymentRequest : Models.CreatePaymentInstrumentRequest = {
            accountType: Models.CreatePaymentInstrumentRequest.AccountTypeEnum.Savings,
            name: "Alice",
            tags: {
                "Bank Account": "Company Account"
            },
            country: "USA",
            bankCode: "123123123",
            accountNumber: "123123123",
            type: Models.CreatePaymentInstrumentRequest.TypeEnum.BankAccount,
            identity: identityId
        };
        const createdPaymentInstrument = await client.PaymentInstruments.create(paymentRequest, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        const MerchantRequest: Models.CreateMerchantUnderwritingRequest = {
            processor: "DUMMY_V1",
            tags: {
                "key_2": "value_2"
            }
        };

        const createdMerchant = await client.Merchants.create(identityId, MerchantRequest, 
            {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        merchantID = <string>createdMerchant.id;

        expect(createdMerchant.identity).toBe(identityId);
        expect(createdMerchant.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(createdMerchant.processor).toBe(MerchantRequest.processor);
    });

    test("Test: Fetch a merchant", async() => { 
        const fetchedMerchant = await client.Merchants.get(merchantID, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(fetchedMerchant.identity).toBe(identityId);
        expect(fetchedMerchant.processor).toBe("DUMMY_V1");
        expect(fetchedMerchant.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test("Test: Reattempt merchant provisioning", async() => {
        const reattemptedMerchant = await client.Merchants.createMerchantVerification(merchantID, {},
            {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(reattemptedMerchant.merchant).toBe(merchantID);
        expect(reattemptedMerchant.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(reattemptedMerchant.processor).toBe("DUMMY_V1");
    });

    test("Test: Update merchant to enable Level 2/Level 3 processing", async() => {
        const client2 = new Client("UStxEci4vXxGDWLQhNvao7YY", "25038781-2369-4113-8187-34780e91052e");

        const updatedMerchant = await client2.Merchants.update(merchantID, {
            levelTwoLevelThreeDataEnabled: true
        },
            {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(updatedMerchant.id).toBe(merchantID);
        expect(updatedMerchant.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(updatedMerchant.levelTwoLevelThreeDataEnabled).toBe(true);
    });


    test("Test: List all merchant", async() => {
        const merchantList = await client.Merchants.list(undefined,
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(merchantList.page.limit).toEqual(expect.any(Number));
        if (merchantList.page.nextCursor != undefined){
            expect(merchantList.page.nextCursor).toEqual(expect.any(String));
        }        
        expect(merchantList.size).toEqual(expect.any(Number));
    });

    test("Test: List all merchant verification", async() => {
        const merchantVerificationList = await client.Verifications.listByMerchantId(merchantID, undefined,
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(merchantVerificationList.page.limit).toEqual(expect.any(Number));
        if (merchantVerificationList.page.nextCursor != undefined){
            expect(merchantVerificationList.page.nextCursor).toEqual(expect.any(String));
        }        
        expect(merchantVerificationList.size).toEqual(expect.any(Number));
    });

})
