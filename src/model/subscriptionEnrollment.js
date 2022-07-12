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
exports.SubscriptionEnrollment = void 0;
/**
*
*/
class SubscriptionEnrollment {
    /**
    * ID of the `subscription_enrollment`.
    */
    'id';
    /**
    * Timestamp of when the object was created.
    */
    'createdAt';
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt';
    /**
    * ID of the `User` who created the `subscription_enrollment`.
    */
    'createdBy';
    /**
    * When the `subscription_enrollment` will end in **DateTime** format.
    */
    'endedAt';
    /**
    * ID of the `Merchant` resource.
    */
    'merchant';
    /**
    * Human readable name.
    */
    'nickname';
    /**
    * When the `subscription_enrollment` will begin in **DateTime** format.
    */
    'startedAt';
    /**
    * ID of the `Subscription Schedule`.
    */
    'subscriptionSchedule';
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags';
    'links';
    static discriminator = undefined;
    static attributeTypeMap = [
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
            "name": "endedAt",
            "baseName": "ended_at",
            "type": "string"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "startedAt",
            "baseName": "started_at",
            "type": "string"
        },
        {
            "name": "subscriptionSchedule",
            "baseName": "subscription_schedule",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "SubscriptionEnrollmentLinks"
        }
    ];
    static getAttributeTypeMap() {
        return SubscriptionEnrollment.attributeTypeMap;
    }
}
exports.SubscriptionEnrollment = SubscriptionEnrollment;
