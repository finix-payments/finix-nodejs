/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Details the type of fee if the `Transfer` includes a `fee`.
*/
export enum FeeType {
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
