/**
 * Finix API
 */

import { RequestFile } from './models';
import { CreateIdentityRequestEntityPersonalAddress } from './createIdentityRequestEntityPersonalAddress';

/**
* The underwriting details required to verify `Identities`.
*/
export class CreateIdentityRequestEntity {
    /**
    * The email address of the buyer where they can be reached (max 100 characters).
    */
    'email'?: string;
    /**
    * The legal first name of the buyer (max 20 characters).
    */
    'firstName'?: string;
    /**
    * The legal last name of the buyer (max 20 characters).
    */
    'lastName'?: string;
    'personalAddress'?: CreateIdentityRequestEntityPersonalAddress;
    /**
    * Phone number where the buyer can be reached.
    */
    'phone'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "personalAddress",
            "baseName": "personal_address",
            "type": "CreateIdentityRequestEntityPersonalAddress"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateIdentityRequestEntity.attributeTypeMap;
    }
}

