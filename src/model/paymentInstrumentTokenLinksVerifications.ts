/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `Verification` the request was made under.
*/
export class PaymentInstrumentTokenLinksVerifications {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentTokenLinksVerifications.attributeTypeMap;
    }
}

