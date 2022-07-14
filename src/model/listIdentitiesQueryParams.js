"use strict";
/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListIdentitiesQueryParams = void 0;
class ListIdentitiesQueryParams {
    /**
    * Specify key to be used for sorting the collection
    */
    'sort';
    /**
    * Return every resource created after the cursor value.
    */
    'afterCursor';
    /**
    * The numbers of items to return
    */
    'limit';
    /**
    * Filter by id
    */
    'id';
    /**
    * Filter where created_at is after the given date.
    */
    'createdAtGte';
    /**
    * Filter where created_at is before the given date.
    */
    'createdAtLte';
    /**
    * Filter by the default_statement_descriptor
    */
    'defaultStatementDescriptor';
    /**
    * Filter by the full business name. Partial business names are not supported.
    */
    'businessName';
    /**
    * Filter by the business type. Partial business types are not supported
    */
    'businessType';
    /**
    * Filter by the email address or email domain. Partial emails are not supported.
    */
    'email';
    /**
    * Filter by the first name of the person associated to the Identity.
    */
    'firstName';
    /**
    * Filter by the last name of the person associated to the identity.
    */
    'lastName';
    /**
    * Filter by the title if available.
    */
    'title';
    /**
    * Return every resource created before the cursor value.
    */
    'beforeCursor';
    static discriminator = undefined;
    static attributeTypeMap = [
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
        }
    ];
    static getAttributeTypeMap() {
        return ListIdentitiesQueryParams.attributeTypeMap;
    }
}
exports.ListIdentitiesQueryParams = ListIdentitiesQueryParams;
