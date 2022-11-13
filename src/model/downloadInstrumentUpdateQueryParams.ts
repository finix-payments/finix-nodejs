/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class DownloadInstrumentUpdateQueryParams {
    /**
    * Specify the format you\'d like to download the response in (JSON is the only other format available for download).
    */
    'format'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "format",
            "baseName": "format",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DownloadInstrumentUpdateQueryParams.attributeTypeMap;
    }
}

