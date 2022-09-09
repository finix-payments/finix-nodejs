/**
 * Finix API
 */

import { RequestFile } from './models';

export class ListIdentitiesQueryParams {
    /**
    * Specify key to be used for sorting the collection.
    */
    'sort'?: string;
    /**
    * Return every resource created after the cursor value.
    */
    'afterCursor'?: string;
    /**
    * The numbers of items to return.
    */
    'limit'?: number;
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
    * Filter by the `default_statement_descriptor`.
    */
    'defaultStatementDescriptor'?: string;
    /**
    * Filter by the full business name. Partial business names are not supported.
    */
    'businessName'?: string;
    /**
    * Filter by the business type. Partial business types are not supported.
    */
    'businessType'?: string;
    /**
    * Filter by the email address or email domain. Partial emails are not supported.
    */
    'email'?: string;
    /**
    * Filter by the first name of the person associated to the `Identity`.
    */
    'firstName'?: string;
    /**
    * Filter by the last name of the person associated to the `Identity`.
    */
    'lastName'?: string;
    /**
    * Filter by the title if available.
    */
    'title'?: string;
    /**
    * Return every resource created before the cursor value.
    */
    'beforeCursor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sort",
            "baseName": "sort",
            "type": "string"
        },
        {
            "name": "afterCursor",
            "baseName": "after_cursor",
            "type": "string"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
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
            "name": "defaultStatementDescriptor",
            "baseName": "default_statement_descriptor",
            "type": "string"
        },
        {
            "name": "businessName",
            "baseName": "business_name",
            "type": "string"
        },
        {
            "name": "businessType",
            "baseName": "business_type",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "beforeCursor",
            "baseName": "before_cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListIdentitiesQueryParams.attributeTypeMap;
    }
}

