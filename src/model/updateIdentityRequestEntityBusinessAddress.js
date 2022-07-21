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
exports.UpdateIdentityRequestEntityBusinessAddress = void 0;
/**
* The primary address for the legal entity.
*/
class UpdateIdentityRequestEntityBusinessAddress {
    static getAttributeTypeMap() {
        return UpdateIdentityRequestEntityBusinessAddress.attributeTypeMap;
    }
}
exports.UpdateIdentityRequestEntityBusinessAddress = UpdateIdentityRequestEntityBusinessAddress;
UpdateIdentityRequestEntityBusinessAddress.discriminator = undefined;
UpdateIdentityRequestEntityBusinessAddress.attributeTypeMap = [
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "line2",
        "baseName": "line2",
        "type": "string"
    },
    {
        "name": "line1",
        "baseName": "line1",
        "type": "string"
    },
    {
        "name": "postalCode",
        "baseName": "postal_code",
        "type": "string"
    }
];
//# sourceMappingURL=updateIdentityRequestEntityBusinessAddress.js.map