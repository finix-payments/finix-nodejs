/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { DeviceLinksMerchant } from './deviceLinksMerchant';
import { DisputeLinksTransfer } from './disputeLinksTransfer';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class FeeLinks {
    'merchant'?: DeviceLinksMerchant;
    'self'?: ApplicationLinksSelf;
    'transfer'?: DisputeLinksTransfer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "DeviceLinksMerchant"
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
        return FeeLinks.attributeTypeMap;
    }
}

