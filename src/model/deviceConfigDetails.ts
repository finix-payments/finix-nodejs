/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Information used to configure how the `Device` handles transactions.
*/
export class DeviceConfigDetails {
    /**
    * Allow transaction to be processed on Debit rails. If **false**, Debit card transactions will be processed on Credit rails.
    */
    'allowDebit'?: boolean;
    /**
    * Sets whether or not the device will be used to capture transactions. This field must be set to **true** (defaults to **false**).
    */
    'bypassDeviceOnCapture'?: boolean | null;
    /**
    * Sets whether the `Device` will check for duplicate transactions.
    */
    'checkForDuplicateTransactions'?: boolean;
    /**
    * Sets if the card holder needs to confirm the amount they will pay (defaults to **true**).
    */
    'promptAmountConfirmation'?: boolean;
    /**
    * Sets if the device defaults to manual entry as the default card input method. (defaults to **false**).
    */
    'promptManualEntry'?: boolean;
    /**
    * Sets if the device will prompt the card holder for a signature by default. Available values include: <ul><li><strong>ALWAYS</strong><li><strong>NEVER</strong><li><strong>AMOUNT</strong>: Used in conjunction with `signature_threshold_amount` so when the threshold is reached the signature form appears on the device.
    */
    'promptSignature'?: string;
    /**
    * The threshold to prompt a signature when `prompt_signature` is set to **AMOUNT** (defaults to 0).
    */
    'signatureThresholdAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowDebit",
            "baseName": "allow_debit",
            "type": "boolean"
        },
        {
            "name": "bypassDeviceOnCapture",
            "baseName": "bypass_device_on_capture",
            "type": "boolean"
        },
        {
            "name": "checkForDuplicateTransactions",
            "baseName": "check_for_duplicate_transactions",
            "type": "boolean"
        },
        {
            "name": "promptAmountConfirmation",
            "baseName": "prompt_amount_confirmation",
            "type": "boolean"
        },
        {
            "name": "promptManualEntry",
            "baseName": "prompt_manual_entry",
            "type": "boolean"
        },
        {
            "name": "promptSignature",
            "baseName": "prompt_signature",
            "type": "string"
        },
        {
            "name": "signatureThresholdAmount",
            "baseName": "signature_threshold_amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DeviceConfigDetails.attributeTypeMap;
    }
}

