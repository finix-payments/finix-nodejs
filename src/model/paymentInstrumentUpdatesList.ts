/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { PageOffset } from './pageOffset';
import { PaymentInstrumentUpdatesListEmbedded } from './paymentInstrumentUpdatesListEmbedded';

/**
* 
*/
export class PaymentInstrumentUpdatesList {
    'page'?: PageOffset;
    'embedded'?: PaymentInstrumentUpdatesListEmbedded;
    'links'?: ListLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "PageOffset"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "PaymentInstrumentUpdatesListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentUpdatesList.attributeTypeMap;
    }
}

