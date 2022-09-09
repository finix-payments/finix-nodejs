/**
 * Finix API
 */

import { RequestFile } from './models';

export enum SubTypeTransfer {
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
    SplitPayoutAdjustment = <any> 'SPLIT_PAYOUT_ADJUSTMENT'
}
