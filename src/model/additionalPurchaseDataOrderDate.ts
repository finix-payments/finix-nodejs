/**
 * Finix API
 */

import { RequestFile } from './models';

export class AdditionalPurchaseDataOrderDate {
    /**
    * Day of purchase (between 1 and 31)
    */
    'day'?: number;
    /**
    * Month of purchase (between 1 and 12)
    */
    'month'?: number;
    /**
    * Year of purchase (4-digit)
    */
    'year'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "day",
            "baseName": "day",
            "type": "number"
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "number"
        },
        {
            "name": "year",
            "baseName": "year",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalPurchaseDataOrderDate.attributeTypeMap;
    }
}

