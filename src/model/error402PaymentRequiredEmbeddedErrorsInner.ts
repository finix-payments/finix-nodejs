/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Error402PaymentRequiredEmbeddedErrorsInnerLinks } from './error402PaymentRequiredEmbeddedErrorsInnerLinks';
import { LogRef } from './logRef';

export class Error402PaymentRequiredEmbeddedErrorsInner {
    'code'?: Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum;
    'logref'?: LogRef;
    'message'?: Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum;
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
