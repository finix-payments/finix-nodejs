/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Configures and details how payouts get paid and credited.
*/
export class PayoutProfileGrossPayouts {
    /**
    * Configures how frequentyly *payouts* get credited. To configure a **CUSTOM** `frequency` [contact Finix Support](/guides/payouts/).
    */
    'frequency'?: PayoutProfileGrossPayouts.FrequencyEnum | string;
    /**
    * The `id` of the `Payment Instrument`that *payouts* will get credited to.
    */
    'paymentInstrumentId'?: string;
    /**
    * Configures how quickly and which payment `rail` will be used to credit *payouts*.
    */
    'rail'?: PayoutProfileGrossPayouts.RailEnum | string;
    /**
    * Include a number of `submission_delay_days` to delay when `funding_transfers` for *payouts* will get submitted to credit (in days) the `payment_instrument_id`.
    */
    'submissionDelayDays'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "PayoutProfileGrossPayouts.FrequencyEnum"
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "payment_instrument_id",
            "type": "string"
        },
        {
            "name": "rail",
            "baseName": "rail",
            "type": "PayoutProfileGrossPayouts.RailEnum"
        },
        {
            "name": "submissionDelayDays",
            "baseName": "submission_delay_days",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PayoutProfileGrossPayouts.attributeTypeMap;
    }
}

export namespace PayoutProfileGrossPayouts {
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
