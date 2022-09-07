/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error404NotFoundListEmbeddedErrorsInner } from './error404NotFoundListEmbeddedErrorsInner';

export class Error404NotFoundListEmbedded {
    'errors'?: Array<Error404NotFoundListEmbeddedErrorsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error404NotFoundListEmbeddedErrorsInner>"
        }    ];

    static getAttributeTypeMap() {
        return Error404NotFoundListEmbedded.attributeTypeMap;
    }
}

