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
exports.IdentityLinksApplication = void 0;
/**
* Link to the `Application` the request was made under.
*/
class IdentityLinksApplication {
    'href';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return IdentityLinksApplication.attributeTypeMap;
    }
}
exports.IdentityLinksApplication = IdentityLinksApplication;
//# sourceMappingURL=identityLinksApplication.js.map