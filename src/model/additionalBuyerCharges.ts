/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Object detailing any [Buyer Charges](/guides/payments/making-a-payment/buyer-charges/) that got included in the `Authorization`.
*/
export class AdditionalBuyerCharges {
    /**
    * Include the convenience fee the merchant is charging the buyer for the transaction when creating a `Transfer` or an `Authorization`.
    */
    'convenienceAmount'?: number | null;
    /**
    * Include the rent surcharge the merchant is charging the buyer for the transaction when creating a `Transfer` or an `Authorization`.
    */
    'rentSurchargeAmount'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "convenienceAmount",
            "baseName": "convenience_amount",
            "type": "number"
        },
        {
            "name": "rentSurchargeAmount",
            "baseName": "rent_surcharge_amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalBuyerCharges.attributeTypeMap;
    }
}

