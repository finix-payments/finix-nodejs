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
exports.ApplicationProfileLinks = void 0;
/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
class ApplicationProfileLinks {
    static getAttributeTypeMap() {
        return ApplicationProfileLinks.attributeTypeMap;
    }
}
exports.ApplicationProfileLinks = ApplicationProfileLinks;
ApplicationProfileLinks.discriminator = undefined;
ApplicationProfileLinks.attributeTypeMap = [
    {
        "name": "application",
        "baseName": "application",
        "type": "ApplicationProfileLinksApplication"
    },
    {
        "name": "feeProfile",
        "baseName": "fee_profile",
        "type": "ApplicationLinksApplicationProfile"
    },
    {
        "name": "riskProfile",
        "baseName": "risk_profile",
        "type": "ApplicationLinksApplicationProfile"
    },
    {
        "name": "self",
        "baseName": "self",
        "type": "ApplicationLinksSelf"
    }
];
