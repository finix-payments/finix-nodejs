/**
 * Finix API
 */

import { RequestFile } from './models';
import { CreateWebhookRequestAuthentication } from './createWebhookRequestAuthentication';

export class CreateWebhookRequest {
    'authentication'?: CreateWebhookRequestAuthentication;
    /**
    * Set to false to disable Webhooks. Default value when created is true.
    */
    'enabled'?: boolean;
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
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateWebhookRequest.attributeTypeMap;
    }
}

