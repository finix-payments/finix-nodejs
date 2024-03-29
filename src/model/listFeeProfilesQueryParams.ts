/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class ListFeeProfilesQueryParams {
    /**
    * Return every resource created after the cursor value.
    */
    'afterCursor'?: string;
    /**
    * Return every resource created before the cursor value.
    */
    'beforeCursor'?: string;
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
            "name": "beforeCursor",
            "baseName": "before_cursor",
            "type": "string"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ListFeeProfilesQueryParams.attributeTypeMap;
    }
}

