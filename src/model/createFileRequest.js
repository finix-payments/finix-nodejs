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
exports.CreateFileRequest = void 0;
class CreateFileRequest {
    static getAttributeTypeMap() {
        return CreateFileRequest.attributeTypeMap;
    }
}
exports.CreateFileRequest = CreateFileRequest;
CreateFileRequest.discriminator = undefined;
CreateFileRequest.attributeTypeMap = [
    {
        "name": "displayName",
        "baseName": "display_name",
        "type": "string"
    },
    {
        "name": "linkedTo",
        "baseName": "linked_to",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "CreateFileRequest.TypeEnum"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    }
];
(function (CreateFileRequest) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["DriversLicenseFront"] = 'DRIVERS_LICENSE_FRONT'] = "DriversLicenseFront";
        TypeEnum[TypeEnum["DriversLicenseBack"] = 'DRIVERS_LICENSE_BACK'] = "DriversLicenseBack";
        TypeEnum[TypeEnum["IdentificationCardFront"] = 'IDENTIFICATION_CARD_FRONT'] = "IdentificationCardFront";
        TypeEnum[TypeEnum["IdentificationCardBack"] = 'IDENTIFICATION_CARD_BACK'] = "IdentificationCardBack";
        TypeEnum[TypeEnum["BankStatement"] = 'BANK_STATEMENT'] = "BankStatement";
        TypeEnum[TypeEnum["TaxDocument"] = 'TAX_DOCUMENT'] = "TaxDocument";
        TypeEnum[TypeEnum["BusinessRegistration"] = 'BUSINESS_REGISTRATION'] = "BusinessRegistration";
        TypeEnum[TypeEnum["BusinessAddressVerification"] = 'BUSINESS_ADDRESS_VERIFICATION'] = "BusinessAddressVerification";
        TypeEnum[TypeEnum["Other"] = 'OTHER'] = "Other";
        TypeEnum[TypeEnum["PciDocument"] = 'PCI_DOCUMENT'] = "PciDocument";
        TypeEnum[TypeEnum["Passport"] = 'PASSPORT'] = "Passport";
    })(TypeEnum = CreateFileRequest.TypeEnum || (CreateFileRequest.TypeEnum = {}));
})(CreateFileRequest = exports.CreateFileRequest || (exports.CreateFileRequest = {}));
//# sourceMappingURL=createFileRequest.js.map