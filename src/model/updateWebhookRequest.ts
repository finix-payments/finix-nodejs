/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { WebhookEnabledEventsInner } from './webhookEnabledEventsInner';

export class UpdateWebhookRequest {
    /**
    * Set to false to disable `Webhooks`. Default value when created is true.
    */
    'enabled'?: boolean;
    /**
    * A list of events the [webhook is explicitly enabled for](/guides/developers/webhooks/#webhook-event-filtering).
    */
    'enabledEvents'?: Array<WebhookEnabledEventsInner>;
    /**
    * The HTTP or HTTPS url where the callbacks will be sent via POST request (max 120 characters).
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "enabledEvents",
            "baseName": "enabled_events",
            "type": "Array<WebhookEnabledEventsInner>"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateWebhookRequest.attributeTypeMap;
    }
}

