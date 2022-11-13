/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { ApplicationProfileLinksApplication } from './applicationProfileLinksApplication';
import { DisputeLinksTransfer } from './disputeLinksTransfer';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class DisputeLinks {
    'adjustmentTransfers'?: ApplicationLinksApplicationProfile;
    'application'?: ApplicationProfileLinksApplication;
    'evidence'?: ApplicationLinksApplicationProfile;
    'self'?: ApplicationLinksSelf;
    'transfer'?: DisputeLinksTransfer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adjustmentTransfers",
            "baseName": "adjustment_transfers",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationProfileLinksApplication"
        },
        {
            "name": "evidence",
            "baseName": "evidence",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "transfer",
            "baseName": "transfer",
            "type": "DisputeLinksTransfer"
        }    ];

    static getAttributeTypeMap() {
        return DisputeLinks.attributeTypeMap;
    }
}

