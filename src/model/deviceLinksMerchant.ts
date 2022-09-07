/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `Merhcant` resource that was used in the request.
*/
export class DeviceLinksMerchant {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DeviceLinksMerchant.attributeTypeMap;
    }
}

