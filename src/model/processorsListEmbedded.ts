/**
 * Finix API
 */

import { RequestFile } from './models';
import { Processor } from './processor';

/**
* List of `Processors` objects.
*/
export class ProcessorsListEmbedded {
    /**
    * `Processors` objects.
    */
    'processors'?: Set<Processor>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "processors",
            "baseName": "processors",
            "type": "Set<Processor>"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorsListEmbedded.attributeTypeMap;
    }
}

