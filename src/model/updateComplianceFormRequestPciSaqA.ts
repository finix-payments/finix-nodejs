/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Details used to fille out the PCI Self-Assessment Questionnaire.
*/
export class UpdateComplianceFormRequestPciSaqA {
    /**
    * IP address of the person attesting to this `compliance_form`.
    */
    'ipAddress'?: string;
    /**
    * Name of the person completing (aka attesting to) the `compliance_form`.
    */
    'name'?: string;
    /**
    * Timestamp of the person attesting to this `compliance_form`.
    */
    'signedAt'?: string;
    /**
    * Title or role of the person completing (aka attesting to)                 the `compliance_form`.
    */
    'title'?: string;
    /**
    * User agent of the person attesting to this `compliance_form`.
    */
    'userAgent'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string"
        },
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
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "userAgent",
            "baseName": "user_agent",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateComplianceFormRequestPciSaqA.attributeTypeMap;
    }
}

