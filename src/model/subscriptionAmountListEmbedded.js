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
exports.SubscriptionAmountListEmbedded = void 0;
class SubscriptionAmountListEmbedded {
    'subscriptionAmounts';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "subscriptionAmounts",
            "baseName": "subscription_amounts",
            "type": "Set<SubscriptionAmount>"
        }
    ];
    static getAttributeTypeMap() {
        return SubscriptionAmountListEmbedded.attributeTypeMap;
    }
}
exports.SubscriptionAmountListEmbedded = SubscriptionAmountListEmbedded;
