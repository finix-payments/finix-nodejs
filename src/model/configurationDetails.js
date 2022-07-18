"use strict";
/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationDetails = void 0;
/**
* Configure the details of the activated device.
*/
class ConfigurationDetails {
    static getAttributeTypeMap() {
        return ConfigurationDetails.attributeTypeMap;
    }
}
exports.ConfigurationDetails = ConfigurationDetails;
ConfigurationDetails.discriminator = undefined;
ConfigurationDetails.attributeTypeMap = [
    {
        "name": "allowDebit",
        "baseName": "allow_debit",
        "type": "boolean"
    },
    {
        "name": "allowPartialApprovals",
        "baseName": "allow_partial_approvals",
        "type": "boolean"
    },
    {
        "name": "bypassDeviceOnCapture",
        "baseName": "bypass_device_on_capture",
        "type": "boolean"
    },
    {
        "name": "cashbackOptions",
        "baseName": "cashback_options",
        "type": "ConfigurationDetailsCashbackOptions"
    },
    {
        "name": "checkForDuplicateTransactions",
        "baseName": "check_for_duplicate_transactions",
        "type": "boolean"
    },
    {
        "name": "isCashBackAllowed",
        "baseName": "is_cash_back_allowed",
        "type": "boolean"
    },
    {
        "name": "isGiftSupported",
        "baseName": "is_gift_supported",
        "type": "string"
    },
    {
        "name": "isManualEntryAllowed",
        "baseName": "is_manual_entry_allowed",
        "type": "boolean"
    },
    {
        "name": "marketCode",
        "baseName": "market_code",
        "type": "string"
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
    },
    {
        "name": "tipOptions",
        "baseName": "tip_options",
        "type": "ConfigurationDetailsTipOptions"
    }
];
