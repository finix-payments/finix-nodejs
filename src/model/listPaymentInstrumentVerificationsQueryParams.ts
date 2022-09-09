/**
 * Finix API
 */

import { RequestFile } from './models';

export class ListPaymentInstrumentVerificationsQueryParams {
    /**
    * The number of entries to return.
    */
    'limit'?: number;
    /**
    * The number of items to skip before starting to collect the result set.
    */
    'offset'?: number;
    /**
    * The page number to list.
    */
    'pageNumber'?: number;
    /**
    * The size of the page.
    */
    'pageSize'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ListPaymentInstrumentVerificationsQueryParams.attributeTypeMap;
    }
}

