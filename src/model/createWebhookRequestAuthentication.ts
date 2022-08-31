/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CreateWebhookRequestAuthenticationBasic } from './createWebhookRequestAuthenticationBasic';
import { CreateWebhookRequestAuthenticationBearer } from './createWebhookRequestAuthenticationBearer';

/**
* The authentication settings that are used to send webhook events.
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
