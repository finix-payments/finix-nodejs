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
exports.InputDetails = void 0;
class InputDetails {
    'inputText';
    'selection';
    'signatureData';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "inputText",
            "baseName": "input_text",
            "type": "string"
        },
        {
            "name": "selection",
            "baseName": "selection",
            "type": "number"
        },
        {
            "name": "signatureData",
            "baseName": "signature_data",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return InputDetails.attributeTypeMap;
    }
}
exports.InputDetails = InputDetails;
//# sourceMappingURL=inputDetails.js.map