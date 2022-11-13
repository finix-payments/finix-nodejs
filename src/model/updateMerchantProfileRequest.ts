/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class UpdateMerchantProfileRequest {
    /**
    * ID of the `fee_profile`.
    */
    'feeProfile'?: string;
    /**
    * ID of the `payout_profile`.
    */
    'payoutProfile'?: string;
    /**
    * ID of the `risk_profile`.
    */
    'riskProfile'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feeProfile",
            "baseName": "fee_profile",
            "type": "string"
        },
        {
            "name": "payoutProfile",
            "baseName": "payout_profile",
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
        return UpdateMerchantProfileRequest.attributeTypeMap;
    }
}

