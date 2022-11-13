/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { IdentityLinksSelf } from './identityLinksSelf';
import { SubscriptionEnrollmentLinksAmounts } from './subscriptionEnrollmentLinksAmounts';
import { SubscriptionEnrollmentLinksMerchant } from './subscriptionEnrollmentLinksMerchant';
import { SubscriptionEnrollmentLinksSchedule } from './subscriptionEnrollmentLinksSchedule';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class SubscriptionEnrollmentLinks {
    'self'?: IdentityLinksSelf;
    'merchant'?: SubscriptionEnrollmentLinksMerchant;
    'schedule'?: SubscriptionEnrollmentLinksSchedule;
    'amounts'?: SubscriptionEnrollmentLinksAmounts;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "IdentityLinksSelf"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "SubscriptionEnrollmentLinksMerchant"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "SubscriptionEnrollmentLinksSchedule"
        },
        {
            "name": "amounts",
            "baseName": "amounts",
            "type": "SubscriptionEnrollmentLinksAmounts"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionEnrollmentLinks.attributeTypeMap;
    }
}

