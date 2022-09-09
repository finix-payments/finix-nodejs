/**
 * Finix API
 */

import { RequestFile } from './models';

export class ExternalLink {
    /**
    * The ID of the `external_Link` resource.
    */
    'id'?: string;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Details how long the `url` will be avalible for users to upload files to.
    */
    'duration'?: string | null;
    /**
    * <ul><li>If <strong>TRUE</strong> the link has expired<br><li>If <strong>FALSE</strong>, the link is active and files can still be uploaded or downloaded from the link.
    */
    'expired'?: boolean;
    /**
    * The timestamp that the external link expires at.
    */
    'expiresAt'?: string;
    /**
    * The `File` ID the `external_link` is related to.
    */
    'fileId'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * Sets if the link is for uploading or downloading files from Finix.
    */
    'type'?: string;
    /**
    * The URL you can share with merchants to **UPLOAD** or **DOWNLOAD** files depending on the request sent.
    */
    'url'?: string;
    /**
    * The ID of the `user` that requested to create this link.
    */
    'userId'?: string;

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
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "fileId",
            "baseName": "file_id",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExternalLink.attributeTypeMap;
    }
}

