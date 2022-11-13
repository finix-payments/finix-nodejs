/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* The primary address for the legal entity.
*/
export class CreateAssociatedIdentityRequestEntityBusinessAddress {
    /**
    * City (max 20 characters).
    */
    'city'?: string;
    'country'?: string;
    /**
    * Second line of the address (max 35 characters).
    */
    'line2'?: string;
    /**
    * First line of the address (max 35 characters).
    */
    'line1'?: string;
    /**
    * Zip or Postal code (max 7 characters).
    */
    'postalCode'?: string;
    /**
    * 2-letter state code.
    */
    'region'?: string;

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
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
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
        return CreateAssociatedIdentityRequestEntityBusinessAddress.attributeTypeMap;
    }
}

