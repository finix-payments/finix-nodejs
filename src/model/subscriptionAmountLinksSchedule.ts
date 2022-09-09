/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `subscription_schedules` realted to the request.
*/
export class SubscriptionAmountLinksSchedule {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAmountLinksSchedule.attributeTypeMap;
    }
}

