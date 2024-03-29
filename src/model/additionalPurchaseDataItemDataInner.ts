/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class AdditionalPurchaseDataItemDataInner {
    /**
    * Total cost in cents of the line item excluding tax.
    */
    'amountExcludingSalesTax'?: number;
    /**
    * Total cost in cents of the line item including tax.
    */
    'amountIncludingSalesTax'?: number;
    /**
    * A commodity code is a numeric code representing a particular product or service as defined by the National Institute of Governmental Purchasing. The code can be 3, 5, 7, or 11 digits in length. The longer the code the more granular the description of the product/service. (max 12 characters).
    */
    'commodityCode'?: string;
    /**
    * The price in cents of one unit of the item purchased
    */
    'costPerUnit'?: number;
    /**
    * Required when `item_data` is supplied (max 25 characters)
    */
    'itemDescription'?: string;
    /**
    * Item discount amount in cents 
    */
    'itemDiscountAmount'?: number;
    /**
    * Merchant defined product code (max 12 characters).
    */
    'merchantProductCode'?: string;
    /**
    * The number of items purchased. Must be greater than 0.
    */
    'quantity'?: number;
    /**
    * The unit of measure of the purchased item (max 3 characters).
    */
    'unitOfMeasure'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountExcludingSalesTax",
            "baseName": "amount_excluding_sales_tax",
            "type": "number"
        },
        {
            "name": "amountIncludingSalesTax",
            "baseName": "amount_including_sales_tax",
            "type": "number"
        },
        {
            "name": "commodityCode",
            "baseName": "commodity_code",
            "type": "string"
        },
        {
            "name": "costPerUnit",
            "baseName": "cost_per_unit",
            "type": "number"
        },
        {
            "name": "itemDescription",
            "baseName": "item_description",
            "type": "string"
        },
        {
            "name": "itemDiscountAmount",
            "baseName": "item_discount_amount",
            "type": "number"
        },
        {
            "name": "merchantProductCode",
            "baseName": "merchant_product_code",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "unitOfMeasure",
            "baseName": "unit_of_measure",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalPurchaseDataItemDataInner.attributeTypeMap;
    }
}

