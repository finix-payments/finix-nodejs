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

import { RequestFile } from './models';
import { UpdateIdentityRequestEntityBusinessAddress } from './updateIdentityRequestEntityBusinessAddress';
import { UpdateIdentityRequestEntityDob } from './updateIdentityRequestEntityDob';
import { UpdateIdentityRequestEntityIncorporationDate } from './updateIdentityRequestEntityIncorporationDate';
import { UpdateIdentityRequestEntityPersonalAddress } from './updateIdentityRequestEntityPersonalAddress';

/**
* Underwriting data that\'s required to verify the `Identity`.
*/
export class UpdateIdentityRequestEntity {
    /**
    * The `Identity` owner\'s legal last name.
    */
    'lastName'?: string;
    /**
    * The maximum amount (in cents) that can be charged for a single transaction (max 12 characters).
    */
    'maxTransactionAmount'?: number;
    /**
    * Defaults to **false** if not passed.
    */
    'hasAcceptedCreditCardsPreviously'?: boolean;
    /**
    * The description of the merchant that appears on the buyer\'s bank or card statement.
    */
    'defaultStatementDescriptor'?: string;
    'personalAddress'?: UpdateIdentityRequestEntityPersonalAddress;
    'incorporationDate'?: UpdateIdentityRequestEntityIncorporationDate;
    'businessAddress'?: UpdateIdentityRequestEntityBusinessAddress | null;
    /**
    * Values can be either: <ul><li><strong>PUBLIC</strong> to indicate a publicly-traded company. <li><strong>PRIVATE</strong> for privately-held businesses.
    */
    'ownershipType'?: string;
    /**
    * The legal first name of the control owner (max 20 characters).
    */
    'firstName'?: string;
    /**
    * The corporate title of the control owner (e.g. Chief Executive Officer, CFO, etc. Max 60 characters).
    */
    'title'?: string;
    /**
    * Details if the `business_tax_id` was provided.
    */
    'businessTaxId'?: string;
    /**
    * Alternate names of the business. If there are no other names, pass the same value used for `business_name` (max 60 characters).
    */
    'doingBusinessAs'?: string;
    /**
    * Percentage of the company owned by the principal control owner (min 0; max 100).
    */
    'principalPercentageOwnership'?: number;
    /**
    * The email address of the principal control owner where they can be reached (max 100 characters).
    */
    'email'?: string;
    /**
    * The Merchant Category Code ([MCC](http://www.dm.usda.gov/procurement/card/card_x/mcc.pdf)) that this merchant will be classified under.
    */
    'mcc'?: string;
    /**
    * The principal control owner\'s phone number (max 10 characters).
    */
    'phone'?: string;
    /**
    * Abbreviated names of the business. If there are no abbreviated name, leave this field blank.
    */
    'businessName'?: string | null;
    /**
    * Details if the `tax_id` was provided.
    */
    'taxId'?: string;
    /**
    * Include the value that best applies to the merchant.
    */
    'businessType'?: UpdateIdentityRequestEntity.BusinessTypeEnum | string;
    /**
    * Customer service phone number where the merchant can be reached (max 10 characters).
    */
    'businessPhone'?: string;
    'dob'?: UpdateIdentityRequestEntityDob;
    /**
    * The URL of the `Identity` owner\'s public website.
    */
    'url'?: string;
    /**
    * The annual credit card sales (in cents) expected to be processed (max 19 characters).
    */
    'annualCardVolume'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "maxTransactionAmount",
            "baseName": "max_transaction_amount",
            "type": "number"
        },
        {
            "name": "hasAcceptedCreditCardsPreviously",
            "baseName": "has_accepted_credit_cards_previously",
            "type": "boolean"
        },
        {
            "name": "defaultStatementDescriptor",
            "baseName": "default_statement_descriptor",
            "type": "string"
        },
        {
            "name": "personalAddress",
            "baseName": "personal_address",
            "type": "UpdateIdentityRequestEntityPersonalAddress"
        },
        {
            "name": "incorporationDate",
            "baseName": "incorporation_date",
            "type": "UpdateIdentityRequestEntityIncorporationDate"
        },
        {
            "name": "businessAddress",
            "baseName": "business_address",
            "type": "UpdateIdentityRequestEntityBusinessAddress"
        },
        {
            "name": "ownershipType",
            "baseName": "ownership_type",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "businessTaxId",
            "baseName": "business_tax_id",
            "type": "string"
        },
        {
            "name": "doingBusinessAs",
            "baseName": "doing_business_as",
            "type": "string"
        },
        {
            "name": "principalPercentageOwnership",
            "baseName": "principal_percentage_ownership",
            "type": "number"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "businessName",
            "baseName": "business_name",
            "type": "string"
        },
        {
            "name": "taxId",
            "baseName": "tax_id",
            "type": "string"
        },
        {
            "name": "businessType",
            "baseName": "business_type",
            "type": "UpdateIdentityRequestEntity.BusinessTypeEnum"
        },
        {
            "name": "businessPhone",
            "baseName": "business_phone",
            "type": "string"
        },
        {
            "name": "dob",
            "baseName": "dob",
            "type": "UpdateIdentityRequestEntityDob"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "annualCardVolume",
            "baseName": "annual_card_volume",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return UpdateIdentityRequestEntity.attributeTypeMap;
    }
}

export namespace UpdateIdentityRequestEntity {
    export enum BusinessTypeEnum {
        IndividualSoleProprietorship = <any> 'INDIVIDUAL_SOLE_PROPRIETORSHIP',
        Corporation = <any> 'CORPORATION',
        LimitedLiabilityCompany = <any> 'LIMITED_LIABILITY_COMPANY',
        Partnership = <any> 'PARTNERSHIP',
        AssociationEstateTrust = <any> 'ASSOCIATION_ESTATE_TRUST',
        TaxExemptOrganization = <any> 'TAX_EXEMPT_ORGANIZATION',
        InternationalOrganization = <any> 'INTERNATIONAL_ORGANIZATION',
        GovernmentAgency = <any> 'GOVERNMENT_AGENCY'
    }
}
