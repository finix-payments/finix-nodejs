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
exports.Error404NotFoundListEmbeddedErrorsInner = void 0;
class Error404NotFoundListEmbeddedErrorsInner {
    'code';
    'logref';
    'message';
    'links';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "Error404NotFoundListEmbeddedErrorsInner.CodeEnum"
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
        return Error404NotFoundListEmbeddedErrorsInner.attributeTypeMap;
    }
}
exports.Error404NotFoundListEmbeddedErrorsInner = Error404NotFoundListEmbeddedErrorsInner;
(function (Error404NotFoundListEmbeddedErrorsInner) {
    let CodeEnum;
    (function (CodeEnum) {
        CodeEnum[CodeEnum["NotFound"] = 'NOT_FOUND'] = "NotFound";
    })(CodeEnum = Error404NotFoundListEmbeddedErrorsInner.CodeEnum || (Error404NotFoundListEmbeddedErrorsInner.CodeEnum = {}));
})(Error404NotFoundListEmbeddedErrorsInner = exports.Error404NotFoundListEmbeddedErrorsInner || (exports.Error404NotFoundListEmbeddedErrorsInner = {}));
//# sourceMappingURL=error404NotFoundListEmbeddedErrorsInner.js.map