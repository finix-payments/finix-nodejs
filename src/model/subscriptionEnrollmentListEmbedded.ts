/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { SubscriptionEnrollment } from './subscriptionEnrollment';

/**
* List of `Subscription Enrollment` resources.
*/
export class SubscriptionEnrollmentListEmbedded {
    /**
    * `Subscription Enrollment` resources.
    */
    'subscriptionEnrollments'?: Set<SubscriptionEnrollment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subscriptionEnrollments",
            "baseName": "subscription_enrollments",
            "type": "Set<SubscriptionEnrollment>"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionEnrollmentListEmbedded.attributeTypeMap;
    }
}

