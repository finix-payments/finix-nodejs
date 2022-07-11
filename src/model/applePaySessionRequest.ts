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

export class ApplePaySessionRequest {
    /**
    * This will be the merchant name shown to users when making a purchase via Apple Pay.1
    */
    'displayName'?: string;
    /**
    * The domain where the buyer is initiating the payment.
    */
    'domain'?: string;
    /**
    * The `merchant_identity_id` used when registering the business with Apple Pay through our registration API.
    */
    'merchantIdentity'?: string;
    /**
    * A unique validation URL that will be provided by the Apple SDK front-end for every payment.
    */
    'validationUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "merchantIdentity",
            "baseName": "merchant_identity",
            "type": "string"
        },
        {
            "name": "validationUrl",
            "baseName": "validation_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApplePaySessionRequest.attributeTypeMap;
    }
}

