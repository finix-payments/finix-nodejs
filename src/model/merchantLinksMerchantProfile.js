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
exports.MerchantLinksMerchantProfile = void 0;
/**
* Link to the `merchant_profile` the request was made under.
*/
class MerchantLinksMerchantProfile {
    static getAttributeTypeMap() {
        return MerchantLinksMerchantProfile.attributeTypeMap;
    }
}
exports.MerchantLinksMerchantProfile = MerchantLinksMerchantProfile;
MerchantLinksMerchantProfile.discriminator = undefined;
MerchantLinksMerchantProfile.attributeTypeMap = [
    {
        "name": "href",
        "baseName": "href",
        "type": "string"
    }
];
