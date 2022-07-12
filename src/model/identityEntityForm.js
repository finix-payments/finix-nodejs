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
exports.IdentityEntityForm = void 0;
/**
* Information needed to verify the identity of the entity.
*/
class IdentityEntityForm {
    /**
    * Control person\'s corporate title or role (i.e. Chief Executive Officer, CFO, etc.; max 60 characters).
    */
    'title';
    /**
    * Assigned amex_Mid value. If included must be 10 or 11 digits.
    */
    'amexMid';
    /**
    * Approximate annual credit card sales expected to be processed in cents by this merchant (max 19 characters).
    */
    'annualCardVolume';
    'businessAddress';
    /**
    * Merchant\'s full legal business name (If INDIVIDUAL\\_SOLE\\_PROPRIETORSHIP, input first name, Full legal last name and middle initial; max 120 characters)
    */
    'businessName';
    /**
    * Customer service phone number where the merchant can be reached (max 10 characters).
    */
    'businessPhone';
    /**
    * Nine digit Tax Identification Number (TIN), Employer Identification Number (EIN). If the `business_type` is **INDIVIDUAL\\_SOLE\\_PROPRIETORSHIP** and they do not have an EIN, use the sole proprietor\'s Social Security Number (SSN).
    */
    'businessTaxId';
    /**
    * Include the value that applies the best.
    */
    'businessType';
    /**
    * Billing description displayed on the buyer\'s bank or card statement (Length must be between 1 and 20 characters).
    */
    'defaultStatementDescriptor';
    /**
    * Assigned discover_Mid value.
    */
    'discoverMid';
    'dob';
    /**
    * Alternate name of the business. If no other name is used use the same value used in `business_name` (max 60 characters)
    */
    'doingBusinessAs';
    /**
    * Control person\'s email address where they can be reached (max 100 characters).
    */
    'email';
    /**
    * Full legal first name of the merchant\'s principal representative (max 20 characters).
    */
    'firstName';
    /**
    * Defaults to **false** if not passed.
    */
    'hasAcceptedCreditCardsPreviously';
    'incorporationDate';
    /**
    * Full legal last name of the merchant\'s principal representative (max 20 characters).
    */
    'lastName';
    /**
    * Maximum amount that can be transacted for a single transaction in cents (max 12 characters).
    */
    'maxTransactionAmount';
    /**
    * The Merchant Category Code ([MCC](http://www.dm.usda.gov/procurement/card/card_x/mcc.pdf)) the merchant is classified under.
    */
    'mcc';
    /**
    * Values can be either: <ul><li><strong>PUBLIC</strong> to indicate a publicly-traded company.<li><strong>PRIVATE</strong> for privately-held businesses.
    */
    'ownershipType';
    'personalAddress';
    /**
    * Principal\'s phone number (max 10 characters).
    */
    'phone';
    /**
    * Percentage of company owned by the principal (min 0; max 100).
    */
    'principalPercentageOwnership';
    /**
    * The short version of the business name. (Defaults to **null**).
    */
    'shortBusinessName';
    /**
    * Used and required when onboarding a `Merchant` with a `MCC` of **9311**. The  `tax_authority` is the tax gathering entity (e.g San Francisco Water Authority).
    */
    'taxAuthority';
    /**
    * Used to verify `tax_id` was provided.
    */
    'taxId';
    /**
    * Merchant\'s publicly available website (max 100 characters).
    */
    'url';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
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
            "name": "url",
            "baseName": "url",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return IdentityEntityForm.attributeTypeMap;
    }
}
exports.IdentityEntityForm = IdentityEntityForm;
(function (IdentityEntityForm) {
    let BusinessTypeEnum;
    (function (BusinessTypeEnum) {
        BusinessTypeEnum[BusinessTypeEnum["IndividualSoleProprietorship"] = 'INDIVIDUAL_SOLE_PROPRIETORSHIP'] = "IndividualSoleProprietorship";
        BusinessTypeEnum[BusinessTypeEnum["Corporation"] = 'CORPORATION'] = "Corporation";
        BusinessTypeEnum[BusinessTypeEnum["LimitedLiabilityCompany"] = 'LIMITED_LIABILITY_COMPANY'] = "LimitedLiabilityCompany";
        BusinessTypeEnum[BusinessTypeEnum["Partnership"] = 'PARTNERSHIP'] = "Partnership";
        BusinessTypeEnum[BusinessTypeEnum["LimitedPartnership"] = 'LIMITED_PARTNERSHIP'] = "LimitedPartnership";
        BusinessTypeEnum[BusinessTypeEnum["GeneralPartnership"] = 'GENERAL_PARTNERSHIP'] = "GeneralPartnership";
        BusinessTypeEnum[BusinessTypeEnum["AssociationEstateTrust"] = 'ASSOCIATION_ESTATE_TRUST'] = "AssociationEstateTrust";
        BusinessTypeEnum[BusinessTypeEnum["TaxExemptOrganization"] = 'TAX_EXEMPT_ORGANIZATION'] = "TaxExemptOrganization";
        BusinessTypeEnum[BusinessTypeEnum["InternationalOrganization"] = 'INTERNATIONAL_ORGANIZATION'] = "InternationalOrganization";
        BusinessTypeEnum[BusinessTypeEnum["GovernmentAgency"] = 'GOVERNMENT_AGENCY'] = "GovernmentAgency";
        BusinessTypeEnum[BusinessTypeEnum["JointVenture"] = 'JOINT_VENTURE'] = "JointVenture";
    })(BusinessTypeEnum = IdentityEntityForm.BusinessTypeEnum || (IdentityEntityForm.BusinessTypeEnum = {}));
    let OwnershipTypeEnum;
    (function (OwnershipTypeEnum) {
        OwnershipTypeEnum[OwnershipTypeEnum["Private"] = 'PRIVATE'] = "Private";
        OwnershipTypeEnum[OwnershipTypeEnum["Public"] = 'PUBLIC'] = "Public";
    })(OwnershipTypeEnum = IdentityEntityForm.OwnershipTypeEnum || (IdentityEntityForm.OwnershipTypeEnum = {}));
})(IdentityEntityForm = exports.IdentityEntityForm || (exports.IdentityEntityForm = {}));
//# sourceMappingURL=identityEntityForm.js.map