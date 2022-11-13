/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Configures the details of how fees get debited.
*/
export class UpdatePayoutProfileGrossFees {
    /**
    * Day of the month fees get debited. Required when `frequency` is set to **MONTHLY**.
    */
    'dayOfMonth'?: number;
    /**
    * Configures how frequentyly **fees** get debited. To configure a **CUSTOM** `frequency` [contact Finix Support](/guides/payouts/).
    */
    'frequency'?: UpdatePayoutProfileGrossFees.FrequencyEnum | string;
    /**
    * The `id` of the `Payment Instrument`that **fees** get debited from.
    */
    'paymentInstrumentId'?: string;
    /**
    * Configures how quickly and which payment `rail` will be used to debit **fees**.
    */
    'rail'?: UpdatePayoutProfileGrossFees.RailEnum | string;
    /**
    * Include a number of `submission_delay_days` to delay when `funding_transfers` for `fees` will get submitted to debit (in days) the `payment_instrument_id`.
    */
    'submissionDelayDays'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dayOfMonth",
            "baseName": "day_of_month",
            "type": "number"
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "UpdatePayoutProfileGrossFees.FrequencyEnum"
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "payment_instrument_id",
            "type": "string"
        },
        {
            "name": "rail",
            "baseName": "rail",
            "type": "UpdatePayoutProfileGrossFees.RailEnum"
        },
        {
            "name": "submissionDelayDays",
            "baseName": "submission_delay_days",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePayoutProfileGrossFees.attributeTypeMap;
    }
}

export namespace UpdatePayoutProfileGrossFees {
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
