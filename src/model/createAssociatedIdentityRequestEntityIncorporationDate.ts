/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* The date the company was founded and registered with the US.
*/
export class CreateAssociatedIdentityRequestEntityIncorporationDate {
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
        return CreateAssociatedIdentityRequestEntityIncorporationDate.attributeTypeMap;
    }
}

