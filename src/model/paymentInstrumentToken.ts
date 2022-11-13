/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Currency } from './currency';
import { PaymentInstrumentTokenLinks } from './paymentInstrumentTokenLinks';

export class PaymentInstrumentToken {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Details if the `Payment Instrument` resource is enabled. Set to `false` to disable the `Payment Instrument`.
    */
    'enabled'?: boolean;
    'type'?: PaymentInstrumentToken.TypeEnum | string;
    /**
    * The ID of the `Payment Instrument`.
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
    * The ID of the `Application` resource the `Payment Instrument` was created under.
    */
    'application'?: string;
    'currency'?: Currency;
    'fingerprint'?: string;
    /**
    * The ID of the `Identity` used to create the `Payment Instrument` resource.
    */
    'identity'?: string;
    'instrumentType'?: PaymentInstrumentToken.InstrumentTypeEnum | string;
    'payloadType'?: PaymentInstrumentToken.PayloadTypeEnum | string;
    'links'?: PaymentInstrumentTokenLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentInstrumentToken.TypeEnum"
        },
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
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "instrumentType",
            "baseName": "instrument_type",
            "type": "PaymentInstrumentToken.InstrumentTypeEnum"
        },
        {
            "name": "payloadType",
            "baseName": "payload_type",
            "type": "PaymentInstrumentToken.PayloadTypeEnum"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "PaymentInstrumentTokenLinks"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentToken.attributeTypeMap;
    }
}

export namespace PaymentInstrumentToken {
    export enum TypeEnum {
        Token = <any> 'TOKEN'
    }
    export enum InstrumentTypeEnum {
        Token = <any> 'TOKEN'
    }
    export enum PayloadTypeEnum {
        Source = <any> 'SOURCE',
        Destination = <any> 'DESTINATION'
    }
}
