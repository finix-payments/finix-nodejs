/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { PageCursor } from './pageCursor';
import { PayoutProfilesListEmbedded } from './payoutProfilesListEmbedded';

/**
* List of `Payout Profiles`.
*/
export class PayoutProfilesList {
    'embedded'?: PayoutProfilesListEmbedded;
    'links'?: ListLinks;
    'page'?: PageCursor;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "PayoutProfilesListEmbedded"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "PageCursor"
        }    ];

    static getAttributeTypeMap() {
        return PayoutProfilesList.attributeTypeMap;
    }
}

