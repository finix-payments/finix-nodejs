/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { UpdatePayoutProfileGross } from './updatePayoutProfileGross';
import { UpdatePayoutProfileNet } from './updatePayoutProfileNet';

/**
* 
*/
export class UpdatePayoutProfile {
    'gross'?: UpdatePayoutProfileGross | null;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Configures how fees are calculated and billed from payouts. For more infromation, see [Payout Types](/guides/payouts/#payout-types).
    */
    'type'?: UpdatePayoutProfile.TypeEnum | string;
    'net'?: UpdatePayoutProfileNet | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "gross",
            "baseName": "gross",
            "type": "UpdatePayoutProfileGross"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UpdatePayoutProfile.TypeEnum"
        },
        {
            "name": "net",
            "baseName": "net",
            "type": "UpdatePayoutProfileNet"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePayoutProfile.attributeTypeMap;
    }
}

export namespace UpdatePayoutProfile {
    export enum TypeEnum {
        Custom = <any> 'CUSTOM',
        Net = <any> 'NET',
        Gross = <any> 'GROSS'
    }
}
