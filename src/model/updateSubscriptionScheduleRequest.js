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
exports.UpdateSubscriptionScheduleRequest = void 0;
class UpdateSubscriptionScheduleRequest {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }
    ];
    static getAttributeTypeMap() {
        return UpdateSubscriptionScheduleRequest.attributeTypeMap;
    }
}
exports.UpdateSubscriptionScheduleRequest = UpdateSubscriptionScheduleRequest;
//# sourceMappingURL=updateSubscriptionScheduleRequest.js.map