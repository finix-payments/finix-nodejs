/**
 * Finix API
 */

import { RequestFile } from './models';
import { Merchant } from './merchant';

/**
* List of `Merchant` objects.
*/
export class MerchantsListEmbedded {
    /**
    * `Merchant` objects.
    */
    'merchants'?: Set<Merchant>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchants",
            "baseName": "merchants",
            "type": "Set<Merchant>"
        }    ];

    static getAttributeTypeMap() {
        return MerchantsListEmbedded.attributeTypeMap;
    }
}

