/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* The control owner\'s date of birth. 
*/
export class CreateAssociatedIdentityRequestEntityDob {
    'day'?: number;
    'month'?: number;
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
        return CreateAssociatedIdentityRequestEntityDob.attributeTypeMap;
    }
}

