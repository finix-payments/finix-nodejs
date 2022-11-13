/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* The basic authentication configuration. Null if basic is not being used.
*/
export class CreateWebhookRequestAuthenticationBasic {
    /**
    * The username that will be used for basic authentication
    */
    'username'?: string;
    /**
    * The password to be used for basic authentication.
    */
    'password'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateWebhookRequestAuthenticationBasic.attributeTypeMap;
    }
}

