/**
 * Finix API
 */

import { RequestFile } from './models';
import { UpdateIdentityRequestEntityPersonalAddress } from './updateIdentityRequestEntityPersonalAddress';

/**
* Identifying information about the buyer.
*/
export class UpdateIdentityRequestEntity {
    /**
    * The email address of the buyer (max 100 characters).
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
    'personalAddress'?: UpdateIdentityRequestEntityPersonalAddress;
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
            "type": "UpdateIdentityRequestEntityPersonalAddress"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateIdentityRequestEntity.attributeTypeMap;
    }
}

