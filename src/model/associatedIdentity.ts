/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { AssociatedIdentityEntity } from './associatedIdentityEntity';
import { IdentityLinks } from './identityLinks';

/**
* 
*/
export class AssociatedIdentity {
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
    /**
    * ID of the `Application` associated with the `Identity`.
    */
    'application'?: string;
    'entity'?: AssociatedIdentityEntity;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
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
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "AssociatedIdentityEntity"
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
        return AssociatedIdentity.attributeTypeMap;
    }
}

