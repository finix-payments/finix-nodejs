/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the `Merchant` that was used in the request.
*/
export class VerificationLinksMerchant {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return VerificationLinksMerchant.attributeTypeMap;
    }
}

