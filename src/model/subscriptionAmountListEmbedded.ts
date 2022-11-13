/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { SubscriptionAmount } from './subscriptionAmount';

/**
* List of `subscription_amount` objects.
*/
export class SubscriptionAmountListEmbedded {
    /**
    * `subscription_amount` objects.
    */
    'subscriptionAmounts'?: Set<SubscriptionAmount>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subscriptionAmounts",
            "baseName": "subscription_amounts",
            "type": "Set<SubscriptionAmount>"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAmountListEmbedded.attributeTypeMap;
    }
}

