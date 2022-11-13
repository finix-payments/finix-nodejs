/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { CreateSubscriptionScheduleRequestFixedTimeIntervalOffset } from './createSubscriptionScheduleRequestFixedTimeIntervalOffset';
import { CreateSubscriptionScheduleRequestPeriodOffset } from './createSubscriptionScheduleRequestPeriodOffset';

/**
* 
*/
export class CreateSubscriptionScheduleRequest {
    'fixedTimeIntervalOffset'?: CreateSubscriptionScheduleRequestFixedTimeIntervalOffset | null;
    /**
    * Subscription Schedule type. For subscriptions, the type is **FEE**.
    */
    'lineItemType': CreateSubscriptionScheduleRequest.LineItemTypeEnum | string;
    /**
    * Human readable name.
    */
    'nickname': string;
    'periodOffset'?: CreateSubscriptionScheduleRequestPeriodOffset | null;
    /**
    * Specify the type of schedule: - **FIXED\\_TIME\\_INTERVAL**: Charges a Merchant on a fixed hourly interval. - **PERIODIC\\_MONTHLY**: Charges a Merchant once a month on a specific day. - **PERIODIC\\_YEARLY**: Charges a Merchant once a year on a specific day and month.
    */
    'subscriptionType': CreateSubscriptionScheduleRequest.SubscriptionTypeEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fixedTimeIntervalOffset",
            "baseName": "fixed_time_interval_offset",
            "type": "CreateSubscriptionScheduleRequestFixedTimeIntervalOffset"
        },
        {
            "name": "lineItemType",
            "baseName": "line_item_type",
            "type": "CreateSubscriptionScheduleRequest.LineItemTypeEnum"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "periodOffset",
            "baseName": "period_offset",
            "type": "CreateSubscriptionScheduleRequestPeriodOffset"
        },
        {
            "name": "subscriptionType",
            "baseName": "subscription_type",
            "type": "CreateSubscriptionScheduleRequest.SubscriptionTypeEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateSubscriptionScheduleRequest.attributeTypeMap;
    }
}

export namespace CreateSubscriptionScheduleRequest {
    export enum LineItemTypeEnum {
        Fee = <any> 'FEE'
    }
    export enum SubscriptionTypeEnum {
        FixedTimeInterval = <any> 'FIXED_TIME_INTERVAL',
        PeriodicMonthly = <any> 'PERIODIC_MONTHLY',
        PeriodicYearly = <any> 'PERIODIC_YEARLY'
    }
}
