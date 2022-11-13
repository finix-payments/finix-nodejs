/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { FeeProfile } from './feeProfile';

/**
* List of `fee_profile` objects.
*/
export class FeeProfilesListEmbedded {
    /**
    * `fee_profile` objects.
    */
    'feeProfiles'?: Set<FeeProfile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feeProfiles",
            "baseName": "fee_profiles",
            "type": "Set<FeeProfile>"
        }    ];

    static getAttributeTypeMap() {
        return FeeProfilesListEmbedded.attributeTypeMap;
    }
}

