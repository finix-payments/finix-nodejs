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
exports.SubscriptionAmount = void 0;
/**
*
*/
class SubscriptionAmount {
    static getAttributeTypeMap() {
        return SubscriptionAmount.attributeTypeMap;
    }
}
exports.SubscriptionAmount = SubscriptionAmount;
SubscriptionAmount.discriminator = undefined;
SubscriptionAmount.attributeTypeMap = [
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
        "name": "amountType",
        "baseName": "amount_type",
        "type": "SubscriptionAmount.AmountTypeEnum"
    },
    {
        "name": "createdBy",
        "baseName": "created_by",
        "type": "string"
    },
    {
        "name": "feeAmountData",
        "baseName": "fee_amount_data",
        "type": "SubscriptionAmountFeeAmountData"
    },
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "string"
    },
    {
        "name": "subscriptionSchedule",
        "baseName": "subscription_schedule",
        "type": "string"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "SubscriptionAmountLinks"
    }
];
(function (SubscriptionAmount) {
    let AmountTypeEnum;
    (function (AmountTypeEnum) {
        AmountTypeEnum[AmountTypeEnum["Fee"] = 'FEE'] = "Fee";
    })(AmountTypeEnum = SubscriptionAmount.AmountTypeEnum || (SubscriptionAmount.AmountTypeEnum = {}));
})(SubscriptionAmount = exports.SubscriptionAmount || (exports.SubscriptionAmount = {}));
//# sourceMappingURL=subscriptionAmount.js.map