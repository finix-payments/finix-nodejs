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
exports.PageCursor = void 0;
/**
*
*/
class PageCursor {
    static getAttributeTypeMap() {
        return PageCursor.attributeTypeMap;
    }
}
exports.PageCursor = PageCursor;
PageCursor.discriminator = undefined;
PageCursor.attributeTypeMap = [
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number"
    },
    {
        "name": "nextCursor",
        "baseName": "next_cursor",
        "type": "string"
    }
];
