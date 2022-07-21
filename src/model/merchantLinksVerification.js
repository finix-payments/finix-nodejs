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
exports.MerchantLinksVerification = void 0;
/**
* Link to the `Verification` that was used to verify the `Identity` that the request was made under.
*/
class MerchantLinksVerification {
    static getAttributeTypeMap() {
        return MerchantLinksVerification.attributeTypeMap;
    }
}
exports.MerchantLinksVerification = MerchantLinksVerification;
MerchantLinksVerification.discriminator = undefined;
MerchantLinksVerification.attributeTypeMap = [
    {
        "name": "href",
        "baseName": "href",
        "type": "string"
    }
];
//# sourceMappingURL=merchantLinksVerification.js.map