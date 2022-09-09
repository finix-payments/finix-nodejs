/**
 * Finix API
 */

import { RequestFile } from './models';
import { MerchantLinks } from './merchantLinks';
import { MerchantProcessorDetails } from './merchantProcessorDetails';

export class Merchant {
    /**
    * The ID of the resource.
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
    * ID of the `Application` the `Merchant` was created under.
    */
    'application'?: string;
    /**
    * Set to **true** to require the card\'s CVV code.
    */
    'cardCvvRequired'?: boolean;
    /**
    * Set to **true** to require the card\'s expiration date.
    */
    'cardExpirationDateRequired'?: boolean;
    /**
    * Set to **true** to automatically create `Transfers` once settlement reports get generated.
    */
    'creatingTransferFromReportEnabled'?: boolean;
    /**
    * Set to **true** if you want to enable the `Merchant` to accept convenience fees and/or service fees.
    */
    'convenienceChargesEnabled'?: boolean;
    /**
    * Details how the `Merchant` settles fees.
    */
    'feeReadyToSettleUpon'?: string;
    /**
    * Set to **true** to enable gross settlements.
    */
    'grossSettlementEnabled'?: boolean;
    /**
    * The ID of the `Identity` resource associated with the `Merchant`.
    */
    'identity'?: string;
    /**
    * Set to **true** to enable the `Merchant` for Level 2 and Level 3 processing. Default value is **false**.
    */
    'levelTwoLevelThreeDataEnabled'?: boolean;
    /**
    * The Merchant Category Code ([MCC](http://www.dm.usda.gov/procurement/card/card_x/mcc.pdf)) that this merchant will be classified under.
    */
    'mcc'?: string | null;
    /**
    * The legal name saved in the `Merchant` resource.
    */
    'merchantName'?: string;
    /**
    * Details if a merchant\'s info was submitted to third-party processors for provisioning.
    */
    'merchantProfile'?: string;
    /**
    * MID of the `Merchant`.
    */
    'mid'?: string | null;
    /**
    * Details the state of the `Merchant\'s` onboarding.
    */
    'onboardingState'?: Merchant.OnboardingStateEnum | string;
    /**
    * Name of the transaction processor.
    */
    'processor'?: string;
    'processorDetails'?: MerchantProcessorDetails;
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
    'tags'?: { [key: string]: string; };
    /**
    * ID of the `Verification` that was submitted to verify the `Merchant`.
    */
    'verification'?: string;
    'links'?: MerchantLinks;

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
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
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
            "name": "creatingTransferFromReportEnabled",
            "baseName": "creating_transfer_from_report_enabled",
            "type": "boolean"
        },
        {
            "name": "convenienceChargesEnabled",
            "baseName": "convenience_charges_enabled",
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
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "levelTwoLevelThreeDataEnabled",
            "baseName": "level_two_level_three_data_enabled",
            "type": "boolean"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "merchantName",
            "baseName": "merchant_name",
            "type": "string"
        },
        {
            "name": "merchantProfile",
            "baseName": "merchant_profile",
            "type": "string"
        },
        {
            "name": "mid",
            "baseName": "mid",
            "type": "string"
        },
        {
            "name": "onboardingState",
            "baseName": "onboarding_state",
            "type": "Merchant.OnboardingStateEnum"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string"
        },
        {
            "name": "processorDetails",
            "baseName": "processor_details",
            "type": "MerchantProcessorDetails"
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
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "MerchantLinks"
        }    ];

    static getAttributeTypeMap() {
        return Merchant.attributeTypeMap;
    }
}

export namespace Merchant {
    export enum OnboardingStateEnum {
        Provisioning = <any> 'PROVISIONING',
        Approved = <any> 'APPROVED',
        Rejected = <any> 'REJECTED'
    }
}
