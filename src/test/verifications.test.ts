import {Client, Environment, Models} from '../api';

describe('Verifications API', () => {

    let client: Client;
    let verificationId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Sandbox);
    });

    test("Test: Create a verification with merchant information", async() => { 
        const createVerificationRequest: Models.CreateVerificationRequest = {
            merchant: "MUucec6fHeaWo3VHYoSkUySM",
            // instrument: "PI3tfx1Uw3SzHfqwPFGX9o1Y",
            processor: "DUMMY_V1", 
            tags: {
                "test" : "verification_test"
            }
        };
        const verification = await client.Verifications.create(createVerificationRequest);
        verificationId = verification.id;
        // expect(verification.paymentInstrument).toBe(createVerificationRequest.instrument);
        expect(verification.merchant).toBe(createVerificationRequest.merchant);
        expect(verification.processor).toBe(createVerificationRequest.processor);
    });

    test("Test: Get a verification", async() => { 
        const fetchedVerification = await client.Verifications.get(verificationId);

        expect(fetchedVerification.id).toBe(verificationId);
    });

    test("Test: List all verification", async() => {
        const verificationList = await client.Verifications.list();

        expect(verificationList.page.limit).toEqual(expect.any(Number));
        if (verificationList.page.hasOwnProperty('offset')){
            expect(verificationList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (verificationList.page.nextCursor != undefined) {
                expect(verificationList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(verificationList.size).toEqual(expect.any(Number));

        if(verificationList.hasMore) {
            const nextVerificationList = await verificationList.listNext();
            expect(nextVerificationList.page.limit).toEqual(expect.any(Number));
            expect(nextVerificationList.size).toEqual(expect.any(Number));
        }
    });

    test("Test: List verification by merchant id", async() => {
        const merchantId = "MUucec6fHeaWo3VHYoSkUySM";
        const verificationList = await client.Verifications.listByMerchantId(merchantId);

        expect(verificationList.page.limit).toEqual(expect.any(Number));
        if (verificationList.page.hasOwnProperty('offset')){
            expect(verificationList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (verificationList.page.nextCursor != undefined) {
                expect(verificationList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(verificationList.size).toEqual(expect.any(Number));

        if(verificationList.hasMore) {
            const nextVerificationList = await verificationList.listNext();
            expect(nextVerificationList.page.limit).toEqual(expect.any(Number));
            expect(nextVerificationList.size).toEqual(expect.any(Number));
        }
    }, 10000);

    test("Test: Raw as string", async() => {
        const verificationId = "VIcrdHd2vBu5RDZJWNGTQihc";
        const clientTemp = new Client("USpumes23XhzHwXqiy9bfX2B","c69d39e3-f9ff-4735-8c3e-abca86441906",Environment.Sandbox);
        const verification = await clientTemp.Verifications.get(verificationId);

        expect(verification.raw).toEqual("RawDummyMerchantUnderwriteResult");
    });
})
