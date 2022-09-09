/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Details used to fille out the PCI Self-Assessment Questionnaire (SAQ).
*/
export class ComplianceFormPciSaqA {
    /**
    * Name of the person completing (aka attesting to) the `compliance_form`.
    */
    'name'?: string | null;
    /**
    * Timestamp of the person attesting to this `compliance_form`.
    */
    'signedAt'?: string | null;
    /**
    * User agent of the person attesting to this `compliance_form`.
    */
    'userAgent'?: string | null;
    /**
    * IP address of the person attesting to this `compliance_form`.
    */
    'ipAddress'?: string | null;
    /**
    * If all `pci_saq_a` fields are all submitted, `is_accepted` updates to **true**.
    */
    'isAccepted'?: boolean | null;
    /**
    * Title or role of the person completing (aka attesting to) the `compliance_form`.
    */
    'title'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "signedAt",
            "baseName": "signed_at",
            "type": "string"
        },
        {
            "name": "userAgent",
            "baseName": "user_agent",
            "type": "string"
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string"
        },
        {
            "name": "isAccepted",
            "baseName": "is_accepted",
            "type": "boolean"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComplianceFormPciSaqA.attributeTypeMap;
    }
}

