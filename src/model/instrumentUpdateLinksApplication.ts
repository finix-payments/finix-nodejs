/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the application.
*/
export class InstrumentUpdateLinksApplication {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InstrumentUpdateLinksApplication.attributeTypeMap;
    }
}

