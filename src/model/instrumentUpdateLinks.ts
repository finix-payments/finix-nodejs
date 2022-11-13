/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { InstrumentUpdateLinksApplication } from './instrumentUpdateLinksApplication';
import { InstrumentUpdateLinksPaymentInstrument } from './instrumentUpdateLinksPaymentInstrument';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class InstrumentUpdateLinks {
    'self'?: ApplicationLinksSelf;
    'paymentInstrument'?: InstrumentUpdateLinksPaymentInstrument;
    'application'?: InstrumentUpdateLinksApplication;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "paymentInstrument",
            "baseName": "payment_instrument",
            "type": "InstrumentUpdateLinksPaymentInstrument"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "InstrumentUpdateLinksApplication"
        }    ];

    static getAttributeTypeMap() {
        return InstrumentUpdateLinks.attributeTypeMap;
    }
}

