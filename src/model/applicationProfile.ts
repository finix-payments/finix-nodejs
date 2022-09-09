/**
 * Finix API
 */

import { RequestFile } from './models';
import { ApplicationProfileLinks } from './applicationProfileLinks';

export class ApplicationProfile {
    /**
    * ID of the `application_profile` resource.
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
    * The ID of the `Application` resource.
    */
    'application'?: string;
    /**
    * The ID of the `Fee Profile` associated with the `Application`.
    */
    'feeProfile'?: string | null;
    /**
    * The ID of the `risk_profile` that was created during provisioning.
    */
    'riskProfile'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    'links'?: ApplicationProfileLinks;

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
            "type": "ApplicationProfileLinks"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationProfile.attributeTypeMap;
    }
}

