/**
 * Finix API
 */

import { RequestFile } from './models';
import { ConfigurationDetailsCashbackOptionsManualEntry } from './configurationDetailsCashbackOptionsManualEntry';

export class ConfigurationDetailsCashbackOptions {
    'manualEntry'?: ConfigurationDetailsCashbackOptionsManualEntry;
    'selectionAmounts'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "manualEntry",
            "baseName": "manual_entry",
            "type": "ConfigurationDetailsCashbackOptionsManualEntry"
        },
        {
            "name": "selectionAmounts",
            "baseName": "selection_amounts",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConfigurationDetailsCashbackOptions.attributeTypeMap;
    }
}

