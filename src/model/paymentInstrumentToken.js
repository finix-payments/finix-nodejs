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
exports.PaymentInstrumentToken = void 0;
class PaymentInstrumentToken {
    static getAttributeTypeMap() {
        return PaymentInstrumentToken.attributeTypeMap;
    }
}
exports.PaymentInstrumentToken = PaymentInstrumentToken;
PaymentInstrumentToken.discriminator = undefined;
PaymentInstrumentToken.attributeTypeMap = [
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "PaymentInstrumentToken.TypeEnum"
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
        "name": "application",
        "baseName": "application",
        "type": "string"
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
        "type": "PaymentInstrumentToken.InstrumentTypeEnum"
    },
    {
        "name": "payloadType",
        "baseName": "payload_type",
        "type": "PaymentInstrumentToken.PayloadTypeEnum"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "PaymentInstrumentTokenLinks"
    }
];
(function (PaymentInstrumentToken) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Token"] = 'TOKEN'] = "Token";
    })(TypeEnum = PaymentInstrumentToken.TypeEnum || (PaymentInstrumentToken.TypeEnum = {}));
    let InstrumentTypeEnum;
    (function (InstrumentTypeEnum) {
        InstrumentTypeEnum[InstrumentTypeEnum["Token"] = 'TOKEN'] = "Token";
    })(InstrumentTypeEnum = PaymentInstrumentToken.InstrumentTypeEnum || (PaymentInstrumentToken.InstrumentTypeEnum = {}));
    let PayloadTypeEnum;
    (function (PayloadTypeEnum) {
        PayloadTypeEnum[PayloadTypeEnum["Source"] = 'SOURCE'] = "Source";
        PayloadTypeEnum[PayloadTypeEnum["Destination"] = 'DESTINATION'] = "Destination";
    })(PayloadTypeEnum = PaymentInstrumentToken.PayloadTypeEnum || (PaymentInstrumentToken.PayloadTypeEnum = {}));
})(PaymentInstrumentToken = exports.PaymentInstrumentToken || (exports.PaymentInstrumentToken = {}));
//# sourceMappingURL=paymentInstrumentToken.js.map