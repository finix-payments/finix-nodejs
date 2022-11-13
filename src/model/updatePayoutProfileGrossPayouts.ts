/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Configures the details of how payouts get paid and credited.
*/
export class UpdatePayoutProfileGrossPayouts {
    /**
    * Configures how frequentyly **payouts** get credited. To configure a **CUSTOM** `frequency` [contact Finix Support](/guides/payouts/).
    */
    'frequency'?: UpdatePayoutProfileGrossPayouts.FrequencyEnum | string;
    /**
    * The `id` of the `Payment Instrument`that payouts will get credited to.
    */
    'paymentInstrumentId'?: string;
    /**
    * Configures how quickly and which payment `rail` will be used to credit **payouts**.
    */
    'rail'?: string;
    /**
    * Include a number of `submission_delay_days` to delay when `funding_transfers` for `payouts` will get submitted to credit (in days) the `payment_instrument_id`.
    */
    'submissionDelayDays'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "UpdatePayoutProfileGrossPayouts.FrequencyEnum"
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
        return UpdatePayoutProfileGrossPayouts.attributeTypeMap;
    }
}

export namespace UpdatePayoutProfileGrossPayouts {
    export enum FrequencyEnum {
        Daily = <any> 'DAILY',
        Monthly = <any> 'MONTHLY',
        Custom = <any> 'CUSTOM'
    }
}
