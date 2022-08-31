/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Details about the `File` resoruce where the `compliance_form` was uploaded.
*/
export class ComplianceFormFiles {
    /**
    * ID of the `File` resource that has the `compliance_form`.
    */
    'unsignedFile'?: string;
    /**
    * <ul><li>Autofills to <strong>null</strong>.</li> <li>When a <kbd>compliance_form</kbd> is attested, <kbd>signed_file</kbd> will contain a <kbd>File</kbd> corresponding to the signed version of the form.</li></ul>
    */
    'signedFile'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "unsignedFile",
            "baseName": "unsigned_file",
            "type": "string"
        },
        {
            "name": "signedFile",
            "baseName": "signed_file",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComplianceFormFiles.attributeTypeMap;
    }
}

