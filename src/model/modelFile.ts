/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class ModelFile {
    /**
    * The ID of the `File` resource.
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
    * The ID of the `Application` that the `File` was created under.
    */
    'applicationId'?: string;
    /**
    * The name of the `File` object. If you don\'t provide a name, Finix will name the object with the convention: **FILE_(file_id)**.
    */
    'displayName'?: string;
    /**
    * The extension of the file.
    */
    'extension'?: string | null;
    /**
    * ID of the `Identity` that created the `File`.
    */
    'identityId'?: string | null;
    /**
    * The resource ID the `File` is linked to.
    */
    'linkedTo'?: string;
    /**
    * Autofills to **Merchant**.
    */
    'linkedType'?: string;
    /**
    * The ID of the `Platform` that the `File` was created under.
    */
    'platformId'?: string;
    /**
    * The status of the file\'s review. The statuses available includes:<br><li><strong>REQUIRES_UPLOAD</strong>: A file still needs to be uploaded to the file object.<br><li><strong>PENDING</strong>: Finix\'s underwriting team is still reviewing the uploaded files.<br><li><strong>INVALID</strong>: The file couldn\'t be read.<br><li><strong>UPLOADED</strong>: The file has been uploaded to the resource.
    */
    'status'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * The type of document.
    */
    'type'?: string;

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
            "name": "applicationId",
            "baseName": "application_id",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "extension",
            "baseName": "extension",
            "type": "string"
        },
        {
            "name": "identityId",
            "baseName": "identity_id",
            "type": "string"
        },
        {
            "name": "linkedTo",
            "baseName": "linked_to",
            "type": "string"
        },
        {
            "name": "linkedType",
            "baseName": "linked_type",
            "type": "string"
        },
        {
            "name": "platformId",
            "baseName": "platform_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
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
        }    ];

    static getAttributeTypeMap() {
        return ModelFile.attributeTypeMap;
    }
}

