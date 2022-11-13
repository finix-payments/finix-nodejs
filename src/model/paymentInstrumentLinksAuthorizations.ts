/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the `Authorizations` created under the resource.
*/
export class PaymentInstrumentLinksAuthorizations {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentLinksAuthorizations.attributeTypeMap;
    }
}

