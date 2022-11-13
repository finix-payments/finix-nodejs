/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Currency } from './currency';

/**
* The amount and currency of this `Subsciption Amount`.
*/
export class CreateSubscriptionAmountRequestFeeAmountData {
    /**
    * A positive integer in cents representing how much to charge on a recurring basis.
    */
    'amount': number;
    'currency': Currency;
    /**
    * The display name of the `Subscirption Amount` that can be used for filtering purposes.
    */
    'label'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateSubscriptionAmountRequestFeeAmountData.attributeTypeMap;
    }
}

