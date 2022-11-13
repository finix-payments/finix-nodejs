/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the `Verification` that was used to verify the `Identity` that the request was made under.
*/
export class MerchantLinksVerification {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantLinksVerification.attributeTypeMap;
    }
}

