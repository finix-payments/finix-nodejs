import {Client, Environment, Models} from '../api';

describe('Payment Instruments API', () => {

    let client: Client;
    let bankAccountId: string;
    let paymentCardId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Sandbox);
    });

    test('Test: Create a payment card', async() => {
        const paymentCardRequest : Models.CreatePaymentInstrumentRequest = {
            name: "Amy White",
            expirationYear: 2029, 
            tags: {
                "card_name": "Business Card"
            },
            number: "4895142232120006",
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
        paymentCardId = <string>createdPaymentInstrument.id;

        expect(createdPaymentInstrument.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(createdPaymentInstrument.name).toBe(paymentCardRequest.name);
        expect(createdPaymentInstrument.identity).toBe(paymentCardRequest.identity);
        expect(createdPaymentInstrument.expirationMonth).toBe(paymentCardRequest.expirationMonth);
    });

    test('Test: Create a bank account', async() => {
        const paymentRequest : Models.CreatePaymentInstrumentRequest = {
            accountType: Models.CreatePaymentInstrumentRequest.AccountTypeEnum.Savings,
            name: "Alice",
            tags: {
                "Bank Account": "Company Account"
            },
            country: "USA",
            bankCode: "123123123",
            accountNumber: "123123123",
            type: Models.CreatePaymentInstrumentRequest.TypeEnum.BankAccount,
            identity: "IDpYDM7J9n57q849o9E9yNrG"
        };

        const createdPaymentInstrument = await client.PaymentInstruments.create(paymentRequest);
        bankAccountId = <string> createdPaymentInstrument.id;

        expect(createdPaymentInstrument.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(createdPaymentInstrument.name).toBe(paymentRequest.name);
        expect(createdPaymentInstrument.identity).toBe(paymentRequest.identity);
        expect(createdPaymentInstrument.bankCode).toBe(paymentRequest.bankCode);
    });

    // test('Test: Create an Apple pay session', async() => {
    //     const client2 = new Client("USwV2ayDfbTwjUmrftEBKhgk", "9bf27419-0ef6-40f5-bce7-3b0eafb1ac88", Environment.Sandbox);
    //     const applePayRequest : Models.ApplePaySessionRequest = {
    //         displayName: "Finix Test Merchant", 
    //         domain: "www.finixtestmerchant.com",
    //         merchantIdentity: "IDmULj61C8ke6Y7qQiKENJ7",
    //         validationUrl: "https://apple-pay-gateway-cert.apple.com/paymentservices/paymentSession"
    //     };
    //     try{
    //         const createdApplePaySession = await client2.PaymentInstruments.createApplePaySession(applePayRequest);
    //     } catch(error){
    //         console.log(error.body);
    //     }
    //     // expect(createdApplePaySession.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    //     // expect(createdApplePaySession.name).toBe(paymentRequest.name);
    //     // expect(createdApplePaySession.identity).toBe(paymentRequest.identity);
    //     // expect(createdApplePaySession.bankCode).toBe(paymentRequest.bankCode);
    // });

    test('Test: Fetch a bank account' ,async () => {
        const fetchedPaymentInstrument= await client.PaymentInstruments.get(bankAccountId);
        expect(fetchedPaymentInstrument.id).toBe(bankAccountId);
        expect(fetchedPaymentInstrument.bankCode).toBe("123123123");
        expect(fetchedPaymentInstrument.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Update a payment instrument' ,async () => {
        const paymentInstrumentUpdateRequest : Models.UpdatePaymentInstrumentRequest ={
            tags: {
                "Test" : "Update_test"
            }
        }
        const updatedPaymentInstrument= await client.PaymentInstruments.update(bankAccountId, paymentInstrumentUpdateRequest);
        expect(updatedPaymentInstrument.id).toBe(bankAccountId);
        expect(updatedPaymentInstrument.tags?.Test).toBe(paymentInstrumentUpdateRequest.tags?.Test);
    });

    test('Test: Fetch a payment card' ,async () => {
        const fetchedPaymentInstrument = await client.PaymentInstruments.get(paymentCardId);
        expect(fetchedPaymentInstrument.id).toBe(paymentCardId);
        expect(fetchedPaymentInstrument.expirationMonth).toBe(12);
        expect(fetchedPaymentInstrument.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test("Test: List all payment instruments", async() => {
        const paymentInstrumentList = await client.PaymentInstruments.list();

        expect(paymentInstrumentList.page.limit).toEqual(expect.any(Number));
        if (paymentInstrumentList.page.hasOwnProperty('offset')){
            expect(paymentInstrumentList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (paymentInstrumentList.page.nextCursor != undefined) {
                expect(paymentInstrumentList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(paymentInstrumentList.size).toEqual(expect.any(Number));

        if(paymentInstrumentList.hasMore) {
            const nextPaymentInstrumentList = await paymentInstrumentList.listNext();
            expect(nextPaymentInstrumentList.page.limit).toEqual(expect.any(Number));
            expect(nextPaymentInstrumentList.size).toEqual(expect.any(Number));
        }
    }, 10000);
    
    test('Test: Unknown enum' ,async () => {
        const fetchedPaymentInstrument = await client.PaymentInstruments.get("PI4gTM3twQ5XyXfM4rTuFvpo");
        expect(fetchedPaymentInstrument.type).toEqual("APPLE_PAY");
    });
})
