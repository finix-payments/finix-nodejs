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
exports.Error403ForbiddenListEmbeddedErrorsInner = void 0;
class Error403ForbiddenListEmbeddedErrorsInner {
    static getAttributeTypeMap() {
        return Error403ForbiddenListEmbeddedErrorsInner.attributeTypeMap;
    }
}
exports.Error403ForbiddenListEmbeddedErrorsInner = Error403ForbiddenListEmbeddedErrorsInner;
Error403ForbiddenListEmbeddedErrorsInner.discriminator = undefined;
Error403ForbiddenListEmbeddedErrorsInner.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "Error403ForbiddenListEmbeddedErrorsInner.CodeEnum"
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
(function (Error403ForbiddenListEmbeddedErrorsInner) {
    let CodeEnum;
    (function (CodeEnum) {
        CodeEnum[CodeEnum["Forbidden"] = 'FORBIDDEN'] = "Forbidden";
    })(CodeEnum = Error403ForbiddenListEmbeddedErrorsInner.CodeEnum || (Error403ForbiddenListEmbeddedErrorsInner.CodeEnum = {}));
})(Error403ForbiddenListEmbeddedErrorsInner = exports.Error403ForbiddenListEmbeddedErrorsInner || (exports.Error403ForbiddenListEmbeddedErrorsInner = {}));
//# sourceMappingURL=error403ForbiddenListEmbeddedErrorsInner.js.map