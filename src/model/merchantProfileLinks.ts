/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { ApplicationProfileLinksApplication } from './applicationProfileLinksApplication';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class MerchantProfileLinks {
    'application'?: ApplicationProfileLinksApplication;
    'feeProfile'?: ApplicationLinksApplicationProfile;
    'ownerIdentity'?: ApplicationLinksApplicationProfile;
    'processors'?: ApplicationLinksApplicationProfile;
    'reserveProfile'?: ApplicationLinksApplicationProfile;
    'riskProfile'?: ApplicationLinksApplicationProfile;
    'self'?: ApplicationLinksSelf;
    'users'?: ApplicationLinksApplicationProfile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationProfileLinksApplication"
        },
        {
            "name": "feeProfile",
            "baseName": "fee_profile",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "ownerIdentity",
            "baseName": "owner_identity",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "processors",
            "baseName": "processors",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "reserveProfile",
            "baseName": "reserve_profile",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "riskProfile",
            "baseName": "risk_profile",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "ApplicationLinksApplicationProfile"
        }    ];

    static getAttributeTypeMap() {
        return MerchantProfileLinks.attributeTypeMap;
    }
}

