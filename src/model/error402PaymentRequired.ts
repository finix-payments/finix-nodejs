/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error402PaymentRequiredEmbedded } from './error402PaymentRequiredEmbedded';

export class Error402PaymentRequired {
    'total'?: number;
    'embedded'?: Error402PaymentRequiredEmbedded;

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
            "type": "Error402PaymentRequiredEmbedded"
        }    ];

    static getAttributeTypeMap() {
        return Error402PaymentRequired.attributeTypeMap;
    }
}

