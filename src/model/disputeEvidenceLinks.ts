/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class DisputeEvidenceLinks {
    'self'?: ApplicationLinksSelf;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        }    ];

    static getAttributeTypeMap() {
        return DisputeEvidenceLinks.attributeTypeMap;
    }
}

