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

import { RequestFile } from './models';

export class ListBalanceTransfersQueryParams {
    /**
    * The numbers of items to return.
    */
    'limit'?: number;
    /**
    * The number of items to skip before starting to collect the result set.
    */
    'offset'?: number;
    /**
    * The page number to list.
    */
    'pageNumber'?: number;
    /**
    * The size of the page.
    */
    'pageSize'?: number;
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
    * Filter by `idempotency_id`.
    */
    'idempotencyId'?: string;
    /**
    * Filter by an amount equal to the given value.
    */
    'amount'?: number;
    /**
    * Filter by the `Description` value .
    */
    'description'?: string;
    /**
    * Filter by the `Payment Instrument` saved in `Destination`.
    */
    'destination'?: string;
    /**
    * Filter by the value saved in `external_reference_id`.
    */
    'externalReferenceId'?: string;
    /**
    * Filter by the value saved in `reference_id`.
    */
    'referenceId'?: string;
    /**
    * Filter by the `Payment Instrument` saved in `source`.
    */
    'source'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number"
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
            "name": "idempotencyId",
            "baseName": "idempotency_id",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string"
        },
        {
            "name": "externalReferenceId",
            "baseName": "external_reference_id",
            "type": "string"
        },
        {
            "name": "referenceId",
            "baseName": "reference_id",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListBalanceTransfersQueryParams.attributeTypeMap;
    }
}

