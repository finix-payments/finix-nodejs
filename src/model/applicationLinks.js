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
exports.ApplicationLinks = void 0;
/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
class ApplicationLinks {
    'applicationProfile';
    'authorizations';
    'disputes';
    'identities';
    'merchants';
    'ownerIdentity';
    'paymentInstruments';
    'processors';
    'reversals';
    'self';
    'settlements';
    'tokens';
    'transfers';
    'users';
    'webhooks';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "applicationProfile",
            "baseName": "application_profile",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "authorizations",
            "baseName": "authorizations",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "disputes",
            "baseName": "disputes",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "identities",
            "baseName": "identities",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "merchants",
            "baseName": "merchants",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "ownerIdentity",
            "baseName": "owner_identity",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "paymentInstruments",
            "baseName": "payment_instruments",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "processors",
            "baseName": "processors",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "reversals",
            "baseName": "reversals",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "settlements",
            "baseName": "settlements",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "ApplicationLinksApplicationProfile"
        }
    ];
    static getAttributeTypeMap() {
        return ApplicationLinks.attributeTypeMap;
    }
}
exports.ApplicationLinks = ApplicationLinks;
