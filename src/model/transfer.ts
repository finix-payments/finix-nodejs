/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { AdditionalBuyerCharges } from './additionalBuyerCharges';
import { AdditionalHealthcareData } from './additionalHealthcareData';
import { CardPresentDetails } from './cardPresentDetails';
import { Currency } from './currency';
import { FeeType } from './feeType';
import { TransferLinks } from './transferLinks';

/**
* 
*/
export class Transfer {
    /**
    * The ID of the `Transfer` resource.
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
    'additionalBuyerCharges'?: AdditionalBuyerCharges | null;
    'additionalHealthcareData'?: AdditionalHealthcareData | null;
    /**
    * Details the results of the Address Verification checks.
    */
    'addressVerification'?: string | null;
    /**
    * The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    */
    'amount'?: number;
    /**
    * Details the `amount` that was requested to get debited from the `source` when the transaction was created.
    */
    'amountRequested'?: number;
    /**
    * The ID of the `Application` the `Transfer` was created under.
    */
    'application'?: string;
    'cardPresentDetails'?: CardPresentDetails | null;
    'currency'?: Currency;
    /**
    * The ID of the destination.
    */
    'destination'?: string | null;
    /**
    * The ID of the `Device` resource the `Transfer` was created under.
    */
    'device'?: string;
    /**
    * Details if the `Transfer` will be settled externally by card processors.
    */
    'externallyFunded'?: string;
    /**
    * The code of the failure so the decline can be handled programmatically. For more info on how to handle the failure, see [Failure Codes](/guides/developers/errors/#failure-codes).
    */
    'failureCode'?: string | null;
    /**
    * A human-readable description of why the transaction was declined. This will also include a suggestion on how to complete the payment.
    */
    'failureMessage'?: string | null;
    /**
    * The amount of the `Transfer` you\'d like to collect as your fee in cents. Defaults to zero (must be less than or equal to the `amount`).
    */
    'fee'?: number;
    'feeType'?: FeeType;
    /**
    * ID to [idempotently](/api/overview/#section/Idempotency-Requests) identifty the transfer.
    */
    'idempotencyId'?: string | null;
    /**
    * The ID of the `Merchant` the `Authorization` was created under.
    */
    'merchantIdentity'?: string;
    /**
    * Message field that provides additional details. This field is typically **null**.
    */
    'messages'?: Array<string> | null;
    /**
    * Raw response from the processor.
    */
    'raw'?: object | null;
    /**
    * Timestamp of when the `Transfer` is ready to be settled at.
    */
    'readyToSettleAt'?: Date | null;
    /**
    * Details the results of the Security Code Verification checks.
    */
    'securityCodeVerification'?: string | null;
    /**
    * The ID of the `Payment Instrument` that will be debited and performing the `Transfer`.
    */
    'source'?: string | null;
    /**
    * The stauts of the `Transfer`.
    */
    'state'?: Transfer.StateEnum | string;
    /**
    * <li>The description of the seller that appears on the buyer\'s bank or card statement.</li><li><kbd>statement_descriptors</kbd> for `Transfers` in <strong>live</strong> enviroments will have a <kbd>FI*</kbd> prefix.
    */
    'statementDescriptor'?: string | null;
    /**
    * Additional information describing the `payment_type`.
    */
    'subtype'?: Transfer.SubtypeEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Trace ID of the `Transfer`. The processor sends back the `trace_id` so you can track the `Transfer` end-to-end.
    */
    'traceId'?: string | null;
    /**
    * Type of `Transfer`.
    */
    'type'?: Transfer.TypeEnum | string;
    'links'?: TransferLinks;

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
            "name": "additionalBuyerCharges",
            "baseName": "additional_buyer_charges",
            "type": "AdditionalBuyerCharges"
        },
        {
            "name": "additionalHealthcareData",
            "baseName": "additional_healthcare_data",
            "type": "AdditionalHealthcareData"
        },
        {
            "name": "addressVerification",
            "baseName": "address_verification",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountRequested",
            "baseName": "amount_requested",
            "type": "number"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "cardPresentDetails",
            "baseName": "card_present_details",
            "type": "CardPresentDetails"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string"
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "string"
        },
        {
            "name": "externallyFunded",
            "baseName": "externally_funded",
            "type": "string"
        },
        {
            "name": "failureCode",
            "baseName": "failure_code",
            "type": "string"
        },
        {
            "name": "failureMessage",
            "baseName": "failure_message",
            "type": "string"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "feeType",
            "baseName": "fee_type",
            "type": "FeeType"
        },
        {
            "name": "idempotencyId",
            "baseName": "idempotency_id",
            "type": "string"
        },
        {
            "name": "merchantIdentity",
            "baseName": "merchant_identity",
            "type": "string"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<string>"
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "object"
        },
        {
            "name": "readyToSettleAt",
            "baseName": "ready_to_settle_at",
            "type": "Date"
        },
        {
            "name": "securityCodeVerification",
            "baseName": "security_code_verification",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "Transfer.StateEnum"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "subtype",
            "baseName": "subtype",
            "type": "Transfer.SubtypeEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "traceId",
            "baseName": "trace_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Transfer.TypeEnum"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "TransferLinks"
        }    ];

    static getAttributeTypeMap() {
        return Transfer.attributeTypeMap;
    }
}

export namespace Transfer {
    export enum StateEnum {
        Canceled = <any> 'CANCELED',
        Pending = <any> 'PENDING',
        Failed = <any> 'FAILED',
        Succeeded = <any> 'SUCCEEDED',
        Unknown = <any> 'UNKNOWN'
    }
    export enum SubtypeEnum {
        Api = <any> 'API',
        ApplicationFee = <any> 'APPLICATION_FEE',
        Dispute = <any> 'DISPUTE',
        MerchantCredit = <any> 'MERCHANT_CREDIT',
        MerchantCreditAdjustment = <any> 'MERCHANT_CREDIT_ADJUSTMENT',
        MerchantDebit = <any> 'MERCHANT_DEBIT',
        MerchantDebitAdjustment = <any> 'MERCHANT_DEBIT_ADJUSTMENT',
        PlatformCredit = <any> 'PLATFORM_CREDIT',
        PlatformCreditAdjustment = <any> 'PLATFORM_CREDIT_ADJUSTMENT',
        PlatformDebit = <any> 'PLATFORM_DEBIT',
        PlatformDebitAdjustment = <any> 'PLATFORM_DEBIT_ADJUSTMENT',
        PlatformFee = <any> 'PLATFORM_FEE',
        SettlementMerchant = <any> 'SETTLEMENT_MERCHANT',
        SettlementNoop = <any> 'SETTLEMENT_NOOP',
        SettlementPartner = <any> 'SETTLEMENT_PARTNER',
        SettlementPlatform = <any> 'SETTLEMENT_PLATFORM',
        SplitPayout = <any> 'SPLIT_PAYOUT',
        SplitPayoutAdjustment = <any> 'SPLIT_PAYOUT_ADJUSTMENT',
        System = <any> 'SYSTEM'
    }
    export enum TypeEnum {
        Debit = <any> 'DEBIT',
        Credit = <any> 'CREDIT',
        Reversal = <any> 'REVERSAL',
        Fee = <any> 'FEE',
        Adjustment = <any> 'ADJUSTMENT',
        Dispute = <any> 'DISPUTE',
        Reserve = <any> 'RESERVE',
        Settlement = <any> 'SETTLEMENT',
        Unknown = <any> 'UNKNOWN'
    }
}
