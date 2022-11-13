/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { IdentityLinksApplication } from './identityLinksApplication';
import { IdentityLinksAssociatedIdentities } from './identityLinksAssociatedIdentities';
import { IdentityLinksAuthorizations } from './identityLinksAuthorizations';
import { IdentityLinksDisputes } from './identityLinksDisputes';
import { IdentityLinksMerchants } from './identityLinksMerchants';
import { IdentityLinksPaymentInstruments } from './identityLinksPaymentInstruments';
import { IdentityLinksSelf } from './identityLinksSelf';
import { IdentityLinksSettlements } from './identityLinksSettlements';
import { IdentityLinksTransfers } from './identityLinksTransfers';
import { IdentityLinksVerifications } from './identityLinksVerifications';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class IdentityLinks {
    'self'?: IdentityLinksSelf;
    'verifications'?: IdentityLinksVerifications;
    'merchants'?: IdentityLinksMerchants;
    'settlements'?: IdentityLinksSettlements;
    'authorizations'?: IdentityLinksAuthorizations;
    'transfers'?: IdentityLinksTransfers;
    'paymentInstruments'?: IdentityLinksPaymentInstruments;
    'associatedIdentities'?: IdentityLinksAssociatedIdentities;
    'disputes'?: IdentityLinksDisputes;
    'application'?: IdentityLinksApplication;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "IdentityLinksSelf"
        },
        {
            "name": "verifications",
            "baseName": "verifications",
            "type": "IdentityLinksVerifications"
        },
        {
            "name": "merchants",
            "baseName": "merchants",
            "type": "IdentityLinksMerchants"
        },
        {
            "name": "settlements",
            "baseName": "settlements",
            "type": "IdentityLinksSettlements"
        },
        {
            "name": "authorizations",
            "baseName": "authorizations",
            "type": "IdentityLinksAuthorizations"
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "IdentityLinksTransfers"
        },
        {
            "name": "paymentInstruments",
            "baseName": "payment_instruments",
            "type": "IdentityLinksPaymentInstruments"
        },
        {
            "name": "associatedIdentities",
            "baseName": "associated_identities",
            "type": "IdentityLinksAssociatedIdentities"
        },
        {
            "name": "disputes",
            "baseName": "disputes",
            "type": "IdentityLinksDisputes"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "IdentityLinksApplication"
        }    ];

    static getAttributeTypeMap() {
        return IdentityLinks.attributeTypeMap;
    }
}

