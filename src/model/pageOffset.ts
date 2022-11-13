/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class PageOffset {
    /**
    * The number of entries returned.
    */
    'count'?: number;
    /**
    * The number of entries to return.
    */
    'limit'?: number;
    /**
    * The number of items to skip before starting to collect the result set.
    */
    'offset'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PageOffset.attributeTypeMap;
    }
}

