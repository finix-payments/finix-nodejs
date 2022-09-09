/**
 * Finix API
 */

import { RequestFile } from './models';
import { CreateAssociatedIdentityRequestEntity } from './createAssociatedIdentityRequestEntity';

export class CreateAssociatedIdentityRequest {
    'entity'?: CreateAssociatedIdentityRequestEntity;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entity",
            "baseName": "entity",
            "type": "CreateAssociatedIdentityRequestEntity"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateAssociatedIdentityRequest.attributeTypeMap;
    }
}

