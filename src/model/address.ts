/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Country } from './country';

/**
* Principal\'s personal home address. This field is used for `Identity` verification purposes.
*/
export class Address {
    /**
    * City (max 20 characters).
    */
    'city'?: string | null;
    'country'?: Country | null;
    /**
    * First line of the address (max 35 characters).
    */
    'line1'?: string | null;
    /**
    * Second line of the address (max 35 characters).
    */
    'line2'?: string | null;
    /**
    * Zip or Postal code (max 7 characters).
    */
    'postalCode'?: string | null;
    /**
    * 2-letter State code.
    */
    'region'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "Country"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}

