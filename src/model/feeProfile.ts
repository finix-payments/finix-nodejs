/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { FeeProfileLinks } from './feeProfileLinks';

/**
* 
*/
export class FeeProfile {
    /**
    * The ID of the `Fee Profile` resource.
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
    * Percentage-based fee incurred against the full amount of an eCheck (also called ACH payments). Calculated as one hundredth of one percent (1 basis point = .0001 or .01%)
    */
    'achBasisPoints'?: number;
    /**
    * A fixed amount in cents that will be charged to the seller for processing an echeck (also called ACH payments) credit return.
    */
    'achCreditReturnFixedFee'?: number | null;
    /**
    * A fixed amount in cents that will be charged to the seller for processing an echeck (also called ACH payment) debit return.
    */
    'achDebitReturnFixedFee'?: number | null;
    /**
    * Fee in cents incurred for each individual `Transfer`.
    */
    'achFixedFee'?: number;
    /**
    * Applies to gross American Express card volume.
    */
    'americanExpressAssessmentBasisPoints'?: number | null;
    /**
    * Percentage-based fee incurred against the full amount of each American Express `Transfer`. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%)
    */
    'americanExpressBasisPoints'?: number | null;
    /**
    * Set to **True** to incur interchange fees for American Express `Transfers`.
    */
    'americanExpressChargeInterchange'?: boolean | null;
    /**
    * Percentage-based fee incurred against the full amount of each American Express externally funded `Transfer`. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%)
    */
    'americanExpressExternallyFundedBasisPoints'?: number | null;
    /**
    * Fee in cents incurred for each individual American Express externally funded `Transfer`.
    */
    'americanExpressExternallyFundedFixedFee'?: number | null;
    /**
    * Fee in cents incurred for each individual American Express `Transfer`.
    */
    'americanExpressFixedFee'?: number | null;
    /**
    * An additional fixed fee that can be charged per `Transfer`.
    */
    'ancillaryFixedFeePrimary'?: number | null;
    /**
    * An additional fixed fee that can be charged per `Transfer` if `ancillary_fixed_fee_primary` is included.
    */
    'ancillaryFixedFeeSecondary'?: number | null;
    /**
    * The ID of the `Application` associated with the  `Fee Profile`.
    */
    'application'?: string;
    /**
    * Percentage-based fee incurred against the full amount of each card-based `Transfer`. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%)
    */
    'basisPoints'?: number;
    /**
    * Percentage-based fee charged against the full amount of every `Transfer` that includes non-US cards. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    */
    'cardCrossBorderBasisPoints'?: number | null;
    /**
    * Fee in cents charged against every `Transfer` that includes non-US cards.
    */
    'cardCrossBorderFixedFee'?: number | null;
    /**
    * Set to **True** to incur interchange fees for card-based `Transfers`.
    */
    'chargeInterchange'?: boolean;
    /**
    * Percentage-based fee incurred against the full amount of each Diners `Transfer`. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    */
    'dinersClubBasisPoints'?: number | null;
    /**
    * Set to **True** to incur interchange fees for Diners `Transfers`.
    */
    'dinersClubChargeInterchange'?: boolean | null;
    /**
    * Fee in cents incurred for each individual Diners `Transfer`.
    */
    'dinersClubFixedFee'?: number | null;
    /**
    * Assessment applies to gross Discover card transaction volume.
    */
    'discoverAssessmentsBasisPoints'?: number | null;
    /**
    * Percentage-based fee incurred against the full amount of each Discover `Transfer`. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%)
    */
    'discoverBasisPoints'?: number | null;
    /**
    * Set to **True** to incur interchange fees for Discover `Transfers`.
    */
    'discoverChargeInterchange'?: boolean | null;
    /**
    * Applies to all U.S.-based `authorization` transactions.
    */
    'discoverDataUsageFixedFee'?: number | null;
    /**
    * Percentage-based fee incurred against the full amount of each Discover externally funded `Transfer`. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    */
    'discoverExternallyFundedBasisPoints'?: number | null;
    /**
    * Fee in cents incurred for each individual Discover externally funded `Transfer`.
    */
    'discoverExternallyFundedFixedFee'?: number | null;
    /**
    * Fee in cents incurred for each individual Discover `Transfer`.
    */
    'discoverFixedFee'?: number | null;
    /**
    * This fee applies to all Discover network `authorizations` and replaces the previously assessed Data Transmission.
    */
    'discoverNetworkAuthorizationFixedFee'?: number | null;
    /**
    * Applied when a `dispute` is created or updated to a **PENDING** state.
    */
    'disputeFixedFee'?: number | null;
    /**
    * Applied when a `dispute` is created or updated to a **INQUIRY** state.
    */
    'disputeInquiryFixedFee'?: number | null;
    /**
    * Percentage-based fee incurred against the full amount of each `Transfer` that\'s card-based and externally funded. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%).
    */
    'externallyFundedBasisPoints'?: number | null;
    /**
    * Fee in cents incurred for each individual `Transfer` that\'s card-based and externally funded.
    */
    'externallyFundedFixedFee'?: number | null;
    /**
    * Fee in cents incurred for each individual card-based `Transfer`.
    */
    'fixedFee'?: number;
    /**
    * Percentage-based fee incurred against the full amount of each JCB `Transfer`. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%)
    */
    'jcbBasisPoints'?: number | null;
    /**
    * Set to **True** to incur interchange fees for JCB Transfers.
    */
    'jcbChargeInterchange'?: boolean | null;
    /**
    * Fee in cents incurred for each individual JCB `Transfer`.
    */
    'jcbFixedFee'?: number | null;
    /**
    * The fee is assessed on a business’s gross MasterCard processing volume. This fee varies per acquirer based on MasterCard’s assessed charge as it’s distributed across the acquirer’s portfolio of merchants. Generally, this fee is a fraction of a basis point. For example, 0.0045%, 0.0075%, etc. are examples of a likely fee.
    */
    'mastercardAcquirerFeesBasisPoints'?: number | null;
    /**
    * Fee applied to Mastercard credit sale transactions greater than $1,000.
    */
    'mastercardAssessmentsOver1kBasisPoints'?: number | null;
    /**
    * Fee applied to Mastercard transactions less than or equal to $1,000.
    */
    'mastercardAssessmentsUnder1kBasisPoints'?: number | null;
    /**
    * Percentage-based fee incurred against the full amount of each MasterCard `Transfer`. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%)
    */
    'mastercardBasisPoints'?: number | null;
    /**
    * Set to **True** to incur interchange fees for MasterCard `Transfers`.
    */
    'mastercardChargeInterchange'?: boolean | null;
    /**
    * Fee in cents incurred for each individual MasterCard `Transfer`.
    */
    'mastercardFixedFee'?: number | null;
    /**
    * The top of the qualified tier tree.
    */
    'qualifiedTiers'?: object | null;
    /**
    * <ul><li>Include <strong>AGGREGATE</strong> if you want to round after the settlement calculation.<li>By default, rounding happens before the sum of the settlement calculation (i.e. round each fee transfer)</ul>
    */
    'roundingMode'?: FeeProfile.RoundingModeEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Applied to all U.S.-based credit card authorizations acquired in the U.S. regardless of where the issuer/cardholder is located. If your business is based in the U.S., the acquirer processing fee will apply to all Visa credit card authorizations
    */
    'visaAcquirerProcessingFixedFee'?: number | null;
    /**
    * Applies to all Visa credit transactions.
    */
    'visaAssessmentsBasisPoints'?: number | null;
    /**
    * Applies to all U.S.-based refunds.
    */
    'visaBaseIICreditVoucherFixedFee'?: number | null;
    /**
    * Applies to all Visa transactions and is charged in addition to other transaction-based assessments.
    */
    'visaBaseIISystemFileTransmissionFixedFee'?: number | null;
    /**
    * Percentage-based fee incurred against the full amount of each Visa `Transfer`. Calculated as one hundredth of one percent (1 basis point = .0001 or .01%)
    */
    'visaBasisPoints'?: number | null;
    /**
    * Set to **True** to incur interchange fees for Visa `Transfers`.
    */
    'visaChargeInterchange'?: boolean | null;
    /**
    * Applies to Visa refunds.
    */
    'visaCreditVoucherFixedFee'?: number | null;
    /**
    * Fee in cents incurred for each individual Visa `Transfer`.
    */
    'visaFixedFee'?: number | null;
    /**
    * Charged on each authorization transaction submitted to Visa’s network for settlement.
    */
    'visaKilobyteAccessFixedFee'?: number | null;
    'links'?: FeeProfileLinks;

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
            "name": "americanExpressFixedFee",
            "baseName": "american_express_fixed_fee",
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
            "name": "cardCrossBorderBasisPoints",
            "baseName": "card_cross_border_basis_points",
            "type": "number"
        },
        {
            "name": "cardCrossBorderFixedFee",
            "baseName": "card_cross_border_fixed_fee",
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
            "name": "discoverFixedFee",
            "baseName": "discover_fixed_fee",
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
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
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
        }    ];

    static getAttributeTypeMap() {
        return FeeProfile.attributeTypeMap;
    }
}

export namespace FeeProfile {
    export enum RoundingModeEnum {
        Transaction = <any> 'TRANSACTION',
        Aggregate = <any> 'AGGREGATE'
    }
}
