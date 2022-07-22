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
exports.ApplePaySession = void 0;
class ApplePaySession {
    static getAttributeTypeMap() {
        return ApplePaySession.attributeTypeMap;
    }
}
exports.ApplePaySession = ApplePaySession;
ApplePaySession.discriminator = undefined;
ApplePaySession.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "Date"
    },
    {
        "name": "sessionDetails",
        "baseName": "session_details",
        "type": "string"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "DisputeEvidenceLinks"
    }
];
