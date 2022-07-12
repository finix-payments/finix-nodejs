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
exports.ListMerchantProfilesQueryParams = void 0;
class ListMerchantProfilesQueryParams {
    /**
    * Filter by id
    */
    'id';
    /**
    * Return every resource created before the cursor value.
    */
    'beforeCursor';
    /**
    * Return every resource created after the cursor value.
    */
    'afterCursor';
    /**
    * The numbers of items to return
    */
    'limit';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "beforeCursor",
            "baseName": "before_cursor",
            "type": "string"
        },
        {
            "name": "afterCursor",
            "baseName": "after_cursor",
            "type": "string"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        }
    ];
    static getAttributeTypeMap() {
        return ListMerchantProfilesQueryParams.attributeTypeMap;
    }
}
exports.ListMerchantProfilesQueryParams = ListMerchantProfilesQueryParams;
//# sourceMappingURL=listMerchantProfilesQueryParams.js.map