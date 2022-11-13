/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the `merchant_profile` the request was made under.
*/
export class MerchantLinksMerchantProfile {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantLinksMerchantProfile.attributeTypeMap;
    }
}

