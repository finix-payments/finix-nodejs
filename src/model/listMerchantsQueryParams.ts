/**
 * Finix API
 */

import { RequestFile } from './models';

export class ListMerchantsQueryParams {
    /**
    * Filter by `id`.
    */
    'id'?: string;
    /**
    * Filter where `created_at` is after the given date.
    */
    'createdAtGte'?: string;
    /**
    * Filter where `created_at` is before the given date.
    */
    'createdAtLte'?: string;
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
    /**
    * Specify key to be used for sorting the collection.
    */
    'sort'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAtGte",
            "baseName": "created_at.gte",
            "type": "string"
        },
        {
            "name": "createdAtLte",
            "baseName": "created_at.lte",
            "type": "string"
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
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListMerchantsQueryParams.attributeTypeMap;
    }
}

