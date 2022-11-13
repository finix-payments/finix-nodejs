/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { UpdatePayoutProfileGrossFees } from './updatePayoutProfileGrossFees';
import { UpdatePayoutProfileGrossPayouts } from './updatePayoutProfileGrossPayouts';

/**
* Configure how `Payout Profiles` with type **GROSS** are setup.
*/
export class UpdatePayoutProfileGross {
    'fees'?: UpdatePayoutProfileGrossFees;
    'payouts'?: UpdatePayoutProfileGrossPayouts;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fees",
            "baseName": "fees",
            "type": "UpdatePayoutProfileGrossFees"
        },
        {
            "name": "payouts",
            "baseName": "payouts",
            "type": "UpdatePayoutProfileGrossPayouts"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePayoutProfileGross.attributeTypeMap;
    }
}

