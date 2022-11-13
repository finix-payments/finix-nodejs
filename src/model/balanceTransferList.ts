/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { BalanceTransferListEmbedded } from './balanceTransferListEmbedded';
import { ListLinks } from './listLinks';
import { UsersListPage } from './usersListPage';

/**
* List of `balance_transfer` resources.
*/
export class BalanceTransferList {
    'page'?: UsersListPage;
    'embedded'?: BalanceTransferListEmbedded;
    'links'?: ListLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "UsersListPage"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "BalanceTransferListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return BalanceTransferList.attributeTypeMap;
    }
}

