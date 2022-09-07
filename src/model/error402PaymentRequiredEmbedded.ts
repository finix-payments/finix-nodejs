/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error402PaymentRequiredEmbeddedErrorsInner } from './error402PaymentRequiredEmbeddedErrorsInner';

export class Error402PaymentRequiredEmbedded {
    'errors'?: Array<Error402PaymentRequiredEmbeddedErrorsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error402PaymentRequiredEmbeddedErrorsInner>"
        }    ];

    static getAttributeTypeMap() {
        return Error402PaymentRequiredEmbedded.attributeTypeMap;
    }
}

