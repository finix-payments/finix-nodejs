/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* 
*/
export class UpdateFeeRequest {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: object | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return UpdateFeeRequest.attributeTypeMap;
    }
}

