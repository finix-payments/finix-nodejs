/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ExternalLink } from './externalLink';

/**
* List of `external_link` resources.
*/
export class ExternalLinksListEmbedded {
    /**
    * `external_link` resources.
    */
    'externalLinks'?: Array<ExternalLink>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "externalLinks",
            "baseName": "external_links",
            "type": "Array<ExternalLink>"
        }    ];

    static getAttributeTypeMap() {
        return ExternalLinksListEmbedded.attributeTypeMap;
    }
}

