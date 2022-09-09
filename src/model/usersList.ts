/**
 * Finix API
 */

import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { UsersListEmbedded } from './usersListEmbedded';
import { UsersListPage } from './usersListPage';

export class UsersList {
    'page'?: UsersListPage;
    'embedded'?: UsersListEmbedded;
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
            "type": "UsersListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return UsersList.attributeTypeMap;
    }
}

