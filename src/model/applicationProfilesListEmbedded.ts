/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationProfile } from './applicationProfile';

/**
* List of `application_profile` resources.
*/
export class ApplicationProfilesListEmbedded {
    /**
    * `application_profile` resources.
    */
    'applicationProfiles'?: Set<ApplicationProfile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applicationProfiles",
            "baseName": "application_profiles",
            "type": "Set<ApplicationProfile>"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationProfilesListEmbedded.attributeTypeMap;
    }
}

