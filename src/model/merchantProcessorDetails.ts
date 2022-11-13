/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Additional details specific to the processor.
*/
export class MerchantProcessorDetails {
    'apiKey'?: string;
    'mid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiKey",
            "baseName": "api_key",
            "type": "string"
        },
        {
            "name": "mid",
            "baseName": "mid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantProcessorDetails.attributeTypeMap;
    }
}

