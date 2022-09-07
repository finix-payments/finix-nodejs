/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* The address of the bank account or card owner.
*/
export class CreatePaymentInstrumentRequestAddress {
    /**
    * City (max 20 characters).
    */
    'city'?: string;
    /**
    * 2-letter State code.
    */
    'region'?: string;
    /**
    * Zip or Postal code (max 7 characters).
    */
    'postalCode'?: string;
    /**
    * First line of the address (max 35 characters).
    */
    'line1'?: string;
    /**
    * 3 Letter country code (e.g. USA).
    */
    'country'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreatePaymentInstrumentRequestAddress.attributeTypeMap;
    }
}

