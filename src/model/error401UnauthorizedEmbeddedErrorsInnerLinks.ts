/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';

export class Error401UnauthorizedEmbeddedErrorsInnerLinks {
    'self'?: ApplicationLinksApplicationProfile;
    'source'?: ApplicationLinksApplicationProfile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "ApplicationLinksApplicationProfile"
        }    ];

    static getAttributeTypeMap() {
        return Error401UnauthorizedEmbeddedErrorsInnerLinks.attributeTypeMap;
    }
}

