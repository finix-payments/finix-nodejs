/**
 * Finix API
 */

import { RequestFile } from './models';
import { UpdateComplianceFormRequestPciSaqA } from './updateComplianceFormRequestPciSaqA';

export class UpdateComplianceFormRequest {
    'pciSaqA'?: UpdateComplianceFormRequestPciSaqA;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pciSaqA",
            "baseName": "pci_saq_a",
            "type": "UpdateComplianceFormRequestPciSaqA"
        }    ];

    static getAttributeTypeMap() {
        return UpdateComplianceFormRequest.attributeTypeMap;
    }
}

