/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ProcessorLinks } from './processorLinks';
import { WebhookAuthentication } from './webhookAuthentication';
import { WebhookEnabledEventsInner } from './webhookEnabledEventsInner';

export class Webhook {
    /**
    * The ID of the `Webhook` resource.
    */
    'id'?: string;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The ID of the `Application` resource the `Webhook` was created under.
    */
    'application'?: string;
    'authentication'?: WebhookAuthentication;
    /**
    * Details if the `Webhook` is enabled:<ul><li><strong>true</strong>: Events are being sent to the `url`.<li><strong>false</strong>: Events are not being sent.
    */
    'enabled'?: boolean;
    /**
    * A list of events the [webhook is explicitly enabled for](/guides/developers/webhooks/#webhook-event-filtering).
    */
    'enabledEvents'?: Array<WebhookEnabledEventsInner>;
    /**
    * The time when the previous `secret_signing_key` will expire. This is **null** when the webhook is initially created.
    */
    'previousSecretExpiresAt'?: string | null;
    /**
    * The secret signing key that gets used to verify webhook events.
    */
    'secretSigningKey'?: string | null;
    /**
    * The HTTP or HTTPS URL where callbacks (i.e. events) will be sent via POST request (max 120 characters).
    */
    'url'?: string;
    'links'?: ProcessorLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "authentication",
            "baseName": "authentication",
            "type": "WebhookAuthentication"
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
            "name": "previousSecretExpiresAt",
            "baseName": "previous_secret_expires_at",
            "type": "string"
        },
        {
            "name": "secretSigningKey",
            "baseName": "secret_signing_key",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ProcessorLinks"
        }    ];

    static getAttributeTypeMap() {
        return Webhook.attributeTypeMap;
    }
}

