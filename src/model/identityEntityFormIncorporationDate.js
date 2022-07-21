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
exports.IdentityEntityFormIncorporationDate = void 0;
/**
* Date company was founded.
*/
class IdentityEntityFormIncorporationDate {
    static getAttributeTypeMap() {
        return IdentityEntityFormIncorporationDate.attributeTypeMap;
    }
}
exports.IdentityEntityFormIncorporationDate = IdentityEntityFormIncorporationDate;
IdentityEntityFormIncorporationDate.discriminator = undefined;
IdentityEntityFormIncorporationDate.attributeTypeMap = [
    {
        "name": "year",
        "baseName": "year",
        "type": "number"
    },
    {
        "name": "day",
        "baseName": "day",
        "type": "number"
    },
    {
        "name": "month",
        "baseName": "month",
        "type": "number"
    }
];
//# sourceMappingURL=identityEntityFormIncorporationDate.js.map