/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the `Transfers` realted to the `Dispute`.
*/
export class DisputeLinksTransfer {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DisputeLinksTransfer.attributeTypeMap;
    }
}

