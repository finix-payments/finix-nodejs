/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error422InvalidFieldListEmbedded } from './error422InvalidFieldListEmbedded';

/**
* Invalid field
*/
export class Error422InvalidFieldList {
    'total'?: number;
    'embedded'?: Error422InvalidFieldListEmbedded;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "Error422InvalidFieldListEmbedded"
        }    ];

    static getAttributeTypeMap() {
        return Error422InvalidFieldList.attributeTypeMap;
    }
}

