/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class SubscriptionSchedulesListLinks {
    'self'?: ApplicationLinksApplicationProfile;
    'next'?: ApplicationLinksApplicationProfile;
    'last'?: ApplicationLinksApplicationProfile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self:",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "last",
            "baseName": "last",
            "type": "ApplicationLinksApplicationProfile"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionSchedulesListLinks.attributeTypeMap;
    }
}

