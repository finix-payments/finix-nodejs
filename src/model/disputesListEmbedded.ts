/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Dispute } from './dispute';

/**
* List of `Dispute` objects.
*/
export class DisputesListEmbedded {
    /**
    * `Dispute` objects.
    */
    'disputes'?: Set<Dispute>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "disputes",
            "baseName": "disputes",
            "type": "Set<Dispute>"
        }    ];

    static getAttributeTypeMap() {
        return DisputesListEmbedded.attributeTypeMap;
    }
}

