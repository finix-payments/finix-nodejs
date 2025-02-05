/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from "./models";
import { AdditionalBuyerCharges } from "./additionalBuyerCharges";
import { AdditionalPurchaseData } from "./additionalPurchaseData";
import { CardPresentInstrumentForm } from "./cardPresentInstrumentForm";
import { ConfigurationDetails } from "./configurationDetails";
import { CreateTransferRequest3dSecureAuthentication } from "./createTransferRequest3dSecureAuthentication";
import { Currency } from "./currency";
import { SplitTransferDetails } from "./splitTransferDetails";

/**
 * Create a `transfer`.
 */
export class CreateTransferRequest {
  "additionalBuyerCharges"?: AdditionalBuyerCharges | null;
  "additionalPurchaseData"?: AdditionalPurchaseData;
  /**
   * Details if the `transfer` was created to adjust funds.
   */
  "adjustmentRequest"?: boolean | null;
  /**
   * The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
   */
  "amount": number;
  "currency": Currency;
  /**
   * ID of the `Payment Instrument` where funds will be sent.
   */
  "destination"?: string | null;
  /**
   * The ID of the activated device.
   */
  "device"?: string | null;
  "deviceConfiguration"?: ConfigurationDetails;
  /**
   * The amount of the `Transfer` you\'d like to collect as your fee in cents. Defaults to zero (must be less than or equal to the `amount`).
   */
  "fee"?: number;
  /**
   * The `fraud_session_session` ID you want to review for fraud. For more info, see [Fraud Detection](/guides/payments/fraud-detection/).
   */
  "fraudSessionId"?: string;
  /**
   * Set to to **true** to process a payment using a `Payment Instrument` [created from a health savings account (HSA) or flexible spending account (FSA)](/docs/guides/making-a-payment/hsa-fsa/).
   */
  "hsaFsaPayment"?: boolean | null;
  /**
   * A randomly generated value that\'ll be associated with the request.
   */
  "idempotencyId"?: string | null;
  /**
   * ID of the `Merchant` the `Transfer` was created under.
   */
  "merchant"?: string | null;
  /**
   * Details the operation that\'ll be performed in the transaction.
   */
  "operationKey"?: CreateTransferRequest.OperationKeyEnum | string;
  "paymentInstrument"?: CardPresentInstrumentForm;
  /**
   * Name of the transaction processor.
   */
  "processor"?: string;
  /**
   * ID of the `Payment Instrument` where funds get debited.
   */
  "source"?: string;
  /**
   * The 3-4 digit security code for the card (i.e. CVV code). Include the CVV code of the card to include [Card Verification Checks](/guides/payments/making-a-payment/card-verification-checks/) with the created `Transfer`.
   */
  "securityCode"?: string | null;
  /**
   * <li>The description of the transaction that appears on the buyer\'s bank or card statement.</li><li><kbd>statement_descriptors</kbd> for `Transfers` in <strong>live</strong> enviroments will have a <kbd>FI*</kbd> prefix.
   */
  "statementDescriptor"?: string | null;
  /**
   * Key value pair for annotating custom meta data (e.g. order numbers).
   */
  "tags"?: { [key: string]: string } | null;
  "_3dSecureAuthentication"?: CreateTransferRequest3dSecureAuthentication | null;
  /**
   * The combined amounts in the split_transfers object must be equal to the amount of the Transfer.
   * the primary merchant is the merchant specified in the parent Transfer request; outside the split_transfers object.
   */
  "splitTransfers"?: Array<SplitTransferDetails>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "additionalBuyerCharges",
      baseName: "additional_buyer_charges",
      type: "AdditionalBuyerCharges",
    },
    {
      name: "additionalPurchaseData",
      baseName: "additional_purchase_data",
      type: "AdditionalPurchaseData",
    },
    {
      name: "adjustmentRequest",
      baseName: "adjustment_request",
      type: "boolean",
    },
    {
      name: "amount",
      baseName: "amount",
      type: "number",
    },
    {
      name: "currency",
      baseName: "currency",
      type: "Currency",
    },
    {
      name: "destination",
      baseName: "destination",
      type: "string",
    },
    {
      name: "device",
      baseName: "device",
      type: "string",
    },
    {
      name: "deviceConfiguration",
      baseName: "device_configuration",
      type: "ConfigurationDetails",
    },
    {
      name: "fee",
      baseName: "fee",
      type: "number",
    },
    {
      name: "fraudSessionId",
      baseName: "fraud_session_id",
      type: "string",
    },
    {
      name: "hsaFsaPayment",
      baseName: "hsa_fsa_payment",
      type: "boolean",
    },
    {
      name: "idempotencyId",
      baseName: "idempotency_id",
      type: "string",
    },
    {
      name: "merchant",
      baseName: "merchant",
      type: "string",
    },
    {
      name: "operationKey",
      baseName: "operation_key",
      type: "CreateTransferRequest.OperationKeyEnum",
    },
    {
      name: "paymentInstrument",
      baseName: "payment_instrument",
      type: "CardPresentInstrumentForm",
    },
    {
      name: "processor",
      baseName: "processor",
      type: "string",
    },
    {
      name: "source",
      baseName: "source",
      type: "string",
    },
    {
      name: "securityCode",
      baseName: "security_code",
      type: "string",
    },
    {
      name: "statementDescriptor",
      baseName: "statement_descriptor",
      type: "string",
    },
    {
      name: "tags",
      baseName: "tags",
      type: "{ [key: string]: string; }",
    },
    {
      name: "_3dSecureAuthentication",
      baseName: "3d_secure_authentication",
      type: "CreateTransferRequest3dSecureAuthentication",
    },
    {
      name: "splitTransfers",
      baseName: "split_transfers",
      type: "Array<SplitTransferDetails>",
    },
  ];

  static getAttributeTypeMap() {
    return CreateTransferRequest.attributeTypeMap;
  }
}

export namespace CreateTransferRequest {
  export enum OperationKeyEnum {
    PushToCard = <any>"PUSH_TO_CARD",
    PullFromCard = <any>"PULL_FROM_CARD",
    CardPresentDebit = <any>"CARD_PRESENT_DEBIT",
    CardPresentUnreferencedRefund = <any>"CARD_PRESENT_UNREFERENCED_REFUND",
    Sale = <any>"SALE",
    UnreferencedRefund = <any>"UNREFERENCED_REFUND",
    MerchantCreditAdjustment = <any>"MERCHANT_CREDIT_ADJUSTMENT",
    MerchantDebitAdjustment = <any>"MERCHANT_DEBIT_ADJUSTMENT",
  }
}
