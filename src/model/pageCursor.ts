/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Details the page that\'s returned.
*/
export class PageCursor {
    /**
    * The number of entries to return.
    */
    'limit'?: number;
    /**
    * The cursor to use for the next page of results.
    */
    'nextCursor'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PageCursor.attributeTypeMap;
    }
}

