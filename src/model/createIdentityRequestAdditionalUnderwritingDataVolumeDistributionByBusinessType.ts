/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* IP address of the merchant when this merchant accepted the merchant agreement (e.g., 42.1.1.113).
*/
export class CreateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType {
    /**
    * The percentage of the merchant\'s volume that isn\'t represented by the previous fields (between 0 and 100).
    */
    'otherVolumePercentage'?: number;
    /**
    * Merchant\'s percentage of volume that is consumer to consumer (between 0 and 100).
    */
    'consumerToConsumerVolumePercentage'?: number;
    /**
    * The percentage of the merchant\'s volume that\'s business to consumer (between 0 and 100).
    */
    'businessToConsumerVolumePercentage'?: number;
    /**
    * The percentage of the merchant\'s volume that\'s business to business (between 0 and 100).
    */
    'businessToBusinessVolumePercentage'?: number;
    /**
    * The percentage of the merchant\'s volume that\'s person to person (between 0 and 100).
    */
    'personToPersonVolumePercentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return CreateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType.attributeTypeMap;
    }
}

