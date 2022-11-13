/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { BalanceTransferList } from './balanceTransferList';

/**
* List of `balance_transfer` objects.
*/
export class BalanceTransferListEmbedded {
    /**
    * `balance_transfer` objects.
    */
    'balanceTransfers'?: Array<BalanceTransferList>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balanceTransfers",
            "baseName": "balance_transfers",
            "type": "Array<BalanceTransferList>"
        }    ];

    static getAttributeTypeMap() {
        return BalanceTransferListEmbedded.attributeTypeMap;
    }
}

