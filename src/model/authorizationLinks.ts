/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { ApplicationProfileLinksApplication } from './applicationProfileLinksApplication';
import { AuthorizationLinksDevice } from './authorizationLinksDevice';
import { AuthorizationLinksMerchantIdentity } from './authorizationLinksMerchantIdentity';
import { AuthorizationLinksTransfer } from './authorizationLinksTransfer';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class AuthorizationLinks {
    'application'?: ApplicationProfileLinksApplication;
    'device'?: AuthorizationLinksDevice;
    'merchantIdentity'?: AuthorizationLinksMerchantIdentity;
    'self'?: ApplicationLinksSelf;
    'transfer'?: AuthorizationLinksTransfer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationProfileLinksApplication"
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "AuthorizationLinksDevice"
        },
        {
            "name": "merchantIdentity",
            "baseName": "merchant_identity",
            "type": "AuthorizationLinksMerchantIdentity"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "transfer",
            "baseName": "transfer",
            "type": "AuthorizationLinksTransfer"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationLinks.attributeTypeMap;
    }
}

