/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `fee_profile` the request was made under.
*/
export class TransferLinksFeeProfile {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferLinksFeeProfile.attributeTypeMap;
    }
}

