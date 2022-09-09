/**
 * Finix API
 */

import { RequestFile } from './models';
import { CreateProcessorRequestConfig } from './createProcessorRequestConfig';

/**
* 
*/
export class CreateProcessorRequest {
    'config'?: CreateProcessorRequestConfig;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * The type of processor. Use **DUMMY_V1** for sandbox.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "CreateProcessorRequestConfig"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateProcessorRequest.attributeTypeMap;
    }
}

