/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { ApplicationProfileLinksApplication } from './applicationProfileLinksApplication';
import { AuthorizationLinksDevice } from './authorizationLinksDevice';
import { AuthorizationLinksMerchantIdentity } from './authorizationLinksMerchantIdentity';
import { TransferLinksDestination } from './transferLinksDestination';
import { TransferLinksDisputedTransfer } from './transferLinksDisputedTransfer';
import { TransferLinksDisputes } from './transferLinksDisputes';
import { TransferLinksFeeProfile } from './transferLinksFeeProfile';
import { TransferLinksFees } from './transferLinksFees';
import { TransferLinksParent } from './transferLinksParent';
import { TransferLinksPaymentInstruments } from './transferLinksPaymentInstruments';
import { TransferLinksReversals } from './transferLinksReversals';
import { TransferLinksSource } from './transferLinksSource';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class TransferLinks {
    'application'?: ApplicationProfileLinksApplication;
    'destination'?: TransferLinksDestination;
    'device'?: AuthorizationLinksDevice;
    'disputes'?: TransferLinksDisputes;
    'feeProfile'?: TransferLinksFeeProfile;
    'fees'?: TransferLinksFees;
    'merchantIdentity'?: AuthorizationLinksMerchantIdentity;
    'paymentInstruments'?: TransferLinksPaymentInstruments;
    'disputedTransfer'?: TransferLinksDisputedTransfer;
    'reversals'?: TransferLinksReversals;
    'self'?: ApplicationLinksSelf;
    'parent'?: TransferLinksParent;
    'source'?: TransferLinksSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationProfileLinksApplication"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "TransferLinksDestination"
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "AuthorizationLinksDevice"
        },
        {
            "name": "disputes",
            "baseName": "disputes",
            "type": "TransferLinksDisputes"
        },
        {
            "name": "feeProfile",
            "baseName": "fee_profile",
            "type": "TransferLinksFeeProfile"
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "TransferLinksFees"
        },
        {
            "name": "merchantIdentity",
            "baseName": "merchant_identity",
            "type": "AuthorizationLinksMerchantIdentity"
        },
        {
            "name": "paymentInstruments",
            "baseName": "payment_instruments",
            "type": "TransferLinksPaymentInstruments"
        },
        {
            "name": "disputedTransfer",
            "baseName": "disputed_transfer",
            "type": "TransferLinksDisputedTransfer"
        },
        {
            "name": "reversals",
            "baseName": "reversals",
            "type": "TransferLinksReversals"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "TransferLinksParent"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "TransferLinksSource"
        }    ];

    static getAttributeTypeMap() {
        return TransferLinks.attributeTypeMap;
    }
}

