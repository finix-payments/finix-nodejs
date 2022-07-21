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
exports.DisputesList = void 0;
class DisputesList {
    static getAttributeTypeMap() {
        return DisputesList.attributeTypeMap;
    }
}
exports.DisputesList = DisputesList;
DisputesList.discriminator = undefined;
DisputesList.attributeTypeMap = [
    {
        "name": "embedded",
        "baseName": "_embedded",
        "type": "DisputesListEmbedded"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "ListLinks"
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "PageOffset"
    }
];
//# sourceMappingURL=disputesList.js.map