/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class GetDeviceQueryParams {
    /**
    * Specifies whether the connection information should be included.
    */
    'includeConnection'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "includeConnection",
            "baseName": "include_connection",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GetDeviceQueryParams.attributeTypeMap;
    }
}

