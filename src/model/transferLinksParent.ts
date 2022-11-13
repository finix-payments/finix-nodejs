/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the original resource that was used in the request.
*/
export class TransferLinksParent {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferLinksParent.attributeTypeMap;
    }
}

