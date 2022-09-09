/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `Transfers` realted to the `Authorization`.
*/
export class AuthorizationLinksTransfer {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationLinksTransfer.attributeTypeMap;
    }
}

