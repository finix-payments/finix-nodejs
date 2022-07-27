import { IncomingMessage } from 'http';
import {Client, Environment, Models} from '../api';

describe('Transfers API', () => {

    let client: Client;
    let authorizationID: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Debit a bank account (ie eCheck)", async() => {
       const debitRequest: Models.CreateTransferRequest = {
            fee: 603, 
            currency: Models.Currency.Usd,
            merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
            tags: {
                "order_number": "21DFASJSAKAS"
            },
            source: "PIr1Ru7ewBkEYVVn7SP1u5FW",
            amount: 6031,
            processor: "DUMMY_V1"
        };

        const debitAccountTransfer = await client.Transfers.create(debitRequest);

        expect(debitAccountTransfer.amount).toBe(debitRequest.amount);
        expect(debitAccountTransfer.fee).toBe(debitRequest.fee);
        expect(debitAccountTransfer.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(debitAccountTransfer.source).toBe(debitRequest.source);
    });

    test("Test: Create sale", async() => {
        const saleRequest: Models.CreateTransferRequest = {
             currency: Models.Currency.Usd,
             merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
             tags: {
                 "test": "sale"
             },
             source: "PIe2YvpcjvoVJ6PzoRPBK137",
             amount: 662154,
         };
 
         const createdSaleTransfer = await client.Transfers.create(saleRequest);
 
         expect(createdSaleTransfer.amount).toBe(saleRequest.amount);
         expect(createdSaleTransfer.application).toBe("APgPDQrLD52TYvqazjHJJchM");
         expect(createdSaleTransfer.source).toBe(saleRequest.source);
     });

     test("Test: Create sale with 3D secure", async() => {
        const sale3dSecureRequest: Models.CreateTransferRequest = {
             currency: Models.Currency.Usd,
             merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
             tags: {
                 "test": "sale"
             },
             source: "PIe2YvpcjvoVJ6PzoRPBK137",
             amount: 92169,
             _3dSecureAuthentication: {
                electronicCommerceIndicator: "AUTHENTICATED",
                cardholderAuthentication: "BwABBJQ1AgAAAAAgJDUCAAAAAAA",
                transactionId: "EaOMucALHQqLAEGAgk"
             }
         };
 
         const created3dSecureSaleTransfer = await client.Transfers.create(sale3dSecureRequest);
 
         expect(created3dSecureSaleTransfer.amount).toBe(sale3dSecureRequest.amount);
         expect(created3dSecureSaleTransfer.application).toBe("APgPDQrLD52TYvqazjHJJchM");
         expect(created3dSecureSaleTransfer.source).toBe(sale3dSecureRequest.source);
     });

     test("Test: Create sale with level 2 processing", async() => {
        const saleL2Request: Models.CreateTransferRequest = {
             currency: Models.Currency.Usd,
             merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
             tags: {
                 "test": "sale"
             },
             source: "PIe2YvpcjvoVJ6PzoRPBK137",
             amount: 1000,
             additionalPurchaseData: {
                customerReferenceNumber: "321xyz",
                salesTax: 200
             }
         };
 
         const createdL2SaleTransfer = await client.Transfers.create(saleL2Request);
 
         expect(createdL2SaleTransfer.amount).toBe(saleL2Request.amount);
         expect(createdL2SaleTransfer.application).toBe("APgPDQrLD52TYvqazjHJJchM");
         expect(createdL2SaleTransfer.source).toBe(saleL2Request.source);
     });

     test("Test: Create sale with level 23 processing", async() => {
        const saleL3Request: Models.CreateTransferRequest = {
             currency: Models.Currency.Usd,
             merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
             tags: {
                 "test": "sale"
             },
             source: "PIe2YvpcjvoVJ6PzoRPBK137",
             amount: 1000,
             additionalPurchaseData: {
                itemData: [{
                    amountIncludingSalesTax: 500,
                    amountExcludingSalesTax: 400,
                    unitOfMeasure: "BX",
                    costPerUnit: 500,
                    commodityCode: "175-62-20",
                    itemDiscountAmount: 100,
                    itemDescription: "printing paper",
                    quantity: 1,
                    merchantProductCode: "1149611"
                }],
                discountAmount: 100,
                customerReferenceNumber: "321xyz",
                shippingAmount: 100,
                customsDutyAmount: 10
             }
         };
 
         const createdL3SaleTransfer = await client.Transfers.create(saleL3Request);
 
         expect(createdL3SaleTransfer.amount).toBe(saleL3Request.amount);
         expect(createdL3SaleTransfer.application).toBe("APgPDQrLD52TYvqazjHJJchM");
         expect(createdL3SaleTransfer.source).toBe(saleL3Request.source);
     });

     test("Test: Fetch a transfer", async() => {
        const transferId = "TRnH7FkSB7zePeHExNZwSb9H";
 
         const fetchedTransfer = await client.Transfers.get(transferId);
 
         expect(fetchedTransfer.id).toBe(transferId);
         expect(fetchedTransfer.application).toBe("APgPDQrLD52TYvqazjHJJchM");
         expect(fetchedTransfer.amount).toBe(7);
         expect(fetchedTransfer.traceId).toBe("0e201222-d357-4038-9ed2-23a38482fd07");
     });

    test("Test: Fetch a transfer with http response", async() => {
        const transferId = "TRnH7FkSB7zePeHExNZwSb9H";

        const fetchedTransfer = await client.Transfers.getHttp(transferId);

        expect(fetchedTransfer.response).toEqual(expect.any(IncomingMessage));
        expect(fetchedTransfer.body.id).toBe(transferId);
        expect(fetchedTransfer.body.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(fetchedTransfer.body.amount).toBe(7);
        expect(fetchedTransfer.body.traceId).toBe("0e201222-d357-4038-9ed2-23a38482fd07");
    });

    test("Test: Refund a debit", async() => {
        const transferId = "TRacB6Q6GcW6yvFUKawSnMEP";
        
        const reversalRequest : Models.CreateReversalRequest = {
            refundAmount: 100,
            tags: {
                "test" : "refund"
            }
        };

        const reversedTransfer = await client.Transfers.createTransferReversal(transferId, reversalRequest);

        //expect(reversedTransfer.id).toBe(transferId);
        expect(reversedTransfer.amount).toBe(reversalRequest.refundAmount);
        expect(reversedTransfer.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test("Test: Update a transfer", async() => {
        const transferId = "TRvtThmhZtk56z6dtCt8hUDR";
        
        const updateReqest : Models.UpdateTransferRequest = {
            tags: {
                "order_number" : "12121212"
            }
        };

        const updatedTransfer = await client.Transfers.update(transferId, updateReqest);

        //expect(reversedTransfer.id).toBe(transferId);
        expect(updatedTransfer.tags?.["order_number"]).toBe(updateReqest.tags?.["order_number"]);
    });

    test("Test: List all transfers", async() => {
        const transferList = await client.Transfers.list();
        
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
    }, 20000);
     
    test("Test: List transfers with query parameters", async() => {
        const transferListWithLimit = await client.Transfers.list({
            limit: 2
        });
        
        expect(transferListWithLimit.page.limit).toBe(2);

        const transferListWithFilter : Models.finixList<Models.Transfer> = await client.Transfers.list({
            amountLt: 100,
            type: "Debits"
        })
        
        if (transferListWithFilter.page.hasOwnProperty('offset')){
            expect(transferListWithFilter.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (transferListWithFilter.page.nextCursor != undefined) {
                expect(transferListWithFilter.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(transferListWithFilter.size).toEqual(expect.any(Number));

        if(transferListWithFilter.hasMore) {
            const nextTransferList = await transferListWithFilter.listNext();
            expect(nextTransferList.page.limit).toEqual(expect.any(Number));
            expect(nextTransferList.size).toEqual(expect.any(Number));
        }
    }, 20000);

})
