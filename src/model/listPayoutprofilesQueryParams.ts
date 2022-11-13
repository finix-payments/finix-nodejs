/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class ListPayoutprofilesQueryParams {
    /**
    * Return every resource created after the cursor value.
    */
    'afterCursor'?: string;
    /**
    * The numbers of items to return.
    */
    'limit'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "afterCursor",
            "baseName": "after_cursor",
            "type": "string"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ListPayoutprofilesQueryParams.attributeTypeMap;
    }
}

