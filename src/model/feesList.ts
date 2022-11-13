/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { FeesListEmbedded } from './feesListEmbedded';
import { ListLinks } from './listLinks';
import { PageOffset } from './pageOffset';

export class FeesList {
    'page'?: PageOffset;
    'embedded'?: FeesListEmbedded;
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
            "type": "FeesListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return FeesList.attributeTypeMap;
    }
}

