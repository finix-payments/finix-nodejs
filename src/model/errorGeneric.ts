/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error403ForbiddenListEmbedded } from './error403ForbiddenListEmbedded';

export class ErrorGeneric {
    'total'?: number;
    'embedded'?: Error403ForbiddenListEmbedded;

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
            "type": "Error403ForbiddenListEmbedded"
        }    ];

    static getAttributeTypeMap() {
        return ErrorGeneric.attributeTypeMap;
    }
}

