/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';
import { PaymentInstrumentsListEmbedded } from './paymentInstrumentsListEmbedded';

export class PaymentInstrumentsList {
    'page'?: PageCursor;
    'embedded'?: PaymentInstrumentsListEmbedded;
    'links'?: ListLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "PageCursor"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "PaymentInstrumentsListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentsList.attributeTypeMap;
    }
}

