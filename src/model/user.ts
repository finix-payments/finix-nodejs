/**
 * Finix API
 */

import { RequestFile } from './models';
import { UserLinks } from './userLinks';

export class User {
    /**
    * The ID of the `User` object.
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
    * Details if the `User` is enabled and active. Set to **false** to disable the `User`.
    */
    'enabled'?: boolean;
    /**
    * ID of the `Identity` that the `User` object was created under.
    */
    'identity'?: string | null;
    /**
    * The `password` you\'ll use to authetnicate requests.
    */
    'password'?: string | null;
    /**
    * Details the level of access the [`User`](#tag/Users) has available.
    */
    'role'?: User.RoleEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    'links'?: UserLinks;

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
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "User.RoleEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "UserLinks"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

export namespace User {
    export enum RoleEnum {
        Admin = <any> 'ROLE_ADMIN',
        Platform = <any> 'ROLE_PLATFORM',
        Partner = <any> 'ROLE_PARTNER',
        Merchant = <any> 'ROLE_MERCHANT'
    }
}
