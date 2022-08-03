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

export class CreateVerificationRequest {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * ID of the `Identity` resource associated with the `Merchant`.
    */
    'identity'?: string;
    /**
    * The `Payment Instrument` that\'ll be used to settle the `Merchant\'s` funds.
    */
    'instrument'?: string;
    /**
    * The ID of the `Merchant`.
    */
    'merchant'?: string;
    /**
    * Name of the `Verification` processor.
    */
    'processor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "instrument",
            "baseName": "instrument",
            "type": "string"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateVerificationRequest.attributeTypeMap;
    }
}

