/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';

export class Error402PaymentRequiredEmbeddedErrorsInnerLinks {
    'source'?: ApplicationLinksApplicationProfile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "source",
            "baseName": "source",
            "type": "ApplicationLinksApplicationProfile"
        }    ];

    static getAttributeTypeMap() {
        return Error402PaymentRequiredEmbeddedErrorsInnerLinks.attributeTypeMap;
    }
}

