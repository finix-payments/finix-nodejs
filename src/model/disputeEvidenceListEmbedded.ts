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
import { DisputeEvidence } from './disputeEvidence';

/**
* List of `evidence` created for a `Dispute`.
*/
export class DisputeEvidenceListEmbedded {
    /**
    * `Evidence` objects.
    */
    'evidences'?: Set<DisputeEvidence>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "evidences",
            "baseName": "evidences",
            "type": "Set<DisputeEvidence>"
        }    ];

    static getAttributeTypeMap() {
        return DisputeEvidenceListEmbedded.attributeTypeMap;
    }
}

