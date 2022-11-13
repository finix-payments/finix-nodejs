/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { CreateAssociatedIdentityRequestEntityBusinessAddress } from './createAssociatedIdentityRequestEntityBusinessAddress';
import { CreateAssociatedIdentityRequestEntityDob } from './createAssociatedIdentityRequestEntityDob';
import { CreateAssociatedIdentityRequestEntityPersonalAddress } from './createAssociatedIdentityRequestEntityPersonalAddress';
import { IdentityEntityFormIncorporationDate } from './identityEntityFormIncorporationDate';

/**
* Underwriting data that\'s required to verify the `Identity`.
*/
export class CreateAssociatedIdentityRequestEntity {
    /**
    * The annual credit card sales (in cents) expected to be processed (max 19 characters).
    */
    'annualCardVolume'?: number;
    'businessAddress'?: CreateAssociatedIdentityRequestEntityBusinessAddress | null;
    /**
    * Abbreviated names of the business. If there are no abbreviated name, leave this field blank.
    */
    'businessName'?: string | null;
    /**
    * Customer service phone number where the merchant can be reached (max 10 characters).
    */
    'businessPhone'?: string;
    /**
    * Details if the `business_tax_id` was provided.
    */
    'businessTaxId'?: string;
    /**
    * Include the value that best applies to the merchant.
    */
    'businessType'?: CreateAssociatedIdentityRequestEntity.BusinessTypeEnum | string;
    /**
    * The description of the merchant that appears on the buyer\'s bank or card statement.
    */
    'defaultStatementDescriptor'?: string;
    'dob'?: CreateAssociatedIdentityRequestEntityDob;
    /**
    * Alternate names of the business. If there are no other names, pass the same value used for `business_name` (max 60 characters).
    */
    'doingBusinessAs'?: string;
    /**
    * The email address of the principal control owner where they can be reached (max 100 characters).
    */
    'email'?: string;
    /**
    * The legal first name of the control owner (max 20 characters).
    */
    'firstName'?: string;
    /**
    * Defaults to **false** if not passed.
    */
    'hasAcceptedCreditCardsPreviously'?: boolean;
    'incorporationDate'?: IdentityEntityFormIncorporationDate | null;
    /**
    * The `Identity` owner\'s legal last name.
    */
    'lastName'?: string;
    /**
    * The maximum amount (in cents) that can be charged for a single transaction (max 12 characters).
    */
    'maxTransactionAmount'?: number;
    /**
    * The Merchant Category Code ([MCC](http://www.dm.usda.gov/procurement/card/card_x/mcc.pdf)) that this merchant will be classified under.
    */
    'mcc'?: string;
    /**
    * Values can be either: <ul><li><strong>PUBLIC</strong> to indicate a publicly-traded company. <li><strong>PRIVATE</strong> for privately-held businesses.
    */
    'ownershipType'?: string | null;
    'personalAddress'?: CreateAssociatedIdentityRequestEntityPersonalAddress;
    /**
    * The principal control owner\'s phone number (max 10 characters).
    */
    'phone'?: string;
    /**
    * Percentage of the company owned by the principal control owner (min 0; max 100).
    */
    'principalPercentageOwnership'?: number;
    /**
    * Details if the `tax_id` was provided.
    */
    'taxId'?: string;
    /**
    * The corporate title of the control owner (e.g. Chief Executive Officer, CFO, etc. Max 60 characters).
    */
    'title'?: string;
    /**
    * The URL of the `Identity` owner\'s public website.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "annualCardVolume",
            "baseName": "annual_card_volume",
            "type": "number"
        },
        {
            "name": "businessAddress",
            "baseName": "business_address",
            "type": "CreateAssociatedIdentityRequestEntityBusinessAddress"
        },
        {
            "name": "businessName",
            "baseName": "business_name",
            "type": "string"
        },
        {
            "name": "businessPhone",
            "baseName": "business_phone",
            "type": "string"
        },
        {
            "name": "businessTaxId",
            "baseName": "business_tax_id",
            "type": "string"
        },
        {
            "name": "businessType",
            "baseName": "business_type",
            "type": "CreateAssociatedIdentityRequestEntity.BusinessTypeEnum"
        },
        {
            "name": "defaultStatementDescriptor",
            "baseName": "default_statement_descriptor",
            "type": "string"
        },
        {
            "name": "dob",
            "baseName": "dob",
            "type": "CreateAssociatedIdentityRequestEntityDob"
        },
        {
            "name": "doingBusinessAs",
            "baseName": "doing_business_as",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "hasAcceptedCreditCardsPreviously",
            "baseName": "has_accepted_credit_cards_previously",
            "type": "boolean"
        },
        {
            "name": "incorporationDate",
            "baseName": "incorporation_date",
            "type": "IdentityEntityFormIncorporationDate"
        },
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
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "ownershipType",
            "baseName": "ownership_type",
            "type": "string"
        },
        {
            "name": "personalAddress",
            "baseName": "personal_address",
            "type": "CreateAssociatedIdentityRequestEntityPersonalAddress"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "principalPercentageOwnership",
            "baseName": "principal_percentage_ownership",
            "type": "number"
        },
        {
            "name": "taxId",
            "baseName": "tax_id",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateAssociatedIdentityRequestEntity.attributeTypeMap;
    }
}

export namespace CreateAssociatedIdentityRequestEntity {
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
