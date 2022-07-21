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
exports.Authorization = void 0;
/**
* A charge authorization
*/
class Authorization {
    static getAttributeTypeMap() {
        return Authorization.attributeTypeMap;
    }
}
exports.Authorization = Authorization;
Authorization.discriminator = undefined;
Authorization.attributeTypeMap = [
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
        "name": "_3dsRedirectUrl",
        "baseName": "3ds_redirect_url",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "application",
        "baseName": "application",
        "type": "string"
    },
    {
        "name": "cardPresentDetails",
        "baseName": "card_present_details",
        "type": "CardPresentDetails"
    },
    {
        "name": "captureAmount",
        "baseName": "capture_amount",
        "type": "number"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "Currency"
    },
    {
        "name": "device",
        "baseName": "device",
        "type": "string"
    },
    {
        "name": "expiresAt",
        "baseName": "expires_at",
        "type": "Date"
    },
    {
        "name": "externalResponses",
        "baseName": "external_responses",
        "type": "Array<AuthorizationExternalResponsesInner>"
    },
    {
        "name": "idempotencyId",
        "baseName": "idempotency_id",
        "type": "string"
    },
    {
        "name": "failureCode",
        "baseName": "failure_code",
        "type": "string"
    },
    {
        "name": "failureMessage",
        "baseName": "failure_message",
        "type": "string"
    },
    {
        "name": "isVoid",
        "baseName": "is_void",
        "type": "boolean"
    },
    {
        "name": "merchantIdentity",
        "baseName": "merchant_identity",
        "type": "string"
    },
    {
        "name": "merchant",
        "baseName": "merchant",
        "type": "string"
    },
    {
        "name": "messages",
        "baseName": "messages",
        "type": "Array<string>"
    },
    {
        "name": "raw",
        "baseName": "raw",
        "type": "object"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "Authorization.StateEnum"
    },
    {
        "name": "traceId",
        "baseName": "trace_id",
        "type": "string"
    },
    {
        "name": "transfer",
        "baseName": "transfer",
        "type": "string"
    },
    {
        "name": "voidState",
        "baseName": "void_state",
        "type": "string"
    },
    {
        "name": "subType",
        "baseName": "sub_type",
        "type": "SubTypeTransfer"
    },
    {
        "name": "links",
        "baseName": "_links",
        "type": "AuthorizationLinks"
    }
];
(function (Authorization) {
    let StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Canceled"] = 'CANCELED'] = "Canceled";
        StateEnum[StateEnum["Pending"] = 'PENDING'] = "Pending";
        StateEnum[StateEnum["Failed"] = 'FAILED'] = "Failed";
        StateEnum[StateEnum["Succeeded"] = 'SUCCEEDED'] = "Succeeded";
        StateEnum[StateEnum["Unknown"] = 'UNKNOWN'] = "Unknown";
    })(StateEnum = Authorization.StateEnum || (Authorization.StateEnum = {}));
})(Authorization = exports.Authorization || (exports.Authorization = {}));
//# sourceMappingURL=authorization.js.map