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
    /**
    * The number of entries to return.
    */
    'limit';
    /**
    * The cursor to use for the next page of results.
    */
    'nextCursor';
    static discriminator = undefined;
    static attributeTypeMap = [
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
    static getAttributeTypeMap() {
        return PageCursor.attributeTypeMap;
    }
}
exports.PageCursor = PageCursor;
//# sourceMappingURL=pageCursor.js.map