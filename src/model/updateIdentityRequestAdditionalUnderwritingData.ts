/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution } from './updateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution';
import { UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType } from './updateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType';

/**
* Additional underwriting data that\'s required to verify the `Identity` of merchants.
*/
export class UpdateIdentityRequestAdditionalUnderwritingData {
    /**
    * The approximate annual ACH sales expected to be processed (in cents) by this merchant (max 10 characters).
    */
    'annualAchVolume'?: number;
    /**
    * The approximate average ACH sale amount (in cents) for this merchant.
    */
    'averageAchTransferAmount'?: number;
    /**
    * The average credit card sale amount (in cents) for this merchant.
    */
    'averageCardTransferAmount'?: number;
    /**
    * Description of this merchant\'s business (max 200 characters).
    */
    'businessDescription'?: string;
    /**
    * Sets if this merchant has consented and accepted to a credit check.
    */
    'creditCheckAllowed'?: boolean;
    /**
    * The IP address of the merchant when they consented to a credit check (e.g., 42.1.1.113 ).
    */
    'creditCheckIpAddress'?: string;
    /**
    * A timestamp of when this merchant consented to a credit check (e.g., 2021-04-28T16:42:55Z).
    */
    'creditCheckTimestamp'?: string;
    /**
    * The details of the browser that was used when this merchant consented to a credit check (e.g., Mozilla 5.0 (Macintosh; Intel Mac OS X 10 _14_6)).
    */
    'creditCheckUserAgent'?: string;
    'cardVolumeDistribution'?: UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution;
    /**
    * Sets whether this merchant has accepted the terms and conditions of the merchant agreement.
    */
    'merchantAgreementAccepted'?: boolean;
    /**
    * IP address of the merchant when this merchant accepted the merchant agreement (e.g., 42.1.1.113).
    */
    'merchantAgreementIpAddress'?: string;
    /**
    * Timestamp of when the merchant accepted Finix\'s Terms of Service (e.g., 2021-04-28T16:42:55Z).
    */
    'merchantAgreementTimestamp'?: string;
    /**
    * The details of the browser that was used when this merchant accepted Finix\'s Terms of Service (e.g., Mozilla 5.0 (Macintosh; Intel Mac OS X 10 _14_6)).
    */
    'merchantAgreementUserAgent'?: string;
    /**
    * Include the value that best applies to the merchant\'s refund policy.
    */
    'refundPolicy'?: UpdateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum | string;
    'volumeDistributionByBusinessType'?: UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "cardVolumeDistribution",
            "baseName": "card_volume_distribution",
            "type": "UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution"
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
            "type": "UpdateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum"
        },
        {
            "name": "volumeDistributionByBusinessType",
            "baseName": "volume_distribution_by_business_type",
            "type": "UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType"
        }    ];

    static getAttributeTypeMap() {
        return UpdateIdentityRequestAdditionalUnderwritingData.attributeTypeMap;
    }
}

export namespace UpdateIdentityRequestAdditionalUnderwritingData {
    export enum RefundPolicyEnum {
        NoRefunds = <any> 'NO_REFUNDS',
        MerchandiseExchangeOnly = <any> 'MERCHANDISE_EXCHANGE_ONLY',
        Within30DaysOther = <any> 'WITHIN_30_DAYS OTHER'
    }
}
