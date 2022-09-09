/**
 * Finix API
 */

import { RequestFile } from './models';
import { Currency } from './currency';

export class CreateReversalRequest {
    /**
    * The amount of the refund in cents. It must be equal to or less than the amount of the original `Transfer`.
    */
    'refundAmount'?: number;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * The ID of the `Device` used to process the transaction.
    */
    'device'?: string;
    /**
    * The amount of the sale.
    */
    'amount'?: number;
    'currency'?: Currency;
    /**
    * Describes the operation to be performed in the transaction. Use **CARD_PRESENT_UNREFERENCED_REFUND** for refunds where the card isn\'t avalible.
    */
    'operationKey'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "refundAmount",
            "baseName": "refund_amount",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "operationKey",
            "baseName": "operation_key",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateReversalRequest.attributeTypeMap;
    }
}

