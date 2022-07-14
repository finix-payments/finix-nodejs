import * as api from '../src/api';
import {Client, Environment} from '../src/api';

describe('Payment Instruments API', () => {

    let client: Client;
    let authorizationID: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test('Test: Create a bank account', async() => {
        const paymentRequest : api.CreatePaymentInstrumentRequest = {
            accountType: api.CreatePaymentInstrumentRequest.AccountTypeEnum.Savings,
            name: "Alice",
            tags: {
                "Bank Account": "Company Account"
            },
            country: "USA",
            bankCode: "123123123",
            accountNumber: "123123123",
            type: api.CreatePaymentInstrumentRequest.TypeEnum.BankAccount,
            identity: "IDpYDM7J9n57q849o9E9yNrG"
        };

        const createdPaymentInstrument = await client.PaymentInstruments.create(paymentRequest, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(createdPaymentInstrument.application).toBe("APgPDQrLD52TYvqazjHJJchM");
        expect(createdPaymentInstrument.name).toBe(paymentRequest.name);
        expect(createdPaymentInstrument.accountNumber).toBe(paymentRequest.accountNumber);
        expect(createdPaymentInstrument.bankCode).toBe(paymentRequest.bankCode);
    });

    test('Test: Create instrument update',async () => {
        const updateRequest: UpdateAuthorizationRequest = {
            fee: 0,
            captureAmount: 100
        }
        const capturedAuthorization = await client.Authorizations.update(authorizationID, updateRequest,
             {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});
        
        expect(capturedAuthorization.id).toBe(authorizationID);
        expect(capturedAuthorization.amount).toBe(updateRequest.captureAmount);
        expect(capturedAuthorization.source).toBe("PIe2YvpcjvoVJ6PzoRPBK137");
    })
})
