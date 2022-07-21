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
exports.ListIdentitiesQueryParams = void 0;
class ListIdentitiesQueryParams {
    static getAttributeTypeMap() {
        return ListIdentitiesQueryParams.attributeTypeMap;
    }
}
exports.ListIdentitiesQueryParams = ListIdentitiesQueryParams;
ListIdentitiesQueryParams.discriminator = undefined;
ListIdentitiesQueryParams.attributeTypeMap = [
    {
        "name": "sort",
        "baseName": "sort",
        "type": "string"
    },
    {
        "name": "afterCursor",
        "baseName": "after_cursor",
        "type": "string"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
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
        "name": "defaultStatementDescriptor",
        "baseName": "default_statement_descriptor",
        "type": "string"
    },
    {
        "name": "businessName",
        "baseName": "business_name",
        "type": "string"
    },
    {
        "name": "businessType",
        "baseName": "business_type",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "first_name",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "last_name",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "beforeCursor",
        "baseName": "before_cursor",
        "type": "string"
    }
];
//# sourceMappingURL=listIdentitiesQueryParams.js.map