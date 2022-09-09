/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error403ForbiddenListEmbeddedErrorsInner } from './error403ForbiddenListEmbeddedErrorsInner';

export class Error403ForbiddenListEmbedded {
    'errors'?: Array<Error403ForbiddenListEmbeddedErrorsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error403ForbiddenListEmbeddedErrorsInner>"
        }    ];

    static getAttributeTypeMap() {
        return Error403ForbiddenListEmbedded.attributeTypeMap;
    }
}

