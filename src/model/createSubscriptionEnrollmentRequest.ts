/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* 
*/
export class CreateSubscriptionEnrollmentRequest {
    /**
    * When the `subscription_enrollment` will end in **DateTime** format. If left **null**, the Fee will continue in perpetuity and won\'t end.
    */
    'endedAt'?: string | null;
    /**
    * ID of the `Merchant` resource.
    */
    'merchant': string;
    /**
    * Human readable name.
    */
    'nickname': string;
    /**
    * When the `subscription_enrollment` will begin in **DateTime** format. The start date must be a future date.
    */
    'startedAt': string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateSubscriptionEnrollmentRequest.attributeTypeMap;
    }
}

