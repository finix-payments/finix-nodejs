/**
 * Finix API
 */

import { RequestFile } from './models';
import { UpdateIdentityRequestAdditionalUnderwritingData } from './updateIdentityRequestAdditionalUnderwritingData';
import { UpdateIdentityRequestEntity } from './updateIdentityRequestEntity';

export class UpdateIdentityRequest {
    'additionalUnderwritingData'?: UpdateIdentityRequestAdditionalUnderwritingData;
    'entity'?: UpdateIdentityRequestEntity;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalUnderwritingData",
            "baseName": "additional_underwriting_data",
            "type": "UpdateIdentityRequestAdditionalUnderwritingData"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "UpdateIdentityRequestEntity"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return UpdateIdentityRequest.attributeTypeMap;
    }
}

