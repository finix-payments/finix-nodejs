/**
 * Finix API
 */

import { RequestFile } from './models';
import { Settlement } from './settlement';

/**
* List of `Settlement` objects.
*/
export class SettlementsListEmbedded {
    /**
    * `Settlements` resource.
    */
    'settlements'?: Set<Settlement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "settlements",
            "baseName": "settlements",
            "type": "Set<Settlement>"
        }    ];

    static getAttributeTypeMap() {
        return SettlementsListEmbedded.attributeTypeMap;
    }
}

