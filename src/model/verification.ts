/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { VerificationLinks } from './verificationLinks';

export class Verification {
    /**
    * The ID of the `Verification` attempt (begins with `VIXXX`).
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
    * ID of the `Application` the `Merchant` was created under.
    */
    'application'?: string;
    /**
    * ID of the `Identity` that created the `Merchant`.
    */
    'identity'?: string | null;
    /**
    * ID of the `Merchant` resource.
    */
    'merchant'?: string | null;
    /**
    * ID of the `Identity` associated with the `Merchant`.
    */
    'merchantIdentity'?: string | null;
    /**
    * Provides additional details about the verification (e.g why it failed). This field is usually **null**.
    */
    'messages'?: Array<object>;
    /**
    * The `Payment Instrument` that\'ll be used to settle the `Merchant\'s` processed funds.
    */
    'paymentInstrument'?: string | null;
    /**
    * Name of the verification processor.
    */
    'processor'?: string;
    /**
    * Raw response from the processor.
    */
    'raw'?: object | null;
    /**
    * The status of the `Verification` request.
    */
    'state'?: Verification.StateEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Trace ID of the `Verification`. The processor sends back the `trace_id` so you can track the verification end-to-end.
    */
    'traceId'?: string;
    'links'?: VerificationLinks;

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
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "merchantIdentity",
            "baseName": "merchant_identity",
            "type": "string"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<object>"
        },
        {
            "name": "paymentInstrument",
            "baseName": "payment_instrument",
            "type": "string"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string"
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "object"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "Verification.StateEnum"
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
            "name": "links",
            "baseName": "_links",
            "type": "VerificationLinks"
        }    ];

    static getAttributeTypeMap() {
        return Verification.attributeTypeMap;
    }
}

export namespace Verification {
    export enum StateEnum {
        Pending = <any> 'PENDING',
        Succeeded = <any> 'SUCCEEDED',
        Failed = <any> 'FAILED'
    }
}
