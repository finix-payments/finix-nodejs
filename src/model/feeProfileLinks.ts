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
export class FeeProfileLinks {
    'application'?: ApplicationProfileLinksApplication;
    'ownerIdentity'?: ApplicationLinksApplicationProfile;
    'processors'?: ApplicationLinksApplicationProfile;
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
        return FeeProfileLinks.attributeTypeMap;
    }
}

