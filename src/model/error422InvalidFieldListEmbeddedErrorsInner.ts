/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error402PaymentRequiredEmbeddedErrorsInnerLinks } from './error402PaymentRequiredEmbeddedErrorsInnerLinks';
import { LogRef } from './logRef';

export class Error422InvalidFieldListEmbeddedErrorsInner {
    'code'?: Error422InvalidFieldListEmbeddedErrorsInner.CodeEnum | string;
    'field'?: string;
    'logref'?: LogRef;
    'message'?: string;
    'links'?: Error402PaymentRequiredEmbeddedErrorsInnerLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "Error422InvalidFieldListEmbeddedErrorsInner.CodeEnum"
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "string"
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
        return Error422InvalidFieldListEmbeddedErrorsInner.attributeTypeMap;
    }
}

export namespace Error422InvalidFieldListEmbeddedErrorsInner {
    export enum CodeEnum {
        InvalidField = <any> 'INVALID_FIELD'
    }
}
