/**
 * Finix API
 */

import { RequestFile } from './models';
import { CreateSubscriptionAmountRequestFeeAmountData } from './createSubscriptionAmountRequestFeeAmountData';

/**
* 
*/
export class CreateSubscriptionAmountRequest {
    /**
    * `Subscription Amount` type. For subscriptions, the type is **FEE**.
    */
    'amountType': string;
    'feeAmountData': CreateSubscriptionAmountRequestFeeAmountData;
    /**
    * Human readable name.
    */
    'nickname'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountType",
            "baseName": "amount_type",
            "type": "string"
        },
        {
            "name": "feeAmountData",
            "baseName": "fee_amount_data",
            "type": "CreateSubscriptionAmountRequestFeeAmountData"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateSubscriptionAmountRequest.attributeTypeMap;
    }
}

