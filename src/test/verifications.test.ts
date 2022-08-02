import {Client, Environment, Models} from '../api';

describe('Verifications API', () => {

    let client: Client;
    let verificationId: string;
    let identityId: string;

    beforeAll(() => {
        const userName = 'USpumes23XhzHwXqiy9bfX2B';
        const password = 'c69d39e3-f9ff-4735-8c3e-abca86441906';

        client = new Client(userName, password, Environment.Sandbox);
    });

    test("Test: Create a verification with merchant information", async() => { 
        const createVerificationRequest: Models.CreateVerificationRequest = {
            merchant: "MU31oiYcWR6Bvx3tqYQ7WEr9",
            processor: "DUMMY_V1"
        };
        const verification = await client.Verifications.create(createVerificationRequest);
        verificationId = verification.id;
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
})
