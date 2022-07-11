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

