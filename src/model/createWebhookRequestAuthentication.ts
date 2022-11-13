/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { CreateWebhookRequestAuthenticationBasic } from './createWebhookRequestAuthenticationBasic';
import { CreateWebhookRequestAuthenticationBearer } from './createWebhookRequestAuthenticationBearer';

/**
* The [authentication settings](/guides/developers/webhooks/#authenticating-webhooks) that are used to send webhook events.
*/
export class CreateWebhookRequestAuthentication {
    'basic'?: CreateWebhookRequestAuthenticationBasic;
    'bearer'?: CreateWebhookRequestAuthenticationBearer;
    /**
    * The type of authentication the webhook will use: - **NONE**: No authentication will be used. - **BASIC**: Basic authentication. - **BEARER**: Oauth2\'s Bearer Token.
    */
    'type'?: CreateWebhookRequestAuthentication.TypeEnum | string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "basic",
            "baseName": "basic",
            "type": "CreateWebhookRequestAuthenticationBasic"
        },
        {
            "name": "bearer",
            "baseName": "bearer",
            "type": "CreateWebhookRequestAuthenticationBearer"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateWebhookRequestAuthentication.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateWebhookRequestAuthentication.attributeTypeMap;
    }
}

export namespace CreateWebhookRequestAuthentication {
    export enum TypeEnum {
        None = <any> 'NONE',
        Basic = <any> 'BASIC',
        Bearer = <any> 'BEARER'
    }
}
