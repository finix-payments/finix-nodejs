/**
 * Finix API
 */

import { RequestFile } from './models';
import { AdjustmentTransfersListEmbedded } from './adjustmentTransfersListEmbedded';
import { DisputeEvidenceLinks } from './disputeEvidenceLinks';
import { PageCursor } from './pageCursor';

export class AdjustmentTransfersList {
    'page'?: PageCursor;
    'embedded'?: AdjustmentTransfersListEmbedded;
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
            "type": "AdjustmentTransfersListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DisputeEvidenceLinks"
        }    ];

    static getAttributeTypeMap() {
        return AdjustmentTransfersList.attributeTypeMap;
    }
}

