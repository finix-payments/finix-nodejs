/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* The distribution of the merchant\'s credit card volume The sum of `card_volume_distribution` must be 100.
*/
export class UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution {
    /**
    * The percentage of the merchant\'s business that\'s card present (between 0 and 100).
    */
    'cardPresentPercentage'?: number;
    /**
    * The percentage of the merchant\'s business that\'s e-commerce (between 0 and 100).
    */
    'ecommercePercentage'?: number;
    /**
    * The percentage of the merchant\'s business that\'s mail or telephone order (between 0 and 100).
    */
    'mailOrderTelephoneOrderPercentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution.attributeTypeMap;
    }
}

