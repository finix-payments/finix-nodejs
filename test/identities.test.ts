import {Client, Environment, Models} from '../src/api';

describe('Identity API', () => {

    let client: Client;
    let identitiesId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);
    });
    test("Test: Create an identity for a buyer", async() => {
        const createIdentityRequest: Models.CreateIdentityRequest = {
            entity: {
                phone: "7145677613",
                firstName: "Collen",
                lastName: "Wade",
                email: "therock@gmail.com"
            }
        }
        const createdIdentity = await client.Identities.create(createIdentityRequest, {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(createdIdentity.entity?.firstName).toBe(createIdentityRequest.entity.firstName);
        expect(createdIdentity.entity?.lastName).toBe(createIdentityRequest.entity.lastName);
        expect(createdIdentity.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test("Test: Create an identity for a merchant", async() => {
        const createIdentityRequest: Models.CreateIdentityRequest = {
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

        identitiesId = <string> createdIdentity.id;
        expect(createdIdentity.entity?.firstName).toBe(createIdentityRequest.entity.firstName);
        expect(createdIdentity.entity?.lastName).toBe(createIdentityRequest.entity.lastName);
        expect(createdIdentity.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test("Test: Fetch an identity", async() => {
        const fetchedIdentity = await client.Identities.get(identitiesId, 
            {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(fetchedIdentity.entity?.firstName).toBe("dwayne");
        expect(fetchedIdentity.entity?.lastName).toBe("Sunkhronos");
        expect(fetchedIdentity.id).toBe(identitiesId);
        expect(fetchedIdentity.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });

    test("Test: List all identities", async() => {
        const identitiesList = await client.Identities.list(undefined,
        {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(identitiesList.page.limit).toEqual(expect.any(Number));
        if (identitiesList.page.nextCursor != undefined){
            expect(identitiesList.page.nextCursor).toEqual(expect.any(String));
        }        
        expect(identitiesList.size).toEqual(expect.any(Number));
    });

    test("Test: Update an identity", async() => {
        const updateIdentityRequest: Models.UpdateIdentityRequest = {
            entity: {
                lastName: "Bernard",
                firstName: "Jones",
                email: "user@example.org",
                phone: "7144177878"
            }
        }
        const updatedIdentity = await client.Identities.update(identitiesId,updateIdentityRequest, 
            {headers:{["Content-Type"]: "application/vnd.json+api", ["Finix-Version"]: "2022-02-01"}});

        expect(updatedIdentity.entity?.firstName).toBe(updateIdentityRequest.entity?.firstName);
        expect(updatedIdentity.entity?.lastName).toBe(updateIdentityRequest.entity?.lastName);
        expect(updatedIdentity.application).toBe("APgPDQrLD52TYvqazjHJJchM");
    });


})
