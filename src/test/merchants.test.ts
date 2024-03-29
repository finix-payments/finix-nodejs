import {Client, Environment, Models} from '../api';

describe('Merchants API', () => {

    let client: Client;
    let merchantID: string;
    let identityId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Sandbox);
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
        const createdIdentity = await client.Identities.create(createIdentityRequest);
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
        await client.PaymentInstruments.create(paymentRequest);

        const MerchantRequest: Models.CreateMerchantUnderwritingRequest = {
            processor: "DUMMY_V1",
            tags: {
                "key_2": "value_2"
            }
        };

        const createdMerchant = await client.Merchants.create(identityId, MerchantRequest);
        merchantID = <string>createdMerchant.id;

        expect(createdMerchant.identity).toBe(identityId);
        expect(createdMerchant.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(createdMerchant.processor).toBe(MerchantRequest.processor);
    });

    test("Test: Fetch a merchant", async() => { 
        const fetchedMerchant = await client.Merchants.get(merchantID);

        expect(fetchedMerchant.identity).toBe(identityId);
        expect(fetchedMerchant.processor).toBe("DUMMY_V1");
        expect(fetchedMerchant.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test("Test: Reattempt merchant provisioning", async() => {
        const reattemptedMerchantVerification = await client.Merchants.createMerchantVerification(merchantID, {});

        expect(reattemptedMerchantVerification.merchant).toBe(merchantID);
        expect(reattemptedMerchantVerification.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(reattemptedMerchantVerification.processor).toBe("DUMMY_V1");
    });

    test("Test: Update merchant to enable Level 2/Level 3 processing", async() => {
        const client2 = new Client("UStxEci4vXxGDWLQhNvao7YY", "25038781-2369-4113-8187-34780e91052e");

        const updatedMerchant = await client2.Merchants.update(merchantID, {
            levelTwoLevelThreeDataEnabled: true
        });

        expect(updatedMerchant.id).toBe(merchantID);
        expect(updatedMerchant.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(updatedMerchant.levelTwoLevelThreeDataEnabled).toBe(true);
    });


    test("Test: List all merchant", async() => {
        const merchantList = await client.Merchants.list();

        expect(merchantList.page.limit).toEqual(expect.any(Number));
        if (merchantList.page.hasOwnProperty('offset')){
            expect(merchantList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (merchantList.page.nextCursor != undefined) {
                expect(merchantList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(merchantList.size).toEqual(expect.any(Number));

        if(merchantList.hasMore) {
            const nextMerchantList = await merchantList.listNext();
            expect(nextMerchantList.page.limit).toEqual(expect.any(Number));
            expect(nextMerchantList.size).toEqual(expect.any(Number));
        }
    });

    test("Test: List all merchant verification", async() => {
        const merchantVerificationList = await client.Verifications.listByMerchantId(merchantID);

        expect(merchantVerificationList.page.limit).toEqual(expect.any(Number));
        if (merchantVerificationList.page.hasOwnProperty('offset')){
            expect(merchantVerificationList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (merchantVerificationList.page.nextCursor != undefined) {
                expect(merchantVerificationList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(merchantVerificationList.size).toEqual(expect.any(Number));

        if(merchantVerificationList.hasMore) {
            const nextMerchantVerificationList = await merchantVerificationList.listNext();
            expect(nextMerchantVerificationList.page.limit).toEqual(expect.any(Number));
            expect(nextMerchantVerificationList.size).toEqual(expect.any(Number));
        }
    });
    
})
