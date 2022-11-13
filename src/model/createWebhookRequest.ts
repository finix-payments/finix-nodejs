/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { CreateWebhookRequestAuthentication } from './createWebhookRequestAuthentication';
import { WebhookEnabledEventsInner } from './webhookEnabledEventsInner';

export class CreateWebhookRequest {
    'authentication'?: CreateWebhookRequestAuthentication;
    /**
    * Set to false to disable Webhooks. Default value when created is true.
    */
    'enabled'?: boolean;
    /**
    * A list of events the [webhook is explicitly enabled for](/guides/developers/webhooks/#webhook-event-filtering).
    */
    'enabledEvents'?: Array<WebhookEnabledEventsInner>;
    /**
    * The HTTP or HTTPS URL where callbacks (i.e. events) will be sent via POST request (max 120 characters).
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authentication",
            "baseName": "authentication",
            "type": "CreateWebhookRequestAuthentication"
        },
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
        return CreateWebhookRequest.attributeTypeMap;
    }
}

