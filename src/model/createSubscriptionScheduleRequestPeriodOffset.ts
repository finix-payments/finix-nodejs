/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Specifies when the Fee is charged. This field is null for **FIXED_TIME_INTERVAL** subscription schedules
*/
export class CreateSubscriptionScheduleRequestPeriodOffset {
    /**
    * Specifies the day when the Subscription Schedule starts.
    */
    'day'?: number;
    /**
    * Specifies the month when the Subscription Schedule starts. If the Subscription Schedule is **PERIODIC_MONTHLY**, the month field can be left null
    */
    'month'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "day",
            "baseName": "day",
            "type": "number"
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CreateSubscriptionScheduleRequestPeriodOffset.attributeTypeMap;
    }
}

