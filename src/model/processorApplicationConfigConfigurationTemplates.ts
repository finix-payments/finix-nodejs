/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class ProcessorApplicationConfigConfigurationTemplates {
    /**
    * 3-Letter Country code.
    */
    'country'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorApplicationConfigConfigurationTemplates.attributeTypeMap;
    }
}

