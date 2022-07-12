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
exports.Error422InvalidFieldList = void 0;
/**
* Invalid field
*/
class Error422InvalidFieldList {
    'total';
    'embedded';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "Error422InvalidFieldListEmbedded"
        }
    ];
    static getAttributeTypeMap() {
        return Error422InvalidFieldList.attributeTypeMap;
    }
}
exports.Error422InvalidFieldList = Error422InvalidFieldList;
//# sourceMappingURL=error422InvalidFieldList.js.map