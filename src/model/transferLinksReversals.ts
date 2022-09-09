/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `reversals` associated with the `Transfer`.
*/
export class TransferLinksReversals {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferLinksReversals.attributeTypeMap;
    }
}

