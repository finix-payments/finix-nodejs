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
exports.CreateWebhookRequest = void 0;
class CreateWebhookRequest {
    static getAttributeTypeMap() {
        return CreateWebhookRequest.attributeTypeMap;
    }
}
exports.CreateWebhookRequest = CreateWebhookRequest;
CreateWebhookRequest.discriminator = undefined;
CreateWebhookRequest.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean"
    }
];
//# sourceMappingURL=createWebhookRequest.js.map