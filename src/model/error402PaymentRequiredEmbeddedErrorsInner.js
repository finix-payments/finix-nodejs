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
exports.Error402PaymentRequiredEmbeddedErrorsInner = void 0;
class Error402PaymentRequiredEmbeddedErrorsInner {
    'code';
    'logref';
    'message';
    'links';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum"
        },
        {
            "name": "logref",
            "baseName": "logref",
            "type": "LogRef"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "Error402PaymentRequiredEmbeddedErrorsInnerLinks"
        }
    ];
    static getAttributeTypeMap() {
        return Error402PaymentRequiredEmbeddedErrorsInner.attributeTypeMap;
    }
}
exports.Error402PaymentRequiredEmbeddedErrorsInner = Error402PaymentRequiredEmbeddedErrorsInner;
(function (Error402PaymentRequiredEmbeddedErrorsInner) {
    let CodeEnum;
    (function (CodeEnum) {
        CodeEnum[CodeEnum["CallIssuer"] = 'CALL_ISSUER'] = "CallIssuer";
    })(CodeEnum = Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum || (Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum = {}));
    let MessageEnum;
    (function (MessageEnum) {
        MessageEnum[MessageEnum["PleaseContactCardIssuerForMoreInformation"] = 'Please contact card issuer for more information.'] = "PleaseContactCardIssuerForMoreInformation";
    })(MessageEnum = Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum || (Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum = {}));
})(Error402PaymentRequiredEmbeddedErrorsInner = exports.Error402PaymentRequiredEmbeddedErrorsInner || (exports.Error402PaymentRequiredEmbeddedErrorsInner = {}));
//# sourceMappingURL=error402PaymentRequiredEmbeddedErrorsInner.js.map