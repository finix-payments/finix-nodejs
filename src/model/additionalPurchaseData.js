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
exports.AdditionalPurchaseData = void 0;
/**
* The additional information about the purchase. Used for Level 2 and Level 3 Processing.
*/
class AdditionalPurchaseData {
    static getAttributeTypeMap() {
        return AdditionalPurchaseData.attributeTypeMap;
    }
}
exports.AdditionalPurchaseData = AdditionalPurchaseData;
AdditionalPurchaseData.discriminator = undefined;
AdditionalPurchaseData.attributeTypeMap = [
    {
        "name": "customerReferenceNumber",
        "baseName": "customer_reference_number",
        "type": "string"
    },
    {
        "name": "customsDutyAmount",
        "baseName": "customs_duty_amount",
        "type": "number"
    },
    {
        "name": "destinationCountryCode",
        "baseName": "destination_country_code",
        "type": "string"
    },
    {
        "name": "destinationPostalCode",
        "baseName": "destination_postal_code",
        "type": "string"
    },
    {
        "name": "discountAmount",
        "baseName": "discount_amount",
        "type": "number"
    },
    {
        "name": "invoiceReferenceNumber",
        "baseName": "invoice_reference_number",
        "type": "string"
    },
    {
        "name": "itemData",
        "baseName": "item_data",
        "type": "Array<AdditionalPurchaseDataItemDataInner>"
    },
    {
        "name": "orderDate",
        "baseName": "order_date",
        "type": "AdditionalPurchaseDataOrderDate"
    },
    {
        "name": "salesTax",
        "baseName": "sales_tax",
        "type": "number"
    },
    {
        "name": "shipFromPostalCode",
        "baseName": "ship_from_postal_code",
        "type": "string"
    },
    {
        "name": "shippingAmount",
        "baseName": "shipping_amount",
        "type": "number"
    },
    {
        "name": "taxExempt",
        "baseName": "tax_exempt",
        "type": "boolean"
    }
];
//# sourceMappingURL=additionalPurchaseData.js.map