/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* The distribution of the merchant\'s credit card volume The sum of `card_volume_distribution` must be 100.
*/
export class CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution {
    /**
    * The percentage of the merchant\'s volume that\'s card present (between 0 and 100).
    */
    'cardPresentPercentage'?: number;
    /**
    * The percentage of the merchant\'s business that is a mail order or telephone order (between 0 and 100).
    */
    'mailOrderTelephoneOrderPercentage'?: number;
    /**
    * The percentage of the merchant\'s business that is eCommerce (between 0 and 100).
    */
    'ecommercePercentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution.attributeTypeMap;
    }
}

