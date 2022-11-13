/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { AdditionalPurchaseData } from './additionalPurchaseData';

export class UpdateAuthorizationRequest {
    'additionalPurchaseData'?: AdditionalPurchaseData;
    /**
    * The amount of the  `Authorization`  you would like to capture in cents. Must be less than or equal to the `amount` of the `Authorization`.
    */
    'captureAmount'?: number;
    /**
    * The amount of the `Authorization` you\'d like to collect as your fee in cents. Defaults to zero (must be less than or equal to the `amount`).
    */
    'fee'?: number;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Set to **True** to void the `Authorization`.
    */
    'voidMe'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalPurchaseData",
            "baseName": "additional_purchase_data",
            "type": "AdditionalPurchaseData"
        },
        {
            "name": "captureAmount",
            "baseName": "capture_amount",
            "type": "number"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "voidMe",
            "baseName": "void_me",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return UpdateAuthorizationRequest.attributeTypeMap;
    }
}

