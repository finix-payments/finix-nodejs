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
exports.InstrumentUpdate = void 0;
class InstrumentUpdate {
    static getAttributeTypeMap() {
        return InstrumentUpdate.attributeTypeMap;
    }
}
exports.InstrumentUpdate = InstrumentUpdate;
InstrumentUpdate.discriminator = undefined;
InstrumentUpdate.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "Date"
    },
    {
        "name": "merchant",
        "baseName": "merchant",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "DisputeEvidenceLinks"
    }
];
