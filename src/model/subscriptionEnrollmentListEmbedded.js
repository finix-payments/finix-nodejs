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
exports.SubscriptionEnrollmentListEmbedded = void 0;
class SubscriptionEnrollmentListEmbedded {
    static getAttributeTypeMap() {
        return SubscriptionEnrollmentListEmbedded.attributeTypeMap;
    }
}
exports.SubscriptionEnrollmentListEmbedded = SubscriptionEnrollmentListEmbedded;
SubscriptionEnrollmentListEmbedded.discriminator = undefined;
SubscriptionEnrollmentListEmbedded.attributeTypeMap = [
    {
        "name": "subscriptionEnrollments",
        "baseName": "subscription_enrollments",
        "type": "Set<SubscriptionEnrollment>"
    }
];
//# sourceMappingURL=subscriptionEnrollmentListEmbedded.js.map