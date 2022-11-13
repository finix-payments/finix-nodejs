/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Merchant\'s distribution of credit card volume by business type. Sum of `volume_distribution_by_business_type` must be 100.
*/
export class IdentityAdditionalUnderwritingDataVolumeDistributionByBusinessType {
    /**
    * The percentage of the merchant\'s volume that\'s business to business (between 0 and 100).
    */
    'businessToBusinessVolumePercentage'?: number;
    /**
    * The percentage of the merchant\'s volume that\'s business to consumer (between 0 and 100).
    */
    'businessToConsumerVolumePercentage'?: number;
    /**
    * Merchant\'s percentage of volume that is consumer to consumer (between 0 and 100).
    */
    'consumerToConsumerVolumePercentage'?: number;
    /**
    * The percentage of the merchant\'s volume that isn\'t represented by the previous fields (between 0 and 100).
    */
    'otherVolumePercentage'?: number;
    /**
    * The percentage the merchant\'s volume that\'s person to person (between 0 and 100).
    */
    'personToPersonVolumePercentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "businessToBusinessVolumePercentage",
            "baseName": "business_to_business_volume_percentage",
            "type": "number"
        },
        {
            "name": "businessToConsumerVolumePercentage",
            "baseName": "business_to_consumer_volume_percentage",
            "type": "number"
        },
        {
            "name": "consumerToConsumerVolumePercentage",
            "baseName": "consumer_to_consumer_volume_percentage",
            "type": "number"
        },
        {
            "name": "otherVolumePercentage",
            "baseName": "other_volume_percentage",
            "type": "number"
        },
        {
            "name": "personToPersonVolumePercentage",
            "baseName": "person_to_person_volume_percentage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IdentityAdditionalUnderwritingDataVolumeDistributionByBusinessType.attributeTypeMap;
    }
}

