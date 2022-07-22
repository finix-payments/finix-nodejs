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
exports.CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution = void 0;
/**
* The distribution of the merchant\'s credit card volume The sum of `card_volume_distribution` must be 100.
*/
class CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution {
    static getAttributeTypeMap() {
        return CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution.attributeTypeMap;
    }
}
exports.CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution = CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution;
CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution.discriminator = undefined;
CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution.attributeTypeMap = [
    {
        "name": "cardPresentPercentage",
        "baseName": "card_present_percentage",
        "type": "number"
    },
    {
        "name": "mailOrderTelephoneOrderPercentage",
        "baseName": "mail_order_telephone_order_percentage",
        "type": "number"
    },
    {
        "name": "ecommercePercentage",
        "baseName": "ecommerce_percentage",
        "type": "number"
    }
];
