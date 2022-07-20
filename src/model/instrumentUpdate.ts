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
import { InstrumentUpdateLinks } from './instrumentUpdateLinks';

export class InstrumentUpdate {
    /**
    * The ID of the `instrument_updates` resource.
    */
    'id'?: string;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The `Merchant` ID associated with the `instrument_updates`.
    */
    'merchant'?: string;
    /**
    * The status of the `instrument_updates` resource and update request.
    */
    'state'?: string;
    /**
    * The id of the application.
    */
    'application'?: string;
    'messages'?: Array<string>;
    /**
    * Trace ID of the `Update`. The processor sends back the `trace_id` so you can track the update end-to-end.
    */
    'traceId'?: string;
    /**
    * The id of the payment instrument the update occured against.
    */
    'paymentInstrument'?: string;
    'links'?: InstrumentUpdateLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<string>"
        },
        {
            "name": "traceId",
            "baseName": "trace_id",
            "type": "string"
        },
        {
            "name": "paymentInstrument",
            "baseName": "payment_instrument",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "InstrumentUpdateLinks"
        }    ];

    static getAttributeTypeMap() {
        return InstrumentUpdate.attributeTypeMap;
    }
}

