/**
 * Finix API
 */

import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';
import { ProcessorsListEmbedded } from './processorsListEmbedded';

export class ProcessorsList {
    'page'?: PageCursor;
    'embedded'?: ProcessorsListEmbedded;
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
            "type": "ProcessorsListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorsList.attributeTypeMap;
    }
}

