/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ApplicationLinks } from './applicationLinks';

/**
* 
*/
export class Application {
    /**
    * ID of the `Application` resource.
    */
    'id'?: string;
    /**
    * Point in time when this object was created.
    */
    'createdAt'?: Date;
    /**
    * Point in time when this object was most recently updated.
    */
    'updatedAt'?: Date;
    /**
    * Details if the `Application` requires CVV code.
    */
    'cardCvvRequired'?: boolean;
    /**
    * Details if the `Application` requires the card\'s expiration date.
    */
    'cardExpirationDateRequired'?: boolean;
    /**
    * Details if the `Application` is automatically set to create `Transfers` once settlement reports get generated.
    */
    'creatingTransferFromReportEnabled'?: boolean;
    /**
    * Details if the `Application` is enabled and active. Set to **false** to disable the `Application`.
    */
    'enabled'?: boolean;
    /**
    * Details when the `fees` of `Authroizations` submitted under the `Application` will be ready to settle.
    */
    'feeReadyToSettleUpon'?: Application.FeeReadyToSettleUponEnum | string;
    /**
    * The name of the `Application`.
    */
    'name'?: string;
    /**
    * ID of the `Identity` resource that created the `Application`.
    */
    'owner'?: string;
    /**
    * Details if transaction processing is enabled for the `Application`. 
    */
    'processingEnabled'?: boolean;
    /**
    * Details when `Authroizations` submitted under the `Application` will be ready to settle.
    */
    'readyToSettleUpon'?: Application.ReadyToSettleUponEnum | string;
    /**
    * Details if settlement processing is enabled for the `Application`. 
    */
    'settlementEnabled'?: boolean;
    'settlementFundingIdentifier'?: Application.SettlementFundingIdentifierEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    'links'?: ApplicationLinks;

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
            "name": "cardCvvRequired",
            "baseName": "card_cvv_required",
            "type": "boolean"
        },
        {
            "name": "cardExpirationDateRequired",
            "baseName": "card_expiration_date_required",
            "type": "boolean"
        },
        {
            "name": "creatingTransferFromReportEnabled",
            "baseName": "creating_transfer_from_report_enabled",
            "type": "boolean"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "feeReadyToSettleUpon",
            "baseName": "fee_ready_to_settle_upon",
            "type": "Application.FeeReadyToSettleUponEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "processingEnabled",
            "baseName": "processing_enabled",
            "type": "boolean"
        },
        {
            "name": "readyToSettleUpon",
            "baseName": "ready_to_settle_upon",
            "type": "Application.ReadyToSettleUponEnum"
        },
        {
            "name": "settlementEnabled",
            "baseName": "settlement_enabled",
            "type": "boolean"
        },
        {
            "name": "settlementFundingIdentifier",
            "baseName": "settlement_funding_identifier",
            "type": "Application.SettlementFundingIdentifierEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ApplicationLinks"
        }    ];

    static getAttributeTypeMap() {
        return Application.attributeTypeMap;
    }
}

export namespace Application {
    export enum FeeReadyToSettleUponEnum {
        Reconciliation = <any> 'RECONCILIATION',
        SuccessfulCapture = <any> 'SUCCESSFUL_CAPTURE'
    }
    export enum ReadyToSettleUponEnum {
        Reconciliation = <any> 'RECONCILIATION',
        SuccessfulCapture = <any> 'SUCCESSFUL_CAPTURE'
    }
    export enum SettlementFundingIdentifierEnum {
        Unset = <any> 'UNSET'
    }
}
