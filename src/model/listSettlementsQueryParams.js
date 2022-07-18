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
exports.ListSettlementsQueryParams = void 0;
class ListSettlementsQueryParams {
    static getAttributeTypeMap() {
        return ListSettlementsQueryParams.attributeTypeMap;
    }
}
exports.ListSettlementsQueryParams = ListSettlementsQueryParams;
ListSettlementsQueryParams.discriminator = undefined;
ListSettlementsQueryParams.attributeTypeMap = [
    {
        "name": "createdAtGte",
        "baseName": "created_at.gte",
        "type": "string"
    },
    {
        "name": "createdAtLte",
        "baseName": "created_at.lte",
        "type": "string"
    },
    {
        "name": "updatedAtGte",
        "baseName": "updated_at.gte",
        "type": "string"
    },
    {
        "name": "updatedAtLte",
        "baseName": "updated_at.lte",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "afterCursor",
        "baseName": "after_cursor",
        "type": "string"
    },
    {
        "name": "beforeCursor",
        "baseName": "before_cursor",
        "type": "string"
    }
];
