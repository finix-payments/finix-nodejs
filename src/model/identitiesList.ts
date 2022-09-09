/**
 * Finix API
 */

import { RequestFile } from './models';
import { IdentitiesListEmbedded } from './identitiesListEmbedded';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';

export class IdentitiesList {
    'page'?: PageCursor;
    'embedded'?: IdentitiesListEmbedded;
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
            "type": "IdentitiesListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return IdentitiesList.attributeTypeMap;
    }
}

