/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Fee } from './fee';

/**
* List of `fee` objects.
*/
export class FeesListEmbedded {
    /**
    * `fee` objects.
    */
    'fees'?: Set<Fee>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fees",
            "baseName": "fees",
            "type": "Set<Fee>"
        }    ];

    static getAttributeTypeMap() {
        return FeesListEmbedded.attributeTypeMap;
    }
}

