/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Error402PaymentRequiredEmbeddedErrorsInnerLinks } from './error402PaymentRequiredEmbeddedErrorsInnerLinks';
import { LogRef } from './logRef';

export class Error403ForbiddenListEmbeddedErrorsInner {
    'code'?: Error403ForbiddenListEmbeddedErrorsInner.CodeEnum | string;
    'logref'?: LogRef;
    'message'?: string;
    'links'?: Error402PaymentRequiredEmbeddedErrorsInnerLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "Error403ForbiddenListEmbeddedErrorsInner.CodeEnum"
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
        return Error403ForbiddenListEmbeddedErrorsInner.attributeTypeMap;
    }
}

export namespace Error403ForbiddenListEmbeddedErrorsInner {
    export enum CodeEnum {
        Forbidden = <any> 'FORBIDDEN'
    }
}
