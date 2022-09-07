/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Link to the `Application` the resource was created under.
*/
export class ApplicationProfileLinksApplication {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationProfileLinksApplication.attributeTypeMap;
    }
}

