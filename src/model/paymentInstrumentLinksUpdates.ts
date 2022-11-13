/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the `Updates` created under the resource.
*/
export class PaymentInstrumentLinksUpdates {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentLinksUpdates.attributeTypeMap;
    }
}

