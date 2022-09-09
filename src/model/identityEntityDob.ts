/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* The control owner\'s date of birth.
*/
export class IdentityEntityDob {
    /**
    * Day of birth (between 1 and 31).
    */
    'day'?: number;
    /**
    * Month of birth (between 1 and 12).
    */
    'month'?: number;
    /**
    * Year of birth (4-digit). Year must be greater than 1900.
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
        return IdentityEntityDob.attributeTypeMap;
    }
}

