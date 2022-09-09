/**
 * Finix API
 */

import { RequestFile } from './models';
import { Currency } from './currency';
import { DisputeLinks } from './disputeLinks';

/**
* A `Dispute` objected created for a chargeback or customer disputes.
*/
export class Dispute {
    /**
    * The ID of the `Dispute` resource.
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
    * The next `action` required to move forward with the `Dispute`.
    */
    'action'?: string | null;
    /**
    * The total amount of the `Dispute` (in cents).
    */
    'amount'?: number | null;
    /**
    * The ID of the `Application` resource the `Dispute` was created under.
    */
    'application'?: string;
    'currency'?: Currency;
    /**
    * Details about the `Dispute` recieved by the `Processor`. May be any type of data.
    */
    'disputeDetails'?: { [key: string]: any; };
    /**
    * The ID of the resource.
    */
    'identity'?: string | null;
    /**
    * Message field that provides additional details. This field is typically **null**.
    */
    'message'?: string | null;
    /**
    * Point in time when dispute occurred.
    */
    'occurredAt'?: Date | null;
    /**
    * The system-defined reason for the `Dispute`. Available values include:<ul><li>**INQUIRY**<li>**QUALITY**<li>**FRAUD**
    */
    'reason'?: Dispute.ReasonEnum | string;
    /**
    * Point in time when dispute has to be resolved and the `Merchant` needs to respond by.
    */
    'respondBy'?: Date | null;
    /**
    * The current state of the `Dispute`.
    */
    'state'?: Dispute.StateEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * ID of the `Transfer` resource.
    */
    'transfer'?: string;
    'links'?: DisputeLinks;

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
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "disputeDetails",
            "baseName": "dispute_details",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "occurredAt",
            "baseName": "occurred_at",
            "type": "Date"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "Dispute.ReasonEnum"
        },
        {
            "name": "respondBy",
            "baseName": "respond_by",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "Dispute.StateEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "transfer",
            "baseName": "transfer",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DisputeLinks"
        }    ];

    static getAttributeTypeMap() {
        return Dispute.attributeTypeMap;
    }
}

export namespace Dispute {
    export enum ReasonEnum {
        Clerical = <any> 'CLERICAL',
        Fraud = <any> 'FRAUD',
        Inquiry = <any> 'INQUIRY',
        Quality = <any> 'QUALITY',
        Technical = <any> 'TECHNICAL'
    }
    export enum StateEnum {
        Inquiry = <any> 'INQUIRY',
        Pending = <any> 'PENDING',
        Won = <any> 'WON',
        Lost = <any> 'LOST',
        Arbitration = <any> 'ARBITRATION'
    }
}
