/**
 * Finix API
 */

import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';
import { VerificationsListEmbedded } from './verificationsListEmbedded';

export class VerificationsList {
    'embedded'?: VerificationsListEmbedded;
    'links'?: ListLinks;
    'page'?: PageCursor;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "VerificationsListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "PageCursor"
        }    ];

    static getAttributeTypeMap() {
        return VerificationsList.attributeTypeMap;
    }
}

