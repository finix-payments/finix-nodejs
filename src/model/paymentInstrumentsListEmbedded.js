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
exports.PaymentInstrumentsListEmbedded = void 0;
class PaymentInstrumentsListEmbedded {
    static getAttributeTypeMap() {
        return PaymentInstrumentsListEmbedded.attributeTypeMap;
    }
}
exports.PaymentInstrumentsListEmbedded = PaymentInstrumentsListEmbedded;
PaymentInstrumentsListEmbedded.discriminator = undefined;
PaymentInstrumentsListEmbedded.attributeTypeMap = [
    {
        "name": "paymentInstruments",
        "baseName": "payment_instruments",
        "type": "Set<PaymentInstrument>"
    }
];
//# sourceMappingURL=paymentInstrumentsListEmbedded.js.map