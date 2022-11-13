/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Error422InvalidFieldListEmbeddedErrorsInner } from './error422InvalidFieldListEmbeddedErrorsInner';

export class Error422InvalidFieldListEmbedded {
    'errors'?: Array<Error422InvalidFieldListEmbeddedErrorsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error422InvalidFieldListEmbeddedErrorsInner>"
        }    ];

    static getAttributeTypeMap() {
        return Error422InvalidFieldListEmbedded.attributeTypeMap;
    }
}

