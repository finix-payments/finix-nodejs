/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { PayoutProfileGrossFees } from './payoutProfileGrossFees';
import { PayoutProfileGrossPayouts } from './payoutProfileGrossPayouts';

/**
* Details how `Payout Profiles` with type **GROSS** are configured.
*/
export class PayoutProfileGross {
    'fees'?: PayoutProfileGrossFees;
    'payouts'?: PayoutProfileGrossPayouts;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fees",
            "baseName": "fees",
            "type": "PayoutProfileGrossFees"
        },
        {
            "name": "payouts",
            "baseName": "payouts",
            "type": "PayoutProfileGrossPayouts"
        }    ];

    static getAttributeTypeMap() {
        return PayoutProfileGross.attributeTypeMap;
    }
}

