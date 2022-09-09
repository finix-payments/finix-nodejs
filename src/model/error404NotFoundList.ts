/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error404NotFoundListEmbedded } from './error404NotFoundListEmbedded';

export class Error404NotFoundList {
    'total'?: number;
    'embedded'?: Error404NotFoundListEmbedded;

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
            "type": "Error404NotFoundListEmbedded"
        }    ];

    static getAttributeTypeMap() {
        return Error404NotFoundList.attributeTypeMap;
    }
}

