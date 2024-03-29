/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { SubscriptionScheduleFixedTimeIntervalOffset } from './subscriptionScheduleFixedTimeIntervalOffset';
import { SubscriptionScheduleLinks } from './subscriptionScheduleLinks';
import { SubscriptionSchedulePeriodOffset } from './subscriptionSchedulePeriodOffset';

/**
* 
*/
export class SubscriptionSchedule {
    /**
    * ID of the `Subscription Schedule`.
    */
    'id'?: string;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * `User` ID who created the schedule.
    */
    'createdBy'?: string;
    'fixedTimeIntervalOffset'?: SubscriptionScheduleFixedTimeIntervalOffset | null;
    /**
    * `Subscription Schedule` type. For subscriptions, the type is **FEE**.
    */
    'lineItemType'?: SubscriptionSchedule.LineItemTypeEnum | string;
    /**
    * Human readable name.
    */
    'nickname'?: string;
    'periodOffset'?: SubscriptionSchedulePeriodOffset | null;
    /**
    * `Subscription Schedule` type.
    */
    'subscriptionType'?: SubscriptionSchedule.SubscriptionTypeEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    'links'?: SubscriptionScheduleLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "string"
        },
        {
            "name": "fixedTimeIntervalOffset",
            "baseName": "fixed_time_interval_offset",
            "type": "SubscriptionScheduleFixedTimeIntervalOffset"
        },
        {
            "name": "lineItemType",
            "baseName": "line_item_type",
            "type": "SubscriptionSchedule.LineItemTypeEnum"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "periodOffset",
            "baseName": "period_offset",
            "type": "SubscriptionSchedulePeriodOffset"
        },
        {
            "name": "subscriptionType",
            "baseName": "subscription_type",
            "type": "SubscriptionSchedule.SubscriptionTypeEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "SubscriptionScheduleLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionSchedule.attributeTypeMap;
    }
}

export namespace SubscriptionSchedule {
    export enum LineItemTypeEnum {
        Fee = <any> 'FEE'
    }
    export enum SubscriptionTypeEnum {
        PeriodicMonthly = <any> 'PERIODIC_MONTHLY',
        PeriodicYearly = <any> 'PERIODIC_YEARLY',
        FixedTimeInterval = <any> 'FIXED_TIME_INTERVAL'
    }
}
