/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `Payment Instrument` where funds are getting sent.
*/
export class TransferLinksDestination {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferLinksDestination.attributeTypeMap;
    }
}

