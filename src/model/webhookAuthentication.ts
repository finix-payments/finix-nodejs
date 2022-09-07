/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* The authentication settings that are used to send webhook events.
*/
export class WebhookAuthentication {
    /**
    * The type of authentication the webhook will use: - NONE: No authentication will be used. - BASIC: Basic authentication. - BEARER: Oauth2\'s Bearer Token.
    */
    'type'?: WebhookAuthentication.TypeEnum | string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WebhookAuthentication.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return WebhookAuthentication.attributeTypeMap;
    }
}

export namespace WebhookAuthentication {
    export enum TypeEnum {
        None = <any> 'NONE',
        Basic = <any> 'BASIC',
        Bearer = <any> 'BEARER'
    }
}
