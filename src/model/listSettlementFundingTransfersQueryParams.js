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
exports.ListSettlementFundingTransfersQueryParams = void 0;
class ListSettlementFundingTransfersQueryParams {
    static getAttributeTypeMap() {
        return ListSettlementFundingTransfersQueryParams.attributeTypeMap;
    }
}
exports.ListSettlementFundingTransfersQueryParams = ListSettlementFundingTransfersQueryParams;
ListSettlementFundingTransfersQueryParams.discriminator = undefined;
ListSettlementFundingTransfersQueryParams.attributeTypeMap = [
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
