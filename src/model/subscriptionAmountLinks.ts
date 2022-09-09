/**
 * Finix API
 */

import { RequestFile } from './models';
import { IdentityLinksSelf } from './identityLinksSelf';
import { SubscriptionAmountLinksSchedule } from './subscriptionAmountLinksSchedule';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class SubscriptionAmountLinks {
    'self'?: IdentityLinksSelf;
    'schedule'?: SubscriptionAmountLinksSchedule;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "IdentityLinksSelf"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "SubscriptionAmountLinksSchedule"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAmountLinks.attributeTypeMap;
    }
}

