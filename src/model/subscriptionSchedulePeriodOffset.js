"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionSchedulePeriodOffset = void 0;
/**
* Specifies when the `Fee` is charged. This field is **null** for **FIXED_TIME_INTERVAL** `Subscription Schedules`.
*/
class SubscriptionSchedulePeriodOffset {
    static getAttributeTypeMap() {
        return SubscriptionSchedulePeriodOffset.attributeTypeMap;
    }
}
exports.SubscriptionSchedulePeriodOffset = SubscriptionSchedulePeriodOffset;
SubscriptionSchedulePeriodOffset.discriminator = undefined;
SubscriptionSchedulePeriodOffset.attributeTypeMap = [
    {
        "name": "day",
        "baseName": "day",
        "type": "number"
    },
    {
        "name": "month",
        "baseName": "month",
        "type": "number"
    }
];
