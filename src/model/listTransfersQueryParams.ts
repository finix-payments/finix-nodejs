/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class ListTransfersQueryParams {
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
    * Filter by an amount equal to the given value.
    */
    'amount'?: number;
    /**
    * Filter by an amount greater than or equal.
    */
    'amountGte'?: number;
    /**
    * Filter by an amount greater than.
    */
    'amountGt'?: number;
    /**
    * Filter by an amount less than or equal.
    */
    'amountLte'?: number;
    /**
    * Filter by an amount less than.
    */
    'amountLt'?: number;
    /**
    * Filter where `created_at` is after the given date.
    */
    'createdAtGte'?: string;
    /**
    * Filter where `created_at` is before the given date.
    */
    'createdAtLte'?: string;
    /**
    * Filter by `idempotency_id`.
    */
    'idempotencyId'?: string;
    /**
    * Filter by `id`.
    */
    'id'?: string;
    /**
    * Filter by Transaction state.
    */
    'state'?: string;
    /**
    * Filter by `ready_to_settle_at`.
    */
    'readyToSettleAtGte'?: string;
    /**
    * Filter by `ready_to_settle_at`.
    */
    'readyToSettleAtLte'?: string;
    /**
    * Filter by `statement_descriptor`.
    */
    'statementDescriptor'?: number;
    /**
    * Filter by `trace_id`.
    */
    'traceId'?: string;
    /**
    * Filter where `updated_at` is after the given date.
    */
    'updatedAtGte'?: string;
    /**
    * Filter where `updated_at` is before the given date.
    */
    'updatedAtLte'?: string;
    /**
    * Filter by Bank Identification Number (BIN). The BIN is the first 6 digits of the masked number.
    */
    'instrumentBin'?: string;
    /**
    * Filter Transactions by the last 4 digits of the bank account. The bank account last 4 are the last 4 digits of the masked number instrument_account_last4=9444 BIN.
    */
    'instrumentAccountLast4'?: string;
    /**
    * Filter by card brand. Available card brand types can be found in the drop-down.
    */
    'instrumentBrandType'?: string;
    /**
    * Filter by `Identity` ID.
    */
    'merchantIdentityId'?: string;
    /**
    * Filter Transactions by `Identity` name. The name is not case-sensitive.
    */
    'merchantIdentityName'?: string;
    /**
    * Filter Transactions by `Payment Instrument` name.
    */
    'instrumentName'?: string;
    /**
    * Filter Transactions by `Payment Instrument` type. Available instrument types include: Bank Account or Payment Card
    */
    'instrumentType'?: string;
    /**
    * Filter by `Merchant` ID.
    */
    'merchantId'?: string;
    /**
    * Filter by Merchant Identification Number (MID).
    */
    'merchantMid'?: string;
    /**
    * Filter by the payment card last 4 digits.
    */
    'instrumentCardLast4'?: string;
    /**
    * Filter by `Processor` ID.
    */
    'merchantProcessorId'?: string;
    /**
    * Filter by `Transfer` type. Available type filters include: All, Debits, Refunds, or Credits.
    */
    'type'?: string;
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
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountGte",
            "baseName": "amount.gte",
            "type": "number"
        },
        {
            "name": "amountGt",
            "baseName": "amount.gt",
            "type": "number"
        },
        {
            "name": "amountLte",
            "baseName": "amount.lte",
            "type": "number"
        },
        {
            "name": "amountLt",
            "baseName": "amount.lt",
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
            "name": "idempotencyId",
            "baseName": "idempotency_id",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "readyToSettleAtGte",
            "baseName": "ready_to_settle_at.gte",
            "type": "string"
        },
        {
            "name": "readyToSettleAtLte",
            "baseName": "ready_to_settle_at.lte",
            "type": "string"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "number"
        },
        {
            "name": "traceId",
            "baseName": "trace_id",
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
            "name": "instrumentBin",
            "baseName": "instrument_bin",
            "type": "string"
        },
        {
            "name": "instrumentAccountLast4",
            "baseName": "instrument_account_last4",
            "type": "string"
        },
        {
            "name": "instrumentBrandType",
            "baseName": "instrument_brand_type",
            "type": "string"
        },
        {
            "name": "merchantIdentityId",
            "baseName": "merchant_identity_id",
            "type": "string"
        },
        {
            "name": "merchantIdentityName",
            "baseName": "merchant_identity_name",
            "type": "string"
        },
        {
            "name": "instrumentName",
            "baseName": "instrument_name",
            "type": "string"
        },
        {
            "name": "instrumentType",
            "baseName": "instrument_type",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchant_id",
            "type": "string"
        },
        {
            "name": "merchantMid",
            "baseName": "merchant_mid",
            "type": "string"
        },
        {
            "name": "instrumentCardLast4",
            "baseName": "instrument_card_last4",
            "type": "string"
        },
        {
            "name": "merchantProcessorId",
            "baseName": "merchant_processor_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "beforeCursor",
            "baseName": "before_cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListTransfersQueryParams.attributeTypeMap;
    }
}

