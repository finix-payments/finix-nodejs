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
exports.WebhooksListEmbedded = void 0;
class WebhooksListEmbedded {
    static getAttributeTypeMap() {
        return WebhooksListEmbedded.attributeTypeMap;
    }
}
exports.WebhooksListEmbedded = WebhooksListEmbedded;
WebhooksListEmbedded.discriminator = undefined;
WebhooksListEmbedded.attributeTypeMap = [
    {
        "name": "webhooks",
        "baseName": "webhooks",
        "type": "Set<Webhook>"
    }
];
//# sourceMappingURL=webhooksListEmbedded.js.map