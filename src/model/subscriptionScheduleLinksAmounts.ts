/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `subscription_amounts` related to the request.
*/
export class SubscriptionScheduleLinksAmounts {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionScheduleLinksAmounts.attributeTypeMap;
    }
}

