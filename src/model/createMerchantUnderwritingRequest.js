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
exports.CreateMerchantUnderwritingRequest = void 0;
class CreateMerchantUnderwritingRequest {
    static getAttributeTypeMap() {
        return CreateMerchantUnderwritingRequest.attributeTypeMap;
    }
}
exports.CreateMerchantUnderwritingRequest = CreateMerchantUnderwritingRequest;
CreateMerchantUnderwritingRequest.discriminator = undefined;
CreateMerchantUnderwritingRequest.attributeTypeMap = [
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "gateway",
        "baseName": "gateway",
        "type": "CreateMerchantUnderwritingRequest.GatewayEnum"
    },
    {
        "name": "processor",
        "baseName": "processor",
        "type": "string"
    },
    {
        "name": "processorSpecificParameters",
        "baseName": "processor_specific_parameters",
        "type": "object"
    }
];
(function (CreateMerchantUnderwritingRequest) {
    let GatewayEnum;
    (function (GatewayEnum) {
        GatewayEnum[GatewayEnum["CloudV1"] = 'TRIPOS_CLOUD_V1'] = "CloudV1";
        GatewayEnum[GatewayEnum["MobileV1"] = 'TRIPOS_MOBILE_V1'] = "MobileV1";
    })(GatewayEnum = CreateMerchantUnderwritingRequest.GatewayEnum || (CreateMerchantUnderwritingRequest.GatewayEnum = {}));
})(CreateMerchantUnderwritingRequest = exports.CreateMerchantUnderwritingRequest || (exports.CreateMerchantUnderwritingRequest = {}));
//# sourceMappingURL=createMerchantUnderwritingRequest.js.map