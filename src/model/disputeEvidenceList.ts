/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { DisputeEvidenceLinks } from './disputeEvidenceLinks';
import { DisputeEvidenceListEmbedded } from './disputeEvidenceListEmbedded';
import { PageCursor } from './pageCursor';

export class DisputeEvidenceList {
    'page'?: PageCursor;
    'embedded'?: DisputeEvidenceListEmbedded;
    'links'?: DisputeEvidenceLinks;

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
            "type": "DisputeEvidenceListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DisputeEvidenceLinks"
        }    ];

    static getAttributeTypeMap() {
        return DisputeEvidenceList.attributeTypeMap;
    }
}

