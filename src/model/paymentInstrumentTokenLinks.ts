/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { ApplicationProfileLinksApplication } from './applicationProfileLinksApplication';
import { PaymentInstrumentTokenLinksVerifications } from './paymentInstrumentTokenLinksVerifications';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class PaymentInstrumentTokenLinks {
    'application'?: ApplicationProfileLinksApplication;
    'authorizations'?: ApplicationLinksApplicationProfile;
    'identity'?: ApplicationLinksApplicationProfile;
    'self'?: ApplicationLinksSelf;
    'transfers'?: ApplicationLinksApplicationProfile;
    'verifications'?: PaymentInstrumentTokenLinksVerifications;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationProfileLinksApplication"
        },
        {
            "name": "authorizations",
            "baseName": "authorizations",
            "type": "ApplicationLinksApplicationProfile"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "ApplicationLinksApplicationProfile"
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
        },
        {
            "name": "verifications",
            "baseName": "verifications",
            "type": "PaymentInstrumentTokenLinksVerifications"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentTokenLinks.attributeTypeMap;
    }
}

