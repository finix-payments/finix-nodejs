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
exports.InstrumentUpdate1Links = void 0;
class InstrumentUpdate1Links {
    'application';
    'paymentInstrument';
    'self';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "paymentInstrument",
            "baseName": "payment_instrument",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksApplicationProfile"
        }
    ];
    static getAttributeTypeMap() {
        return InstrumentUpdate1Links.attributeTypeMap;
    }
}
exports.InstrumentUpdate1Links = InstrumentUpdate1Links;
//# sourceMappingURL=instrumentUpdate1Links.js.map