/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Optional object detailing [specific healthcare amounts](/docs/guides/making-a-payment/hsa-fsa/).
*/
export class AdditionalHealthcareData {
    /**
    * The amount used for clinic and office visits such as a copay amount.
    */
    'clinicAmount'?: number | null;
    /**
    * The amount used for dental related expenses.
    */
    'dentalAmount'?: number | null;
    /**
    * The amount used to purchase perscriptions and medications.
    */
    'prescriptionAmount'?: number | null;
    /**
    * The amount used for vision related expenses.
    */
    'visionAmount'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clinicAmount",
            "baseName": "clinic_amount",
            "type": "number"
        },
        {
            "name": "dentalAmount",
            "baseName": "dental_amount",
            "type": "number"
        },
        {
            "name": "prescriptionAmount",
            "baseName": "prescription_amount",
            "type": "number"
        },
        {
            "name": "visionAmount",
            "baseName": "vision_amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalHealthcareData.attributeTypeMap;
    }
}

