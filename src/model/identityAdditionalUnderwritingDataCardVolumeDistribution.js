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
exports.IdentityAdditionalUnderwritingDataCardVolumeDistribution = void 0;
/**
* The distribution of the merchant\'s credit card volume The sum of `card_volume_distribution` must be 100.
*/
class IdentityAdditionalUnderwritingDataCardVolumeDistribution {
    /**
    * The percentage of the merchant\'s volume that\'s card present (between 0 and 100).
    */
    'cardPresentPercentage';
    /**
    * The percentage of the merchant\'s business that is eCommerce (between 0 and 100).
    */
    'ecommercePercentage';
    /**
    * The percentage of the merchant\'s business that is a mail or telephone order (between 0 and 100).
    */
    'mailOrderTelephoneOrderPercentage';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "cardPresentPercentage",
            "baseName": "card_present_percentage",
            "type": "number"
        },
        {
            "name": "ecommercePercentage",
            "baseName": "ecommerce_percentage",
            "type": "number"
        },
        {
            "name": "mailOrderTelephoneOrderPercentage",
            "baseName": "mail_order_telephone_order_percentage",
            "type": "number"
        }
    ];
    static getAttributeTypeMap() {
        return IdentityAdditionalUnderwritingDataCardVolumeDistribution.attributeTypeMap;
    }
}
exports.IdentityAdditionalUnderwritingDataCardVolumeDistribution = IdentityAdditionalUnderwritingDataCardVolumeDistribution;
