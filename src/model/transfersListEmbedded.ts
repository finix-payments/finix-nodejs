/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Transfer } from './transfer';

/**
* List of `Transfer` objects.
*/
export class TransfersListEmbedded {
    /**
    * `Transfer` objects.
    */
    'transfers'?: Set<Transfer>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Set<Transfer>"
        }    ];

    static getAttributeTypeMap() {
        return TransfersListEmbedded.attributeTypeMap;
    }
}

