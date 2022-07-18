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
exports.PaymentInstrument = void 0;
class PaymentInstrument {
    static getAttributeTypeMap() {
        return PaymentInstrument.attributeTypeMap;
    }
}
exports.PaymentInstrument = PaymentInstrument;
PaymentInstrument.discriminator = undefined;
PaymentInstrument.attributeTypeMap = [
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
    }
];
(function (PaymentInstrument) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["PaymentCard"] = 'PAYMENT_CARD'] = "PaymentCard";
        TypeEnum[TypeEnum["VantivOmniToken"] = 'VANTIV_OMNI_TOKEN'] = "VantivOmniToken";
        TypeEnum[TypeEnum["Token"] = 'TOKEN'] = "Token";
        TypeEnum[TypeEnum["BankAccount"] = 'BANK_ACCOUNT'] = "BankAccount";
        TypeEnum[TypeEnum["Virtual"] = 'VIRTUAL'] = "Virtual";
        TypeEnum[TypeEnum["PaymentCardPresent"] = 'PAYMENT_CARD_PRESENT'] = "PaymentCardPresent";
        TypeEnum[TypeEnum["SwipedPaymentCard"] = 'SWIPED_PAYMENT_CARD'] = "SwipedPaymentCard";
    })(TypeEnum = PaymentInstrument.TypeEnum || (PaymentInstrument.TypeEnum = {}));
    let AccountTypeEnum;
    (function (AccountTypeEnum) {
        AccountTypeEnum[AccountTypeEnum["Checking"] = 'CHECKING'] = "Checking";
        AccountTypeEnum[AccountTypeEnum["Savings"] = 'SAVINGS'] = "Savings";
        AccountTypeEnum[AccountTypeEnum["Corporate"] = 'CORPORATE'] = "Corporate";
        AccountTypeEnum[AccountTypeEnum["CorpSavings"] = 'CORP_SAVINGS'] = "CorpSavings";
    })(AccountTypeEnum = PaymentInstrument.AccountTypeEnum || (PaymentInstrument.AccountTypeEnum = {}));
    let InstrumentTypeEnum;
    (function (InstrumentTypeEnum) {
        InstrumentTypeEnum[InstrumentTypeEnum["PaymentCard"] = 'PAYMENT_CARD'] = "PaymentCard";
        InstrumentTypeEnum[InstrumentTypeEnum["VantivOmniToken"] = 'VANTIV_OMNI_TOKEN'] = "VantivOmniToken";
        InstrumentTypeEnum[InstrumentTypeEnum["Token"] = 'TOKEN'] = "Token";
        InstrumentTypeEnum[InstrumentTypeEnum["BankAccount"] = 'BANK_ACCOUNT'] = "BankAccount";
        InstrumentTypeEnum[InstrumentTypeEnum["Virtual"] = 'VIRTUAL'] = "Virtual";
        InstrumentTypeEnum[InstrumentTypeEnum["PaymentCardPresent"] = 'PAYMENT_CARD_PRESENT'] = "PaymentCardPresent";
        InstrumentTypeEnum[InstrumentTypeEnum["SwipedPaymentCard"] = 'SWIPED_PAYMENT_CARD'] = "SwipedPaymentCard";
    })(InstrumentTypeEnum = PaymentInstrument.InstrumentTypeEnum || (PaymentInstrument.InstrumentTypeEnum = {}));
    let PayloadTypeEnum;
    (function (PayloadTypeEnum) {
        PayloadTypeEnum[PayloadTypeEnum["Source"] = 'SOURCE'] = "Source";
        PayloadTypeEnum[PayloadTypeEnum["Destination"] = 'DESTINATION'] = "Destination";
    })(PayloadTypeEnum = PaymentInstrument.PayloadTypeEnum || (PaymentInstrument.PayloadTypeEnum = {}));
    let AddressVerificationEnum;
    (function (AddressVerificationEnum) {
        AddressVerificationEnum[AddressVerificationEnum["PostalCodeAndStreetMatch"] = 'POSTAL_CODE_AND_STREET_MATCH'] = "PostalCodeAndStreetMatch";
        AddressVerificationEnum[AddressVerificationEnum["StreetMatch"] = 'STREET_MATCH'] = "StreetMatch";
        AddressVerificationEnum[AddressVerificationEnum["PostalCodeMatch"] = 'POSTAL_CODE_MATCH'] = "PostalCodeMatch";
        AddressVerificationEnum[AddressVerificationEnum["NoAddress"] = 'NO_ADDRESS'] = "NoAddress";
        AddressVerificationEnum[AddressVerificationEnum["NoMatch"] = 'NO_MATCH'] = "NoMatch";
        AddressVerificationEnum[AddressVerificationEnum["NotSupported"] = 'NOT_SUPPORTED'] = "NotSupported";
        AddressVerificationEnum[AddressVerificationEnum["Unknown"] = 'UNKNOWN'] = "Unknown";
    })(AddressVerificationEnum = PaymentInstrument.AddressVerificationEnum || (PaymentInstrument.AddressVerificationEnum = {}));
    let BrandEnum;
    (function (BrandEnum) {
        BrandEnum[BrandEnum["Unknown"] = 'UNKNOWN'] = "Unknown";
        BrandEnum[BrandEnum["DinersClubInternational"] = 'DINERS_CLUB_INTERNATIONAL'] = "DinersClubInternational";
        BrandEnum[BrandEnum["Dankort"] = 'DANKORT'] = "Dankort";
        BrandEnum[BrandEnum["Mir"] = 'MIR'] = "Mir";
        BrandEnum[BrandEnum["Troy"] = 'TROY'] = "Troy";
        BrandEnum[BrandEnum["Uatp"] = 'UATP'] = "Uatp";
        BrandEnum[BrandEnum["ChinaTUnion"] = 'CHINA_T_UNION'] = "ChinaTUnion";
        BrandEnum[BrandEnum["ChinaUnionPay"] = 'CHINA_UNION_PAY'] = "ChinaUnionPay";
        BrandEnum[BrandEnum["AmericanExpress"] = 'AMERICAN_EXPRESS'] = "AmericanExpress";
        BrandEnum[BrandEnum["Verve"] = 'VERVE'] = "Verve";
        BrandEnum[BrandEnum["Rupay"] = 'RUPAY'] = "Rupay";
        BrandEnum[BrandEnum["Discover"] = 'DISCOVER'] = "Discover";
        BrandEnum[BrandEnum["Jcb"] = 'JCB'] = "Jcb";
        BrandEnum[BrandEnum["Mastercard"] = 'MASTERCARD'] = "Mastercard";
        BrandEnum[BrandEnum["Interpayment"] = 'INTERPAYMENT'] = "Interpayment";
        BrandEnum[BrandEnum["Instapayment"] = 'INSTAPAYMENT'] = "Instapayment";
        BrandEnum[BrandEnum["Maestro"] = 'MAESTRO'] = "Maestro";
        BrandEnum[BrandEnum["Visa"] = 'VISA'] = "Visa";
        BrandEnum[BrandEnum["Lankapay"] = 'LANKAPAY'] = "Lankapay";
        BrandEnum[BrandEnum["DinersClub"] = 'DINERS_CLUB'] = "DinersClub";
    })(BrandEnum = PaymentInstrument.BrandEnum || (PaymentInstrument.BrandEnum = {}));
    let CardTypeEnum;
    (function (CardTypeEnum) {
        CardTypeEnum[CardTypeEnum["Unknown"] = 'UNKNOWN'] = "Unknown";
        CardTypeEnum[CardTypeEnum["Prepaid"] = 'PREPAID'] = "Prepaid";
        CardTypeEnum[CardTypeEnum["Credit"] = 'CREDIT'] = "Credit";
        CardTypeEnum[CardTypeEnum["Debit"] = 'DEBIT'] = "Debit";
        CardTypeEnum[CardTypeEnum["Fsa"] = 'FSA'] = "Fsa";
    })(CardTypeEnum = PaymentInstrument.CardTypeEnum || (PaymentInstrument.CardTypeEnum = {}));
    let SecurityCodeVerificationEnum;
    (function (SecurityCodeVerificationEnum) {
        SecurityCodeVerificationEnum[SecurityCodeVerificationEnum["Matched"] = 'MATCHED'] = "Matched";
        SecurityCodeVerificationEnum[SecurityCodeVerificationEnum["Unknown"] = 'UNKNOWN'] = "Unknown";
        SecurityCodeVerificationEnum[SecurityCodeVerificationEnum["Unmatched"] = 'UNMATCHED'] = "Unmatched";
    })(SecurityCodeVerificationEnum = PaymentInstrument.SecurityCodeVerificationEnum || (PaymentInstrument.SecurityCodeVerificationEnum = {}));
})(PaymentInstrument = exports.PaymentInstrument || (exports.PaymentInstrument = {}));
