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
export class ApplicationProfileLinks {
    'application'?: ApplicationProfileLinksApplication;
    'feeProfile'?: ApplicationLinksApplicationProfile;
    'riskProfile'?: ApplicationLinksApplicationProfile;
    'self'?: ApplicationLinksSelf;

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
            "name": "riskProfile",
            "baseName": "risk_profile",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationProfileLinks.attributeTypeMap;
    }
}

