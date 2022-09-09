/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Configure how the `Processor` handles `Payment Instruments`.
*/
export class ProcessorSystemConfigConfig {
    /**
    * Set to true to allow the `Processor` to debit `Payment instrument with type **BANK_ACCOUNT** (i.e. eCheck).
    */
    'canDebitBankAccount'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "canDebitBankAccount",
            "baseName": "canDebitBankAccount",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorSystemConfigConfig.attributeTypeMap;
    }
}

