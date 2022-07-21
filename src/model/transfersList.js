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
exports.TransfersList = void 0;
/**
*
*/
class TransfersList {
    static getAttributeTypeMap() {
        return TransfersList.attributeTypeMap;
    }
}
exports.TransfersList = TransfersList;
TransfersList.discriminator = undefined;
TransfersList.attributeTypeMap = [
    {
        "name": "page",
        "baseName": "page",
        "type": "PageCursor"
    },
    {
        "name": "embedded",
        "baseName": "_embedded",
        "type": "TransfersListEmbedded"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "ListLinks"
    }
];
//# sourceMappingURL=transfersList.js.map