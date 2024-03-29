/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Name } from './name';

/**
* Details the `Payment Instrument` that the `Transfer` debits or credits. 
*/
export class CardPresentInstrumentForm {
    /**
    * The type of `Payment Instrument`.
    */
    'type'?: CardPresentInstrumentForm.TypeEnum | string;
    'availableAccountType'?: CardPresentInstrumentForm.AvailableAccountTypeEnum | string;
    /**
    * Encrypted card data used to process the transaction.
    */
    'emvData'?: string;
    /**
    * Encrypted EMV card data about the key serial number used to process the transaction.
    */
    'emvDataKeySerialNumber'?: string;
    /**
    * Encrypted EMV card data. Required if using an encrypted device.
    */
    'encryptedEmvData'?: string;
    /**
    * EMV encryption format provided from integrated encryption devices (defaults to **0**).
    */
    'encryptedEmvFormat'?: number;
    /**
    * Expiration month of the `Payment Instrument` (e.g. 12 for December).
    */
    'expirationMonth'?: number;
    /**
    * 4-digit expiration year of the `Payment Instrument`.
    */
    'expirationYear'?: number;
    /**
    * The first name of the `Payment Instrument` owner.
    */
    'firstName'?: string;
    /**
    * The last name of the `Payment Instrument` owner.
    */
    'lastName'?: string;
    'name'?: Name;
    /**
    * Primary card account number (no dashes in between numbers).
    */
    'number'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CardPresentInstrumentForm.TypeEnum"
        },
        {
            "name": "availableAccountType",
            "baseName": "available_account_type",
            "type": "CardPresentInstrumentForm.AvailableAccountTypeEnum"
        },
        {
            "name": "emvData",
            "baseName": "emv_data",
            "type": "string"
        },
        {
            "name": "emvDataKeySerialNumber",
            "baseName": "emv_data_key_serial_number",
            "type": "string"
        },
        {
            "name": "encryptedEmvData",
            "baseName": "encrypted_emv_data",
            "type": "string"
        },
        {
            "name": "encryptedEmvFormat",
            "baseName": "encrypted_emv_format",
            "type": "number"
        },
        {
            "name": "expirationMonth",
            "baseName": "expiration_month",
            "type": "number"
        },
        {
            "name": "expirationYear",
            "baseName": "expiration_year",
            "type": "number"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Name"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CardPresentInstrumentForm.attributeTypeMap;
    }
}

export namespace CardPresentInstrumentForm {
    export enum TypeEnum {
        BankAccount = <any> 'BANK_ACCOUNT',
        Virtual = <any> 'VIRTUAL',
        Token = <any> 'TOKEN',
        SwipedPaymentCard = <any> 'SWIPED_PAYMENT_CARD',
        PaymentCardPresent = <any> 'PAYMENT_CARD_PRESENT',
        PaymentCard = <any> 'PAYMENT_CARD',
        VantivOmniToken = <any> 'VANTIV_OMNI_TOKEN'
    }
    export enum AvailableAccountTypeEnum {
        Balance = <any> 'BALANCE',
        Ledgered = <any> 'LEDGERED'
    }
}
