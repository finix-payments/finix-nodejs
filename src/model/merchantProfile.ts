/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { MerchantProfileLinks } from './merchantProfileLinks';

/**
* 
*/
export class MerchantProfile {
    /**
    * The ID of the `Merchant Profile` resource.
    */
    'id'?: string;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The ID of the `Application` associated with the  `Merchant Profile`.
    */
    'application'?: string;
    /**
    * The ID of the `Fee Profile` associated with the `Merchant Profile` resource.
    */
    'feeProfile'?: string | null;
    /**
    * The ID of the `Payout Profile` associated with the `Merchant Profile` resource.
    */
    'payoutProfile'?: string | null;
    /**
    * The ID of the `Risk Profile` associated with the `Merchant Profile` resource.
    */
    'riskProfile'?: string | null;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    'links'?: MerchantProfileLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "feeProfile",
            "baseName": "fee_profile",
            "type": "string"
        },
        {
            "name": "payoutProfile",
            "baseName": "payout_profile",
            "type": "string"
        },
        {
            "name": "riskProfile",
            "baseName": "risk_profile",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "MerchantProfileLinks"
        }    ];

    static getAttributeTypeMap() {
        return MerchantProfile.attributeTypeMap;
    }
}

