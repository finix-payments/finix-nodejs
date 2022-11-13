import {Client, Environment, Models} from '../api';

describe('Merchants Profiles API', () => {

    let client: Client;
    let merchantProfileId: string;

    beforeAll(() => {
        const userName = 'USimz3zSq5R2PqiEBXY6rSiJ';
        const password = '8bacba32-9550-48ff-b567-fe7648947041';

        client = new Client(userName, password, Environment.Sandbox);
    });

    test("Test: Get merchant profile", async() => { 
        merchantProfileId = "MP7dqAPFRBM8gN9hb3Guumif";
        const fetchedMerchantProfile = await client.MerchantProfiles.get(merchantProfileId);

        expect(fetchedMerchantProfile.id).toBe(merchantProfileId);
    });

    test("Test: Update a merchant profile", async() => {
        const updateMerchantProfileRequest: Models.UpdateMerchantProfileRequest = {
            riskProfile: "RP7akGm3WVYf9Z7omCeeCpgB"
        };
        const updatedMerchantProfile = await client.MerchantProfiles.update(merchantProfileId, updateMerchantProfileRequest);

        expect(updatedMerchantProfile.riskProfile).toBe(updateMerchantProfileRequest.riskProfile);
    });


    test("Test: List all merchant profiles", async() => {
        const merchantProfileList = await client.MerchantProfiles.list();

        expect(merchantProfileList.page.limit).toEqual(expect.any(Number));
        if (merchantProfileList.page.hasOwnProperty('offset')){
            expect(merchantProfileList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (merchantProfileList.page.nextCursor != undefined) {
                expect(merchantProfileList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(merchantProfileList.size).toEqual(expect.any(Number));

        if(merchantProfileList.hasMore) {
            const nextMerchantList = await merchantProfileList.listNext();
            expect(nextMerchantList.page.limit).toEqual(expect.any(Number));
            expect(nextMerchantList.size).toEqual(expect.any(Number));
        }
    });
})
