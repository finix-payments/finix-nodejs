/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* The date the company was founded and registered.
*/
export class IdentityEntityFormIncorporationDate {
    /**
    * Day business was incorporated (between 1 and 31).
    */
    'day'?: number;
    /**
    * Month business was incorporated (between 1 and 12).
    */
    'month'?: number;
    /**
    * Year business was incorporated (4-digit).
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
        return IdentityEntityFormIncorporationDate.attributeTypeMap;
    }
}

