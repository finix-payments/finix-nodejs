import {Client, Environment, Models} from '../api';

describe('Compliance Forms API', () => {

    let client: Client;
    let complianceFormId: string = "cf_fEojUGLjwUiqNTBp68JWq8";

    beforeAll(() => {
        const userName = 'USj46WbwgnjapmdYFnEDP3Ec';
        const password = 'b9b4042c-9621-438d-a84b-8557d4bda84d';

        client = new Client(userName, password, Environment.Sandbox);
    });

    test('Test: Fetch a compliance form',async () => {
        const complianceForm = await client.ComplianceForms.list(complianceFormId);
        expect(complianceForm.linkedTo).toBe("MUfnskvHiiDgP7x3TVL2LkG3");
        expect(complianceForm.linkedType).toBe("MERCHANT");
        expect(complianceForm.type).toBe("PCI_SAQ_A");
        expect(complianceForm.pciSaqA.isAccepted).toBe(false);
        expect(complianceForm.complianceFormTemplate).toBe("cft_wua8ua1yLAcHRK9mx2mF9K");
        expect(complianceForm.files.unsignedFile).toBe("FILE_fFGMCY4sxGYTqpjnXh54kC");
    }, 20000);

    test('Test: Update a compliance form',async () => {
        const client2 = new Client("US8MrUh4Eb1L9Kn6rgSKdem4", "94879501-e840-4263-ae01-b65e10084893");
        const complianceFormId2 = "cf_pzJCPAqrt9Z5653V3iXRDv";
        const updateComplianceFormRequest : Models.UpdateComplianceFormRequest = {
            pciSaqA: {
                name: "test_node",
                signedAt : "2022-03-18T16:42:55Z",
                userAgent : "Mozilla 5.0(Macintosh; IntelMac OS X 10 _14_6)",
                ipAddress:"42.1.1.113",
                title : "CTO"
            }
        }
        const complianceForm = await client2.ComplianceForms.update(complianceFormId2, updateComplianceFormRequest);
        expect(complianceForm.pciSaqA.name).toBe(updateComplianceFormRequest.pciSaqA.name);
        expect(complianceForm.pciSaqA.signedAt).toBe(updateComplianceFormRequest.pciSaqA.signedAt);
        expect(complianceForm.pciSaqA.userAgent).toBe(updateComplianceFormRequest.pciSaqA.userAgent);
        expect(complianceForm.pciSaqA.title).toBe(updateComplianceFormRequest.pciSaqA.title);
        expect(complianceForm.pciSaqA.ipAddress).toBe(updateComplianceFormRequest.pciSaqA.ipAddress);
        expect(complianceForm.id).toBe(complianceFormId2);

    
    }, 20000);

})
 