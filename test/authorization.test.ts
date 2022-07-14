import * as api from '../src/api';
import {Client, CreateAuthorizationRequest, Currency, Environment, UpdateAuthorizationRequest} from '../src/api';

describe('Authorization API', () => {

    let client: Client;
    let authorizationID: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test('Test: Create an authorization', async() => {
        const authorizationRequest : CreateAuthorizationRequest = {
            source: "PIe2YvpcjvoVJ6PzoRPBK137", 
            merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
            tags: {
                "order_number" : "21DFASJSAKAS"
            },
            currency: Currency.Usd,
            amount: 100
        };

        const createdAuthorization = await client.Authorizations.create(authorizationRequest, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}},
        false);

        authorizationID = createdAuthorization.id;
        expect(createdAuthorization.amount).toBe(authorizationRequest.amount);
        expect(createdAuthorization.source).toBe(authorizationRequest.source);
        expect(createdAuthorization.state).toBe("SUCCEEDED");
        expect(createdAuthorization.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test('Test: Capture an authorization',async () => {
        const updateRequest: UpdateAuthorizationRequest = {
            fee: 0,
            captureAmount: 100
        }
        const capturedAuthorization = await client.Authorizations.update(authorizationID, updateRequest,
             {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}},
        false);
        
        expect(capturedAuthorization.id).toBe(authorizationID);
        expect(capturedAuthorization.amount).toBe(updateRequest.captureAmount);
        expect(capturedAuthorization.source).toBe("PIe2YvpcjvoVJ6PzoRPBK137");
    });
})
