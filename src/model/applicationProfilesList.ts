/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationProfilesListEmbedded } from './applicationProfilesListEmbedded';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';

export class ApplicationProfilesList {
    'page'?: PageCursor;
    'embedded'?: ApplicationProfilesListEmbedded;
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
            "type": "ApplicationProfilesListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationProfilesList.attributeTypeMap;
    }
}

