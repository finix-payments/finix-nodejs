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
exports.SettlementsListEmbedded = void 0;
class SettlementsListEmbedded {
    static getAttributeTypeMap() {
        return SettlementsListEmbedded.attributeTypeMap;
    }
}
exports.SettlementsListEmbedded = SettlementsListEmbedded;
SettlementsListEmbedded.discriminator = undefined;
SettlementsListEmbedded.attributeTypeMap = [
    {
        "name": "settlements",
        "baseName": "settlements",
        "type": "Set<Settlement>"
    }
];
//# sourceMappingURL=settlementsListEmbedded.js.map