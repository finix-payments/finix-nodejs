/**
 * Finix API
 */

import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { SubscriptionAmountListEmbedded } from './subscriptionAmountListEmbedded';
import { UsersListPage } from './usersListPage';

export class SubscriptionAmountList {
    'page'?: UsersListPage;
    'embedded'?: SubscriptionAmountListEmbedded;
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
            "type": "SubscriptionAmountListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAmountList.attributeTypeMap;
    }
}

