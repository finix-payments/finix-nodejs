/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Currency } from './currency';

export class CreateFeeRequest {
    /**
    * The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    */
    'amount': number;
    'currency': Currency;
    /**
    * Subtype of the fee. Set to **CUSTOM**.
    */
    'feeSubtype': CreateFeeRequest.FeeSubtypeEnum | string;
    /**
    * The type of the fee. Must be set to **CUSTOM**.
    */
    'feeType': CreateFeeRequest.FeeTypeEnum | string;
    /**
    * The display name of the `Fee` that can be used for filtering purposes.
    */
    'label'?: string;
    /**
    * ID of the linked resource
    */
    'linkedId'?: string;
    /**
    * The type of entity the fee is linked to (**null** by default).
    */
    'linkedType'?: CreateFeeRequest.LinkedTypeEnum | string;
    /**
    * The ID of the `Merchant` resource used to create the `Fee`.
    */
    'merchantId': string;
    /**
    * Delays in days, when the `Transfer` the `Fee` creates will be submitted for settlement.
    */
    'settlementDelayDays'?: number | null;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "feeSubtype",
            "baseName": "fee_subtype",
            "type": "CreateFeeRequest.FeeSubtypeEnum"
        },
        {
            "name": "feeType",
            "baseName": "fee_type",
            "type": "CreateFeeRequest.FeeTypeEnum"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "linkedId",
            "baseName": "linked_id",
            "type": "string"
        },
        {
            "name": "linkedType",
            "baseName": "linked_type",
            "type": "CreateFeeRequest.LinkedTypeEnum"
        },
        {
            "name": "merchantId",
            "baseName": "merchant_id",
            "type": "string"
        },
        {
            "name": "settlementDelayDays",
            "baseName": "settlement_delay_days",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateFeeRequest.attributeTypeMap;
    }
}

export namespace CreateFeeRequest {
    export enum FeeSubtypeEnum {
        Custom = <any> 'CUSTOM'
    }
    export enum FeeTypeEnum {
        Custom = <any> 'CUSTOM'
    }
    export enum LinkedTypeEnum {
        Application = <any> 'APPLICATION',
        Platform = <any> 'PLATFORM',
        Subscription = <any> 'SUBSCRIPTION',
        Transfer = <any> 'TRANSFER'
    }
}
