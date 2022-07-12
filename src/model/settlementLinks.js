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
exports.SettlementLinks = void 0;
/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
class SettlementLinks {
    'application';
    'credits';
    'debits';
    'disputes';
    'fees';
    'fundingTransfers';
    'identity';
    'reversals';
    'self';
    'transfers';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationProfileLinksApplication"
        },
        {
            "name": "credits",
            "baseName": "credits",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "debits",
            "baseName": "debits",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "disputes",
            "baseName": "disputes",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "fundingTransfers",
            "baseName": "funding_transfers",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "reversals",
            "baseName": "reversals",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "ApplicationLinksApplicationProfile"
        }
    ];
    static getAttributeTypeMap() {
        return SettlementLinks.attributeTypeMap;
    }
}
exports.SettlementLinks = SettlementLinks;
//# sourceMappingURL=settlementLinks.js.map