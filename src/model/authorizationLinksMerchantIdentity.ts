/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `Identity` the `Merchant` was created under and the `Transfer` was submitted with.
*/
export class AuthorizationLinksMerchantIdentity {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationLinksMerchantIdentity.attributeTypeMap;
    }
}

