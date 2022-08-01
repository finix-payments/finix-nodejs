import {Client, Environment, Models} from '../api';

describe('Merchants Profiles API', () => {

    let client: Client;
    let merchantProfileId: string;
    let identityId: string;

    beforeAll(() => {
        const userName = 'USimz3zSq5R2PqiEBXY6rSiJ';
        const password = '8bacba32-9550-48ff-b567-fe7648947041';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Get merchant profile", async() => { 
        merchantProfileId = "MP7dqAPFRBM8gN9hb3Guumif";
        const fetchedMerchantProfile = await client.MerchantProfiles.get(merchantProfileId);

        expect(fetchedMerchantProfile.id).toBe(merchantProfileId);
        // expect(fetchedMerchant.processor).toBe("DUMMY_V1");
        // expect(fetchedMerchant.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    // test("Test: Update a merchant profile", async() => {
    //     const updatedMerchant = await client2.Merchants.update(merchantID, {
    //         levelTwoLevelThreeDataEnabled: true
    //     });

    //     expect(updatedMerchant.id).toBe(merchantID);
    //     expect(updatedMerchant.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    //     expect(updatedMerchant.levelTwoLevelThreeDataEnabled).toBe(true);
    // });


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
