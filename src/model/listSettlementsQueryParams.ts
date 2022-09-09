/**
 * Finix API
 */

import { RequestFile } from './models';

export class ListSettlementsQueryParams {
    /**
    * Filter where `created_at` is after the given date.
    */
    'createdAtGte'?: string;
    /**
    * Filter where `created_at` is before the given date.
    */
    'createdAtLte'?: string;
    /**
    * Filter where `updated_at` is after the given date.
    */
    'updatedAtGte'?: string;
    /**
    * Filter where `updated_at` is before the given date.
    */
    'updatedAtLte'?: string;
    /**
    * Filter by `id`.
    */
    'id'?: string;
    /**
    * The numbers of items to return.
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
            "name": "updatedAtGte",
            "baseName": "updated_at.gte",
            "type": "string"
        },
        {
            "name": "updatedAtLte",
            "baseName": "updated_at.lte",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
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
        return ListSettlementsQueryParams.attributeTypeMap;
    }
}

