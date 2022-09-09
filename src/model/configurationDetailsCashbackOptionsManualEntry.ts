/**
 * Finix API
 */

import { RequestFile } from './models';

export class ConfigurationDetailsCashbackOptionsManualEntry {
    'amountIncrement'?: number;
    'maximumAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountIncrement",
            "baseName": "amount_increment",
            "type": "number"
        },
        {
            "name": "maximumAmount",
            "baseName": "maximum_amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ConfigurationDetailsCashbackOptionsManualEntry.attributeTypeMap;
    }
}

