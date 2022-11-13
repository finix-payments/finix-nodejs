/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Details how `Payout Profiles` with type **NET** are configured.
*/
export class PayoutProfileNet {
    /**
    * Configures how frequentyly fees and payouts get credited. To configure a **CUSTOM** `frequency` [contact Finix Support](/guides/payouts/).
    */
    'frequency'?: PayoutProfileNet.FrequencyEnum | string;
    /**
    * The `id` of the `Payment Instrument` that payouts and fees get credited to and debited from.
    */
    'paymentInstrumentId'?: string;
    /**
    * Configures how quickly and which payment `rail` will be used to debit fees and credit payouts.
    */
    'rail'?: PayoutProfileNet.RailEnum | string;
    /**
    * Include a number of `submission_delay_days` to delay when `funding_transfers` for both payouts and fees will get submitted (in days) to debit/credit the `payment_instrument_id`.
    */
    'submissionDelayDays'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "PayoutProfileNet.FrequencyEnum"
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "payment_instrument_id",
            "type": "string"
        },
        {
            "name": "rail",
            "baseName": "rail",
            "type": "PayoutProfileNet.RailEnum"
        },
        {
            "name": "submissionDelayDays",
            "baseName": "submission_delay_days",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PayoutProfileNet.attributeTypeMap;
    }
}

export namespace PayoutProfileNet {
    export enum FrequencyEnum {
        Daily = <any> 'DAILY',
        Monthly = <any> 'MONTHLY',
        Custom = <any> 'CUSTOM'
    }
    export enum RailEnum {
        NextDayAch = <any> 'NEXT_DAY_ACH',
        SameDayAch = <any> 'SAME_DAY_ACH'
    }
}
