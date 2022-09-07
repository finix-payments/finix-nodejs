/**
 * Finix API
 */

import { RequestFile } from './models';

export class ConfigurationDetailsTipOptions {
    'type'?: string;
    'otherOptions'?: string;
    'tipSelections'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "otherOptions",
            "baseName": "other_options",
            "type": "string"
        },
        {
            "name": "tipSelections",
            "baseName": "tip_selections",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConfigurationDetailsTipOptions.attributeTypeMap;
    }
}

