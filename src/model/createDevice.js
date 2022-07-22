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
exports.CreateDevice = void 0;
/**
*
*/
class CreateDevice {
    static getAttributeTypeMap() {
        return CreateDevice.attributeTypeMap;
    }
}
exports.CreateDevice = CreateDevice;
CreateDevice.discriminator = undefined;
CreateDevice.attributeTypeMap = [
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "configuration",
        "baseName": "configuration",
        "type": "ConfigurationDetails"
    },
    {
        "name": "merchantId",
        "baseName": "merchant_id",
        "type": "string"
    },
    {
        "name": "model",
        "baseName": "model",
        "type": "CreateDevice.ModelEnum"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
(function (CreateDevice) {
    let ModelEnum;
    (function (ModelEnum) {
        ModelEnum[ModelEnum["Bbpos"] = 'BBPOS'] = "Bbpos";
        ModelEnum[ModelEnum["Mx915"] = 'MX915'] = "Mx915";
        ModelEnum[ModelEnum["Mx925"] = 'MX925'] = "Mx925";
        ModelEnum[ModelEnum["Ipp320"] = 'IPP320'] = "Ipp320";
        ModelEnum[ModelEnum["Ipp350"] = 'IPP350'] = "Ipp350";
        ModelEnum[ModelEnum["Isc250"] = 'ISC250'] = "Isc250";
        ModelEnum[ModelEnum["Isc480"] = 'ISC480'] = "Isc480";
        ModelEnum[ModelEnum["Ismp4"] = 'ISMP4'] = "Ismp4";
        ModelEnum[ModelEnum["Android"] = 'ANDROID'] = "Android";
    })(ModelEnum = CreateDevice.ModelEnum || (CreateDevice.ModelEnum = {}));
})(CreateDevice = exports.CreateDevice || (exports.CreateDevice = {}));
