/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error401UnauthorizedEmbeddedErrorsInner } from './error401UnauthorizedEmbeddedErrorsInner';

export class Error401UnauthorizedEmbedded {
    'errors'?: Array<Error401UnauthorizedEmbeddedErrorsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error401UnauthorizedEmbeddedErrorsInner>"
        }    ];

    static getAttributeTypeMap() {
        return Error401UnauthorizedEmbedded.attributeTypeMap;
    }
}

