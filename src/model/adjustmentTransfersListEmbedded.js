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
exports.AdjustmentTransfersListEmbedded = void 0;
class AdjustmentTransfersListEmbedded {
    static getAttributeTypeMap() {
        return AdjustmentTransfersListEmbedded.attributeTypeMap;
    }
}
exports.AdjustmentTransfersListEmbedded = AdjustmentTransfersListEmbedded;
AdjustmentTransfersListEmbedded.discriminator = undefined;
AdjustmentTransfersListEmbedded.attributeTypeMap = [
    {
        "name": "transfers",
        "baseName": "transfers",
        "type": "Array<Transfer>"
    }
];
