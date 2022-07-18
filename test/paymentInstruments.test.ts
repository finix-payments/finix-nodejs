import {Client, Environment, Models} from '../src/api';

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

        const createdPaymentCard = await client.PaymentInstruments.create(paymentCardRequest, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        paymentCardId = <string>createdPaymentCard.id;

        expect(createdPaymentCard.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(createdPaymentCard.name).toBe(paymentCardRequest.name);
        expect(createdPaymentCard.identity).toBe(paymentCardRequest.identity);
        expect(createdPaymentCard.expirationMonth).toBe(paymentCardRequest.expirationMonth);
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

        const createdPaymentInstrument = await client.PaymentInstruments.create(paymentRequest, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        bankAccountId = <string> createdPaymentInstrument.id;

        expect(createdPaymentInstrument.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(createdPaymentInstrument.name).toBe(paymentRequest.name);
        expect(createdPaymentInstrument.identity).toBe(paymentRequest.identity);
        expect(createdPaymentInstrument.bankCode).toBe(paymentRequest.bankCode);
    });

    test('Test: Fetch a bank account' ,async () => {
        const fetchedBankAccount = await client.PaymentInstruments.get(bankAccountId);
        expect(fetchedBankAccount.id).toBe(bankAccountId);
        expect(fetchedBankAccount.bankCode).toBe("123123123");
        expect(fetchedBankAccount.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Fetch a payment card' ,async () => {
        const fetchedPaymentCard = await client.PaymentInstruments.get(paymentCardId);
        expect(fetchedPaymentCard.id).toBe(paymentCardId);
        expect(fetchedPaymentCard.expirationMonth).toBe(12);
        expect(fetchedPaymentCard.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Create instrument update',async () => {
        const fileName : string = __dirname.concat("/test.csv");
        const updateRequest: Models.CreateInstrumentUpdateRequest = {
            file: fileName,
            request: "{\"merchant\":\"MUucec6fHeaWo3VHYoSkUySM\"}"
        }

        const createdRequest = await client.InstrumentUpdates.create(updateRequest);
        instrumentUpdateId = <string> createdRequest.id;

        expect(createdRequest.merchant).toBe("MUucec6fHeaWo3VHYoSkUySM");
    })

    test('Test: Fetch a instrument update' ,async () => {
        const fetchedInstrumentUpdate = await client.InstrumentUpdates.get(instrumentUpdateId);
        expect(fetchedInstrumentUpdate.id).toBe(instrumentUpdateId);
        expect(fetchedInstrumentUpdate.merchant).toBe("MUucec6fHeaWo3VHYoSkUySM");
    });

    test("Test: List all payment instruments", async() => {
        const paymentInstrumentList = await client.PaymentInstruments.list(undefined,
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(paymentInstrumentList.page.limit).toEqual(expect.any(Number));
        if (paymentInstrumentList.page.nextCursor != undefined){
            expect(paymentInstrumentList.page.nextCursor).toEqual(expect.any(String));
        }        
        expect(paymentInstrumentList.size).toEqual(expect.any(Number));
    });

    test('Test: Payment instrument verification' ,async () => {
        const verifiedPaymentInstrument = await client.PaymentInstrumentsP2C.createPaymentInstrumentVerification(bankAccountId,{
            processor: "DUMMY_V1"
        });

        expect(verifiedPaymentInstrument.paymentInstrument).toBe(bankAccountId);
        expect(verifiedPaymentInstrument.processor).toBe("DUMMY_V1");
    });
    
})
