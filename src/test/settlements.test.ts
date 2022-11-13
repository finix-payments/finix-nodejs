import {Client, Environment} from '../api';

describe('Settlements API', () => {

    let client: Client;

    beforeAll(() => {
        const userName = 'USpumes23XhzHwXqiy9bfX2B';
        const password = 'c69d39e3-f9ff-4735-8c3e-abca86441906';

        client = new Client(userName, password, Environment.Sandbox);
    });
    
    test("Test: Fetch a batch settlement", async() => {
        const settlementId = "STmCc8GbjjX33SdymwNhb9Et";
        const fetchedSettlement = await client.Settlements.get(settlementId);

        expect(fetchedSettlement.id).toBe(settlementId);
        expect(fetchedSettlement.application).toBe("AP3AB2itAWrrrPVS6spvrGYp");
        expect(fetchedSettlement.netAmount).toBe(0);
    });

    test("Test: List batch settlements", async() => {
        const settlementList = await client.Settlements.list();

        expect(settlementList.page.limit).toEqual(expect.any(Number));
        if (settlementList.page.hasOwnProperty('offset')){
            expect(settlementList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (settlementList.page.nextCursor != undefined) {
                expect(settlementList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(settlementList.size).toEqual(expect.any(Number));

        if(settlementList.hasMore) {
            const nextSettlementList = await settlementList.listNext();
            expect(nextSettlementList.page.limit).toEqual(expect.any(Number));
            expect(nextSettlementList.size).toEqual(expect.any(Number));
        }
    });

    test("Test: List transfers in a batch settlements", async() => {
        const settlementId = "STmCc8GbjjX33SdymwNhb9Et";
        const transferList = await client.Settlements.listTransfersBySettlementId(settlementId);

        expect(transferList.page.limit).toEqual(expect.any(Number));
        if (transferList.page.hasOwnProperty('offset')){
            expect(transferList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (transferList.page.nextCursor != undefined) {
                expect(transferList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(transferList.size).toEqual(expect.any(Number));

        if(transferList.hasMore) {
            const nextTransferList = await transferList.listNext();
            expect(nextTransferList.page.limit).toEqual(expect.any(Number));
            expect(nextTransferList.size).toEqual(expect.any(Number));
        }
    });

    test("Test: List funding transfers in a batch settlements", async() => {
        const settlementId = "STmCc8GbjjX33SdymwNhb9Et";
        const transferList = await client.Settlements.listFundingTransfers(settlementId);

        expect(transferList.page.limit).toEqual(expect.any(Number));
        if (transferList.page.hasOwnProperty('offset')){
            expect(transferList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (transferList.page.nextCursor != undefined) {
                expect(transferList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(transferList.size).toEqual(expect.any(Number));

        if(transferList.hasMore) {
            const nextTransferList = await transferList.listNext();
            expect(nextTransferList.page.limit).toEqual(expect.any(Number));
            expect(nextTransferList.size).toEqual(expect.any(Number));
        }
    });

    test("Test: Remove transfers from batch settlement", async() => {
        const settlementId = "STmCc8GbjjX33SdymwNhb9Et";
        try {
            await client.Settlements.removeTransfersFromSettlement(settlementId, {
                transfers: ["TRr61njQxaa7AJf6E1C3QwCc"]
            });
        }
        catch(error: any){
            expect(error.body[0].message).toBe("Unable to process request. Entries [TRr61njQxaa7AJf6E1C3QwCc] not found in settlement STmCc8GbjjX33SdymwNhb9Et");
        }
    });
})
