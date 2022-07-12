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
exports.SubscriptionEnrollmentList = void 0;
class SubscriptionEnrollmentList {
    'page';
    'embedded';
    'links';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "page",
            "baseName": "page",
            "type": "UsersListPage"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "SubscriptionEnrollmentListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DisputeEvidenceLinks"
        }
    ];
    static getAttributeTypeMap() {
        return SubscriptionEnrollmentList.attributeTypeMap;
    }
}
exports.SubscriptionEnrollmentList = SubscriptionEnrollmentList;
