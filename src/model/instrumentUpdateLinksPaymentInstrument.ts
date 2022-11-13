/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the payment instrument.
*/
export class InstrumentUpdateLinksPaymentInstrument {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InstrumentUpdateLinksPaymentInstrument.attributeTypeMap;
    }
}

