/**
 * Finix API
 */

import { RequestFile } from './models';
import { DisputesListEmbedded } from './disputesListEmbedded';
import { ListLinks } from './listLinks';
import { PageOffset } from './pageOffset';

export class DisputesList {
    'page'?: PageOffset;
    'embedded'?: DisputesListEmbedded;
    'links'?: ListLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "PageOffset"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "DisputesListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return DisputesList.attributeTypeMap;
    }
}

