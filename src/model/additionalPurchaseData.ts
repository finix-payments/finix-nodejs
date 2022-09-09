/**
 * Finix API
 */

import { RequestFile } from './models';
import { AdditionalPurchaseDataItemDataInner } from './additionalPurchaseDataItemDataInner';
import { AdditionalPurchaseDataOrderDate } from './additionalPurchaseDataOrderDate';

/**
* Additional information about the purchase. Used for Level 2 and Level 3 Processing.
*/
export class AdditionalPurchaseData {
    /**
    * The customer reference for the purchase (max 17 characters).
    */
    'customerReferenceNumber'?: string;
    /**
    * The duty in cents on the total purchase amount for the order
    */
    'customsDutyAmount'?: number;
    /**
    * The ISO country code of the order destination.
    */
    'destinationCountryCode'?: string;
    /**
    * The postal code of the order destination (10 characters)
    */
    'destinationPostalCode'?: string;
    /**
    * The amount in cents of the discount for the order.
    */
    'discountAmount'?: number;
    /**
    * The order\'s invoice number (max 15 characters)
    */
    'invoiceReferenceNumber'?: string;
    /**
    * Additional information about the transaction. Used for Level 2 and Level 3 Processing.
    */
    'itemData'?: Array<AdditionalPurchaseDataItemDataInner>;
    'orderDate'?: AdditionalPurchaseDataOrderDate;
    /**
    * Total aggregate tax amount in cents for the entire purchase. Field is automatically calculated if you pass in the itemized tax amounts.   For non-taxable transactions either set `sales_tax` to 0 or omit from payload and also set `tax_exempt` to **True**.
    */
    'salesTax'?: number;
    /**
    * The postal code from where order is shipped (10 characters)
    */
    'shipFromPostalCode'?: string;
    /**
    * The shipping cost in cents for the order. 
    */
    'shippingAmount'?: number;
    /**
    * For tax exempt purchases set to True.
    */
    'taxExempt'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customerReferenceNumber",
            "baseName": "customer_reference_number",
            "type": "string"
        },
        {
            "name": "customsDutyAmount",
            "baseName": "customs_duty_amount",
            "type": "number"
        },
        {
            "name": "destinationCountryCode",
            "baseName": "destination_country_code",
            "type": "string"
        },
        {
            "name": "destinationPostalCode",
            "baseName": "destination_postal_code",
            "type": "string"
        },
        {
            "name": "discountAmount",
            "baseName": "discount_amount",
            "type": "number"
        },
        {
            "name": "invoiceReferenceNumber",
            "baseName": "invoice_reference_number",
            "type": "string"
        },
        {
            "name": "itemData",
            "baseName": "item_data",
            "type": "Array<AdditionalPurchaseDataItemDataInner>"
        },
        {
            "name": "orderDate",
            "baseName": "order_date",
            "type": "AdditionalPurchaseDataOrderDate"
        },
        {
            "name": "salesTax",
            "baseName": "sales_tax",
            "type": "number"
        },
        {
            "name": "shipFromPostalCode",
            "baseName": "ship_from_postal_code",
            "type": "string"
        },
        {
            "name": "shippingAmount",
            "baseName": "shipping_amount",
            "type": "number"
        },
        {
            "name": "taxExempt",
            "baseName": "tax_exempt",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalPurchaseData.attributeTypeMap;
    }
}

