import {Client, Environment, Models} from '../api';

describe('Fee Profiles API', () => {

    let client: Client;
    let feeProfileId: string;
    let identityId: string;

    beforeAll(() => {
        const userName = 'USimz3zSq5R2PqiEBXY6rSiJ';
        const password = '8bacba32-9550-48ff-b567-fe7648947041';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Create a fee profile", async() => { 
        const createFeeProfileRequest: Models.CreateFeeProfileRequest = {
            achFixedFee: 30, 
            basisPoints: 200,
            application: "APmuwPBaW8pVcwb4vCTHQH32",
            chargeInterchange: false,
            fixedFee: 100,
            achBasisPoints: 300
        }
        const feeProfile = await client.FeeProfiles.create(createFeeProfileRequest);
        feeProfileId = feeProfile.id;
        expect(feeProfile.basisPoints).toBe(createFeeProfileRequest.basisPoints);
        expect(feeProfile.application).toBe(createFeeProfileRequest.application);
        expect(feeProfile.fixedFee).toBe(createFeeProfileRequest.fixedFee);
    });

    test("Test: Get fee profile", async() => { 
        const fetchedFeeProfile = await client.FeeProfiles.get(feeProfileId);

        expect(fetchedFeeProfile.id).toBe(feeProfileId);
    });

    test("Test: List all fee profiles", async() => {
        const feeProfileList = await client.FeeProfiles.list();

        expect(feeProfileList.page.limit).toEqual(expect.any(Number));
        if (feeProfileList.page.hasOwnProperty('offset')){
            expect(feeProfileList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (feeProfileList.page.nextCursor != undefined) {
                expect(feeProfileList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(feeProfileList.size).toEqual(expect.any(Number));

        if(feeProfileList.hasMore) {
            const nextFeeList = await feeProfileList.listNext();
            expect(nextFeeList.page.limit).toEqual(expect.any(Number));
            expect(nextFeeList.size).toEqual(expect.any(Number));
        }
    });
})
