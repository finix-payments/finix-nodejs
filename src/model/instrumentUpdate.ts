/**
 * Finix API
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
    * A randomly generated value that will be associated with this `instrument_update` resource.
    */
    'idempotencyId'?: string;
    /**
    * The `Merchant` ID associated with the `instrument_updates`.
    */
    'merchant'?: string;
    /**
    * The status of the `instrument_updates` resource and update request.
    */
    'state'?: string;
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
            "name": "idempotencyId",
            "baseName": "idempotency_id",
            "type": "string"
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
            "name": "links",
            "baseName": "_links",
            "type": "InstrumentUpdateLinks"
        }    ];

    static getAttributeTypeMap() {
        return InstrumentUpdate.attributeTypeMap;
    }
}

