/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { VerificationLinksApplication } from './verificationLinksApplication';
import { VerificationLinksMerchant } from './verificationLinksMerchant';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class VerificationLinks {
    'self'?: ApplicationLinksSelf;
    'merchant'?: VerificationLinksMerchant;
    'application'?: VerificationLinksApplication;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "VerificationLinksMerchant"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "VerificationLinksApplication"
        }    ];

    static getAttributeTypeMap() {
        return VerificationLinks.attributeTypeMap;
    }
}

