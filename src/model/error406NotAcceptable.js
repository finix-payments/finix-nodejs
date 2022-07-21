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
exports.Error406NotAcceptable = void 0;
class Error406NotAcceptable {
    static getAttributeTypeMap() {
        return Error406NotAcceptable.attributeTypeMap;
    }
}
exports.Error406NotAcceptable = Error406NotAcceptable;
Error406NotAcceptable.discriminator = undefined;
Error406NotAcceptable.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "embedded",
        "baseName": "_embedded",
        "type": "Error404NotFoundListEmbedded"
    }
];
//# sourceMappingURL=error406NotAcceptable.js.map