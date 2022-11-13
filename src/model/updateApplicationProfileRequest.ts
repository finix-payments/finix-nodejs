/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class UpdateApplicationProfileRequest {
    /**
    * The ID of the `Fee Profile` associated with the `Application`.
    */
    'feeProfile'?: object;
    /**
    * The ID of the `Fee Profile` associated with the `Application`.
    */
    'riskProfile'?: object;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feeProfile",
            "baseName": "fee_profile",
            "type": "object"
        },
        {
            "name": "riskProfile",
            "baseName": "risk_profile",
            "type": "object"
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

