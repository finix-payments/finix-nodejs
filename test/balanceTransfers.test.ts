import {Client, Environment, Models} from '../src/api';

describe('Balance Transfer API', () => {

    let client: Client;
    let balanceTransferID: string;

    beforeAll(() => {
        const userName = 'USbkjk46XqUTQHN3i2jaVnc1';
        const password = 'ac915962-2757-49ea-aeee-10960a408b99';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Create a balance transfer", async() => {
    const balanceTransferRequest: Models.CreateBalanceTransferRequest = {
            tags: {
            "example": "documentation tag"
            },
            description: "Need to increase buffer given the high number of NSFs on merchant fee debits",
            destination: Models.CreateBalanceTransferRequest.DestinationEnum.ForBenefitOfAccount,
            currency: Models.Currency.Usd,
            amount: 4000,
            source: Models.CreateBalanceTransferRequest.SourceEnum.OperatingAccount,
            processorType: "LITLE_V1"
            };

        const createdBalanceTransfer = await client.BalanceTransfers.create(balanceTransferRequest, {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        balanceTransferID = <string> createdBalanceTransfer.id;

        expect(balanceTransferRequest.amount).toBe(createdBalanceTransfer.amount);
        expect(balanceTransferRequest.description).toBe(createdBalanceTransfer.description);
        expect(balanceTransferRequest.source).toBe(createdBalanceTransfer.source);
    });

     test("Test: Fetch a balance transfer", async() => { 
         const fetchedBalanceTransfer = await client.BalanceTransfers.get(balanceTransferID, 
            {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
 
         expect(fetchedBalanceTransfer.id).toBe(balanceTransferID);
         expect(fetchedBalanceTransfer.amount).toBe(4000);
         expect(fetchedBalanceTransfer.source).toBe("OPERATING_ACCOUNT");
     });


    test("Test: List all balance transfer", async() => {
        const balanceTransferList = await client.BalanceTransfers.list(undefined,
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(balanceTransferList.page.limit).toEqual(expect.any(Number));
        if (balanceTransferList.page.nextCursor != undefined){
            expect(balanceTransferList.page.nextCursor).toEqual(expect.any(String));
        }        
        expect(balanceTransferList.size).toEqual(expect.any(Number));
    });
     


})
