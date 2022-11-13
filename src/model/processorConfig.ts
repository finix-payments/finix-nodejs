/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Configure how the `Processor` handles transaction details, specifc to the processor.
*/
export class ProcessorConfig {
    /**
    * Details if the `Application` can debit bank accounts using the `Processor`.
    */
    'canDebitBankAccount'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "canDebitBankAccount",
            "baseName": "canDebitBankAccount",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorConfig.attributeTypeMap;
    }
}

