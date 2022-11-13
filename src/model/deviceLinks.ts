/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { DeviceLinksMerchant } from './deviceLinksMerchant';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class DeviceLinks {
    'authorizations'?: ApplicationLinksApplicationProfile;
    'merchant'?: DeviceLinksMerchant;
    'self'?: ApplicationLinksSelf;
    'transfers'?: ApplicationLinksApplicationProfile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authorizations",
            "baseName": "authorizations",
            "type": "ApplicationLinksApplicationProfile"
        },
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
            "name": "transfers",
            "baseName": "transfers",
            "type": "ApplicationLinksApplicationProfile"
        }    ];

    static getAttributeTypeMap() {
        return DeviceLinks.attributeTypeMap;
    }
}

