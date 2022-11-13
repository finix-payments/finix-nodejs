/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { InstrumentUpdate } from './instrumentUpdate';

/**
* List of `updates` for a `Payment Instrument`.
*/
export class PaymentInstrumentUpdatesListEmbedded {
    /**
    * `Update` objects.
    */
    'updates'?: Set<InstrumentUpdate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "updates",
            "baseName": "updates",
            "type": "Set<InstrumentUpdate>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentUpdatesListEmbedded.attributeTypeMap;
    }
}

