/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the `subscription_schedules` used in the request.
*/
export class SubscriptionEnrollmentLinksSchedule {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionEnrollmentLinksSchedule.attributeTypeMap;
    }
}

