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
exports.Transfer = void 0;
/**
*
*/
class Transfer {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags';
    /**
    * Type of `Transfer`.
    */
    'type';
    /**
    * The ID of the `Transfer` resource.
    */
    'id';
    /**
    * Timestamp of when the object was created.
    */
    'createdAt';
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt';
    /**
    * The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    */
    'amount';
    /**
    * The ID of the resource.
    */
    'application';
    'cardPresentDetails';
    'currency';
    /**
    * The ID of the destination.
    */
    'destination';
    /**
    * The ID of the resource.
    */
    'device';
    /**
    * The amount of the `Transfer` you\'d like to collect as your fee in cents. Defaults to zero (must be less than or equal to the `amount`).
    */
    'fee';
    'feeType';
    /**
    * ID to [idempotently](#section/Idempotency-Requests) identifty the transfer.
    */
    'idempotencyId';
    /**
    * The ID of the identity.
    */
    'identity';
    /**
    * The ID of the resource.
    */
    'merchantIdentity';
    'messages';
    /**
    * Raw response from the processor
    */
    'raw';
    /**
    * Timestamp of when the `Transfer` is ready to be settled at.
    */
    'readyToSettleAt';
    /**
    * The ID of the resource.
    */
    'source';
    /**
    * The stauts of the `Transfer`.
    */
    'state';
    /**
    * The description of the merchant that appears on the buyer\'s bank or card statement.
    */
    'statementDescriptor';
    /**
    * Additional information describing the `payment_type`.
    */
    'subtype';
    /**
    * Trace ID of the `Transfer`. The processor sends back the `trace_id` so you can track the `transfer` end-to-end.
    */
    'traceId';
    /**
    * Details if the Transfer will be settled externally by card processors.
    */
    'externallyFunded';
    /**
    * The code of the failure so the decline can be handled programmatically. For more info on how to handle the failure, see [Failure Codes](/docs/guides/developers/errors/#failure-codes).
    */
    'failureCode';
    /**
    * A human-readable description of why the transaction was declined. This will also include a suggestion on how to complete the payment.
    */
    'failureMessage';
    'links';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Transfer.TypeEnum"
        },
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
            "name": "identity",
            "baseName": "identity",
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
            "name": "traceId",
            "baseName": "trace_id",
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
            "name": "links",
            "baseName": "_links",
            "type": "TransferLinks"
        }
    ];
    static getAttributeTypeMap() {
        return Transfer.attributeTypeMap;
    }
}
exports.Transfer = Transfer;
(function (Transfer) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Debit"] = 'DEBIT'] = "Debit";
        TypeEnum[TypeEnum["Credit"] = 'CREDIT'] = "Credit";
        TypeEnum[TypeEnum["Reversal"] = 'REVERSAL'] = "Reversal";
        TypeEnum[TypeEnum["Fee"] = 'FEE'] = "Fee";
        TypeEnum[TypeEnum["Adjustment"] = 'ADJUSTMENT'] = "Adjustment";
        TypeEnum[TypeEnum["Dispute"] = 'DISPUTE'] = "Dispute";
        TypeEnum[TypeEnum["Reserve"] = 'RESERVE'] = "Reserve";
        TypeEnum[TypeEnum["Settlement"] = 'SETTLEMENT'] = "Settlement";
        TypeEnum[TypeEnum["Unknown"] = 'UNKNOWN'] = "Unknown";
    })(TypeEnum = Transfer.TypeEnum || (Transfer.TypeEnum = {}));
    let StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Canceled"] = 'CANCELED'] = "Canceled";
        StateEnum[StateEnum["Pending"] = 'PENDING'] = "Pending";
        StateEnum[StateEnum["Failed"] = 'FAILED'] = "Failed";
        StateEnum[StateEnum["Succeeded"] = 'SUCCEEDED'] = "Succeeded";
        StateEnum[StateEnum["Unknown"] = 'UNKNOWN'] = "Unknown";
    })(StateEnum = Transfer.StateEnum || (Transfer.StateEnum = {}));
    let SubtypeEnum;
    (function (SubtypeEnum) {
        SubtypeEnum[SubtypeEnum["Api"] = 'API'] = "Api";
        SubtypeEnum[SubtypeEnum["ApplicationFee"] = 'APPLICATION_FEE'] = "ApplicationFee";
        SubtypeEnum[SubtypeEnum["Dispute"] = 'DISPUTE'] = "Dispute";
        SubtypeEnum[SubtypeEnum["MerchantCredit"] = 'MERCHANT_CREDIT'] = "MerchantCredit";
        SubtypeEnum[SubtypeEnum["MerchantCreditAdjustment"] = 'MERCHANT_CREDIT_ADJUSTMENT'] = "MerchantCreditAdjustment";
        SubtypeEnum[SubtypeEnum["MerchantDebit"] = 'MERCHANT_DEBIT'] = "MerchantDebit";
        SubtypeEnum[SubtypeEnum["MerchantDebitAdjustment"] = 'MERCHANT_DEBIT_ADJUSTMENT'] = "MerchantDebitAdjustment";
        SubtypeEnum[SubtypeEnum["PlatformCredit"] = 'PLATFORM_CREDIT'] = "PlatformCredit";
        SubtypeEnum[SubtypeEnum["PlatformCreditAdjustment"] = 'PLATFORM_CREDIT_ADJUSTMENT'] = "PlatformCreditAdjustment";
        SubtypeEnum[SubtypeEnum["PlatformDebit"] = 'PLATFORM_DEBIT'] = "PlatformDebit";
        SubtypeEnum[SubtypeEnum["PlatformDebitAdjustment"] = 'PLATFORM_DEBIT_ADJUSTMENT'] = "PlatformDebitAdjustment";
        SubtypeEnum[SubtypeEnum["PlatformFee"] = 'PLATFORM_FEE'] = "PlatformFee";
        SubtypeEnum[SubtypeEnum["SettlementMerchant"] = 'SETTLEMENT_MERCHANT'] = "SettlementMerchant";
        SubtypeEnum[SubtypeEnum["SettlementNoop"] = 'SETTLEMENT_NOOP'] = "SettlementNoop";
        SubtypeEnum[SubtypeEnum["SettlementPartner"] = 'SETTLEMENT_PARTNER'] = "SettlementPartner";
        SubtypeEnum[SubtypeEnum["SettlementPlatform"] = 'SETTLEMENT_PLATFORM'] = "SettlementPlatform";
        SubtypeEnum[SubtypeEnum["SplitPayout"] = 'SPLIT_PAYOUT'] = "SplitPayout";
        SubtypeEnum[SubtypeEnum["SplitPayoutAdjustment"] = 'SPLIT_PAYOUT_ADJUSTMENT'] = "SplitPayoutAdjustment";
        SubtypeEnum[SubtypeEnum["System"] = 'SYSTEM'] = "System";
    })(SubtypeEnum = Transfer.SubtypeEnum || (Transfer.SubtypeEnum = {}));
})(Transfer = exports.Transfer || (exports.Transfer = {}));
