/**
 * Finix API
 */

import { RequestFile } from './models';
import { SubscriptionEnrollmentLinks } from './subscriptionEnrollmentLinks';

/**
* 
*/
export class SubscriptionEnrollment {
    /**
    * ID of the `subscription_enrollment`.
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
    * ID of the `User` who created the `subscription_enrollment`.
    */
    'createdBy'?: string;
    /**
    * When the `subscription_enrollment` will end in **DateTime** format.
    */
    'endedAt'?: string | null;
    /**
    * ID of the `Merchant` resource.
    */
    'merchant'?: string;
    /**
    * Human readable name.
    */
    'nickname'?: string;
    /**
    * When the `subscription_enrollment` will begin in **DateTime** format.
    */
    'startedAt'?: string;
    /**
    * ID of the `Subscription Schedule`.
    */
    'subscriptionSchedule'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    'links'?: SubscriptionEnrollmentLinks;

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
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionEnrollment.attributeTypeMap;
    }
}

