/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';
import { ApplicationLinksSelf } from './applicationLinksSelf';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class ApplicationProfilesListLinks {
    'first'?: ApplicationLinksApplicationProfile;
    'last'?: ApplicationLinksApplicationProfile;
    'next'?: ApplicationLinksApplicationProfile;
    'prev'?: ApplicationLinksApplicationProfile;
    'self'?: ApplicationLinksSelf;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "first",
            "baseName": "first",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "last",
            "baseName": "last",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "prev",
            "baseName": "prev",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationProfilesListLinks.attributeTypeMap;
    }
}

