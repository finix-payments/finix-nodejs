/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* The home address of the merchant\'s principal control owner. This field is used for identity verification purposes.
*/
export class IdentityEntityPersonalAddress {
    /**
    * First line of the address (max 35 characters).
    */
    'line1'?: string | null;
    /**
    * Second line of the address (max 35 characters).
    */
    'line2'?: string | null;
    /**
    * City (max 20 characters).
    */
    'city'?: string | null;
    /**
    * 2-letter State code.
    */
    'region'?: string | null;
    /**
    * Zip or Postal code (max 7 characters).
    */
    'postalCode'?: string | null;
    /**
    * 3-Letter country code (e.g. USA).
    */
    'country'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "country",
            "baseName": "country",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IdentityEntityPersonalAddress.attributeTypeMap;
    }
}

