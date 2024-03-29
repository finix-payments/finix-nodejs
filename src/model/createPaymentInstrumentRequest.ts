/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { CreatePaymentInstrumentRequestAddress } from './createPaymentInstrumentRequestAddress';

export class CreatePaymentInstrumentRequest {
    'address'?: CreatePaymentInstrumentRequestAddress;
    /**
    * The expiration month of the card (e.g. 12 for December).
    */
    'expirationMonth'?: number;
    /**
    * The 4-digit expiration year of the card.
    */
    'expirationYear'?: number;
    /**
    * The ID of the `Identity` used to create the `Payment Instrument` resource.
    */
    'identity'?: string;
    /**
    * The name of the bank account or card owner.
    */
    'name'?: string;
    /**
    * The card or bank account number (no dashes in between numbers).
    */
    'number'?: string;
    /**
    * The 3-4 digit security code of the card (i.e. CVV code).
    */
    'securityCode'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Type of `Payment Instrument`.
    */
    'type'?: CreatePaymentInstrumentRequest.TypeEnum | string;
    /**
    * Stringified token provided by Google. Required to process Google Pay transactions.
    */
    'thirdPartyToken'?: string;
    /**
    * The bank account number (no dashes in between numbers).
    */
    'accountNumber'?: string;
    /**
    * The type of bank account.
    */
    'accountType'?: CreatePaymentInstrumentRequest.AccountTypeEnum | string;
    /**
    * Set to **true** if you want to request a bank account validation. Default value is **false**.
    */
    'attemptBankAccountValidationCheck'?: boolean = false;
    /**
    * The routing number of the bank account.
    */
    'bankCode'?: string;
    /**
    * 3 Letter country code (e.g. USA).
    */
    'country'?: string;
    /**
    * ID of the `Token` that was returned from the tokenization client or hosted fields
    */
    'token'?: string;
    /**
    * The `id` of the identity used when registering the business with Google Pay through our registration API.
    */
    'merchantIdentity'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "CreatePaymentInstrumentRequestAddress"
        },
        {
            "name": "expirationMonth",
            "baseName": "expiration_month",
            "type": "number"
        },
        {
            "name": "expirationYear",
            "baseName": "expiration_year",
            "type": "number"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "securityCode",
            "baseName": "security_code",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreatePaymentInstrumentRequest.TypeEnum"
        },
        {
            "name": "thirdPartyToken",
            "baseName": "third_party_token",
            "type": "string"
        },
        {
            "name": "accountNumber",
            "baseName": "account_number",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "CreatePaymentInstrumentRequest.AccountTypeEnum"
        },
        {
            "name": "attemptBankAccountValidationCheck",
            "baseName": "attempt_bank_account_validation_check",
            "type": "boolean"
        },
        {
            "name": "bankCode",
            "baseName": "bank_code",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "merchantIdentity",
            "baseName": "merchant_identity",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreatePaymentInstrumentRequest.attributeTypeMap;
    }
}

export namespace CreatePaymentInstrumentRequest {
    export enum TypeEnum {
        PaymentCard = <any> 'PAYMENT_CARD',
        ApplePay = <any> 'APPLE_PAY',
        GooglePay = <any> 'GOOGLE_PAY',
        Token = <any> 'TOKEN',
        BankAccount = <any> 'BANK_ACCOUNT'
    }
    export enum AccountTypeEnum {
        Checking = <any> 'CHECKING',
        Savings = <any> 'SAVINGS'
    }
}
