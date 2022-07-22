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
exports.ListAuthorizationsQueryParams = void 0;
class ListAuthorizationsQueryParams {
    static getAttributeTypeMap() {
        return ListAuthorizationsQueryParams.attributeTypeMap;
    }
}
exports.ListAuthorizationsQueryParams = ListAuthorizationsQueryParams;
ListAuthorizationsQueryParams.discriminator = undefined;
ListAuthorizationsQueryParams.attributeTypeMap = [
    {
        "name": "sort",
        "baseName": "sort",
        "type": "string"
    },
    {
        "name": "beforeCursor",
        "baseName": "before_cursor",
        "type": "string"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "idempotencyId",
        "baseName": "idempotency_id",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
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
        "name": "isVoid",
        "baseName": "is_void",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "amountLt",
        "baseName": "amount.lt",
        "type": "number"
    },
    {
        "name": "amountGt",
        "baseName": "amount.gt",
        "type": "number"
    },
    {
        "name": "amountLte",
        "baseName": "amount.lte",
        "type": "number"
    },
    {
        "name": "amountGte",
        "baseName": "amount.gte",
        "type": "number"
    },
    {
        "name": "traceId",
        "baseName": "trace_id",
        "type": "string"
    },
    {
        "name": "instrumentBin",
        "baseName": "instrument_bin",
        "type": "string"
    },
    {
        "name": "instrumentAccountLast4",
        "baseName": "instrument_account_last4",
        "type": "string"
    },
    {
        "name": "instrumentBrandType",
        "baseName": "instrument_brand_type",
        "type": "string"
    },
    {
        "name": "merchantIdentityId",
        "baseName": "merchant_identity_id",
        "type": "string"
    },
    {
        "name": "merchantIdentityName",
        "baseName": "merchant_identity_name",
        "type": "string"
    },
    {
        "name": "instrumentName",
        "baseName": "instrument_name",
        "type": "string"
    },
    {
        "name": "instrumentType",
        "baseName": "instrument_type",
        "type": "string"
    },
    {
        "name": "merchantId",
        "baseName": "merchant_id",
        "type": "string"
    },
    {
        "name": "merchantMid",
        "baseName": "merchant_mid",
        "type": "string"
    },
    {
        "name": "instrumentCardLast4",
        "baseName": "instrument_card_last4",
        "type": "string"
    },
    {
        "name": "merchantProcessorId",
        "baseName": "merchant_processor_id",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "afterCursor",
        "baseName": "after_cursor",
        "type": "string"
    }
];
