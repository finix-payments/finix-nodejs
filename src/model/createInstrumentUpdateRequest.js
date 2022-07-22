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
exports.CreateInstrumentUpdateRequest = void 0;
class CreateInstrumentUpdateRequest {
    static getAttributeTypeMap() {
        return CreateInstrumentUpdateRequest.attributeTypeMap;
    }
}
exports.CreateInstrumentUpdateRequest = CreateInstrumentUpdateRequest;
CreateInstrumentUpdateRequest.discriminator = undefined;
CreateInstrumentUpdateRequest.attributeTypeMap = [
    {
        "name": "file",
        "baseName": "file",
        "type": "RequestFile"
    },
    {
        "name": "request",
        "baseName": "request",
        "type": "string"
    }
];
