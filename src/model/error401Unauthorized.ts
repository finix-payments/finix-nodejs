/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error401UnauthorizedEmbedded } from './error401UnauthorizedEmbedded';

export class Error401Unauthorized {
    'total'?: number;
    'embedded'?: Error401UnauthorizedEmbedded;

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
            "type": "Error401UnauthorizedEmbedded"
        }    ];

    static getAttributeTypeMap() {
        return Error401Unauthorized.attributeTypeMap;
    }
}

