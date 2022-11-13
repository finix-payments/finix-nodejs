/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Principal\'s date of birth.
*/
export class IdentityEntityFormDob {
    /**
    * Day of birth (between 1 and 31).
    */
    'day'?: number;
    /**
    * Month of birth (between 1 and 12).
    */
    'month'?: number;
    /**
    * Year of birth (4-digit).
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
        return IdentityEntityFormDob.attributeTypeMap;
    }
}

