/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class ListTransferReversalsQueryParams {
    /**
    * The number of entries to return.
    */
    'limit'?: number;
    /**
    * Return every resource created after the cursor value.
    */
    'afterCursor'?: string;
    /**
    * Return every resource created before the cursor value.
    */
    'beforeCursor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "afterCursor",
            "baseName": "after_cursor",
            "type": "string"
        },
        {
            "name": "beforeCursor",
            "baseName": "before_cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListTransferReversalsQueryParams.attributeTypeMap;
    }
}

