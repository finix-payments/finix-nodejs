/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Details the operation that\'ll be performed in the transaction (Card present transactions only) .
*/
export enum OperationKey {
    PushToCard = <any> 'PUSH_TO_CARD',
    PullFromCard = <any> 'PULL_FROM_CARD',
    CardPresentDebit = <any> 'CARD_PRESENT_DEBIT',
    CardPresentUnreferencedRefund = <any> 'CARD_PRESENT_UNREFERENCED_REFUND',
    Sale = <any> 'SALE',
    UnreferencedRefund = <any> 'UNREFERENCED_REFUND',
    MerchantCreditAdjustment = <any> 'MERCHANT_CREDIT_ADJUSTMENT',
    MerchantDebitAdjustment = <any> 'MERCHANT_DEBIT_ADJUSTMENT',
    CardPresentAuthorization = <any> 'CARD_PRESENT_AUTHORIZATION'
}
