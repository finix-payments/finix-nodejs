/**
 * Finix API
 */

import { RequestFile } from './models';
import { IdentityAdditionalUnderwritingData } from './identityAdditionalUnderwritingData';
import { IdentityEntity } from './identityEntity';
import { IdentityLinks } from './identityLinks';

/**
* 
*/
export class Identity {
    /**
    * The ID of the `Identity` resource.
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
    'additionalUnderwritingData'?: IdentityAdditionalUnderwritingData | null;
    /**
    * ID of the `Application` associated with the `Identity`.
    */
    'application'?: string;
    'entity'?: IdentityEntity;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    'links'?: IdentityLinks;

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
            "name": "additionalUnderwritingData",
            "baseName": "additional_underwriting_data",
            "type": "IdentityAdditionalUnderwritingData"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "IdentityEntity"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "IdentityLinks"
        }    ];

    static getAttributeTypeMap() {
        return Identity.attributeTypeMap;
    }
}

