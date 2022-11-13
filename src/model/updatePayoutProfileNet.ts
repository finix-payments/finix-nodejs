/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Configure how `Payout Profiles` with type **NET** are setup.
*/
export class UpdatePayoutProfileNet {
    /**
    * Configures how frequentyly fees *and* payouts get credited.
    */
    'frequency'?: string;
    /**
    * The `id` of the `Payment Instrument` that payouts *and* fees get credited to and debited from.
    */
    'paymentInstrumentId'?: string;
    /**
    * Configures how quickly and which payment `rail` will be used to debit fees *and* credit payouts.
    */
    'rail'?: string;
    /**
    * Include a number of `submission_delay_days` to delay when `funding_transfers` for both payouts *and* fees get submitted (in days) to debit/credit the `payment_instrument_id`.
    */
    'submissionDelayDays'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "string"
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "payment_instrument_id",
            "type": "string"
        },
        {
            "name": "rail",
            "baseName": "rail",
            "type": "string"
        },
        {
            "name": "submissionDelayDays",
            "baseName": "submission_delay_days",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePayoutProfileNet.attributeTypeMap;
    }
}

