/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* 
*/
export class CreateUserRequest {
    /**
    * Details if the `user` is enabled and active. Set to **false** to disable the `user`.
    */
    'enabled'?: boolean;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateUserRequest.attributeTypeMap;
    }
}

