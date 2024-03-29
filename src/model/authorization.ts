/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { AdditionalBuyerCharges } from './additionalBuyerCharges';
import { AdditionalHealthcareData } from './additionalHealthcareData';
import { AuthorizationLinks } from './authorizationLinks';
import { CardPresentDetails } from './cardPresentDetails';
import { Currency } from './currency';

/**
* A charge authorization
*/
export class Authorization {
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
    /**
    * Details the results of the Address Verification checks.
    */
    'addressVerification'?: string | null;
    'additionalBuyerCharges'?: AdditionalBuyerCharges | null;
    'additionalHealthcareData'?: AdditionalHealthcareData | null;
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
    * `Authorization` expiration time.
    */
    'expiresAt'?: Date;
    /**
    * The code of the failure so the decline can be handled programmatically. For more info on how to handle the failure, see [Failure Codes](/guides/developers/errors/#failure-codes).
    */
    'failureCode'?: string | null;
    /**
    * A human-readable description of why the transaction was declined. This will also include a suggestion on how to complete the payment.
    */
    'failureMessage'?: string | null;
    /**
    * Details the results of the Security Code Verification checks.
    */
    'securityCodeChecks'?: string | null;
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
    'messages'?: Array<string> | null;
    /**
    * Raw response from the processor.
    */
    'raw'?: object | null;
    /**
    * Details the results of the Security Code Verification che
    */
    'securityCodeVerification'?: string | null;
    /**
    * ID of the `Payment Instrument` where funds get debited.
    */
    'source'?: string;
    /**
    * The state of the `Authorization`.
    */
    'state'?: Authorization.StateEnum | string;
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
            "name": "addressVerification",
            "baseName": "address_verification",
            "type": "string"
        },
        {
            "name": "additionalBuyerCharges",
            "baseName": "additional_buyer_charges",
            "type": "AdditionalBuyerCharges"
        },
        {
            "name": "additionalHealthcareData",
            "baseName": "additional_healthcare_data",
            "type": "AdditionalHealthcareData"
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
            "name": "securityCodeChecks",
            "baseName": "security_code_checks",
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
            "name": "securityCodeVerification",
            "baseName": "security_code_verification",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "Authorization.StateEnum"
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
        return Authorization.attributeTypeMap;
    }
}

export namespace Authorization {
    export enum StateEnum {
        Canceled = <any> 'CANCELED',
        Pending = <any> 'PENDING',
        Failed = <any> 'FAILED',
        Succeeded = <any> 'SUCCEEDED',
        Unknown = <any> 'UNKNOWN'
    }
}
