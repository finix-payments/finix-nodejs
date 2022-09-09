/**
 * Finix API
 */

import { RequestFile } from './models';

export class UpdateWebhookRequest {
    /**
    * Set to false to disable `Webhooks`. Default value when created is true.
    */
    'enabled'?: boolean;
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
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateWebhookRequest.attributeTypeMap;
    }
}

