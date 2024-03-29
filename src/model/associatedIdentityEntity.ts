/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { IdentityEntityBusinessAddress } from './identityEntityBusinessAddress';
import { IdentityEntityDob } from './identityEntityDob';
import { IdentityEntityFormIncorporationDate } from './identityEntityFormIncorporationDate';
import { IdentityEntityPersonalAddress } from './identityEntityPersonalAddress';

/**
* The underwriting details required to verify the `Identity`.
*/
export class AssociatedIdentityEntity {
    'businessAddress'?: IdentityEntityBusinessAddress | null;
    /**
    * The merchant\'s legal business name (max 120 characters).<ul><li>If <strong>INDIVIDUAL_SOLE_PROPRIETORSHIP</strong>, pass the owner\'s legal first name, last name and middle initial.
    */
    'businessName'?: string | null;
    /**
    * Customer service phone number where the merchant can be reached (max 10 characters).
    */
    'businessPhone'?: string | null;
    /**
    * Details if the `business_tax_id` was provided.
    */
    'businessTaxIdProvided'?: boolean;
    /**
    * Include the value that best applies to the merchant.
    */
    'businessType'?: string | null;
    /**
    * The description of the merchant that appears on the buyer\'s bank or card statement.
    */
    'defaultStatementDescriptor'?: string | null;
    /**
    * Assigned discoverMid value.
    */
    'discoverMid'?: number | null;
    'dob'?: IdentityEntityDob | null;
    /**
    * Alternate names of the business. If there are no other names, pass the same value used for `business_name` (max 60 characters).
    */
    'doingBusinessAs'?: string | null;
    /**
    * The email address of the principal control owner where they can be reached (max 100 characters).
    */
    'email'?: string | null;
    /**
    * The legal first name of the merchant\'s control owner (max 20 characters).
    */
    'firstName'?: string | null;
    /**
    * Defaults to **false** if not passed.
    */
    'hasAcceptedCreditCardsPreviously'?: boolean;
    'incorporationDate'?: IdentityEntityFormIncorporationDate | null;
    /**
    * The legal last name of the merchant\'s control owner (max 20 characters).
    */
    'lastName'?: string | null;
    /**
    * The maximum amount (in cents) that can be charged for a single transaction (max 12 characters).
    */
    'maxTransactionAmount'?: number | null;
    /**
    * The Merchant Category Code ([MCC](http://www.dm.usda.gov/procurement/card/card\\_x/mcc.pdf)) that this merchant will be classified under.
    */
    'mcc'?: string | null;
    /**
    * Values can be either: <ul><li><strong>PUBLIC</strong> to indicate a publicly-traded company.<li><strong>PRIVATE</strong> for privately-held businesses.
    */
    'ownershipType'?: AssociatedIdentityEntity.OwnershipTypeEnum | string;
    'personalAddress'?: IdentityEntityPersonalAddress | null;
    /**
    * The principal control owner\'s phone number (max 10 characters).
    */
    'phone'?: string | null;
    /**
    * Percentage of the company owned by the principal control owner (min 0; max 100).
    */
    'principalPercentageOwnership'?: number | null;
    /**
    * Abbreviated names of the business. If there are no abbreviated name, leave this field blank.
    */
    'shortBusinessName'?: string | null;
    /**
    * <ul><li>Only required when onboarding a merchant with a <tt>MCC</tt> of <strong>9311</strong>.<li> The <tt>tax_authority</tt> is the tax gathering entity (e.g San Francisco Water Authority).
    */
    'taxAuthority'?: string | null;
    /**
    * Details if the `tax_id` was provided.
    */
    'taxIdProvided'?: boolean;
    /**
    * The corporate title of the control owner (e.g. Chief Executive Officer, CFO, etc. Max 60 characters).
    */
    'title'?: string | null;
    /**
    * The URL of the merchant\'s public website.
    */
    'url'?: string | null;
    /**
    * Assigned amexMid value. If a value is passed, it must be 10 or 11 digits.
    */
    'amexMid'?: number | null;
    /**
    * The annual credit card sales (in cents) expected to be processed by this merchant (max 19 characters).
    */
    'annualCardVolume'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "businessAddress",
            "baseName": "business_address",
            "type": "IdentityEntityBusinessAddress"
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
            "name": "businessTaxIdProvided",
            "baseName": "business_tax_id_provided",
            "type": "boolean"
        },
        {
            "name": "businessType",
            "baseName": "business_type",
            "type": "string"
        },
        {
            "name": "defaultStatementDescriptor",
            "baseName": "default_statement_descriptor",
            "type": "string"
        },
        {
            "name": "discoverMid",
            "baseName": "discover_mid",
            "type": "number"
        },
        {
            "name": "dob",
            "baseName": "dob",
            "type": "IdentityEntityDob"
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
            "type": "AssociatedIdentityEntity.OwnershipTypeEnum"
        },
        {
            "name": "personalAddress",
            "baseName": "personal_address",
            "type": "IdentityEntityPersonalAddress"
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
            "name": "taxIdProvided",
            "baseName": "tax_id_provided",
            "type": "boolean"
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
        },
        {
            "name": "amexMid",
            "baseName": "amex_mid",
            "type": "number"
        },
        {
            "name": "annualCardVolume",
            "baseName": "annual_card_volume",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AssociatedIdentityEntity.attributeTypeMap;
    }
}

export namespace AssociatedIdentityEntity {
    export enum OwnershipTypeEnum {
        Public = <any> 'PUBLIC',
        Private = <any> 'PRIVATE'
    }
}
