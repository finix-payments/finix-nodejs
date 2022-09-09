/**
 * Finix API
 */

import { RequestFile } from './models';
import { AuthorizationsListEmbedded } from './authorizationsListEmbedded';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';

export class AuthorizationsList {
    'page'?: PageCursor;
    'embedded'?: AuthorizationsListEmbedded;
    'links'?: ListLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "PageCursor"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "AuthorizationsListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationsList.attributeTypeMap;
    }
}

