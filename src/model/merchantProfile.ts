/**
 * Finix API
 */

import { RequestFile } from './models';
import { MerchantProfileLinks } from './merchantProfileLinks';

/**
* 
*/
export class MerchantProfile {
    /**
    * The ID of the resource.
    */
    'id'?: string | null;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The ID of the resource.
    */
    'application'?: string;
    /**
    * The ID of the resource.
    */
    'feeProfile'?: string | null;
    /**
    * The ID of the resource.
    */
    'riskProfile'?: string | null;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
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

