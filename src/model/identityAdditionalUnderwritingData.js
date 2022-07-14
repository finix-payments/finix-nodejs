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
exports.IdentityAdditionalUnderwritingData = void 0;
/**
* Additional underwriting data that\'s required to verify the `Identity` of the `Merchant`.
*/
class IdentityAdditionalUnderwritingData {
    /**
    * The approximate annual ACH sales expected to be processed (in cents) by this merchant (max 10 characters).
    */
    'annualAchVolume';
    /**
    * The approximate average ACH sale amount (in cents) for this merchant.
    */
    'averageAchTransferAmount';
    /**
    * The average credit card sale amount (in cents) for this merchant.
    */
    'averageCardTransferAmount';
    /**
    * Description of this merchant\'s business (max 200 characters).
    */
    'businessDescription';
    'cardVolumeDistribution';
    /**
    * Sets if this merchant has consented and accepted to a credit check.
    */
    'creditCheckAllowed';
    /**
    * The IP address of the merchant when they consented to a credit check (e.g., 42.1.1.113 ).
    */
    'creditCheckIpAddress';
    /**
    * A timestamp of when this merchant consented to a credit check (e.g., 2021-04-28T16:42:55Z).
    */
    'creditCheckTimestamp';
    /**
    * The details of the browser that was used when this merchant consented to a credit check (e.g., Mozilla 5.0 (Macintosh; Intel Mac OS X 10 _14_6)).
    */
    'creditCheckUserAgent';
    /**
    * Sets whether this merchant has accepted the terms and conditions of the merchant agreement.
    */
    'merchantAgreementAccepted';
    /**
    * IP address of the merchant when this merchant accepted the merchant agreement (e.g., 42.1.1.113).
    */
    'merchantAgreementIpAddress';
    /**
    * Timestamp of when the merchant accepted Finix\'s Terms of Service (e.g., 2021-04-28T16:42:55Z).
    */
    'merchantAgreementTimestamp';
    /**
    * The details of the browser that was used when this merchant accepted Finix\'s Terms of Service (e.g., Mozilla 5.0 (Macintosh; Intel Mac OS X 10 _14_6)).
    */
    'merchantAgreementUserAgent';
    /**
    * Include the value that best applies to the merchant\'s refund policy.
    */
    'refundPolicy';
    'volumeDistributionByBusinessType';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "annualAchVolume",
            "baseName": "annual_ach_volume",
            "type": "number"
        },
        {
            "name": "averageAchTransferAmount",
            "baseName": "average_ach_transfer_amount",
            "type": "number"
        },
        {
            "name": "averageCardTransferAmount",
            "baseName": "average_card_transfer_amount",
            "type": "number"
        },
        {
            "name": "businessDescription",
            "baseName": "business_description",
            "type": "string"
        },
        {
            "name": "cardVolumeDistribution",
            "baseName": "card_volume_distribution",
            "type": "IdentityAdditionalUnderwritingDataCardVolumeDistribution"
        },
        {
            "name": "creditCheckAllowed",
            "baseName": "credit_check_allowed",
            "type": "boolean"
        },
        {
            "name": "creditCheckIpAddress",
            "baseName": "credit_check_ip_address",
            "type": "string"
        },
        {
            "name": "creditCheckTimestamp",
            "baseName": "credit_check_timestamp",
            "type": "string"
        },
        {
            "name": "creditCheckUserAgent",
            "baseName": "credit_check_user_agent",
            "type": "string"
        },
        {
            "name": "merchantAgreementAccepted",
            "baseName": "merchant_agreement_accepted",
            "type": "boolean"
        },
        {
            "name": "merchantAgreementIpAddress",
            "baseName": "merchant_agreement_ip_address",
            "type": "string"
        },
        {
            "name": "merchantAgreementTimestamp",
            "baseName": "merchant_agreement_timestamp",
            "type": "string"
        },
        {
            "name": "merchantAgreementUserAgent",
            "baseName": "merchant_agreement_user_agent",
            "type": "string"
        },
        {
            "name": "refundPolicy",
            "baseName": "refund_policy",
            "type": "IdentityAdditionalUnderwritingData.RefundPolicyEnum"
        },
        {
            "name": "volumeDistributionByBusinessType",
            "baseName": "volume_distribution_by_business_type",
            "type": "IdentityAdditionalUnderwritingDataVolumeDistributionByBusinessType"
        }
    ];
    static getAttributeTypeMap() {
        return IdentityAdditionalUnderwritingData.attributeTypeMap;
    }
}
exports.IdentityAdditionalUnderwritingData = IdentityAdditionalUnderwritingData;
(function (IdentityAdditionalUnderwritingData) {
    let RefundPolicyEnum;
    (function (RefundPolicyEnum) {
        RefundPolicyEnum[RefundPolicyEnum["NoRefunds"] = 'NO_REFUNDS'] = "NoRefunds";
        RefundPolicyEnum[RefundPolicyEnum["MerchandiseExchangeOnly"] = 'MERCHANDISE_EXCHANGE_ONLY'] = "MerchandiseExchangeOnly";
        RefundPolicyEnum[RefundPolicyEnum["Within30Days"] = 'WITHIN_30_DAYS'] = "Within30Days";
        RefundPolicyEnum[RefundPolicyEnum["Other"] = 'OTHER'] = "Other";
    })(RefundPolicyEnum = IdentityAdditionalUnderwritingData.RefundPolicyEnum || (IdentityAdditionalUnderwritingData.RefundPolicyEnum = {}));
})(IdentityAdditionalUnderwritingData = exports.IdentityAdditionalUnderwritingData || (exports.IdentityAdditionalUnderwritingData = {}));
