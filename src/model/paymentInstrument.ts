/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Address } from './address';
import { Country } from './country';
import { Currency } from './currency';
import { PaymentInstrumentLinks } from './paymentInstrumentLinks';

/**
* 
*/
export class PaymentInstrument {
    /**
    * The ID of the `Payment Instrument`.
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
    'address'?: Address | null;
    /**
    * Additional address information that’s required to verify the identity of the merchant.
    */
    'addressVerification'?: PaymentInstrument.AddressVerificationEnum | string;
    /**
    * The ID of the `Application` resource the `Payment Instrument` was created under.
    */
    'application'?: string;
    /**
    * Bank Identification number for the `Payment Instrument`.
    */
    'bin'?: string;
    /**
    * The `brand` of the card saved in the `Payment Instrument`.
    */
    'brand'?: PaymentInstrument.BrandEnum | string;
    /**
    * A custom name you can include to identify the card being used (e.g. **Business Card**).
    */
    'cardName'?: string | null;
    /**
    * The type of payment card saved in the `Payment Instrument`.
    */
    'cardType'?: PaymentInstrument.CardTypeEnum | string;
    'currency'?: Currency;
    /**
    * Details if the `Payment Instrument` resource is enabled. Default value is **true**; set to **false** to disable the `Payment Instrument`.
    */
    'enabled'?: boolean;
    /**
    * Expiration month (e.g. 12 for December).
    */
    'expirationMonth'?: number;
    /**
    * 4-digit expiration year.
    */
    'expirationYear'?: number;
    /**
    * Details if Fast Funds is enabled for the card.
    */
    'fastFundsIndicator'?: string;
    /**
    * Unique ID that represents the tokenized card data.
    */
    'fingerprint'?: string;
    /**
    * The ID of the `Identity` used to create the `Payment Instrument` resource.
    */
    'identity'?: string;
    /**
    * The type of `Payment Instrument`.
    */
    'instrumentType'?: PaymentInstrument.InstrumentTypeEnum | string;
    /**
    * Details what country the card was issued in:<li><strong>USA</strong>: The card was issued inside the United States.<li><strong>NON_USA</strong>: The card was issued outside of the United States.<li><strong>UNKNOWN</strong>: Processor did not return an issuer country for this particular BIN.
    */
    'issuerCountry'?: PaymentInstrument.IssuerCountryEnum | string;
    /**
    * Last four digits of the card or bank account number.
    */
    'lastFour'?: string;
    /**
    * The name of the bank account or card owner.
    */
    'name'?: string | null;
    /**
    * Detailes if the card is enabled to receive push-payments for online gambling payouts.
    */
    'onlineGambingBlockIndicator'?: string;
    'payloadType'?: PaymentInstrument.PayloadTypeEnum | string;
    /**
    * Details if the card is enabled to receive push-to-card disbursements.
    */
    'pushFundsBlockIndicator'?: string;
    /**
    * Details the results of the Card Verification Code check.
    */
    'securityCodeVerification'?: PaymentInstrument.SecurityCodeVerificationEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Type of `Payment Instrument`.
    */
    'type'?: PaymentInstrument.TypeEnum | string;
    'links'?: PaymentInstrumentLinks;
    /**
    * Details what kind of **BANK_ACCOUNT** is being used.
    */
    'accountType'?: PaymentInstrument.AccountTypeEnum | string;
    /**
    * Details the results of the bank account validation check if `attempt_bank_account_validation_check` is set to **true**.
    */
    'bankAccountValidationCheck'?: PaymentInstrument.BankAccountValidationCheckEnum | string;
    /**
    * The routing number of the bank account.
    */
    'bankCode'?: string;
    'country'?: Country | null;
    /**
    * The last 4 digits of the account number used to create the `Payment Instrument`.
    */
    'maskedAccountNumber'?: string | null;

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
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "addressVerification",
            "baseName": "address_verification",
            "type": "PaymentInstrument.AddressVerificationEnum"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "bin",
            "baseName": "bin",
            "type": "string"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "PaymentInstrument.BrandEnum"
        },
        {
            "name": "cardName",
            "baseName": "card_name",
            "type": "string"
        },
        {
            "name": "cardType",
            "baseName": "card_type",
            "type": "PaymentInstrument.CardTypeEnum"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
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
            "name": "fastFundsIndicator",
            "baseName": "fast_funds_indicator",
            "type": "string"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "instrumentType",
            "baseName": "instrument_type",
            "type": "PaymentInstrument.InstrumentTypeEnum"
        },
        {
            "name": "issuerCountry",
            "baseName": "issuer_country",
            "type": "PaymentInstrument.IssuerCountryEnum"
        },
        {
            "name": "lastFour",
            "baseName": "last_four",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "onlineGambingBlockIndicator",
            "baseName": "online_gambing_block_indicator",
            "type": "string"
        },
        {
            "name": "payloadType",
            "baseName": "payload_type",
            "type": "PaymentInstrument.PayloadTypeEnum"
        },
        {
            "name": "pushFundsBlockIndicator",
            "baseName": "push_funds_block_indicator",
            "type": "string"
        },
        {
            "name": "securityCodeVerification",
            "baseName": "security_code_verification",
            "type": "PaymentInstrument.SecurityCodeVerificationEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentInstrument.TypeEnum"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "PaymentInstrumentLinks"
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "PaymentInstrument.AccountTypeEnum"
        },
        {
            "name": "bankAccountValidationCheck",
            "baseName": "bank_account_validation_check",
            "type": "PaymentInstrument.BankAccountValidationCheckEnum"
        },
        {
            "name": "bankCode",
            "baseName": "bank_code",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "Country"
        },
        {
            "name": "maskedAccountNumber",
            "baseName": "masked_account_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrument.attributeTypeMap;
    }
}

