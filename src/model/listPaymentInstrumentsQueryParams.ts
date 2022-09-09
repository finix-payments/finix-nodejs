/**
 * Finix API
 */

import { RequestFile } from './models';

export class ListPaymentInstrumentsQueryParams {
    /**
    * Filter by the last 4 digits of the account if available.
    */
    'accountLast4'?: string;
    /**
    * Filter by the account routing number if available.
    */
    'accountRoutingNumber'?: string;
    /**
    * Return every resource created after the cursor value.
    */
    'afterCursor'?: string;
    /**
    * Filter by `Application` ID.
    */
    'application'?: string;
    /**
    * Return every resource created before the cursor value.
    */
    'beforeCursor'?: string;
    /**
    * Filter by Bank Identification Number (BIN). The BIN is the first 6 digits of the masked number.
    */
    'bin'?: string;
    /**
    * Filter where `created_at` is after the given date.
    */
    'createdAtGte'?: string;
    /**
    * Filter where `created_at` is before the given date.
    */
    'createdAtLte'?: string;
    /**
    * Filter by the expiration month associated with the `Payment Instrument` if applicable. This filter only applies to payment cards.
    */
    'expirationMonth'?: string;
    /**
    * Filter by the 4 digit expiration year associated with the Payment Instrument if applicable. This filter only applies to payment cards.
    */
    'expirationYear'?: string;
    /**
    * Filter by the last 4 digits of the `Payment Instrument` card. This filter only applies to payment cards.
    */
    'lastFour'?: string;
    /**
    * The numbers of items to return.
    */
    'limit'?: number;
    /**
    * Filter by the name.
    */
    'name'?: string;
    /**
    * Filter by the owner id of the associated `Identity`.
    */
    'ownerIdentityId'?: string;
    /**
    * Filter by the `Payment Instrument` type.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountLast4",
            "baseName": "account_last4",
            "type": "string"
        },
        {
            "name": "accountRoutingNumber",
            "baseName": "account_routing_number",
            "type": "string"
        },
        {
            "name": "afterCursor",
            "baseName": "after_cursor",
            "type": "string"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "beforeCursor",
            "baseName": "before_cursor",
            "type": "string"
        },
        {
            "name": "bin",
            "baseName": "bin",
            "type": "string"
        },
        {
            "name": "createdAtGte",
            "baseName": "created_at.gte",
            "type": "string"
        },
        {
            "name": "createdAtLte",
            "baseName": "created_at.lte",
            "type": "string"
        },
        {
            "name": "expirationMonth",
            "baseName": "expiration_month",
            "type": "string"
        },
        {
            "name": "expirationYear",
            "baseName": "expiration_year",
            "type": "string"
        },
        {
            "name": "lastFour",
            "baseName": "last_four",
            "type": "string"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ownerIdentityId",
            "baseName": "owner_identity_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListPaymentInstrumentsQueryParams.attributeTypeMap;
    }
}

