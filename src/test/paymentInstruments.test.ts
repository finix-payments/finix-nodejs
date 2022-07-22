import {Client, Environment, Models} from '../api';
import * as fs from 'fs';

describe('Payment Instruments API', () => {

    let client: Client;
    let bankAccountId: string;
    let paymentCardId: string;
    let instrumentUpdateId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
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

    test('Test: Fetch a bank account' ,async () => {
        const fetchedPaymentInstrument= await client.PaymentInstruments.get(bankAccountId);
        expect(fetchedPaymentInstrument.id).toBe(bankAccountId);
        expect(fetchedPaymentInstrument.bankCode).toBe("123123123");
        expect(fetchedPaymentInstrument.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Fetch a payment card' ,async () => {
        const fetchedPaymentInstrument = await client.PaymentInstruments.get(paymentCardId);
        expect(fetchedPaymentInstrument.id).toBe(paymentCardId);
        expect(fetchedPaymentInstrument.expirationMonth).toBe(12);
        expect(fetchedPaymentInstrument.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Create instrument update',async () => {
        const fileName : string = __dirname.concat("/test.csv");
        const fileStream : fs.ReadStream = fs.createReadStream(fileName);
        const updateRequest: Models.CreateInstrumentUpdateRequest = {
            file: fileStream,
            request: "{\"merchant\":\"MUucec6fHeaWo3VHYoSkUySM\"}"
        }

        const createdInstrumentUpdate = await client.InstrumentUpdates.create(updateRequest);
        instrumentUpdateId = <string> createdInstrumentUpdate.id;

        expect(createdInstrumentUpdate.merchant).toBe("MUucec6fHeaWo3VHYoSkUySM");
    })

    test('Test: Fetch a instrument update' ,async () => {
        const fetchedInstrumentUpdate = await client.InstrumentUpdates.get(instrumentUpdateId);
        expect(fetchedInstrumentUpdate.id).toBe(instrumentUpdateId);
        expect(fetchedInstrumentUpdate.merchant).toBe("MUucec6fHeaWo3VHYoSkUySM");
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
    });
    
})
