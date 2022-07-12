import * as api from '../src/api';
import {Client, Currency, Environment} from '../src/api';

describe('Authorization API', () => {

    let client: Client;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test('Test: Create an authorization', async() => {
        const createdAuthorization = await client.Authorizations.create({
            source: "PIe2YvpcjvoVJ6PzoRPBK137", 
            merchant: "MUeDVrf2ahuKc9Eg5TeZugvs",
            tags: {
                "order_number" : "21DFASJSAKAS"
            },
            currency: Currency.Usd,
            amount: 100
        }, 
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}},
        false);

        expect(createdAuthorization.state).toBe("SUCCEEDED");
    });
})
