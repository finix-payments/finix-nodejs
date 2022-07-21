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
exports.FeeProfile = void 0;
class FeeProfile {
    static getAttributeTypeMap() {
        return FeeProfile.attributeTypeMap;
    }
}
exports.FeeProfile = FeeProfile;
FeeProfile.discriminator = undefined;
FeeProfile.attributeTypeMap = [
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
        "name": "achBasisPoints",
        "baseName": "ach_basis_points",
        "type": "number"
    },
    {
        "name": "achCreditReturnFixedFee",
        "baseName": "ach_credit_return_fixed_fee",
        "type": "number"
    },
    {
        "name": "achDebitReturnFixedFee",
        "baseName": "ach_debit_return_fixed_fee",
        "type": "number"
    },
    {
        "name": "achFixedFee",
        "baseName": "ach_fixed_fee",
        "type": "number"
    },
    {
        "name": "americanExpressAssessmentBasisPoints",
        "baseName": "american_express_assessment_basis_points",
        "type": "number"
    },
    {
        "name": "americanExpressBasisPoints",
        "baseName": "american_express_basis_points",
        "type": "number"
    },
    {
        "name": "americanExpressChargeInterchange",
        "baseName": "american_express_charge_interchange",
        "type": "boolean"
    },
    {
        "name": "americanExpressFixedFee",
        "baseName": "american_express_fixed_fee",
        "type": "number"
    },
    {
        "name": "americanExpressExternallyFundedBasisPoints",
        "baseName": "american_express_externally_funded_basis_points",
        "type": "number"
    },
    {
        "name": "americanExpressExternallyFundedFixedFee",
        "baseName": "american_express_externally_funded_fixed_fee",
        "type": "number"
    },
    {
        "name": "ancillaryFixedFeePrimary",
        "baseName": "ancillary_fixed_fee_primary",
        "type": "number"
    },
    {
        "name": "ancillaryFixedFeeSecondary",
        "baseName": "ancillary_fixed_fee_secondary",
        "type": "number"
    },
    {
        "name": "application",
        "baseName": "application",
        "type": "string"
    },
    {
        "name": "basisPoints",
        "baseName": "basis_points",
        "type": "number"
    },
    {
        "name": "externallyFundedBasisPoints",
        "baseName": "externally_funded_basis_points",
        "type": "number"
    },
    {
        "name": "externallyFundedFixedFee",
        "baseName": "externally_funded_fixed_fee",
        "type": "number"
    },
    {
        "name": "chargeInterchange",
        "baseName": "charge_interchange",
        "type": "boolean"
    },
    {
        "name": "dinersClubBasisPoints",
        "baseName": "diners_club_basis_points",
        "type": "number"
    },
    {
        "name": "dinersClubChargeInterchange",
        "baseName": "diners_club_charge_interchange",
        "type": "boolean"
    },
    {
        "name": "dinersClubFixedFee",
        "baseName": "diners_club_fixed_fee",
        "type": "number"
    },
    {
        "name": "discoverAssessmentsBasisPoints",
        "baseName": "discover_assessments_basis_points",
        "type": "number"
    },
    {
        "name": "discoverBasisPoints",
        "baseName": "discover_basis_points",
        "type": "number"
    },
    {
        "name": "discoverChargeInterchange",
        "baseName": "discover_charge_interchange",
        "type": "boolean"
    },
    {
        "name": "discoverDataUsageFixedFee",
        "baseName": "discover_data_usage_fixed_fee",
        "type": "number"
    },
    {
        "name": "discoverFixedFee",
        "baseName": "discover_fixed_fee",
        "type": "number"
    },
    {
        "name": "discoverExternallyFundedBasisPoints",
        "baseName": "discover_externally_funded_basis_points",
        "type": "number"
    },
    {
        "name": "discoverExternallyFundedFixedFee",
        "baseName": "discover_externally_funded_fixed_fee",
        "type": "number"
    },
    {
        "name": "discoverNetworkAuthorizationFixedFee",
        "baseName": "discover_network_authorization_fixed_fee",
        "type": "number"
    },
    {
        "name": "disputeFixedFee",
        "baseName": "dispute_fixed_fee",
        "type": "number"
    },
    {
        "name": "disputeInquiryFixedFee",
        "baseName": "dispute_inquiry_fixed_fee",
        "type": "number"
    },
    {
        "name": "fixedFee",
        "baseName": "fixed_fee",
        "type": "number"
    },
    {
        "name": "jcbBasisPoints",
        "baseName": "jcb_basis_points",
        "type": "number"
    },
    {
        "name": "jcbChargeInterchange",
        "baseName": "jcb_charge_interchange",
        "type": "boolean"
    },
    {
        "name": "jcbFixedFee",
        "baseName": "jcb_fixed_fee",
        "type": "number"
    },
    {
        "name": "mastercardAcquirerFeesBasisPoints",
        "baseName": "mastercard_acquirer_fees_basis_points",
        "type": "number"
    },
    {
        "name": "mastercardAssessmentsOver1kBasisPoints",
        "baseName": "mastercard_assessments_over1k_basis_points",
        "type": "number"
    },
    {
        "name": "mastercardAssessmentsUnder1kBasisPoints",
        "baseName": "mastercard_assessments_under1k_basis_points",
        "type": "number"
    },
    {
        "name": "mastercardBasisPoints",
        "baseName": "mastercard_basis_points",
        "type": "number"
    },
    {
        "name": "mastercardChargeInterchange",
        "baseName": "mastercard_charge_interchange",
        "type": "boolean"
    },
    {
        "name": "mastercardFixedFee",
        "baseName": "mastercard_fixed_fee",
        "type": "number"
    },
    {
        "name": "qualifiedTiers",
        "baseName": "qualified_tiers",
        "type": "object"
    },
    {
        "name": "roundingMode",
        "baseName": "rounding_mode",
        "type": "FeeProfile.RoundingModeEnum"
    },
    {
        "name": "visaAcquirerProcessingFixedFee",
        "baseName": "visa_acquirer_processing_fixed_fee",
        "type": "number"
    },
    {
        "name": "visaAssessmentsBasisPoints",
        "baseName": "visa_assessments_basis_points",
        "type": "number"
    },
    {
        "name": "visaBaseIICreditVoucherFixedFee",
        "baseName": "visa_base_II_credit_voucher_fixed_fee",
        "type": "number"
    },
    {
        "name": "visaBaseIISystemFileTransmissionFixedFee",
        "baseName": "visa_base_II_system_file_transmission_fixed_fee",
        "type": "number"
    },
    {
        "name": "visaBasisPoints",
        "baseName": "visa_basis_points",
        "type": "number"
    },
    {
        "name": "visaChargeInterchange",
        "baseName": "visa_charge_interchange",
        "type": "boolean"
    },
    {
        "name": "visaCreditVoucherFixedFee",
        "baseName": "visa_credit_voucher_fixed_fee",
        "type": "number"
    },
    {
        "name": "visaFixedFee",
        "baseName": "visa_fixed_fee",
        "type": "number"
    },
    {
        "name": "visaKilobyteAccessFixedFee",
        "baseName": "visa_kilobyte_access_fixed_fee",
        "type": "number"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "FeeProfileLinks"
    }
];
(function (FeeProfile) {
    let RoundingModeEnum;
    (function (RoundingModeEnum) {
        RoundingModeEnum[RoundingModeEnum["Transaction"] = 'TRANSACTION'] = "Transaction";
        RoundingModeEnum[RoundingModeEnum["Aggregate"] = 'AGGREGATE'] = "Aggregate";
    })(RoundingModeEnum = FeeProfile.RoundingModeEnum || (FeeProfile.RoundingModeEnum = {}));
})(FeeProfile = exports.FeeProfile || (exports.FeeProfile = {}));
//# sourceMappingURL=feeProfile.js.map