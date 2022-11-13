/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class UpdateMerchantRequest {
    /**
    * Set to **true** to require the card\'s CVV code.
    */
    'cardCvvRequired'?: boolean;
    /**
    * Set to **true** to require the card\'s expiration date.
    */
    'cardExpirationDateRequired'?: boolean;
    /**
    * Set to **true** if you want to enable the `Merchant` to accept convenience fees and/or service fees.
    */
    'convenienceChargesEnabled'?: boolean;
    /**
    * Set to **true** to automatically create `Transfers` once settlement reports get generated.
    */
    'creatingTransferFromReportEnabled'?: boolean;
    /**
    * Details how the `Merchant` settles fees.
    */
    'feeReadyToSettleUpon'?: string;
    /**
    * Set to **true** to enable gross settlements.
    */
    'grossSettlementEnabled'?: boolean;
    /**
    * Set to **true** to enable the `Merchant` for Level 2 and Level 3 processing. Default value is **false**.
    */
    'levelTwoLevelThreeDataEnabled'?: boolean;
    /**
    * The legal name saved in the `Merchant` resource.
    */
    'merchantName'?: string;
    /**
    * Details if transaction processing is enabled for the `Merchant`.
    */
    'processingEnabled'?: boolean;
    /**
    * Details how `Authorizations` captured by the `Merchant` are settled.
    */
    'readyToSettleUpon'?: string;
    /**
    * Set to **true** if you want to enable a `Merchant` to accept rent charges.
    */
    'rentSurchargesEnabled'?: boolean;
    /**
    * Details if settlement processing is enabled for the `Merchant`.
    */
    'settlementEnabled'?: boolean;
    /**
    * Include addtional information (like the MID) when submitting funding `Tranfers` to processors.
    */
    'settlementFundingIdentifier'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardCvvRequired",
            "baseName": "card_cvv_required",
            "type": "boolean"
        },
        {
            "name": "cardExpirationDateRequired",
            "baseName": "card_expiration_date_required",
            "type": "boolean"
        },
        {
            "name": "convenienceChargesEnabled",
            "baseName": "convenience_charges_enabled",
            "type": "boolean"
        },
        {
            "name": "creatingTransferFromReportEnabled",
            "baseName": "creating_transfer_from_report_enabled",
            "type": "boolean"
        },
        {
            "name": "feeReadyToSettleUpon",
            "baseName": "fee_ready_to_settle_upon",
            "type": "string"
        },
        {
            "name": "grossSettlementEnabled",
            "baseName": "gross_settlement_enabled",
            "type": "boolean"
        },
        {
            "name": "levelTwoLevelThreeDataEnabled",
            "baseName": "level_two_level_three_data_enabled",
            "type": "boolean"
        },
        {
            "name": "merchantName",
            "baseName": "merchant_name",
            "type": "string"
        },
        {
            "name": "processingEnabled",
            "baseName": "processing_enabled",
            "type": "boolean"
        },
        {
            "name": "readyToSettleUpon",
            "baseName": "ready_to_settle_upon",
            "type": "string"
        },
        {
            "name": "rentSurchargesEnabled",
            "baseName": "rent_surcharges_enabled",
            "type": "boolean"
        },
        {
            "name": "settlementEnabled",
            "baseName": "settlement_enabled",
            "type": "boolean"
        },
        {
            "name": "settlementFundingIdentifier",
            "baseName": "settlement_funding_identifier",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return UpdateMerchantRequest.attributeTypeMap;
    }
}

