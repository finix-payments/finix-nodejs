/**
 * Finix API
 */

import { RequestFile } from './models';
import { Identity } from './identity';

/**
* List of `Identity` resources.
*/
export class IdentitiesListEmbedded {
    /**
    * An `Identity` resource represents either a person or business in Finix.
    */
    'identities'?: Set<Identity>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "identities",
            "baseName": "identities",
            "type": "Set<Identity>"
        }    ];

    static getAttributeTypeMap() {
        return IdentitiesListEmbedded.attributeTypeMap;
    }
}

