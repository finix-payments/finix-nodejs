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
exports.Error422InvalidFieldListEmbeddedErrorsInner = void 0;
class Error422InvalidFieldListEmbeddedErrorsInner {
    'code';
    'field';
    'logref';
    'message';
    'links';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "Error422InvalidFieldListEmbeddedErrorsInner.CodeEnum"
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "string"
        },
        {
            "name": "logref",
            "baseName": "logref",
            "type": "LogRef"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "Error402PaymentRequiredEmbeddedErrorsInnerLinks"
        }
    ];
    static getAttributeTypeMap() {
        return Error422InvalidFieldListEmbeddedErrorsInner.attributeTypeMap;
    }
}
exports.Error422InvalidFieldListEmbeddedErrorsInner = Error422InvalidFieldListEmbeddedErrorsInner;
(function (Error422InvalidFieldListEmbeddedErrorsInner) {
    let CodeEnum;
    (function (CodeEnum) {
        CodeEnum[CodeEnum["InvalidField"] = 'INVALID_FIELD'] = "InvalidField";
    })(CodeEnum = Error422InvalidFieldListEmbeddedErrorsInner.CodeEnum || (Error422InvalidFieldListEmbeddedErrorsInner.CodeEnum = {}));
})(Error422InvalidFieldListEmbeddedErrorsInner = exports.Error422InvalidFieldListEmbeddedErrorsInner || (exports.Error422InvalidFieldListEmbeddedErrorsInner = {}));
