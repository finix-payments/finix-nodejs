import * as api from '../src/api';
import {Client, CreateTransferRequest, Environment} from '../src/api';

describe('Transfers API', () => {

    let client: Client;
    let authorizationID: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Debit a bank account (ie eCheck)", async() => {
       const debitRequest: api.CreateTransferRequest = {
            fee: 603, 
            currency: api.Currency.Usd,
            merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
            tags: {
                "order_number": "21DFASJSAKAS"
            },
            source: "PIr1Ru7ewBkEYVVn7SP1u5FW",
            amount: 6031,
            processor: "DUMMY_V1"
        };

        const debitAccount = await client.Transfers.create(debitRequest, {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(debitAccount.amount).toBe(debitRequest.amount);
        expect(debitAccount.fee).toBe(debitRequest.fee);
        expect(debitAccount.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(debitAccount.source).toBe(debitRequest.source);
    });

    test("Test: Create sale", async() => {
        const saleRequest: api.CreateTransferRequest = {
             currency: api.Currency.Usd,
             merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
             tags: {
                 "test": "sale"
             },
             source: "PIe2YvpcjvoVJ6PzoRPBK137",
             amount: 662154,
         };
 
         const createdSale = await client.Transfers.create(saleRequest, {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
 
         expect(createdSale.amount).toBe(saleRequest.amount);
         expect(createdSale.application).toBe("APgPDQrLD52TYvqazjHJJchM");
         expect(createdSale.source).toBe(saleRequest.source);
     });

     test("Test: Fetch a transfer", async() => {
        const transferId = "TRnH7FkSB7zePeHExNZwSb9H";
 
         const fetchedTransfer = await client.Transfers.get(transferId, {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
 
         expect(fetchedTransfer.id).toBe(transferId);
         expect(fetchedTransfer.application).toBe("APgPDQrLD52TYvqazjHJJchM");
         expect(fetchedTransfer.amount).toBe(7);
         expect(fetchedTransfer.traceId).toBe("0e201222-d357-4038-9ed2-23a38482fd07");
     });

    test("Test: Refund a debit", async() => {
        const transferId = "TRacB6Q6GcW6yvFUKawSnMEP";
        
        const reversalRequest : api.CreateReversalRequest = {
            refundAmount: 100,
            tags: {
                "test" : "refund"
            }
        };

        const reversedTransfer = await client.Transfers.createTransferReversal(transferId, reversalRequest, 
            {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        //expect(reversedTransfer.id).toBe(transferId);
        expect(reversedTransfer.amount).toBe(reversalRequest.refundAmount);
        expect(reversedTransfer.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test("Test: Update a transfer", async() => {
        const transferId = "TRvtThmhZtk56z6dtCt8hUDR";
        
        const updateReqest : api.UpdateTransferRequest = {
            tags: {
                "order_number" : "12121212"
            }
        };

        const updatedTransfer = await client.Transfers.update(transferId, updateReqest, 
            {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        //expect(reversedTransfer.id).toBe(transferId);
        expect(updatedTransfer.tags["order_number"]).toBe(updateReqest.tags.order_number);
    });

     


})
