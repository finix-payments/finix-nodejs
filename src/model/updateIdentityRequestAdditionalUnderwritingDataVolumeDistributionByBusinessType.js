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
exports.UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType = void 0;
/**
* Merchant\'s distribution of credit card volume by business type. Sum of `volume_distribution_by_business_type` must be 100.
*/
class UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType {
    /**
    * The percentage of the merchant\'s volume that isn\'t represented by the previous fields (between 0 and 100).
    */
    'otherVolumePercentage';
    /**
    * Merchant\'s percentage of volume that is consumer to consumer (between 0 and 100).
    */
    'consumerToConsumerVolumePercentage';
    /**
    * The percentage of the merchant\'s volume that\'s business to consumer (between 0 and 100).
    */
    'businessToConsumerVolumePercentage';
    /**
    * The percentage of the merchant\'s volume that\'s business to business (between 0 and 100).
    */
    'businessToBusinessVolumePercentage';
    /**
    * The percentage the merchant\'s volume that\'s person to person (between 0 and 100).
    */
    'personToPersonVolumePercentage';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "otherVolumePercentage",
            "baseName": "other_volume_percentage",
            "type": "number"
        },
        {
            "name": "consumerToConsumerVolumePercentage",
            "baseName": "consumer_to_consumer_volume_percentage",
            "type": "number"
        },
        {
            "name": "businessToConsumerVolumePercentage",
            "baseName": "business_to_consumer_volume_percentage",
            "type": "number"
        },
        {
            "name": "businessToBusinessVolumePercentage",
            "baseName": "business_to_business_volume_percentage",
            "type": "number"
        },
        {
            "name": "personToPersonVolumePercentage",
            "baseName": "person_to_person_volume_percentage",
            "type": "number"
        }
    ];
    static getAttributeTypeMap() {
        return UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType.attributeTypeMap;
    }
}
exports.UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType = UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType;
//# sourceMappingURL=updateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType.js.map