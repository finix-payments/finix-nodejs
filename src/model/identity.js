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
exports.Identity = void 0;
/**
*
*/
class Identity {
    static getAttributeTypeMap() {
        return Identity.attributeTypeMap;
    }
}
exports.Identity = Identity;
Identity.discriminator = undefined;
Identity.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "application",
        "baseName": "application",
        "type": "string"
    },
    {
        "name": "entity",
        "baseName": "entity",
        "type": "IdentityEntity"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "string"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "string"
    },
    {
        "name": "additionalUnderwritingData",
        "baseName": "additional_underwriting_data",
        "type": "IdentityAdditionalUnderwritingData"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "IdentityLinks"
    }
];
//# sourceMappingURL=identity.js.map