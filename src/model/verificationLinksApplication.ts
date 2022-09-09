/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `Application` that was used in the request.
*/
export class VerificationLinksApplication {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return VerificationLinksApplication.attributeTypeMap;
    }
}

