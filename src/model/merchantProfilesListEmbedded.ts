/**
 * Finix API
 */

import { RequestFile } from './models';
import { MerchantProfile } from './merchantProfile';

/**
* List of `merchant_profile` objects.
*/
export class MerchantProfilesListEmbedded {
    /**
    * `merchant_profile` objects.
    */
    'merchantProfiles'?: Array<MerchantProfile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantProfiles",
            "baseName": "merchant_profiles",
            "type": "Array<MerchantProfile>"
        }    ];

    static getAttributeTypeMap() {
        return MerchantProfilesListEmbedded.attributeTypeMap;
    }
}

