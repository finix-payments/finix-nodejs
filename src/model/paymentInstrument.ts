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

import { RequestFile } from './models';
import { Address } from './address';
import { Country } from './country';
import { Currency } from './currency';
import { PaymentInstrumentLinks } from './paymentInstrumentLinks';

export class PaymentInstrument {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * Type of `Payment Instrument`.
    */
    'type'?: PaymentInstrument.TypeEnum;
    /**
    * The ID of the resource.
    */
    'id'?: string | null;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * Details what kind of **BANK_ACCOUNT** is being used.
    */
    'accountType'?: PaymentInstrument.AccountTypeEnum;
    /**
    * The ID of the resource.
    */
    'application'?: string;
    /**
    * The routing number of the bank account.
    */
    'bankCode'?: string;
    'country'?: Country | null;
    'currency'?: Currency;
    /**
    * Unique ID that represents the tokenized card data.
    */
    'fingerprint'?: string;
    /**
    * The ID of the resource.
    */
    'identity'?: string | null;
    /**
    * The type of `Payment Instrument`.
    */
    'instrumentType'?: PaymentInstrument.InstrumentTypeEnum;
    /**
    * The last 4 digits of the account number used to create the `Payment Instrument`.
    */
    'maskedAccountNumber'?: string | null;
    /**
    * The name of the bank account or card owner.
    */
    'name'?: string | null;
    'payloadType'?: PaymentInstrument.PayloadTypeEnum;
    'links'?: PaymentInstrumentLinks;
    'address'?: Address | null;
    /**
    * Additional address information that’s required to verify the identity of the merchant.
    */
    'addressVerification'?: PaymentInstrument.AddressVerificationEnum;
    /**
    * Bank Identification number for the `Payment Instrument`.
    */
    'bin'?: string;
    /**
    * The `brand` of the card saved in the `Payment Instrument`.
    */
    'brand'?: PaymentInstrument.BrandEnum;
    /**
    * A custom name you can include to identify the card being used (e.g. **Business Card**).
    */
    'cardName'?: string | null;
    /**
    * The type of card saved in the `Payment Instrument`.
    */
    'cardType'?: PaymentInstrument.CardTypeEnum;
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
    * Last four digits of the card or bank account number.
    */
    'lastFour'?: string;
    /**
    * Detailes if the card is enabled to receive push-payments for online gambling payouts.
    */
    'onlineGambingBlockIndicator'?: string;
    /**
    * Details if the card is enabled to receive push-to-card disbursements.
    */
    'pushFundsBlockIndicator'?: string;
    /**
    * Details the results of the Card Verification Code check.
    */
    'securityCodeVerification'?: PaymentInstrument.SecurityCodeVerificationEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "accountType",
            "baseName": "account_type",
            "type": "PaymentInstrument.AccountTypeEnum"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
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
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
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
            "name": "maskedAccountNumber",
            "baseName": "masked_account_number",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "payloadType",
            "baseName": "payload_type",
            "type": "PaymentInstrument.PayloadTypeEnum"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "PaymentInstrumentLinks"
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
            "name": "lastFour",
            "baseName": "last_four",
            "type": "string"
        },
        {
            "name": "onlineGambingBlockIndicator",
            "baseName": "online_gambing_block_indicator",
            "type": "string"
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
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrument.attributeTypeMap;
    }
}

export namespace PaymentInstrument {
    export enum TypeEnum {
        Virtual = <any> 'VIRTUAL',
        PaymentCard = <any> 'PAYMENT_CARD',
        Token = <any> 'TOKEN',
        SwipedPaymentCard = <any> 'SWIPED_PAYMENT_CARD',
        BankAccount = <any> 'BANK_ACCOUNT',
        VantivOmniToken = <any> 'VANTIV_OMNI_TOKEN',
        PaymentCardPresent = <any> 'PAYMENT_CARD_PRESENT'
    }
    export enum AccountTypeEnum {
        Checking = <any> 'CHECKING',
        Savings = <any> 'SAVINGS',
        Corporate = <any> 'CORPORATE',
        CorpSavings = <any> 'CORP_SAVINGS'
    }
    export enum InstrumentTypeEnum {
        Virtual = <any> 'VIRTUAL',
        PaymentCard = <any> 'PAYMENT_CARD',
        Token = <any> 'TOKEN',
        SwipedPaymentCard = <any> 'SWIPED_PAYMENT_CARD',
        BankAccount = <any> 'BANK_ACCOUNT',
        VantivOmniToken = <any> 'VANTIV_OMNI_TOKEN',
        PaymentCardPresent = <any> 'PAYMENT_CARD_PRESENT'
    }
    export enum PayloadTypeEnum {
        Source = <any> 'SOURCE',
        Destination = <any> 'DESTINATION'
    }
    export enum AddressVerificationEnum {
        PostalCodeAndStreetMatch = <any> 'POSTAL_CODE_AND_STREET_MATCH',
        StreetMatch = <any> 'STREET_MATCH',
        PostalCodeMatch = <any> 'POSTAL_CODE_MATCH',
        NoAddress = <any> 'NO_ADDRESS',
        NoMatch = <any> 'NO_MATCH',
        NotSupported = <any> 'NOT_SUPPORTED',
        Unknown = <any> 'UNKNOWN'
    }
    export enum BrandEnum {
        Unknown = <any> 'UNKNOWN',
        DinersClubInternational = <any> 'DINERS_CLUB_INTERNATIONAL',
        Dankort = <any> 'DANKORT',
        Mir = <any> 'MIR',
        Troy = <any> 'TROY',
        Uatp = <any> 'UATP',
        ChinaTUnion = <any> 'CHINA_T_UNION',
        ChinaUnionPay = <any> 'CHINA_UNION_PAY',
        AmericanExpress = <any> 'AMERICAN_EXPRESS',
        Verve = <any> 'VERVE',
        Rupay = <any> 'RUPAY',
        Discover = <any> 'DISCOVER',
        Jcb = <any> 'JCB',
        Mastercard = <any> 'MASTERCARD',
        Interpayment = <any> 'INTERPAYMENT',
        Instapayment = <any> 'INSTAPAYMENT',
        Maestro = <any> 'MAESTRO',
        Visa = <any> 'VISA',
        Lankapay = <any> 'LANKAPAY',
        DinersClub = <any> 'DINERS_CLUB'
    }
    export enum CardTypeEnum {
        Unknown = <any> 'UNKNOWN',
        Prepaid = <any> 'PREPAID',
        Credit = <any> 'CREDIT',
        Debit = <any> 'DEBIT',
        Fsa = <any> 'FSA'
    }
    export enum SecurityCodeVerificationEnum {
        Matched = <any> 'MATCHED',
        Unknown = <any> 'UNKNOWN',
        Unmatched = <any> 'UNMATCHED'
    }
}
