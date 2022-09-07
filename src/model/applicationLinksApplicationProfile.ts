/**
 * Finix API
 */

import { RequestFile } from './models';

export class ApplicationLinksApplicationProfile {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationLinksApplicationProfile.attributeTypeMap;
    }
}

