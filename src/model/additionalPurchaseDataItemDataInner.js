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
exports.AdditionalPurchaseDataItemDataInner = void 0;
class AdditionalPurchaseDataItemDataInner {
    static getAttributeTypeMap() {
        return AdditionalPurchaseDataItemDataInner.attributeTypeMap;
    }
}
exports.AdditionalPurchaseDataItemDataInner = AdditionalPurchaseDataItemDataInner;
AdditionalPurchaseDataItemDataInner.discriminator = undefined;
AdditionalPurchaseDataItemDataInner.attributeTypeMap = [
    {
        "name": "amountExcludingSalesTax",
        "baseName": "amount_excluding_sales_tax",
        "type": "number"
    },
    {
        "name": "amountIncludingSalesTax",
        "baseName": "amount_including_sales_tax",
        "type": "number"
    },
    {
        "name": "commodityCode",
        "baseName": "commodity_code",
        "type": "string"
    },
    {
        "name": "costPerUnit",
        "baseName": "cost_per_unit",
        "type": "number"
    },
    {
        "name": "itemDescription",
        "baseName": "item_description",
        "type": "string"
    },
    {
        "name": "itemDiscountAmount",
        "baseName": "item_discount_amount",
        "type": "number"
    },
    {
        "name": "merchantProductCode",
        "baseName": "merchant_product_code",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "unitOfMeasure",
        "baseName": "unit_of_measure",
        "type": "string"
    }
];
//# sourceMappingURL=additionalPurchaseDataItemDataInner.js.map