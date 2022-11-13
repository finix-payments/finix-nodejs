/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { PaymentInstrument } from './paymentInstrument';

/**
* List of `Payment Instrument` objects.
*/
export class PaymentInstrumentsListEmbedded {
    /**
    * `Payment Instrument` objects.
    */
    'paymentInstruments'?: Set<PaymentInstrument>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentInstruments",
            "baseName": "payment_instruments",
            "type": "Set<PaymentInstrument>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentsListEmbedded.attributeTypeMap;
    }
}

