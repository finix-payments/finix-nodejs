/**
 * Finix API
 */

import { RequestFile } from './models';
import { DisputeEvidenceLinks } from './disputeEvidenceLinks';

export class ApplePaySession {
    /**
    * The ID of the `apple_pay_session` resource.
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
    * Details about the `apple_pay_session` that was created.
    */
    'sessionDetails'?: string;
    'links'?: DisputeEvidenceLinks;

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
            "name": "sessionDetails",
            "baseName": "session_details",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DisputeEvidenceLinks"
        }    ];

    static getAttributeTypeMap() {
        return ApplePaySession.attributeTypeMap;
    }
}

