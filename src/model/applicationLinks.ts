/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';
import { ApplicationLinksSelf } from './applicationLinksSelf';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class ApplicationLinks {
    'applicationProfile'?: ApplicationLinksApplicationProfile;
    'authorizations'?: ApplicationLinksApplicationProfile;
    'disputes'?: ApplicationLinksApplicationProfile;
    'identities'?: ApplicationLinksApplicationProfile;
    'merchants'?: ApplicationLinksApplicationProfile;
    'ownerIdentity'?: ApplicationLinksApplicationProfile;
    'paymentInstruments'?: ApplicationLinksApplicationProfile;
    'processors'?: ApplicationLinksApplicationProfile;
    'reversals'?: ApplicationLinksApplicationProfile;
    'self'?: ApplicationLinksSelf;
    'settlements'?: ApplicationLinksApplicationProfile;
    'tokens'?: ApplicationLinksApplicationProfile;
    'transfers'?: ApplicationLinksApplicationProfile;
    'users'?: ApplicationLinksApplicationProfile;
    'webhooks'?: ApplicationLinksApplicationProfile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return ApplicationLinks.attributeTypeMap;
    }
}

