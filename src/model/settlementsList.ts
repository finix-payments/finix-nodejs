/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';
import { SettlementsListEmbedded } from './settlementsListEmbedded';

/**
* 
*/
export class SettlementsList {
    'page'?: PageCursor;
    'embedded'?: SettlementsListEmbedded;
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
            "type": "SettlementsListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return SettlementsList.attributeTypeMap;
    }
}

