"use strict";
/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionScheduleRequest = void 0;
/**
*
*/
class CreateSubscriptionScheduleRequest {
    /**
    * Subscription Schedule type. For subscriptions, the type is **FEE**.
    */
    'lineItemType';
    /**
    * Human readable name.
    */
    'nickname';
    'fixedTimeIntervalOffset';
    'periodOffset';
    /**
    * Specify the type of schedule: - **FIXED\\_TIME\\_INTERVAL**: Charges a Merchant on a fixed hourly interval. - **PERIODIC\\_MONTHLY**: Charges a Merchant once a month on a specific day. - **PERIODIC\\_YEARLY**: Charges a Merchant once a year on a specific day and month.
    */
    'subscriptionType';
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags';
    static discriminator = undefined;
    static attributeTypeMap = [
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
            "name": "fixedTimeIntervalOffset",
            "baseName": "fixed_time_interval_offset",
            "type": "CreateSubscriptionScheduleRequestFixedTimeIntervalOffset"
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
        }
    ];
    static getAttributeTypeMap() {
        return CreateSubscriptionScheduleRequest.attributeTypeMap;
    }
}
exports.CreateSubscriptionScheduleRequest = CreateSubscriptionScheduleRequest;
(function (CreateSubscriptionScheduleRequest) {
    let LineItemTypeEnum;
    (function (LineItemTypeEnum) {
        LineItemTypeEnum[LineItemTypeEnum["Fee"] = 'FEE'] = "Fee";
    })(LineItemTypeEnum = CreateSubscriptionScheduleRequest.LineItemTypeEnum || (CreateSubscriptionScheduleRequest.LineItemTypeEnum = {}));
    let SubscriptionTypeEnum;
    (function (SubscriptionTypeEnum) {
        SubscriptionTypeEnum[SubscriptionTypeEnum["FixedTimeInterval"] = 'FIXED_TIME_INTERVAL'] = "FixedTimeInterval";
        SubscriptionTypeEnum[SubscriptionTypeEnum["PeriodicMonthly"] = 'PERIODIC_MONTHLY'] = "PeriodicMonthly";
        SubscriptionTypeEnum[SubscriptionTypeEnum["PeriodicYearly"] = 'PERIODIC_YEARLY'] = "PeriodicYearly";
    })(SubscriptionTypeEnum = CreateSubscriptionScheduleRequest.SubscriptionTypeEnum || (CreateSubscriptionScheduleRequest.SubscriptionTypeEnum = {}));
})(CreateSubscriptionScheduleRequest = exports.CreateSubscriptionScheduleRequest || (exports.CreateSubscriptionScheduleRequest = {}));
//# sourceMappingURL=createSubscriptionScheduleRequest.js.map