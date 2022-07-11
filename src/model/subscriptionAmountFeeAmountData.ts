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
import { Currency } from './currency';

/**
* The amount and currency of this `Subsciption Amount`.
*/
export class SubscriptionAmountFeeAmountData {
    /**
    * A positive integer in cents representing how much to charge on a recurring basis
    */
    'amount'?: number;
    'currency'?: Currency;
    /**
    * The display name of the `Subscription Amount` that can be used for filtering purposes.
    */
    'label'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAmountFeeAmountData.attributeTypeMap;
    }
}

