/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `Device` the request was made under.
*/
export class AuthorizationLinksDevice {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationLinksDevice.attributeTypeMap;
    }
}

