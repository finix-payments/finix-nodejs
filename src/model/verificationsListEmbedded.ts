/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Verification } from './verification';

/**
* List of `Verifications`.
*/
export class VerificationsListEmbedded {
    /**
    * `Verification` resources.
    */
    'verifications'?: Set<Verification>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "verifications",
            "baseName": "verifications",
            "type": "Set<Verification>"
        }    ];

    static getAttributeTypeMap() {
        return VerificationsListEmbedded.attributeTypeMap;
    }
}

