import {Client, Environment, Models} from '../src/api';

describe('Authorization API', () => {

    let client: Client;
    let authorizationID: string;
    let testVoidID: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test('Test: Create an authorization', async() => {
        const authorizationRequest : Models.CreateAuthorizationRequest = {
            source: "PIe2YvpcjvoVJ6PzoRPBK137", 
            merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
            tags: {
                "order_number" : "21DFASJSAKAS"
            },
            currency: Models.Currency.Usd,
            amount: 100
        };

        const createdAuthorization = await client.Authorizations.create(authorizationRequest, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        authorizationID = <string>createdAuthorization.id;
        expect(createdAuthorization.amount).toBe(authorizationRequest.amount);
        expect(createdAuthorization.source).toBe(authorizationRequest.source);
        expect(createdAuthorization.state).toBe("SUCCEEDED");
        expect(createdAuthorization.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Create an authorization with 3D Secure', async() => {
        const authorizationRequest : Models.CreateAuthorizationRequest = {
            source: "PIe2YvpcjvoVJ6PzoRPBK137", 
            merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
            tags: {
                "order_number" : "21DFASJSAKAS"
            },
            currency: Models.Currency.Usd,
            amount: 100,
            _3dSecureAuthentication :{
                electronicCommerceIndicator: "AUTHENTICATED",
                cardholderAuthentication: "BwABBJQ1AgAAAAAgJDUCAAAAAAA",
                transactionId: "EaOMucALHQqLAEGAgk"
            }
        };

        const createdAuthorization = await client.Authorizations.create(authorizationRequest, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(createdAuthorization.amount).toBe(authorizationRequest.amount);
        expect(createdAuthorization.source).toBe(authorizationRequest.source);
        expect(createdAuthorization.state).toBe("SUCCEEDED");
        expect(createdAuthorization.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Create an authorization with Level 2 processing', async() => {
        const authorizationRequest : Models.CreateAuthorizationRequest = {
            source: "PIe2YvpcjvoVJ6PzoRPBK137", 
            merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
            tags: {
                "order_number" : "21DFASJSAKAS"
            },
            currency: Models.Currency.Usd,
            amount: 100,
            additionalPurchaseData: {
                customerReferenceNumber: "321xyz",
                salesTax: 200
            }
        };

        const createdAuthorization = await client.Authorizations.create(authorizationRequest, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(createdAuthorization.amount).toBe(authorizationRequest.amount);
        expect(createdAuthorization.source).toBe(authorizationRequest.source);
        expect(createdAuthorization.state).toBe("SUCCEEDED");
        expect(createdAuthorization.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Create an authorization with Level 3 processing', async() => {
        const authorizationRequest : Models.CreateAuthorizationRequest = {
            source: "PIe2YvpcjvoVJ6PzoRPBK137", 
            merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
            tags: {
                "order_number" : "21DFASJSAKAS"
            },
            currency: Models.Currency.Usd,
            amount: 100, 
            additionalPurchaseData: {
                itemData: [{
                    amountIncludingSalesTax: 500, 
                    amountExcludingSalesTax: 400, 
                    costPerUnit: 500, 
                    unitOfMeasure: "BX",
                    merchantProductCode: "1149611",
                    commodityCode: "175-62-20",
                    itemDiscountAmount: 100, 
                    quantity: 1,
                    itemDescription: "printing paper"
                }], 
                discountAmount: 100, 
                customerReferenceNumber: "321xyz",
                shippingAmount: 100, 
                customsDutyAmount: 10
            }
        };

        const createdAuthorization = await client.Authorizations.create(authorizationRequest, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        testVoidID = <string>createdAuthorization.id;
        expect(createdAuthorization.amount).toBe(authorizationRequest.amount);
        expect(createdAuthorization.source).toBe(authorizationRequest.source);
        expect(createdAuthorization.state).toBe("SUCCEEDED");
        expect(createdAuthorization.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Capture an authorization',async () => {
        const updateRequest: Models.UpdateAuthorizationRequest = {
            fee: 0,
            captureAmount: 100
        }
        const capturedAuthorization = await client.Authorizations.update(authorizationID, updateRequest,
             {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        
        expect(capturedAuthorization.id).toBe(authorizationID);
        expect(capturedAuthorization.amount).toBe(updateRequest.captureAmount);
        expect(capturedAuthorization.source).toBe("PIe2YvpcjvoVJ6PzoRPBK137");
    });

    test('Test: Capture an authorization with Level 3 processing',async () => {
        const capturedAuthorization = await client.Authorizations.update(authorizationID, {
            additionalPurchaseData: {
                itemData: [{
                    amountIncludingSalesTax: 500, 
                    amountExcludingSalesTax: 400, 
                    costPerUnit: 500, 
                    unitOfMeasure: "BX",
                    merchantProductCode: "1149611",
                    commodityCode: "175-62-20",
                    itemDiscountAmount: 100, 
                    quantity: 1,
                    itemDescription: "printing paper"
                }],
                customerReferenceNumber: "321xyz"
            }},
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        
        expect(capturedAuthorization.id).toBe(authorizationID);
        expect(capturedAuthorization.source).toBe("PIe2YvpcjvoVJ6PzoRPBK137");
    });

    test('Test: Void an authorization',async () => {
        const updateRequest: Models.UpdateAuthorizationRequest = {
            voidMe: true
        }
        const voidedAuthorization = await client.Authorizations.update(testVoidID, updateRequest,
             {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        
        expect(voidedAuthorization.id).toBe(testVoidID);
        expect(voidedAuthorization.state).toBe("SUCCEEDED");
        expect(voidedAuthorization.source).toBe("PIe2YvpcjvoVJ6PzoRPBK137");
    });

    test('Test: Fetch an authorization',async () => {
        const fetchedAuthorization = await client.Authorizations.get(authorizationID,
             {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        
        expect(fetchedAuthorization.id).toBe(authorizationID);
        expect(fetchedAuthorization.amount).toBe(100);
        expect(fetchedAuthorization.source).toBe("PIe2YvpcjvoVJ6PzoRPBK137");
    });

    test("Test: List all authorization", async() => {
        const authorizationList = await client.Authorizations.list({
            limit: 2
        },
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(authorizationList.page.limit).toEqual(expect.any(Number));
        expect(authorizationList.page.nextCursor).toEqual(expect.any(String));
        expect(authorizationList.size).toEqual(expect.any(Number));
    });
    
    
})
 