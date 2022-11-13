/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { FilesListEmbedded } from './filesListEmbedded';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';

export class FilesList {
    'page'?: PageCursor;
    'embedded'?: FilesListEmbedded;
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
            "type": "FilesListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }
}

