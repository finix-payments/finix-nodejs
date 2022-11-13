/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Link to the resource that was used in the request.
*/
export class ApplicationLinksSelf {
    'href'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationLinksSelf.attributeTypeMap;
    }
}

