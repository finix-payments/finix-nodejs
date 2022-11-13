import {Client, Environment, Models} from '../api';

describe('Identity API', () => {

    let client: Client;
    let identitiesId: string;

    beforeAll(() => {
        const userName = 'USfJofzcgqeS35jQGh6nUWxn';
        const password = '2cc12030-c165-48fd-83fa-b7da310df3bd';

        client = new Client(userName, password, Environment.Sandbox);
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
        const createdIdentity = await client.Identities.create(createIdentityRequest);

        expect(createdIdentity.entity?.firstName).toBe(createIdentityRequest.entity?.firstName);
        expect(createdIdentity.entity?.lastName).toBe(createIdentityRequest.entity?.lastName);
    });

    test("Test: Create an identity for a merchant", async() => {
        const createIdentityRequest: Models.CreateIdentityRequest = {
            additionalUnderwritingData: {
                merchantAgreementAccepted: true, 
                merchantAgreementIpAddress: "42.1.1.113",
                averageAchTransferAmount: 200000,
                annualAchVolume: 200000,
                creditCheckUserAgent: "Mozilla 5.0(Macintosh; IntelMac OS X 10 _14_6)",
                refundPolicy: "MERCHANDISE_EXCHANGE_ONLY",
                creditCheckTimestamp: "2021-04-28T16:42:55Z",
                creditCheckAllowed: true,
                merchantAgreementTimestamp: "2021-04-28T16:42:55Z",
                businessDescription: "BCSB3 vegan cafe",
                averageCardTransferAmount: 200000,
                creditCheckIpAddress: "42.1.1.113",
                merchantAgreementUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6)",
                volumeDistributionByBusinessType:{
                    otherVolumePercentage: 0,
                    consumerToConsumerVolumePercentage: 0,
                    businessToConsumerVolumePercentage: 0,
                    businessToBusinessVolumePercentage: 100,
                    personToPersonVolumePercentage: 0,
                },
                cardVolumeDistribution:{
                    cardPresentPercentage: 0,
                    mailOrderTelephoneOrderPercentage: 0,
                    ecommercePercentage: 100,
                }
            }, 
            tags: {
                "Studio Rating": "4.7"
            },
            entity: {
                lastName: "Sunkhronos",
                firstName: "dwayne",
                email: "user@example.org",
                phone: "1234567890",
                businessType: "INDIVIDUAL_SOLE_PROPRIETORSHIP",
                defaultStatementDescriptor: "example",
                maxTransactionAmount: 100000,
                mcc: "0742",
                businessName: "Finix Flowers",
                businessPhone: "+1 (408) 756-4497",
                businessTaxId: "123456789",
                annualCardVolume: 12000000,
                incorporationDate: {
                    year: 1978,
                    day: 27,
                    month: 6
                },
                url: "www.Finix.com",
                principalPercentageOwnership: 100,
                taxId: "123456789",
                personalAddress: {
                    city: "San Mateo",
                    country: Models.Country.Usa,
                    region: "CA",
                    line2: "Apartment 7",
                    line1: "741 Douglass St",
                    postalCode: "94114"
                },
                dob: {
                    year: 1978,
                    day: 27,
                    month: 6
                },
                doingBusinessAs: "example",
            }
        }

        const createdIdentity = await client.Identities.create(createIdentityRequest);

        identitiesId = <string> createdIdentity.id;
        console.log("set: "+identitiesId);
        
        expect(createdIdentity.entity?.firstName).toBe(createIdentityRequest.entity?.firstName);
        expect(createdIdentity.entity?.lastName).toBe(createIdentityRequest.entity?.lastName);
    });

    test("Test: Create an associated identity", async() => {
        const createIdentityRequest: Models.CreateAssociatedIdentityRequest = {
            entity : {
                lastName : "abc",
                firstName : "dwayne",
                phone : "123123123",
                email : "user@example.org",
                personalAddress : {
                    city : "San Mateo", 
                    country : "USA",
                    region : "CA", 
                    line1 : "741 Douglas St", 
                    postalCode : "94114"
                }
            }
        }
        console.log("get: "+identitiesId);
        const createdIdentity = await client.Identities.createAssociatedIdentity(identitiesId, createIdentityRequest);
        console.log(createdIdentity);
        console.log(createIdentityRequest);
        expect(createdIdentity.entity?.firstName).toBe(createIdentityRequest.entity?.firstName);
        expect(createdIdentity.entity?.lastName).toBe(createIdentityRequest.entity?.lastName);
    });

    test("Test: Verify an identity", async() => {
        const createVerificationRequest: Models.CreateVerificationRequest = {
            merchant: "MUgWbPVvtKbzjKNNGKqdQYV7",
            tags : {
                "test_key_01" : "test_val"
            }
        }
        // try {
        const identityVerification = await client.Identities.createIdentityVerification("IDgWxBhfGYLLdkhxx2ddYf9K", createVerificationRequest);
        expect(identityVerification.merchant).toBe(createVerificationRequest.merchant);
        expect(identityVerification.tags?.["test_key_01"]).toBe("test_val");
        // }
        // catch (err){
        //     console.log(err);
        // }


    });

    test("Test: Fetch an identity", async() => {
        const fetchedIdentity = await client.Identities.get(identitiesId);

        expect(fetchedIdentity.entity?.firstName).toBe("dwayne");
        expect(fetchedIdentity.entity?.lastName).toBe("Sunkhronos");
        expect(fetchedIdentity.id).toBe(identitiesId);
    });

    test("Test: List all identities", async() => {
        const client2 = new Client("USj5xC8quveXhsesHyxB8hJd", "e660f5b1-94c2-46b5-bedf-6ba3466b7d33", Environment.Sandbox);
        const identitiesList = await client2.Identities.list();

        expect(identitiesList.page.limit).toEqual(expect.any(Number));
        if (identitiesList.page.hasOwnProperty('offset')){
            expect(identitiesList.page.offset).toEqual(expect.any(Number));
        }
        else{
            if (identitiesList.page.nextCursor != undefined) {
                expect(identitiesList.page.nextCursor).toEqual(expect.any(String));
            }
        }        
        expect(identitiesList.size).toEqual(expect.any(Number));

        if(identitiesList.hasMore) {
            const nextIdentitiesList = await identitiesList.listNext();
            expect(nextIdentitiesList.page.limit).toEqual(expect.any(Number));
            expect(nextIdentitiesList.size).toEqual(expect.any(Number));
        }
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
        const updatedIdentity = await client.Identities.update(identitiesId,updateIdentityRequest);

        expect(updatedIdentity.entity?.firstName).toBe(updateIdentityRequest.entity?.firstName);
        expect(updatedIdentity.entity?.lastName).toBe(updateIdentityRequest.entity?.lastName);
    });


})
