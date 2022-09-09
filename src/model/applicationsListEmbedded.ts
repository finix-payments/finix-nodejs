/**
 * Finix API
 */

import { RequestFile } from './models';
import { Application } from './application';

/**
* List of `Application` resources.
*/
export class ApplicationsListEmbedded {
    /**
    * `Application` resources.
    */
    'applications'?: Set<Application>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applications",
            "baseName": "applications",
            "type": "Set<Application>"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationsListEmbedded.attributeTypeMap;
    }
}

