/**
 * Finix API
 */

import { RequestFile } from './models';
import { Error402PaymentRequiredEmbeddedErrorsInnerLinks } from './error402PaymentRequiredEmbeddedErrorsInnerLinks';
import { LogRef } from './logRef';

export class Error402PaymentRequiredEmbeddedErrorsInner {
    'code'?: Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum | string;
    'logref'?: LogRef;
    'message'?: Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum | string;
    'links'?: Error402PaymentRequiredEmbeddedErrorsInnerLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum"
        },
        {
            "name": "logref",
            "baseName": "logref",
            "type": "LogRef"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "Error402PaymentRequiredEmbeddedErrorsInnerLinks"
        }    ];

    static getAttributeTypeMap() {
        return Error402PaymentRequiredEmbeddedErrorsInner.attributeTypeMap;
    }
}

export namespace Error402PaymentRequiredEmbeddedErrorsInner {
    export enum CodeEnum {
        CallIssuer = <any> 'CALL_ISSUER'
    }
    export enum MessageEnum {
        PleaseContactCardIssuerForMoreInformation = <any> 'Please contact card issuer for more information.'
    }
}
