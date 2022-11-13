/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { CreateIdentityRequestAdditionalUnderwritingData } from './createIdentityRequestAdditionalUnderwritingData';
import { CreateIdentityRequestEntity } from './createIdentityRequestEntity';

/**
* 
*/
export class CreateIdentityRequest {
    'additionalUnderwritingData'?: CreateIdentityRequestAdditionalUnderwritingData | null;
    'entity'?: CreateIdentityRequestEntity;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalUnderwritingData",
            "baseName": "additional_underwriting_data",
            "type": "CreateIdentityRequestAdditionalUnderwritingData"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "CreateIdentityRequestEntity"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateIdentityRequest.attributeTypeMap;
    }
}