export namespace PaymentInstrument {
    export enum AddressVerificationEnum {
        PostalCodeAndStreetMatch = <any> 'POSTAL_CODE_AND_STREET_MATCH',
        StreetMatch = <any> 'STREET_MATCH',
        NoAddress = <any> 'NO_ADDRESS',
        PostalCodeMatch = <any> 'POSTAL_CODE_MATCH',
        NoMatch = <any> 'NO_MATCH',
        Unknown = <any> 'UNKNOWN',
        NotSupported = <any> 'NOT_SUPPORTED'
    }
    export enum BrandEnum {
        Uatp = <any> 'UATP',
        ChinaTUnion = <any> 'CHINA_T_UNION',
        Lankapay = <any> 'LANKAPAY',
        Mir = <any> 'MIR',
        Mastercard = <any> 'MASTERCARD',
        Dankort = <any> 'DANKORT',
        Interpayment = <any> 'INTERPAYMENT',
        Unknown = <any> 'UNKNOWN',
        Verve = <any> 'VERVE',
        Visa = <any> 'VISA',
        Troy = <any> 'TROY',
        Discover = <any> 'DISCOVER',
        AmericanExpress = <any> 'AMERICAN_EXPRESS',
        Instapayment = <any> 'INSTAPAYMENT',
        DinersClubInternational = <any> 'DINERS_CLUB_INTERNATIONAL',
        Maestro = <any> 'MAESTRO',
        DinersClub = <any> 'DINERS_CLUB',
        ChinaUnionPay = <any> 'CHINA_UNION_PAY',
        Rupay = <any> 'RUPAY',
        Jcb = <any> 'JCB'
    }
    export enum CardTypeEnum {
        Credit = <any> 'CREDIT',
        HsaFsa = <any> 'HSA_FSA',
        NonReloadablePrepaid = <any> 'NON_RELOADABLE_PREPAID',
        Debit = <any> 'DEBIT',
        Unknown = <any> 'UNKNOWN',
        ReloadablePrepaid = <any> 'RELOADABLE_PREPAID'
    }
    export enum InstrumentTypeEnum {
        VantivOmniToken = <any> 'VANTIV_OMNI_TOKEN',
        PaymentCard = <any> 'PAYMENT_CARD',
        ApplePay = <any> 'APPLE_PAY',
        GooglePay = <any> 'GOOGLE_PAY',
        Token = <any> 'TOKEN',
        Virtual = <any> 'VIRTUAL',
        PaymentCardPresent = <any> 'PAYMENT_CARD_PRESENT',
        BankAccount = <any> 'BANK_ACCOUNT',
        SwipedPaymentCard = <any> 'SWIPED_PAYMENT_CARD'
    }
    export enum IssuerCountryEnum {
        Usa = <any> 'USA',
        Unknown = <any> 'UNKNOWN',
        NonUsa = <any> 'NON_USA'
    }
    export enum PayloadTypeEnum {
        Destination = <any> 'DESTINATION',
        Source = <any> 'SOURCE'
    }
    export enum SecurityCodeVerificationEnum {
        Unmatched = <any> 'UNMATCHED',
        Matched = <any> 'MATCHED',
        Unknown = <any> 'UNKNOWN'
    }
    export enum TypeEnum {
        VantivOmniToken = <any> 'VANTIV_OMNI_TOKEN',
        PaymentCard = <any> 'PAYMENT_CARD',
        ApplePay = <any> 'APPLE_PAY',
        GooglePay = <any> 'GOOGLE_PAY',
        Token = <any> 'TOKEN',
        Virtual = <any> 'VIRTUAL',
        PaymentCardPresent = <any> 'PAYMENT_CARD_PRESENT',
        BankAccount = <any> 'BANK_ACCOUNT',
        SwipedPaymentCard = <any> 'SWIPED_PAYMENT_CARD'
    }
    export enum AccountTypeEnum {
        Checking = <any> 'CHECKING',
        Savings = <any> 'SAVINGS'
    }
    export enum BankAccountValidationCheckEnum {
        Valid = <any> 'VALID',
        Inconclusive = <any> 'INCONCLUSIVE',
        NotAttempted = <any> 'NOT_ATTEMPTED',
        Invalid = <any> 'INVALID'
    }
}
