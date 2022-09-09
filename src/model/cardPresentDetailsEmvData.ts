/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Encrypted card data used to process the transaction.
*/
export class CardPresentDetailsEmvData {
    /**
    * ID of the EMV application processing the transaction.
    */
    'applicationIdentifier'?: string;
    /**
    * EMV card label.
    */
    'applicationLabel'?: string;
    /**
    * Alternate EMV application name (if provided).
    */
    'applicationPreferredName'?: string | null;
    /**
    * Transaction number for the EMV application.
    */
    'applicationTransactionCounter'?: string;
    /**
    * Encrypted card infromation used to process the transaction.
    */
    'cryptogram'?: string;
    /**
    * The alphabet code table (according to ISO 8859) used by the EMV application (if provided).
    */
    'issuerCodeTableIndex'?: string | null;
    /**
    * Details if the cardholder\'s PIN number was verified.
    */
    'pinVerified'?: boolean;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applicationIdentifier",
            "baseName": "application_identifier",
            "type": "string"
        },
        {
            "name": "applicationLabel",
            "baseName": "application_label",
            "type": "string"
        },
        {
            "name": "applicationPreferredName",
            "baseName": "application_preferred_name",
            "type": "string"
        },
        {
            "name": "applicationTransactionCounter",
            "baseName": "application_transaction_counter",
            "type": "string"
        },
        {
            "name": "cryptogram",
            "baseName": "cryptogram",
            "type": "string"
        },
        {
            "name": "issuerCodeTableIndex",
            "baseName": "issuer_code_table_index",
            "type": "string"
        },
        {
            "name": "pinVerified",
            "baseName": "pin_verified",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CardPresentDetailsEmvData.attributeTypeMap;
    }
}

