/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* The control owner\'s date of birth. 
*/
export class UpdateIdentityRequestEntityDob {
    'year'?: number;
    'day'?: number;
    'month'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "year",
            "baseName": "year",
            "type": "number"
        },
        {
            "name": "day",
            "baseName": "day",
            "type": "number"
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return UpdateIdentityRequestEntityDob.attributeTypeMap;
    }
}

