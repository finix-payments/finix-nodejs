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
exports.CreatePaymentInstrumentRequest = void 0;
class CreatePaymentInstrumentRequest {
    static getAttributeTypeMap() {
        return CreatePaymentInstrumentRequest.attributeTypeMap;
    }
}
exports.CreatePaymentInstrumentRequest = CreatePaymentInstrumentRequest;
CreatePaymentInstrumentRequest.discriminator = undefined;
CreatePaymentInstrumentRequest.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "expirationYear",
        "baseName": "expiration_year",
        "type": "number"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "number",
        "baseName": "number",
        "type": "string"
    },
    {
        "name": "expirationMonth",
        "baseName": "expiration_month",
        "type": "number"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "CreatePaymentInstrumentRequestAddress"
    },
    {
        "name": "securityCode",
        "baseName": "security_code",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "CreatePaymentInstrumentRequest.TypeEnum"
    },
    {
        "name": "identity",
        "baseName": "identity",
        "type": "string"
    },
    {
        "name": "thirdPartyToken",
        "baseName": "third_party_token",
        "type": "string"
    },
    {
        "name": "merchantIdentity",
        "baseName": "merchant_identity",
        "type": "string"
    },
    {
        "name": "accountType",
        "baseName": "account_type",
        "type": "CreatePaymentInstrumentRequest.AccountTypeEnum"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "bankCode",
        "baseName": "bank_code",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "account_number",
        "type": "string"
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "string"
    }
];
(function (CreatePaymentInstrumentRequest) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Token"] = 'TOKEN'] = "Token";
        TypeEnum[TypeEnum["PaymentCard"] = 'PAYMENT_CARD'] = "PaymentCard";
        TypeEnum[TypeEnum["ApplePay"] = 'APPLE_PAY'] = "ApplePay";
        TypeEnum[TypeEnum["BankAccount"] = 'BANK_ACCOUNT'] = "BankAccount";
    })(TypeEnum = CreatePaymentInstrumentRequest.TypeEnum || (CreatePaymentInstrumentRequest.TypeEnum = {}));
    let AccountTypeEnum;
    (function (AccountTypeEnum) {
        AccountTypeEnum[AccountTypeEnum["Checking"] = 'CHECKING'] = "Checking";
        AccountTypeEnum[AccountTypeEnum["Savings"] = 'SAVINGS'] = "Savings";
        AccountTypeEnum[AccountTypeEnum["Corporate"] = 'CORPORATE'] = "Corporate";
        AccountTypeEnum[AccountTypeEnum["CorpSavings"] = 'CORP_SAVINGS'] = "CorpSavings";
    })(AccountTypeEnum = CreatePaymentInstrumentRequest.AccountTypeEnum || (CreatePaymentInstrumentRequest.AccountTypeEnum = {}));
})(CreatePaymentInstrumentRequest = exports.CreatePaymentInstrumentRequest || (exports.CreatePaymentInstrumentRequest = {}));
//# sourceMappingURL=createPaymentInstrumentRequest.js.map