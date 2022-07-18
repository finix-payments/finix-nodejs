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
exports.ApplicationProfile = void 0;
class ApplicationProfile {
    static getAttributeTypeMap() {
        return ApplicationProfile.attributeTypeMap;
    }
}
exports.ApplicationProfile = ApplicationProfile;
ApplicationProfile.discriminator = undefined;
ApplicationProfile.attributeTypeMap = [
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    },
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
        "name": "application",
        "baseName": "application",
        "type": "string"
    },
    {
        "name": "feeProfile",
        "baseName": "fee_profile",
        "type": "string"
    },
    {
        "name": "riskProfile",
        "baseName": "risk_profile",
        "type": "string"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "ApplicationProfileLinks"
    }
];
