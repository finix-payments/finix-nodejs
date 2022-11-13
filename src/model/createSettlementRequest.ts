/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Currency } from './currency';

export class CreateSettlementRequest {
    'currency'?: Currency;
    /**
    * If the `Application` has more than one associated `processor`, this field is required.
    */
    'merchantId'?: string;
    /**
    * If the `Application` has more than one associated `processor`, it\'s required when creating `settlements` to include the `processor` (e.g. **DUMMY_V1**).
    */
    'processor'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "merchantId",
            "baseName": "merchant_id",
            "type": "string"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateSettlementRequest.attributeTypeMap;
    }
}

