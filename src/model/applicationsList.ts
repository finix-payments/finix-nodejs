/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationsListEmbedded } from './applicationsListEmbedded';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';

/**
* 
*/
export class ApplicationsList {
    'page'?: PageCursor;
    'embedded'?: ApplicationsListEmbedded;
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
            "type": "ApplicationsListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationsList.attributeTypeMap;
    }
}

