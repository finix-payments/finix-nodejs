/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationProfilesListEmbedded } from './applicationProfilesListEmbedded';
import { ApplicationProfilesListLinks } from './applicationProfilesListLinks';
import { PageCursor } from './pageCursor';

export class ApplicationProfilesList {
    'page'?: PageCursor;
    'embedded'?: ApplicationProfilesListEmbedded;
    'links'?: ApplicationProfilesListLinks;

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
            "type": "ApplicationProfilesListLinks"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationProfilesList.attributeTypeMap;
    }
}

