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
exports.PageOffset = void 0;
class PageOffset {
    static getAttributeTypeMap() {
        return PageOffset.attributeTypeMap;
    }
}
exports.PageOffset = PageOffset;
PageOffset.discriminator = undefined;
PageOffset.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "offset",
        "baseName": "offset",
        "type": "number"
    }
];
//# sourceMappingURL=pageOffset.js.map