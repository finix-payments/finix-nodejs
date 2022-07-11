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

export class RemoveSettlementTransfer {
    /**
    * ID of `Transfer` resource.
    */
    'transfers'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return RemoveSettlementTransfer.attributeTypeMap;
    }
}

