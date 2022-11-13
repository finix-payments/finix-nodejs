/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Specifies when the `Fee` is charged.
*/
export class SubscriptionScheduleFixedTimeIntervalOffset {
    /**
    * Hourly increments between recurring charges.
    */
    'hourlyInterval'?: number;
    /**
    * Number of recurring charges.
    */
    'intervalCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hourlyInterval",
            "baseName": "hourly_interval",
            "type": "number"
        },
        {
            "name": "intervalCount",
            "baseName": "interval_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionScheduleFixedTimeIntervalOffset.attributeTypeMap;
    }
}

