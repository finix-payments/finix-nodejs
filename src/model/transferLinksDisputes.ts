/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `Dispute` the request was made under.
*/
export class TransferLinksDisputes {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferLinksDisputes.attributeTypeMap;
    }
}

