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
exports.CardPresentDetails = void 0;
/**
* Details needed to process card present transactions.
*/
class CardPresentDetails {
    static getAttributeTypeMap() {
        return CardPresentDetails.attributeTypeMap;
    }
}
exports.CardPresentDetails = CardPresentDetails;
CardPresentDetails.discriminator = undefined;
CardPresentDetails.attributeTypeMap = [
    {
        "name": "approvalCode",
        "baseName": "approval_code",
        "type": "string"
    },
    {
        "name": "brand",
        "baseName": "brand",
        "type": "string"
    },
    {
        "name": "emvData",
        "baseName": "emv_data",
        "type": "CardPresentDetailsEmvData"
    },
    {
        "name": "entryMode",
        "baseName": "entry_mode",
        "type": "string"
    },
    {
        "name": "maskedAccountNumber",
        "baseName": "masked_account_number",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "paymentType",
        "baseName": "payment_type",
        "type": "string"
    }
];
//# sourceMappingURL=cardPresentDetails.js.map