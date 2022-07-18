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
exports.ReserveProfile = void 0;
class ReserveProfile {
    static getAttributeTypeMap() {
        return ReserveProfile.attributeTypeMap;
    }
}
exports.ReserveProfile = ReserveProfile;
ReserveProfile.discriminator = undefined;
ReserveProfile.attributeTypeMap = [
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
        "name": "reserveDays",
        "baseName": "reserve_days",
        "type": "number"
    },
    {
        "name": "reservePercentage",
        "baseName": "reserve_percentage",
        "type": "number"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "FeeProfileLinks"
    }
];
