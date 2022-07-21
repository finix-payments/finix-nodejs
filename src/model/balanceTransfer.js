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
exports.BalanceTransfer = void 0;
/**
* A `balance_transfer` object.
*/
class BalanceTransfer {
    static getAttributeTypeMap() {
        return BalanceTransfer.attributeTypeMap;
    }
}
exports.BalanceTransfer = BalanceTransfer;
BalanceTransfer.discriminator = undefined;
BalanceTransfer.attributeTypeMap = [
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
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "Currency"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "destination",
        "baseName": "destination",
        "type": "string"
    },
    {
        "name": "externalReferenceId",
        "baseName": "external_reference_id",
        "type": "string"
    },
    {
        "name": "processorType",
        "baseName": "processor_type",
        "type": "string"
    },
    {
        "name": "referenceId",
        "baseName": "reference_id",
        "type": "string"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "BalanceTransfer.StateEnum"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "ListLinks"
    }
];
(function (BalanceTransfer) {
    let StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Created"] = 'CREATED'] = "Created";
        StateEnum[StateEnum["Submitting"] = 'SUBMITTING'] = "Submitting";
        StateEnum[StateEnum["Submitted"] = 'SUBMITTED'] = "Submitted";
        StateEnum[StateEnum["Succeeded"] = 'SUCCEEDED'] = "Succeeded";
        StateEnum[StateEnum["Failed"] = 'FAILED'] = "Failed";
        StateEnum[StateEnum["Returned"] = 'RETURNED'] = "Returned";
        StateEnum[StateEnum["Unknowm"] = 'UNKNOWM'] = "Unknowm";
    })(StateEnum = BalanceTransfer.StateEnum || (BalanceTransfer.StateEnum = {}));
})(BalanceTransfer = exports.BalanceTransfer || (exports.BalanceTransfer = {}));
//# sourceMappingURL=balanceTransfer.js.map