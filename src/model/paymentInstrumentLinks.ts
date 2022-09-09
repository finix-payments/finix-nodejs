/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { MerchantLinksApplication } from './merchantLinksApplication';
import { MerchantLinksIdentity } from './merchantLinksIdentity';
import { MerchantLinksVerifications } from './merchantLinksVerifications';
import { PaymentInstrumentLinksAuthorizations } from './paymentInstrumentLinksAuthorizations';
import { PaymentInstrumentLinksTransfers } from './paymentInstrumentLinksTransfers';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class PaymentInstrumentLinks {
    'self'?: ApplicationLinksSelf;
    'authorizations'?: PaymentInstrumentLinksAuthorizations;
    'transfers'?: PaymentInstrumentLinksTransfers;
    'verifications'?: MerchantLinksVerifications;
    'application'?: MerchantLinksApplication;
    'identity'?: MerchantLinksIdentity;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "authorizations",
            "baseName": "authorizations",
            "type": "PaymentInstrumentLinksAuthorizations"
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "PaymentInstrumentLinksTransfers"
        },
        {
            "name": "verifications",
            "baseName": "verifications",
            "type": "MerchantLinksVerifications"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "MerchantLinksApplication"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "MerchantLinksIdentity"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentLinks.attributeTypeMap;
    }
}

