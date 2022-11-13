/**
 * Finix API
 */

// @ts-ignore
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

