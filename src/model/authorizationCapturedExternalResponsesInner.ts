/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class AuthorizationCapturedExternalResponsesInner {
    'body'?: string;
    'contentType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationCapturedExternalResponsesInner.attributeTypeMap;
    }
}

