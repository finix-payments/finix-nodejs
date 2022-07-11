/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AdjustmentTransfersListEmbedded } from './adjustmentTransfersListEmbedded';
import { DisputeEvidenceLinks } from './disputeEvidenceLinks';
import { PageCursor } from './pageCursor';

export class AdjustmentTransfersList {
    'embedded'?: AdjustmentTransfersListEmbedded;
    'links'?: DisputeEvidenceLinks;
    'page'?: PageCursor;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "AdjustmentTransfersListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DisputeEvidenceLinks"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "PageCursor"
        }    ];

    static getAttributeTypeMap() {
        return AdjustmentTransfersList.attributeTypeMap;
    }
}

