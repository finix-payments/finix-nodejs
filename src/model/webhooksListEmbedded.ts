/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Webhook } from './webhook';

/**
* List of `Webhook` objects.
*/
export class WebhooksListEmbedded {
    /**
    * `Webhook` objects.
    */
    'webhooks'?: Set<Webhook>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "Set<Webhook>"
        }    ];

    static getAttributeTypeMap() {
        return WebhooksListEmbedded.attributeTypeMap;
    }
}

