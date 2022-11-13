/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { PayoutProfile } from './payoutProfile';

/**
* List of `Payout Profiles`.
*/
export class PayoutProfilesListEmbedded {
    /**
    * `Payout Profile` objects.
    */
    'payoutProfiles'?: Array<PayoutProfile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "payoutProfiles",
            "baseName": "payout_profiles",
            "type": "Array<PayoutProfile>"
        }    ];

    static getAttributeTypeMap() {
        return PayoutProfilesListEmbedded.attributeTypeMap;
    }
}

