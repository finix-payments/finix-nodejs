/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { MerchantLinksApplication } from './merchantLinksApplication';
import { MerchantLinksIdentity } from './merchantLinksIdentity';
import { MerchantLinksMerchantProfile } from './merchantLinksMerchantProfile';
import { MerchantLinksVerification } from './merchantLinksVerification';
import { MerchantLinksVerifications } from './merchantLinksVerifications';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class MerchantLinks {
    'self'?: ApplicationLinksSelf;
    'identity'?: MerchantLinksIdentity;
    'verifications'?: MerchantLinksVerifications;
    'merchantProfile'?: MerchantLinksMerchantProfile;
    'application'?: MerchantLinksApplication;
    'verification'?: MerchantLinksVerification;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "MerchantLinksIdentity"
        },
        {
            "name": "verifications",
            "baseName": "verifications",
            "type": "MerchantLinksVerifications"
        },
        {
            "name": "merchantProfile",
            "baseName": "merchant_profile",
            "type": "MerchantLinksMerchantProfile"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "MerchantLinksApplication"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "MerchantLinksVerification"
        }    ];

    static getAttributeTypeMap() {
        return MerchantLinks.attributeTypeMap;
    }
}

