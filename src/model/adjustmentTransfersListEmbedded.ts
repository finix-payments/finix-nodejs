/**
 * Finix API
 */

import { RequestFile } from './models';
import { Transfer } from './transfer';

/**
* List of adjustment `Transfers` created for a `Dispute`.
*/
export class AdjustmentTransfersListEmbedded {
    /**
    * `Transfer` objects.
    */
    'transfers'?: Array<Transfer>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Array<Transfer>"
        }    ];

    static getAttributeTypeMap() {
        return AdjustmentTransfersListEmbedded.attributeTypeMap;
    }
}

