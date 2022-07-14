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
exports.ExternalLink = void 0;
class ExternalLink {
    /**
    * The ID of the `external_Link` resource.
    */
    'id';
    /**
    * Timestamp of when the object was created.
    */
    'createdAt';
    /**
    * The URL you can share with merchants to **UPLOAD** or **DOWNLOAD** files depending on the request sent.
    */
    'url';
    /**
    * Sets if the link is for uploading or downloading files from Finix.
    */
    'type';
    /**
    * The timestamp that the external link expires at.
    */
    'expiresAt';
    /**
    * The ID of the `user` that requested to create this link.
    */
    'userId';
    /**
    * The `File` ID the `external_link` is related to.
    */
    'fileId';
    /**
    * Details how long the `url` will be avalible for users to upload files to.
    */
    'duration';
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags';
    /**
    * <ul><li>If <strong>TRUE</strong> the link has expired<br><li>If <strong>FALSE</strong>, the link is active and files can still be uploaded or downloaded from the link.
    */
    'expired';
    static discriminator = undefined;
    static attributeTypeMap = [
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
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string"
        },
        {
            "name": "fileId",
            "baseName": "file_id",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean"
        }
    ];
    static getAttributeTypeMap() {
        return ExternalLink.attributeTypeMap;
    }
}
exports.ExternalLink = ExternalLink;
