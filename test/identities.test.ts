import * as api from '../src/api';
import {Client, Environment} from '../src/api';

describe('Identity API', () => {

    let client: Client;
    let authorizationID: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Create an identity for a merchant", async() => {
        // const additionalData: api.CreateIdentityRequestAdditionalUnderwritingData = {
        //     merchantAgreementAccepted: true,

        // }
        const createIdentityRequest: api.CreateIdentityRequest = {
            additionalUnderwritingData: {
                merchantAgreementAccepted: true, 
                merchantAgreementIpAddress: "42.1.1.113",
                averageAchTransferAmount: 200000,
                annualAchVolume: 200000,
            }, 
            tags: {
                "Studio Rating": "4.7"
            },
            entity: {
                lastName: "Sunkhronos",
                firstName: "dwayne",
                email: "user@example.org",
                phone: "1234567890"
            }
        }
        const createdIdentity = await client.Identities.create(createIdentityRequest, {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(createdIdentity.entity.firstName).toBe(createIdentityRequest.entity.firstName);
        expect(createdIdentity.entity.lastName).toBe(createIdentityRequest.entity.firstName);
        expect(createdIdentity.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });
})
