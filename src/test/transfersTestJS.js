require("mocha");
const {Client, Environment, Models} = require ('../api');
var assert = require("chai").assert;


describe('Transfers API', function () {

    let client;
    let authorizationID;

    before(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
       
    });

    it("Test: Debit a bank account (ie eCheck)", async function(){
        const debitRequest = {
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
        assert.equal(debitAccountTransfer.amount, debitRequest.amount);
        assert.equal(debitAccountTransfer.fee, debitRequest.fee);
        assert.equal(debitAccountTransfer.application, "APgPDQrLD52TYvqazjHJJchM");
        assert.equal(debitAccountTransfer.source, debitRequest.source);
    });

    it("Test: Create sale", async function() {
        const saleRequest = {
             currency: Models.Currency.Usd,
             merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
             tags: {
                 "test": "sale"
             },
             source: "PIe2YvpcjvoVJ6PzoRPBK137",
             amount: 662154,
         };
 
         const createdSaleTransfer = await client.Transfers.create(saleRequest);
 
         assert.equal(createdSaleTransfer.amount, saleRequest.amount);
         assert.equal(createdSaleTransfer.application, "APgPDQrLD52TYvqazjHJJchM");
         assert.equal(createdSaleTransfer.source, saleRequest.source);
     });

    it("Test: Create sale with 3D secure",async function()  {
    const sale3dSecureRequest= {
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

        assert.equal(created3dSecureSaleTransfer.amount, sale3dSecureRequest.amount);
        assert.equal(created3dSecureSaleTransfer.application, "APgPDQrLD52TYvqazjHJJchM");
        assert.equal(created3dSecureSaleTransfer.source, sale3dSecureRequest.source);
    });

    it("Test: Create sale with level 2 processing",async function()  {
    const saleL2Request = {
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

        assert.equal(createdL2SaleTransfer.amount, saleL2Request.amount);
        assert.equal(createdL2SaleTransfer.application, "APgPDQrLD52TYvqazjHJJchM");
        assert.equal(createdL2SaleTransfer.source, saleL2Request.source);
    });

    it("Test: Create sale with level 23 processing",async function()  {
    const saleL3Request = {
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

        assert.equal(createdL3SaleTransfer.amount, saleL3Request.amount);
        assert.equal(createdL3SaleTransfer.application, "APgPDQrLD52TYvqazjHJJchM");
        assert.equal(createdL3SaleTransfer.source, saleL3Request.source);
    });

    it("Test: Fetch a transfer", async function()  {
    const transferId = "TRnH7FkSB7zePeHExNZwSb9H";

        const fetchedTransfer = await client.Transfers.get(transferId);

        assert.equal(fetchedTransfer.id, transferId);
        assert.equal(fetchedTransfer.application, "APgPDQrLD52TYvqazjHJJchM");
        assert.equal(fetchedTransfer.amount, 7);
        assert.equal(fetchedTransfer.traceId, "0e201222-d357-4038-9ed2-23a38482fd07");
    });

    it("Test: Refund a debit", async function()  {
        const transferId = "TRacB6Q6GcW6yvFUKawSnMEP";
        
        const reversalRequest = {
            refundAmount: 100,
            tags: {
                "test" : "refund"
            }
        };

        const reversedTransfer = await client.Transfers.createTransferReversal(transferId, reversalRequest);

        //assert.equal(reversedTransfer.id, transferId);
        assert.equal(reversedTransfer.amount, reversalRequest.refundAmount);
        assert.equal(reversedTransfer.application, "APgPDQrLD52TYvqazjHJJchM");
    });

    it("Test: Update a transfer", async function()  {
        const transferId = "TRvtThmhZtk56z6dtCt8hUDR";
        
        const updateReqest = {
            tags: {
                "order_number" : "12121212"
            }
        };

        const updatedTransfer = await client.Transfers.update(transferId, updateReqest);

        //assert.equal(reversedTransfer.id, transferId);
        assert.equal(updatedTransfer.tags?.["order_number"], updateReqest.tags?.["order_number"]);
    });

    it("Test: List all transfers", async function()  {
        this.timeout(20000);
        const transferList = await client.Transfers.list();

        assert.typeOf(transferList.page.limit, 'number');
        if (transferList.page.hasOwnProperty('offset')){
            assert.typeOf(transferList.page.offset, 'number');
        }
        else{
            if (transferList.page.nextCursor != undefined) {
                assert.typeOf(transferList.page.nextCursor, 'string');
            }
        }        
        assert.typeOf(transferList.size, 'number');

        if(transferList.hasMore) {
            const nextTransferList = await transferList.listNext();
            assert.typeOf(nextTransferList.page.limit, 'number');
            assert.typeOf(nextTransferList.size, 'number');
        }
    });
     


})

