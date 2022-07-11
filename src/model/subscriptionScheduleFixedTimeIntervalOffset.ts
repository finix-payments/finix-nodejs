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
* Specifies when the `Fee` is charged.
*/
export class SubscriptionScheduleFixedTimeIntervalOffset {
    /**
    * Hourly increments between recurring charges.
    */
    'hourlyInterval'?: number;
    /**
    * Number of recurring charges.
    */
    'intervalCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hourlyInterval",
            "baseName": "hourly_interval",
            "type": "number"
        },
        {
            "name": "intervalCount",
            "baseName": "interval_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionScheduleFixedTimeIntervalOffset.attributeTypeMap;
    }
}

