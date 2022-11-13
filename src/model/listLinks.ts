/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { ListLinksNext } from './listLinksNext';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class ListLinks {
    'next'?: ListLinksNext;
    'self'?: ApplicationLinksSelf;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "next",
            "baseName": "next",
            "type": "ListLinksNext"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        }    ];

    static getAttributeTypeMap() {
        return ListLinks.attributeTypeMap;
    }
}

