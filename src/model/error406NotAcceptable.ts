/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Error404NotFoundListEmbedded } from './error404NotFoundListEmbedded';

export class Error406NotAcceptable {
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
        return Error406NotAcceptable.attributeTypeMap;
    }
}

