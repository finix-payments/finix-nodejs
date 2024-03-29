/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Currency } from './currency';
import { FeeLinks } from './feeLinks';

/**
* An out of flow `fee` that is added to a `settlement`.
*/
export class Fee {
    /**
    * The ID of the `fee` resource.
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
    * The amount of the fee in cents.
    */
    'amount'?: number;
    'currency'?: Currency;
    /**
    * The name of the `fee` object that was include in `display_name` when creating the fee.
    */
    'displayName'?: string | null;
    /**
    * Subtype of the `fee`.
    */
    'feeSubtype'?: Fee.FeeSubtypeEnum | string;
    /**
    * The type of `fee`.
    */
    'feeType'?: Fee.FeeTypeEnum | string;
    /**
    * The name of the `fee` object that was include in `label` when creating the fee.
    */
    'label'?: string | null;
    /**
    * ID of the linked resource.
    */
    'linkedId'?: string;
    /**
    * The type of entity the `fee` is linked to (**null** by default).
    */
    'linkedType'?: Fee.LinkedTypeEnum | string;
    /**
    * The `Merchant` ID that the fee is being debited from.
    */
    'merchant'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    'links'?: FeeLinks;

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
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "feeSubtype",
            "baseName": "fee_subtype",
            "type": "Fee.FeeSubtypeEnum"
        },
        {
            "name": "feeType",
            "baseName": "fee_type",
            "type": "Fee.FeeTypeEnum"
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
            "type": "Fee.LinkedTypeEnum"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "FeeLinks"
        }    ];

    static getAttributeTypeMap() {
        return Fee.attributeTypeMap;
    }
}

export namespace Fee {
    export enum FeeSubtypeEnum {
        Custom = <any> 'CUSTOM',
        ApplicationFee = <any> 'APPLICATION_FEE',
        PlatformFee = <any> 'PLATFORM_FEE'
    }
    export enum FeeTypeEnum {
        ApplicationFee = <any> 'APPLICATION_FEE',
        AchBasisPoints = <any> 'ACH_BASIS_POINTS',
        AchFixed = <any> 'ACH_FIXED',
        CardBasisPoints = <any> 'CARD_BASIS_POINTS',
        CardFixed = <any> 'CARD_FIXED',
        CardInterchange = <any> 'CARD_INTERCHANGE',
        VisaBasisPoints = <any> 'VISA_BASIS_POINTS',
        VisaFixed = <any> 'VISA_FIXED',
        VisaInterchange = <any> 'VISA_INTERCHANGE',
        VisaAssessmentBasisPoints = <any> 'VISA_ASSESSMENT_BASIS_POINTS',
        VisaAcquirerProcessingFixed = <any> 'VISA_ACQUIRER_PROCESSING_FIXED',
        VisaCreditVoucherFixed = <any> 'VISA_CREDIT_VOUCHER_FIXED',
        VisaBaseIiSystemFileTransmissionFixed = <any> 'VISA_BASE_II_SYSTEM_FILE_TRANSMISSION_FIXED',
        VisaBaseIiCreditVoucherFixed = <any> 'VISA_BASE_II_CREDIT_VOUCHER_FIXED',
        VisaKilobyteAccessFixed = <any> 'VISA_KILOBYTE_ACCESS_FIXED',
        DiscoverBasisPoints = <any> 'DISCOVER_BASIS_POINTS',
        DiscoverFixed = <any> 'DISCOVER_FIXED',
        DiscoverInterchange = <any> 'DISCOVER_INTERCHANGE',
        DiscoverAssessmentBasisPoints = <any> 'DISCOVER_ASSESSMENT_BASIS_POINTS',
        DiscoverDataUsageFixed = <any> 'DISCOVER_DATA_USAGE_FIXED',
        DiscoverNetworkAuthorizationFixed = <any> 'DISCOVER_NETWORK_AUTHORIZATION_FIXED',
        DinersClubBasisPoints = <any> 'DINERS_CLUB_BASIS_POINTS',
        DinersClubFixed = <any> 'DINERS_CLUB_FIXED',
        DinersClubInterchange = <any> 'DINERS_CLUB_INTERCHANGE',
        MastercardBasisPoints = <any> 'MASTERCARD_BASIS_POINTS',
        MastercardFixed = <any> 'MASTERCARD_FIXED',
        MastercardInterchange = <any> 'MASTERCARD_INTERCHANGE',
        MastercardAssessmentUnder1KBasisPoints = <any> 'MASTERCARD_ASSESSMENT_UNDER_1K_BASIS_POINTS',
        MastercardAssessmentOver1KBasisPoints = <any> 'MASTERCARD_ASSESSMENT_OVER_1K_BASIS_POINTS',
        MastercardAcquirerFeeBasisPoints = <any> 'MASTERCARD_ACQUIRER_FEE_BASIS_POINTS',
        JcbBasisPoints = <any> 'JCB_BASIS_POINTS',
        JcbFixed = <any> 'JCB_FIXED',
        JcbInterchange = <any> 'JCB_INTERCHANGE',
        AmericanExpressBasisPoints = <any> 'AMERICAN_EXPRESS_BASIS_POINTS',
        AmericanExpressFixed = <any> 'AMERICAN_EXPRESS_FIXED',
        AmericanExpressInterchange = <any> 'AMERICAN_EXPRESS_INTERCHANGE',
        AmericanExpressAssessmentBasisPoints = <any> 'AMERICAN_EXPRESS_ASSESSMENT_BASIS_POINTS',
        DisputeInquiryFixedFee = <any> 'DISPUTE_INQUIRY_FIXED_FEE',
        DisputeFixedFee = <any> 'DISPUTE_FIXED_FEE',
        QualifiedTierBasisPointsFee = <any> 'QUALIFIED_TIER_BASIS_POINTS_FEE',
        QualifiedTierFixedFee = <any> 'QUALIFIED_TIER_FIXED_FEE',
        Custom = <any> 'CUSTOM',
        AchDebitReturnFixedFee = <any> 'ACH_DEBIT_RETURN_FIXED_FEE',
        AchCreditReturnFixedFee = <any> 'ACH_CREDIT_RETURN_FIXED_FEE',
        AncillaryFixedFeePrimary = <any> 'ANCILLARY_FIXED_FEE_PRIMARY',
        AncillaryFixedFeeSecondary = <any> 'ANCILLARY_FIXED_FEE_SECONDARY',
        SettlementV2Transfer = <any> 'SETTLEMENT_V2_TRANSFER'
    }
    export enum LinkedTypeEnum {
        Application = <any> 'APPLICATION',
        Platform = <any> 'PLATFORM',
        Subscription = <any> 'SUBSCRIPTION',
        Transfer = <any> 'TRANSFER'
    }
}
