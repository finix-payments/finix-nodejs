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
exports.CreateExternalLinkRequest = void 0;
class CreateExternalLinkRequest {
    /**
    * <ul><li>Set to <strong>UPLOAD</strong> to create a link that can be used to upload files to Finix.<li>Set to <strong>DOWNLOAD</strong> to create a link where the uploaded file can be downloaded from.<li>Set to <strong>VIEW</strong> to create a link that displays the file in browser.
    */
    'type';
    /**
    * Set how long (in minutes) the external link should be active for. The link can be active for up to 7 days in the future.
    */
    'duration';
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateExternalLinkRequest.TypeEnum"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }
    ];
    static getAttributeTypeMap() {
        return CreateExternalLinkRequest.attributeTypeMap;
    }
}
exports.CreateExternalLinkRequest = CreateExternalLinkRequest;
(function (CreateExternalLinkRequest) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Upload"] = 'UPLOAD'] = "Upload";
        TypeEnum[TypeEnum["Download"] = 'DOWNLOAD'] = "Download";
        TypeEnum[TypeEnum["View"] = 'VIEW'] = "View";
    })(TypeEnum = CreateExternalLinkRequest.TypeEnum || (CreateExternalLinkRequest.TypeEnum = {}));
})(CreateExternalLinkRequest = exports.CreateExternalLinkRequest || (exports.CreateExternalLinkRequest = {}));
//# sourceMappingURL=createExternalLinkRequest.js.map