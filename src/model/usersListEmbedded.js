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
exports.UsersListEmbedded = void 0;
class UsersListEmbedded {
    static getAttributeTypeMap() {
        return UsersListEmbedded.attributeTypeMap;
    }
}
exports.UsersListEmbedded = UsersListEmbedded;
UsersListEmbedded.discriminator = undefined;
UsersListEmbedded.attributeTypeMap = [
    {
        "name": "users",
        "baseName": "users",
        "type": "Set<User>"
    }
];
//# sourceMappingURL=usersListEmbedded.js.map