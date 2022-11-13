/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class Name {
    /**
    * The first name of the `Payment Instrument` owner.
    */
    'firstName'?: string;
    /**
    * The full name of the `Payment Instrument` owner.
    */
    'fullName'?: string;
    /**
    * The last name of the `Payment Instrument` owner.
    */
    'lastName'?: string;
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "fullName",
            "baseName": "full_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Name.attributeTypeMap;
    }
}

