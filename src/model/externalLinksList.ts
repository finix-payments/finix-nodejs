/**
 * Finix API
 */

import { RequestFile } from './models';
import { ExternalLinksListEmbedded } from './externalLinksListEmbedded';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';

export class ExternalLinksList {
    'page'?: PageCursor;
    'embedded'?: ExternalLinksListEmbedded;
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
            "type": "ExternalLinksListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return ExternalLinksList.attributeTypeMap;
    }
}

