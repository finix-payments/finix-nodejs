/**
 * Finix API
 */

import { RequestFile } from './models';
import { Authorization } from './authorization';

/**
* List of `Authroization` objects.
*/
export class AuthorizationsListEmbedded {
    /**
    * `Authorization` objects.
    */
    'authorizations'?: Set<Authorization>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authorizations",
            "baseName": "authorizations",
            "type": "Set<Authorization>"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationsListEmbedded.attributeTypeMap;
    }
}

