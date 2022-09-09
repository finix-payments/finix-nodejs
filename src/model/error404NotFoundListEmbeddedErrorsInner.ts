/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error402PaymentRequiredEmbeddedErrorsInnerLinks } from './error402PaymentRequiredEmbeddedErrorsInnerLinks';
import { LogRef } from './logRef';

export class Error404NotFoundListEmbeddedErrorsInner {
    'code'?: Error404NotFoundListEmbeddedErrorsInner.CodeEnum | string;
    'logref'?: LogRef;
    'message'?: string;
    'links'?: Error402PaymentRequiredEmbeddedErrorsInnerLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "Error404NotFoundListEmbeddedErrorsInner.CodeEnum"
        },
        {
            "name": "logref",
            "baseName": "logref",
            "type": "LogRef"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "Error402PaymentRequiredEmbeddedErrorsInnerLinks"
        }    ];

    static getAttributeTypeMap() {
        return Error404NotFoundListEmbeddedErrorsInner.attributeTypeMap;
    }
}

export namespace Error404NotFoundListEmbeddedErrorsInner {
    export enum CodeEnum {
        NotFound = <any> 'NOT_FOUND'
    }
}
