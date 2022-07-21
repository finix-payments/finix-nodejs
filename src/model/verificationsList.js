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
exports.VerificationsList = void 0;
class VerificationsList {
    static getAttributeTypeMap() {
        return VerificationsList.attributeTypeMap;
    }
}
exports.VerificationsList = VerificationsList;
VerificationsList.discriminator = undefined;
VerificationsList.attributeTypeMap = [
    {
        "name": "embedded",
        "baseName": "_embedded",
        "type": "VerificationsListEmbedded"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "ListLinks"
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "PageCursor"
    }
];
//# sourceMappingURL=verificationsList.js.map