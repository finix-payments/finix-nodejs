/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { CardPresentDetailsEmvData } from './cardPresentDetailsEmvData';

/**
* Details needed to process card present transactions.
*/
export class CardPresentDetails {
    /**
    * Unique ID used to identify the approval of the `Transfer`.
    */
    'approvalCode'?: string | null;
    /**
    * The brand of the card saved in the `Payment Instrument`.
    */
    'brand'?: string | null;
    'emvData'?: CardPresentDetailsEmvData | null;
    /**
    * Details how the card was entered to process the transaction.
    */
    'entryMode'?: string | null;
    /**
    * Last four digits of the bank account number.
    */
    'maskedAccountNumber'?: string | null;
    /**
    * The name of the bank account or card owner.
    */
    'name'?: string | null;
    /**
    * The type of `Payment Instrument` used in the transaction (or the original payment).
    */
    'paymentType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "approvalCode",
            "baseName": "approval_code",
            "type": "string"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "emvData",
            "baseName": "emv_data",
            "type": "CardPresentDetailsEmvData"
        },
        {
            "name": "entryMode",
            "baseName": "entry_mode",
            "type": "string"
        },
        {
            "name": "maskedAccountNumber",
            "baseName": "masked_account_number",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "paymentType",
            "baseName": "payment_type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CardPresentDetails.attributeTypeMap;
    }
}

