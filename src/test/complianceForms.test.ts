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
        const complianceForm = await client.ComplianceForms.getComplianceForms(complianceFormId);
        expect(complianceForm.linkedTo).toBe("MUfnskvHiiDgP7x3TVL2LkG3");
        expect(complianceForm.linkedType).toBe("MERCHANT");
        expect(complianceForm.type).toBe("PCI_SAQ_A");
        expect(complianceForm.pciSaqA.isAccepted).toBe(false);
        expect(complianceForm.complianceFormTemplate).toBe("cft_wua8ua1yLAcHRK9mx2mF9K");
        expect(complianceForm.files.unsignedFile).toBe("FILE_fFGMCY4sxGYTqpjnXh54kC");
    }, 20000);

})
 