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
exports.DisputeEvidence = void 0;
class DisputeEvidence {
    static getAttributeTypeMap() {
        return DisputeEvidence.attributeTypeMap;
    }
}
exports.DisputeEvidence = DisputeEvidence;
DisputeEvidence.discriminator = undefined;
DisputeEvidence.attributeTypeMap = [
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "Date"
    },
    {
        "name": "dispute",
        "baseName": "dispute",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "DisputeEvidence.StateEnum"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "DisputeEvidenceLinks"
    }
];
(function (DisputeEvidence) {
    let StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Pending"] = 'PENDING'] = "Pending";
        StateEnum[StateEnum["Succeeded"] = 'SUCCEEDED'] = "Succeeded";
        StateEnum[StateEnum["Canceled"] = 'CANCELED'] = "Canceled";
        StateEnum[StateEnum["Failed"] = 'FAILED'] = "Failed";
    })(StateEnum = DisputeEvidence.StateEnum || (DisputeEvidence.StateEnum = {}));
})(DisputeEvidence = exports.DisputeEvidence || (exports.DisputeEvidence = {}));
