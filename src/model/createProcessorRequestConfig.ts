/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Configure the details of how a `Processor` handles transactions.
*/
export class CreateProcessorRequestConfig {
    /**
    * Details if a `Processor` can debit bank accounts.
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
        return CreateProcessorRequestConfig.attributeTypeMap;
    }
}

