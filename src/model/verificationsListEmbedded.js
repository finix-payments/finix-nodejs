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
exports.VerificationsListEmbedded = void 0;
/**
* List of `Verifications`.
*/
class VerificationsListEmbedded {
    static getAttributeTypeMap() {
        return VerificationsListEmbedded.attributeTypeMap;
    }
}
exports.VerificationsListEmbedded = VerificationsListEmbedded;
VerificationsListEmbedded.discriminator = undefined;
VerificationsListEmbedded.attributeTypeMap = [
    {
        "name": "verifications",
        "baseName": "verifications",
        "type": "Set<Verification>"
    }
];
//# sourceMappingURL=verificationsListEmbedded.js.map