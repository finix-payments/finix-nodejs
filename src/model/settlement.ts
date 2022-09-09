/**
 * Finix API
 */

import { RequestFile } from './models';
import { Currency } from './currency';
import { SettlementLinks } from './settlementLinks';

/**
* 
*/
export class Settlement {
    /**
    * The ID of the resource.
    */
    'id'?: string | null;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The ID of the `Application` resource the `Settlement` was created under.
    */
    'application'?: string;
    'currency'?: Currency;
    /**
    * ID of the `Payment Instrument` where funds will be sent.
    */
    'destination'?: string | null;
    /**
    * Details how funds will be dispersed in the `Funding Transfer` (usually **null**).
    */
    'fundsFlow'?: string | null;
    /**
    * The ID of the resource.
    */
    'identity'?: string | null;
    /**
    * The ID of the resource.
    */
    'merchantId'?: string | null;
    /**
    * The amount in cents that will be deposited into the merchant\'s bank account.
    */
    'netAmount'?: number;
    /**
    * The type of `Payment Instrument` used in the `Funding Transfer` (or the original payment).
    */
    'paymentType'?: string | null;
    /**
    * Name of the `Settlement` processor.
    */
    'processor'?: string;
    /**
    * The status of the `Settlement`. Available values include:<ul><li>**PENDING**<li>**AWAITING_APPROVAL**<li>**APPROVED**.</ul> Merchants only receive payouts when `Settlements` are **APPROVED** and receive the resulting funding `Transfer` . For more information, see [Payouts](/guides/payouts/payouts/).
    */
    'status'?: Settlement.StatusEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * Total amount of the `Settlement` (in cents).
    */
    'totalAmount'?: number;
    /**
    * Sum of the fees in the `Settlement`.
    */
    'totalFee'?: number;
    /**
    * Sum of the fees  (including Subcription Billing) in the `Settlement`.
    */
    'totalFees'?: number;
    /**
    * Type of `Settlement`.
    */
    'type'?: Settlement.TypeEnum | string;
    'links'?: SettlementLinks;

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
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string"
        },
        {
            "name": "fundsFlow",
            "baseName": "funds_flow",
            "type": "string"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchant_id",
            "type": "string"
        },
        {
            "name": "netAmount",
            "baseName": "net_amount",
            "type": "number"
        },
        {
            "name": "paymentType",
            "baseName": "payment_type",
            "type": "string"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Settlement.StatusEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "totalAmount",
            "baseName": "total_amount",
            "type": "number"
        },
        {
            "name": "totalFee",
            "baseName": "total_fee",
            "type": "number"
        },
        {
            "name": "totalFees",
            "baseName": "total_fees",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Settlement.TypeEnum"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "SettlementLinks"
        }    ];

    static getAttributeTypeMap() {
        return Settlement.attributeTypeMap;
    }
}

export namespace Settlement {
    export enum StatusEnum {
        Approved = <any> 'APPROVED',
        AwaitingApproval = <any> 'AWAITING_APPROVAL',
        Cancelled = <any> 'CANCELLED',
        Pending = <any> 'PENDING'
    }
    export enum TypeEnum {
        MerchantRevenue = <any> 'MERCHANT_REVENUE',
        PlatformFee = <any> 'PLATFORM_FEE',
        PartnerFee = <any> 'PARTNER_FEE',
        Noop = <any> 'NOOP',
        Merchant = <any> 'MERCHANT',
        Application = <any> 'APPLICATION',
        Platform = <any> 'PLATFORM'
    }
}
