/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Address } from './address';
import { CreateIdentityRequestEntityBusinessAddress } from './createIdentityRequestEntityBusinessAddress';
import { CreateIdentityRequestEntityDob } from './createIdentityRequestEntityDob';
import { IdentityEntityFormIncorporationDate } from './identityEntityFormIncorporationDate';

/**
* The underwriting details required to verify `Identities`.
*/
export class CreateIdentityRequestEntity {
    /**
    * The annual credit card sales (in cents) expected to be processed (max 19 characters).
    */
    'annualCardVolume'?: number;
    'businessAddress'?: CreateIdentityRequestEntityBusinessAddress | null;
    /**
    * The merchant\'s legal business name (max 120 characters).<ul><li>If **INDIVIDUAL_SOLE_PROPRIETORSHIP**, pass the owner\'s legal first name, last name and middle initial.
    */
    'businessName'?: string | null;
    /**
    * Customer service phone number where the merchant can be reached (max 10 characters).
    */
    'businessPhone'?: string;
    /**
    * Nine digit Tax Identification Number (TIN), Employer Identification Number (EIN). If the `business_type` is **INDIVIDUAL\\_SOLE\\_PROPRIETORSHIP** and they do not have an EIN, use the sole proprietor\'s Social Security Number (SSN).
    */
    'businessTaxId'?: string;
    /**
    * The business entity type of the Merchant.
    */
    'businessType'?: CreateIdentityRequestEntity.BusinessTypeEnum | string;
    /**
    * The description of the merchant that appears on the buyer\'s bank or card statement.
    */
    'defaultStatementDescriptor'?: string;
    'dob'?: CreateIdentityRequestEntityDob;
    /**
    * Alternate names of the business. If there are no other names, pass the same value used for `business_name` (max 60 characters).
    */
    'doingBusinessAs'?: string;
    /**
    * The email address of the buyer where they can be reached (max 100 characters).
    */
    'email'?: string;
    /**
    * The legal first name of the buyer (max 20 characters).
    */
    'firstName'?: string;
    /**
    * Defaults to **false** if not passed.
    */
    'hasAcceptedCreditCardsPreviously'?: boolean;
    'incorporationDate'?: IdentityEntityFormIncorporationDate | null;
    /**
    * The legal last name of the buyer (max 20 characters).
    */
    'lastName'?: string;
    /**
    * The maximum amount (in cents) that can be charged for a single transaction (max 12 characters).
    */
    'maxTransactionAmount'?: number;
    /**
    * The Merchant Category Code ([MCC](http://www.dm.usda.gov/procurement/card/card\\_x/mcc.pdf)) that this merchant will be classified under.
    */
    'mcc'?: string;
    /**
    * Avalible values include: <ul><li><strong>PUBLIC</strong> to indicate a publicly-traded company.<li><strong>PRIVATE</strong> for privately-held businesses.  For `business_type` of **GOVERNMENT_AGENCY** and **TAX_EXEMPT_ORGANIZATION** the `ownership_type` should be set to **PUBLIC**.  For `business_type` **INDIVIDUAL_SOLE_PROPRIETORSHIP**, the `ownership_type` should be set to **PRIVATE**.
    */
    'ownershipType'?: CreateIdentityRequestEntity.OwnershipTypeEnum | string;
    'personalAddress'?: Address | null;
    /**
    * Phone number where the buyer can be reached.
    */
    'phone'?: string;
    /**
    * Percentage of the company owned by the principal control owner (min 0; max 100).
    */
    'principalPercentageOwnership'?: number;
    /**
    * Pass one of the following values (nine digits):<ul><li>Social Security Number (SSN)<li>Tax Identification Number (TIN)<li>Individual Taxpayer Identification Number (ITIN)</ul>
    */
    'taxId'?: string;
    /**
    * The corporate title of the control owner (e.g. Chief Executive Officer, CFO, etc. Max 60 characters).
    */
    'title'?: string;
    /**
    * The URL of the merchant\'s public website.
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
            "type": "CreateIdentityRequestEntityBusinessAddress"
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
            "type": "CreateIdentityRequestEntity.BusinessTypeEnum"
        },
        {
            "name": "defaultStatementDescriptor",
            "baseName": "default_statement_descriptor",
            "type": "string"
        },
        {
            "name": "dob",
            "baseName": "dob",
            "type": "CreateIdentityRequestEntityDob"
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
            "type": "CreateIdentityRequestEntity.OwnershipTypeEnum"
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
        return CreateIdentityRequestEntity.attributeTypeMap;
    }
}

export namespace CreateIdentityRequestEntity {
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
    export enum OwnershipTypeEnum {
        Public = <any> 'PUBLIC',
        Private = <any> 'PRIVATE'
    }
}
