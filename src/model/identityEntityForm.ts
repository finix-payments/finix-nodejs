/**
 * Finix API
 */

import { RequestFile } from './models';
import { Address } from './address';
import { IdentityEntityFormBusinessAddress } from './identityEntityFormBusinessAddress';
import { IdentityEntityFormDob } from './identityEntityFormDob';
import { IdentityEntityFormIncorporationDate } from './identityEntityFormIncorporationDate';

/**
* Information needed to verify the identity of the entity.
*/
export class IdentityEntityForm {
    /**
    * Assigned amex_Mid value. If included must be 10 or 11 digits.
    */
    'amexMid'?: string | null;
    /**
    * Approximate annual credit card sales expected to be processed in cents by this merchant (max 19 characters).
    */
    'annualCardVolume'?: number;
    'businessAddress': IdentityEntityFormBusinessAddress | null;
    /**
    * Merchant\'s full legal business name (If **INDIVIDUAL\\_SOLE\\_PROPRIETORSHIP**, input first name, Full legal last name and middle initial; max 120 characters)
    */
    'businessName': string | null;
    /**
    * Customer service phone number where the merchant can be reached (max 10 characters).
    */
    'businessPhone': string;
    /**
    * Nine digit Tax Identification Number (TIN), Employer Identification Number (EIN). If the `business_type` is **INDIVIDUAL\\_SOLE\\_PROPRIETORSHIP** and they do not have an EIN, use the sole proprietor\'s Social Security Number (SSN).
    */
    'businessTaxId': string;
    /**
    * Include the value that applies the best.
    */
    'businessType': IdentityEntityForm.BusinessTypeEnum | string;
    /**
    * Billing description displayed on the buyer\'s bank or card statement (Length must be between 1 and 20 characters).
    */
    'defaultStatementDescriptor'?: string;
    /**
    * Assigned Discover Mid value.
    */
    'discoverMid'?: string;
    'dob': IdentityEntityFormDob;
    /**
    * Alternate name of the business. If no other name is used use the same value used in `business_name` (max 60 characters).
    */
    'doingBusinessAs': string;
    /**
    * Control person\'s email address where they can be reached (max 100 characters).
    */
    'email': string;
    /**
    * Full legal first name of the merchant\'s principal representative (max 20 characters).
    */
    'firstName': string;
    /**
    * Defaults to **false** if not passed.
    */
    'hasAcceptedCreditCardsPreviously'?: boolean;
    'incorporationDate'?: IdentityEntityFormIncorporationDate;
    /**
    * Full legal last name of the merchant\'s principal representative (max 20 characters).
    */
    'lastName': string;
    /**
    * Maximum amount that can be transacted for a single transaction in cents (max 12 characters).
    */
    'maxTransactionAmount'?: number;
    /**
    * The Merchant Category Code ([MCC](http://www.dm.usda.gov/procurement/card/card_x/mcc.pdf)) the merchant is classified under.
    */
    'mcc'?: string;
    /**
    * Values can be either: <ul><li><strong>PUBLIC</strong> to indicate a publicly-traded company.<li><strong>PRIVATE</strong> for privately-held businesses.
    */
    'ownershipType'?: IdentityEntityForm.OwnershipTypeEnum | string;
    'personalAddress': Address | null;
    /**
    * Principal\'s phone number (max 10 characters).
    */
    'phone': string;
    /**
    * Percentage of company owned by the principal (min 0; max 100).
    */
    'principalPercentageOwnership'?: number;
    /**
    * The short version of the business name. (Defaults to **null**).
    */
    'shortBusinessName'?: string;
    /**
    * Used and required when onboarding a `Merchant` with a `MCC` of **9311**. The  `tax_authority` is the tax gathering entity (e.g San Francisco Water Authority).
    */
    'taxAuthority'?: string;
    /**
    * Used to verify `tax_id` was provided.
    */
    'taxId': string;
    /**
    * Control person\'s corporate title or role (i.e. Chief Executive Officer, CFO, etc.; max 60 characters).
    */
    'title'?: string | null;
    /**
    * Merchant\'s publicly available website (max 100 characters).
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amexMid",
            "baseName": "amex_mid",
            "type": "string"
        },
        {
            "name": "annualCardVolume",
            "baseName": "annual_card_volume",
            "type": "number"
        },
        {
            "name": "businessAddress",
            "baseName": "business_address",
            "type": "IdentityEntityFormBusinessAddress"
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
            "type": "IdentityEntityForm.BusinessTypeEnum"
        },
        {
            "name": "defaultStatementDescriptor",
            "baseName": "default_statement_descriptor",
            "type": "string"
        },
        {
            "name": "discoverMid",
            "baseName": "discover_mid",
            "type": "string"
        },
        {
            "name": "dob",
            "baseName": "dob",
            "type": "IdentityEntityFormDob"
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
            "type": "IdentityEntityForm.OwnershipTypeEnum"
        },
        {
            "name": "personalAddress",
            "baseName": "personal_address",
            "type": "Address"
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
            "name": "shortBusinessName",
            "baseName": "short_business_name",
            "type": "string"
        },
        {
            "name": "taxAuthority",
            "baseName": "tax_authority",
            "type": "string"
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
        return IdentityEntityForm.attributeTypeMap;
    }
}

export namespace IdentityEntityForm {
    export enum BusinessTypeEnum {
        IndividualSoleProprietorship = <any> 'INDIVIDUAL_SOLE_PROPRIETORSHIP',
        Corporation = <any> 'CORPORATION',
        LimitedLiabilityCompany = <any> 'LIMITED_LIABILITY_COMPANY',
        Partnership = <any> 'PARTNERSHIP',
        LimitedPartnership = <any> 'LIMITED_PARTNERSHIP',
        GeneralPartnership = <any> 'GENERAL_PARTNERSHIP',
        AssociationEstateTrust = <any> 'ASSOCIATION_ESTATE_TRUST',
        TaxExemptOrganization = <any> 'TAX_EXEMPT_ORGANIZATION',
        InternationalOrganization = <any> 'INTERNATIONAL_ORGANIZATION',
        GovernmentAgency = <any> 'GOVERNMENT_AGENCY',
        JointVenture = <any> 'JOINT_VENTURE'
    }
    export enum OwnershipTypeEnum {
        Private = <any> 'PRIVATE',
        Public = <any> 'PUBLIC'
    }
}
