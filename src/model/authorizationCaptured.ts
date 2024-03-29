/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { AdditionalBuyerCharges } from './additionalBuyerCharges';
import { AuthorizationCapturedExternalResponsesInner } from './authorizationCapturedExternalResponsesInner';
import { AuthorizationLinks } from './authorizationLinks';
import { CardPresentDetails } from './cardPresentDetails';
import { Currency } from './currency';

/**
* A captured authorization
*/
export class AuthorizationCaptured {
    /**
    * The ID of the `Authorization` resource.
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
    * The redirect URL used for 3DS transactions (if supported by the processor).
    */
    '_3dsRedirectUrl'?: string | null;
    'additionalBuyerCharges'?: AdditionalBuyerCharges | null;
    /**
    * The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    */
    'amount'?: number;
    /**
    * The ID of the `Application` resource the `Authorization` was created under.
    */
    'application'?: string;
    'cardPresentDetails'?: CardPresentDetails | null;
    /**
    * The amount of the  `Authorization`  you would like to capture in cents. Must be less than or equal to the `amount` of the `Authorization`.
    */
    'captureAmount'?: number;
    'currency'?: Currency;
    /**
    * The ID of the activated device.
    */
    'device'?: string | null;
    /**
    * Authorization expiration time.
    */
    'expiresAt'?: Date;
    'externalResponses'?: Array<AuthorizationCapturedExternalResponsesInner> | null;
    /**
    * The code of the failure so the decline can be handled programmatically. For more info on how to handle the failure, see [Failure Codes](/guides/developers/errors/#failure-codes).
    */
    'failureCode'?: string | null;
    /**
    * A human-readable description of why the transaction was declined. This will also include a suggestion on how to complete the payment.
    */
    'failureMessage'?: string | null;
    /**
    * A randomly generated value that\'ll be associated with the request.
    */
    'idempotencyId'?: string | null;
    /**
    * Details if the `Authorization` is void.
    */
    'isVoid'?: boolean;
    /**
    * The ID of the `Merchant` resource the `Authorization` was captured under.
    */
    'merchantIdentity'?: string;
    /**
    * Message field that provides additional details. This field is typically **null**.
    */
    'messages'?: Array<string>;
    /**
    * Raw response from the processor.
    */
    'raw'?: object | null;
    /**
    * ID of the `Payment Instrument` where funds get debited.
    */
    'source'?: string;
    /**
    * The state of the `Transfer`.
    */
    'state'?: AuthorizationCaptured.StateEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Trace ID of the `Authorization`. The processor sends back the `trace_id` so you can track the authorization end-to-end.
    */
    'traceId'?: string;
    /**
    * The ID of the `transfer` resource that gets created when the `Authorization` moves to **SUCCEEDED**.
    */
    'transfer'?: string | null;
    /**
    * Details if the `Authorization` has been voided.
    */
    'voidState'?: string;
    'links'?: AuthorizationLinks;

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
            "name": "_3dsRedirectUrl",
            "baseName": "3ds_redirect_url",
            "type": "string"
        },
        {
            "name": "additionalBuyerCharges",
            "baseName": "additional_buyer_charges",
            "type": "AdditionalBuyerCharges"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "cardPresentDetails",
            "baseName": "card_present_details",
            "type": "CardPresentDetails"
        },
        {
            "name": "captureAmount",
            "baseName": "capture_amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "Date"
        },
        {
            "name": "externalResponses",
            "baseName": "external_responses",
            "type": "Array<AuthorizationCapturedExternalResponsesInner>"
        },
        {
            "name": "failureCode",
            "baseName": "failure_code",
            "type": "string"
        },
        {
            "name": "failureMessage",
            "baseName": "failure_message",
            "type": "string"
        },
        {
            "name": "idempotencyId",
            "baseName": "idempotency_id",
            "type": "string"
        },
        {
            "name": "isVoid",
            "baseName": "is_void",
            "type": "boolean"
        },
        {
            "name": "merchantIdentity",
            "baseName": "merchant_identity",
            "type": "string"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<string>"
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "object"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "AuthorizationCaptured.StateEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "traceId",
            "baseName": "trace_id",
            "type": "string"
        },
        {
            "name": "transfer",
            "baseName": "transfer",
            "type": "string"
        },
        {
            "name": "voidState",
            "baseName": "void_state",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "AuthorizationLinks"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationCaptured.attributeTypeMap;
    }
}

export namespace AuthorizationCaptured {
    export enum StateEnum {
        Canceled = <any> 'CANCELED',
        Pending = <any> 'PENDING',
        Failed = <any> 'FAILED',
        Succeeded = <any> 'SUCCEEDED',
        Unknown = <any> 'UNKNOWN'
    }
}
