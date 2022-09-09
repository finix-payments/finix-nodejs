/**
 * Finix API
 */

import { RequestFile } from './models';
import { SubscriptionAmountFeeAmountData } from './subscriptionAmountFeeAmountData';
import { SubscriptionAmountLinks } from './subscriptionAmountLinks';

/**
* 
*/
export class SubscriptionAmount {
    /**
    * ID of the `Subscription Amount`.
    */
    'id'?: string;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * `Subscription Amount` type. The only type supported as of now is **FEE**.
    */
    'amountType'?: SubscriptionAmount.AmountTypeEnum | string;
    /**
    * The ID of the `User` that created the `Subscription Amount`.
    */
    'createdBy'?: string;
    'feeAmountData'?: SubscriptionAmountFeeAmountData;
    /**
    * Human readable name.
    */
    'nickname'?: string;
    /**
    * ID of the `Subscription Schedule`.
    */
    'subscriptionSchedule'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    'links'?: SubscriptionAmountLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "amountType",
            "baseName": "amount_type",
            "type": "SubscriptionAmount.AmountTypeEnum"
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "string"
        },
        {
            "name": "feeAmountData",
            "baseName": "fee_amount_data",
            "type": "SubscriptionAmountFeeAmountData"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "subscriptionSchedule",
            "baseName": "subscription_schedule",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "SubscriptionAmountLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAmount.attributeTypeMap;
    }
}

export namespace SubscriptionAmount {
    export enum AmountTypeEnum {
        Fee = <any> 'FEE'
    }
}
