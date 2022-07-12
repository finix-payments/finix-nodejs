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
exports.Fee = void 0;
/**
* An out of flow `fee` that is added to a `settlement`.
*/
class Fee {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags';
    /**
    * The ID of the `fee` resource.
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
    * The amount of the fee in cents.
    */
    'amount';
    'currency';
    /**
    * The name of the `fee` object that was include in `display_name` when creating the fee.
    */
    'displayName';
    /**
    * Subtype of the `fee`.
    */
    'feeSubtype';
    /**
    * The type of `fee`.
    */
    'feeType';
    /**
    * The name of the `fee` object that was include in `label` when creating the fee.
    */
    'label';
    /**
    * ID of the linked resource.
    */
    'linkedId';
    /**
    * The type of entity the `fee` is linked (**null** by default).
    */
    'linkedType';
    /**
    * The `Merchant` ID that the fee is being debited from.
    */
    'merchant';
    'links';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
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
            "name": "links",
            "baseName": "_links",
            "type": "FeeLinks"
        }
    ];
    static getAttributeTypeMap() {
        return Fee.attributeTypeMap;
    }
}
exports.Fee = Fee;
(function (Fee) {
    let FeeSubtypeEnum;
    (function (FeeSubtypeEnum) {
        FeeSubtypeEnum[FeeSubtypeEnum["Custom"] = 'CUSTOM'] = "Custom";
        FeeSubtypeEnum[FeeSubtypeEnum["ApplicationFee"] = 'APPLICATION_FEE'] = "ApplicationFee";
        FeeSubtypeEnum[FeeSubtypeEnum["PlatformFee"] = 'PLATFORM_FEE'] = "PlatformFee";
    })(FeeSubtypeEnum = Fee.FeeSubtypeEnum || (Fee.FeeSubtypeEnum = {}));
    let FeeTypeEnum;
    (function (FeeTypeEnum) {
        FeeTypeEnum[FeeTypeEnum["ApplicationFee"] = 'APPLICATION_FEE'] = "ApplicationFee";
        FeeTypeEnum[FeeTypeEnum["AchBasisPoints"] = 'ACH_BASIS_POINTS'] = "AchBasisPoints";
        FeeTypeEnum[FeeTypeEnum["AchFixed"] = 'ACH_FIXED'] = "AchFixed";
        FeeTypeEnum[FeeTypeEnum["CardBasisPoints"] = 'CARD_BASIS_POINTS'] = "CardBasisPoints";
        FeeTypeEnum[FeeTypeEnum["CardFixed"] = 'CARD_FIXED'] = "CardFixed";
        FeeTypeEnum[FeeTypeEnum["CardInterchange"] = 'CARD_INTERCHANGE'] = "CardInterchange";
        FeeTypeEnum[FeeTypeEnum["VisaBasisPoints"] = 'VISA_BASIS_POINTS'] = "VisaBasisPoints";
        FeeTypeEnum[FeeTypeEnum["VisaFixed"] = 'VISA_FIXED'] = "VisaFixed";
        FeeTypeEnum[FeeTypeEnum["VisaInterchange"] = 'VISA_INTERCHANGE'] = "VisaInterchange";
        FeeTypeEnum[FeeTypeEnum["VisaAssessmentBasisPoints"] = 'VISA_ASSESSMENT_BASIS_POINTS'] = "VisaAssessmentBasisPoints";
        FeeTypeEnum[FeeTypeEnum["VisaAcquirerProcessingFixed"] = 'VISA_ACQUIRER_PROCESSING_FIXED'] = "VisaAcquirerProcessingFixed";
        FeeTypeEnum[FeeTypeEnum["VisaCreditVoucherFixed"] = 'VISA_CREDIT_VOUCHER_FIXED'] = "VisaCreditVoucherFixed";
        FeeTypeEnum[FeeTypeEnum["VisaBaseIiSystemFileTransmissionFixed"] = 'VISA_BASE_II_SYSTEM_FILE_TRANSMISSION_FIXED'] = "VisaBaseIiSystemFileTransmissionFixed";
        FeeTypeEnum[FeeTypeEnum["VisaBaseIiCreditVoucherFixed"] = 'VISA_BASE_II_CREDIT_VOUCHER_FIXED'] = "VisaBaseIiCreditVoucherFixed";
        FeeTypeEnum[FeeTypeEnum["VisaKilobyteAccessFixed"] = 'VISA_KILOBYTE_ACCESS_FIXED'] = "VisaKilobyteAccessFixed";
        FeeTypeEnum[FeeTypeEnum["DiscoverBasisPoints"] = 'DISCOVER_BASIS_POINTS'] = "DiscoverBasisPoints";
        FeeTypeEnum[FeeTypeEnum["DiscoverFixed"] = 'DISCOVER_FIXED'] = "DiscoverFixed";
        FeeTypeEnum[FeeTypeEnum["DiscoverInterchange"] = 'DISCOVER_INTERCHANGE'] = "DiscoverInterchange";
        FeeTypeEnum[FeeTypeEnum["DiscoverAssessmentBasisPoints"] = 'DISCOVER_ASSESSMENT_BASIS_POINTS'] = "DiscoverAssessmentBasisPoints";
        FeeTypeEnum[FeeTypeEnum["DiscoverDataUsageFixed"] = 'DISCOVER_DATA_USAGE_FIXED'] = "DiscoverDataUsageFixed";
        FeeTypeEnum[FeeTypeEnum["DiscoverNetworkAuthorizationFixed"] = 'DISCOVER_NETWORK_AUTHORIZATION_FIXED'] = "DiscoverNetworkAuthorizationFixed";
        FeeTypeEnum[FeeTypeEnum["DinersClubBasisPoints"] = 'DINERS_CLUB_BASIS_POINTS'] = "DinersClubBasisPoints";
        FeeTypeEnum[FeeTypeEnum["DinersClubFixed"] = 'DINERS_CLUB_FIXED'] = "DinersClubFixed";
        FeeTypeEnum[FeeTypeEnum["DinersClubInterchange"] = 'DINERS_CLUB_INTERCHANGE'] = "DinersClubInterchange";
        FeeTypeEnum[FeeTypeEnum["MastercardBasisPoints"] = 'MASTERCARD_BASIS_POINTS'] = "MastercardBasisPoints";
        FeeTypeEnum[FeeTypeEnum["MastercardFixed"] = 'MASTERCARD_FIXED'] = "MastercardFixed";
        FeeTypeEnum[FeeTypeEnum["MastercardInterchange"] = 'MASTERCARD_INTERCHANGE'] = "MastercardInterchange";
        FeeTypeEnum[FeeTypeEnum["MastercardAssessmentUnder1KBasisPoints"] = 'MASTERCARD_ASSESSMENT_UNDER_1K_BASIS_POINTS'] = "MastercardAssessmentUnder1KBasisPoints";
        FeeTypeEnum[FeeTypeEnum["MastercardAssessmentOver1KBasisPoints"] = 'MASTERCARD_ASSESSMENT_OVER_1K_BASIS_POINTS'] = "MastercardAssessmentOver1KBasisPoints";
        FeeTypeEnum[FeeTypeEnum["MastercardAcquirerFeeBasisPoints"] = 'MASTERCARD_ACQUIRER_FEE_BASIS_POINTS'] = "MastercardAcquirerFeeBasisPoints";
        FeeTypeEnum[FeeTypeEnum["JcbBasisPoints"] = 'JCB_BASIS_POINTS'] = "JcbBasisPoints";
        FeeTypeEnum[FeeTypeEnum["JcbFixed"] = 'JCB_FIXED'] = "JcbFixed";
        FeeTypeEnum[FeeTypeEnum["JcbInterchange"] = 'JCB_INTERCHANGE'] = "JcbInterchange";
        FeeTypeEnum[FeeTypeEnum["AmericanExpressBasisPoints"] = 'AMERICAN_EXPRESS_BASIS_POINTS'] = "AmericanExpressBasisPoints";
        FeeTypeEnum[FeeTypeEnum["AmericanExpressFixed"] = 'AMERICAN_EXPRESS_FIXED'] = "AmericanExpressFixed";
        FeeTypeEnum[FeeTypeEnum["AmericanExpressInterchange"] = 'AMERICAN_EXPRESS_INTERCHANGE'] = "AmericanExpressInterchange";
        FeeTypeEnum[FeeTypeEnum["AmericanExpressAssessmentBasisPoints"] = 'AMERICAN_EXPRESS_ASSESSMENT_BASIS_POINTS'] = "AmericanExpressAssessmentBasisPoints";
        FeeTypeEnum[FeeTypeEnum["DisputeInquiryFixedFee"] = 'DISPUTE_INQUIRY_FIXED_FEE'] = "DisputeInquiryFixedFee";
        FeeTypeEnum[FeeTypeEnum["DisputeFixedFee"] = 'DISPUTE_FIXED_FEE'] = "DisputeFixedFee";
        FeeTypeEnum[FeeTypeEnum["QualifiedTierBasisPointsFee"] = 'QUALIFIED_TIER_BASIS_POINTS_FEE'] = "QualifiedTierBasisPointsFee";
        FeeTypeEnum[FeeTypeEnum["QualifiedTierFixedFee"] = 'QUALIFIED_TIER_FIXED_FEE'] = "QualifiedTierFixedFee";
        FeeTypeEnum[FeeTypeEnum["Custom"] = 'CUSTOM'] = "Custom";
        FeeTypeEnum[FeeTypeEnum["AchDebitReturnFixedFee"] = 'ACH_DEBIT_RETURN_FIXED_FEE'] = "AchDebitReturnFixedFee";
        FeeTypeEnum[FeeTypeEnum["AchCreditReturnFixedFee"] = 'ACH_CREDIT_RETURN_FIXED_FEE'] = "AchCreditReturnFixedFee";
        FeeTypeEnum[FeeTypeEnum["AncillaryFixedFeePrimary"] = 'ANCILLARY_FIXED_FEE_PRIMARY'] = "AncillaryFixedFeePrimary";
        FeeTypeEnum[FeeTypeEnum["AncillaryFixedFeeSecondary"] = 'ANCILLARY_FIXED_FEE_SECONDARY'] = "AncillaryFixedFeeSecondary";
        FeeTypeEnum[FeeTypeEnum["SettlementV2Transfer"] = 'SETTLEMENT_V2_TRANSFER'] = "SettlementV2Transfer";
    })(FeeTypeEnum = Fee.FeeTypeEnum || (Fee.FeeTypeEnum = {}));
    let LinkedTypeEnum;
    (function (LinkedTypeEnum) {
        LinkedTypeEnum[LinkedTypeEnum["Application"] = 'APPLICATION'] = "Application";
        LinkedTypeEnum[LinkedTypeEnum["Platform"] = 'PLATFORM'] = "Platform";
        LinkedTypeEnum[LinkedTypeEnum["Subscription"] = 'SUBSCRIPTION'] = "Subscription";
        LinkedTypeEnum[LinkedTypeEnum["Transfer"] = 'TRANSFER'] = "Transfer";
    })(LinkedTypeEnum = Fee.LinkedTypeEnum || (Fee.LinkedTypeEnum = {}));
})(Fee = exports.Fee || (exports.Fee = {}));
