/**
 * Finix API
 */

import { RequestFile } from './models';
import { SubscriptionSchedule } from './subscriptionSchedule';

/**
* List of `subscription_schedule` objects.
*/
export class SubscriptionSchedulesListEmbedded {
    /**
    * `subscription_schedule` objects.
    */
    'subscriptionSchedules'?: Set<SubscriptionSchedule>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subscriptionSchedules",
            "baseName": "subscription_schedules",
            "type": "Set<SubscriptionSchedule>"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionSchedulesListEmbedded.attributeTypeMap;
    }
}

