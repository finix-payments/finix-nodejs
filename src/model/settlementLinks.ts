/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { ApplicationProfileLinksApplication } from './applicationProfileLinksApplication';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class SettlementLinks {
    'application'?: ApplicationProfileLinksApplication;
    'credits'?: ApplicationLinksApplicationProfile;
    'debits'?: ApplicationLinksApplicationProfile;
    'disputes'?: ApplicationLinksApplicationProfile;
    'fees'?: ApplicationLinksApplicationProfile;
    'fundingTransfers'?: ApplicationLinksApplicationProfile;
    'identity'?: ApplicationLinksApplicationProfile;
    'reversals'?: ApplicationLinksApplicationProfile;
    'self'?: ApplicationLinksSelf;
    'transfers'?: ApplicationLinksApplicationProfile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationProfileLinksApplication"
        },
        {
            "name": "credits",
            "baseName": "credits",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "debits",
            "baseName": "debits",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "disputes",
            "baseName": "disputes",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "fundingTransfers",
            "baseName": "funding_transfers",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "identity",
            "baseName": "identity",
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
            "name": "transfers",
            "baseName": "transfers",
            "type": "ApplicationLinksApplicationProfile"
        }    ];

    static getAttributeTypeMap() {
        return SettlementLinks.attributeTypeMap;
    }
}

