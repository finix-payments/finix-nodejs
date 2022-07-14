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
exports.AdditionalPurchaseDataOrderDate = void 0;
class AdditionalPurchaseDataOrderDate {
    /**
    * Day of purchase (between 1 and 31)
    */
    'day';
    /**
    * Month of purchase (between 1 and 12)
    */
    'month';
    /**
    * Year of purchase (4-digit)
    */
    'year';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "day",
            "baseName": "day",
            "type": "number"
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "number"
        },
        {
            "name": "year",
            "baseName": "year",
            "type": "number"
        }
    ];
    static getAttributeTypeMap() {
        return AdditionalPurchaseDataOrderDate.attributeTypeMap;
    }
}
exports.AdditionalPurchaseDataOrderDate = AdditionalPurchaseDataOrderDate;
