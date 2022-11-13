/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { MerchantLinksApplication } from './merchantLinksApplication';
import { MerchantLinksIdentity } from './merchantLinksIdentity';
import { MerchantLinksVerifications } from './merchantLinksVerifications';
import { PaymentInstrumentLinksAuthorizations } from './paymentInstrumentLinksAuthorizations';
import { PaymentInstrumentLinksTransfers } from './paymentInstrumentLinksTransfers';
import { PaymentInstrumentLinksUpdates } from './paymentInstrumentLinksUpdates';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class PaymentInstrumentLinks {
    'application'?: MerchantLinksApplication;
    'authorizations'?: PaymentInstrumentLinksAuthorizations;
    'identity'?: MerchantLinksIdentity;
    'self'?: ApplicationLinksSelf;
    'transfers'?: PaymentInstrumentLinksTransfers;
    'updates'?: PaymentInstrumentLinksUpdates;
    'verifications'?: MerchantLinksVerifications;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "MerchantLinksApplication"
        },
        {
            "name": "authorizations",
            "baseName": "authorizations",
            "type": "PaymentInstrumentLinksAuthorizations"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "MerchantLinksIdentity"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "PaymentInstrumentLinksTransfers"
        },
        {
            "name": "updates",
            "baseName": "updates",
            "type": "PaymentInstrumentLinksUpdates"
        },
        {
            "name": "verifications",
            "baseName": "verifications",
            "type": "MerchantLinksVerifications"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentLinks.attributeTypeMap;
    }
}

