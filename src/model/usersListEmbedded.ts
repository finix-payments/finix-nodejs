/**
 * Finix API
 */

import { RequestFile } from './models';
import { User } from './user';

/**
* List of `User` objects.
*/
export class UsersListEmbedded {
    /**
    * `User` objects.
    */
    'users'?: Set<User>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Set<User>"
        }    ];

    static getAttributeTypeMap() {
        return UsersListEmbedded.attributeTypeMap;
    }
}

