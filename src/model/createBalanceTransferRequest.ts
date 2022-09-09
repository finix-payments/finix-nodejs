/**
 * Finix API
 */

import { RequestFile } from './models';
import { Currency } from './currency';

/**
* Create a `balance_transfer` resource.
*/
export class CreateBalanceTransferRequest {
    /**
    * The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    */
    'amount': number;
    'currency': Currency;
    /**
    * Additional information about the `balance_transfer` (e.g. **Transferring funds for Holidays**).
    */
    'description': string;
    /**
    * The account where funds get credited. For balance transfers, this is an aliased ID and will have the value of `FOR_BENEFIT_OF_ACCOUNT` or `OPERATING_ACCOUNT`.
    */
    'destination': CreateBalanceTransferRequest.DestinationEnum | string;
    /**
    * Pass **LITLE_V1**; `balance_transfers` are only avalible for platforms with **LITLE_V1** credentials.
    */
    'processorType': string;
    /**
    * The account where funds get debited. For balance transfers, this is an aliased ID and will have the value of `FOR_BENEFIT_OF_ACCOUNT` or `OPERATING_ACCOUNT`.
    */
    'source': CreateBalanceTransferRequest.SourceEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "CreateBalanceTransferRequest.DestinationEnum"
        },
        {
            "name": "processorType",
            "baseName": "processor_type",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "CreateBalanceTransferRequest.SourceEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateBalanceTransferRequest.attributeTypeMap;
    }
}

export namespace CreateBalanceTransferRequest {
    export enum DestinationEnum {
        ForBenefitOfAccount = <any> 'FOR_BENEFIT_OF_ACCOUNT',
        OperatingAccount = <any> 'OPERATING_ACCOUNT'
    }
    export enum SourceEnum {
        ForBenefitOfAccount = <any> 'FOR_BENEFIT_OF_ACCOUNT',
        OperatingAccount = <any> 'OPERATING_ACCOUNT'
    }
}
