/**
 * Finix API
 */

import { RequestFile } from './models';

export class UpdateApplicationProfileRequest {
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

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return UpdateApplicationProfileRequest.attributeTypeMap;
    }
}

