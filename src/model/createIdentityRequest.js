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
exports.CreateIdentityRequest = void 0;
/**
*
*/
class CreateIdentityRequest {
    'additionalUnderwritingData';
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags';
    'entity';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "additionalUnderwritingData",
            "baseName": "additional_underwriting_data",
            "type": "CreateIdentityRequestAdditionalUnderwritingData"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "CreateIdentityRequestEntity"
        }
    ];
    static getAttributeTypeMap() {
        return CreateIdentityRequest.attributeTypeMap;
    }
}
exports.CreateIdentityRequest = CreateIdentityRequest;
//# sourceMappingURL=createIdentityRequest.js.map