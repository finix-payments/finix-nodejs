/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class LogRef {
    'logref'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "logref",
            "baseName": "logref",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LogRef.attributeTypeMap;
    }
}

