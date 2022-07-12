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
exports.ListSubscriptionAmountQueryParams = void 0;
class ListSubscriptionAmountQueryParams {
    /**
    * The numbers of items to return
    */
    'limit';
    /**
    * Return every resource created after the cursor value.
    */
    'afterCursor';
    /**
    * Return every resource created before the cursor value.
    */
    'beforeCursor';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "afterCursor",
            "baseName": "after_cursor",
            "type": "string"
        },
        {
            "name": "beforeCursor",
            "baseName": "before_cursor",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return ListSubscriptionAmountQueryParams.attributeTypeMap;
    }
}
exports.ListSubscriptionAmountQueryParams = ListSubscriptionAmountQueryParams;
//# sourceMappingURL=listSubscriptionAmountQueryParams.js.map