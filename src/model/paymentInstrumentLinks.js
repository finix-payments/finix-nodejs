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
exports.PaymentInstrumentLinks = void 0;
/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
class PaymentInstrumentLinks {
    static getAttributeTypeMap() {
        return PaymentInstrumentLinks.attributeTypeMap;
    }
}
exports.PaymentInstrumentLinks = PaymentInstrumentLinks;
PaymentInstrumentLinks.discriminator = undefined;
PaymentInstrumentLinks.attributeTypeMap = [
    {
        "name": "application",
        "baseName": "application",
        "type": "MerchantLinksApplication"
    },
    {
        "name": "authorizations",
        "baseName": "authorizations",
        "type": "PaymentInstrumentLinksAuthorizations"
    },
    {
        "name": "identity",
        "baseName": "identity",
        "type": "MerchantLinksIdentity"
    },
    {
        "name": "self",
        "baseName": "self",
        "type": "ApplicationLinksSelf"
    },
    {
        "name": "transfers",
        "baseName": "transfers",
        "type": "PaymentInstrumentLinksTransfers"
    },
    {
        "name": "verifications",
        "baseName": "verifications",
        "type": "MerchantLinksVerifications"
    }
];
//# sourceMappingURL=paymentInstrumentLinks.js.map