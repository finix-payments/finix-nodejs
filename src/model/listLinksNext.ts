/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the next page of entries.
*/
export class ListLinksNext {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListLinksNext.attributeTypeMap;
    }
}

