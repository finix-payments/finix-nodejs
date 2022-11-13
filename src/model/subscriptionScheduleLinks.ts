/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { IdentityLinksSelf } from './identityLinksSelf';
import { SubscriptionScheduleLinksAmounts } from './subscriptionScheduleLinksAmounts';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class SubscriptionScheduleLinks {
    'self'?: IdentityLinksSelf;
    'amounts'?: SubscriptionScheduleLinksAmounts;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "IdentityLinksSelf"
        },
        {
            "name": "amounts",
            "baseName": "amounts",
            "type": "SubscriptionScheduleLinksAmounts"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionScheduleLinks.attributeTypeMap;
    }
}

