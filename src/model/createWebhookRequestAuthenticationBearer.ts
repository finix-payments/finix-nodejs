/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* The bearer authentication configuration. Null if bearer is not being used.
*/
export class CreateWebhookRequestAuthenticationBearer {
    /**
    * The string that Finix will send as the bearer token.
    */
    'token'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateWebhookRequestAuthenticationBearer.attributeTypeMap;
    }
}

