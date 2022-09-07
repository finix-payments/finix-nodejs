/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error401UnauthorizedEmbeddedErrorsInnerLinks } from './error401UnauthorizedEmbeddedErrorsInnerLinks';
import { LogRef } from './logRef';

export class Error401UnauthorizedEmbeddedErrorsInner {
    'code'?: Error401UnauthorizedEmbeddedErrorsInner.CodeEnum | string;
    'logref'?: LogRef;
    'message'?: string;
    'links'?: Error401UnauthorizedEmbeddedErrorsInnerLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "Error401UnauthorizedEmbeddedErrorsInner.CodeEnum"
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
            "type": "Error401UnauthorizedEmbeddedErrorsInnerLinks"
        }    ];

    static getAttributeTypeMap() {
        return Error401UnauthorizedEmbeddedErrorsInner.attributeTypeMap;
    }
}

export namespace Error401UnauthorizedEmbeddedErrorsInner {
    export enum CodeEnum {
        Unknown = <any> 'UNKNOWN'
    }
}
