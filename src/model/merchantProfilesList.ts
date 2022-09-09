/**
 * Finix API
 */

import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { MerchantProfilesListEmbedded } from './merchantProfilesListEmbedded';
import { PageCursor } from './pageCursor';

export class MerchantProfilesList {
    'page'?: PageCursor;
    'embedded'?: MerchantProfilesListEmbedded;
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
            "type": "MerchantProfilesListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return MerchantProfilesList.attributeTypeMap;
    }
}

