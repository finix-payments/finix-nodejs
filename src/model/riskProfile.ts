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

import { RequestFile } from './models';
import { RiskProfileLinks } from './riskProfileLinks';

export class RiskProfile {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
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
    'avsFailureAllowed'?: boolean;
    'cscFailureAllowed'?: boolean;
    'links'?: RiskProfileLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
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
            "name": "avsFailureAllowed",
            "baseName": "avs_failure_allowed",
            "type": "boolean"
        },
        {
            "name": "cscFailureAllowed",
            "baseName": "csc_failure_allowed",
            "type": "boolean"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "RiskProfileLinks"
        }    ];

    static getAttributeTypeMap() {
        return RiskProfile.attributeTypeMap;
    }
}

