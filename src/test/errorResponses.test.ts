import {Client, Environment, Models} from '../api';
import * as fs from 'fs';
describe('Error response', () => {

    let client: Client;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Sandbox);
    });

    test("Test: 401 - Unauthorized error wrong password", async() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const wrongPassword = '123';

        try{
            const invalidClient = new Client(userName, wrongPassword, Environment.Sandbox);
            let transferList = await invalidClient.Transfers.list();
        }catch(error){
            expect(error.statusCode).toBe(401);
            expect(error.body._embedded.errors.length).toBeGreaterThan(0);
            expect(error.body._embedded.errors[0].message).toBe('Unauthorized');
        }

    });

    test("Test: 401 - Unauthorized error invalid username", async() => {
        const wrongUserName = '12345';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        try{
            const invalidClient = new Client(wrongUserName, password, Environment.Sandbox);
            let transferList = await invalidClient.Transfers.list();
        }catch(error){
            expect(error.statusCode).toBe(401);
            expect(error.body._embedded.errors.length).toBeGreaterThan(0);
            expect(error.body._embedded.errors[0].message).toBe('Unauthorized');
        }
    });

    test("Test: 404 - Not found", async() => {
        try{
            let transferList = await client.Transfers.list({
                afterCursor: "123"
            });
        }catch(error){
            expect(error.statusCode).toBe(404);
            expect(error.body._embedded.errors.length).toBeGreaterThan(0);
            expect(error.body._embedded.errors[0].code).toBe('NOT_FOUND');
        }
    });

    test("Test: 402 - Refused/Declined payments -- declined authorization", async() => {
        try{
            const paymentCardRequest : Models.CreatePaymentInstrumentRequest = {
                name: "Amy White",
                expirationYear: 2029, 
                tags: {
                    "card_name": "Business Card"
                },
                number: "4000000000009979",
                expirationMonth: 12,
                address: {
                    city: "San Francisco",
                    region: "CA",
                    postalCode: "94404",
                    line1: "900 Metro Center Blv",
                    country: "USA"
                },
                securityCode: "022",
                type: Models.CreatePaymentInstrumentRequest.TypeEnum.PaymentCard,
                identity: "IDgWxBhfGYLLdkhxx2ddYf9K"
            };
    
            const createdPaymentInstrument = await client.PaymentInstruments.create(paymentCardRequest);
            const paymentCardId = <string>createdPaymentInstrument.id;

            let authorization = await client.Authorizations.create({
                source: paymentCardId,
                merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
                amount: 123,
                currency: Models.Currency.Usd
            });
            console.log(authorization);
        }catch(error){
            expect(error.statusCode).toBe(402);
            expect(error.body._embedded.errors.length).toBeGreaterThan(0);
            expect(error.body._embedded.errors[0].code).toBe('DECLINED');
            expect(error.body._embedded.errors[0].authorization).toEqual(expect.any(String));
        }
    });

    test("Test: 402 - Refused/Declined payments -- payment declined", async() => {
        try{
            const paymentCardRequest : Models.CreatePaymentInstrumentRequest = {
                name: "Amy White",
                expirationYear: 2029, 
                tags: {
                    "card_name": "Business Card"
                },
                number: "4111111111111111",
                expirationMonth: 12,
                address: {
                    city: "San Francisco",
                    region: "CA",
                    postalCode: "94404",
                    line1: "900 Metro Center Blv",
                    country: "USA"
                },
                securityCode: "022",
                type: Models.CreatePaymentInstrumentRequest.TypeEnum.PaymentCard,
                identity: "IDgWxBhfGYLLdkhxx2ddYf9K"
            };
    
            const createdPaymentInstrument = await client.PaymentInstruments.create(paymentCardRequest);
            const paymentCardId = <string>createdPaymentInstrument.id;

            let authorization = await client.Authorizations.create({
                source: paymentCardId,
                merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
                amount: 123,
                currency: Models.Currency.Usd
            });
            
            const authorizationId = authorization.id;

            let capturedAuthorization = await client.Authorizations.update(authorizationId, {captureAmount: 102});

        }catch(error){
            expect(error.statusCode).toBe(402);
            expect(error.body._embedded.errors.length).toBeGreaterThan(0);
            expect(error.body._embedded.errors[0].code).toBe('PAYMENT_DECLINED');
            expect(error.body._embedded.errors[0].transfer).toEqual(expect.any(String));
        }
    });

    test("Test: 422 - Refused/Declined payments -- invalid field", async() => {
        try{;

            let transfer = await client.Transfers.create({
                source: "PIe2YvpcjvoVJ6PzoRPBK137"
            })
        }catch(error){
            expect(error.statusCode).toBe(422);
            expect(error.body._embedded.errors.length).toBeGreaterThan(0);
            expect(error.body._embedded.errors[0].code).toBe('INVALID_FIELD');
        }
    });
})
