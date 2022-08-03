/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AdditionalPurchaseData } from './additionalPurchaseData';
import { CreateAuthorizationRequest3dSecureAuthentication } from './createAuthorizationRequest3dSecureAuthentication';
import { Currency } from './currency';
import { OperationKey } from './operationKey';
import { SubTypeTransfer } from './subTypeTransfer';

/**
* Create an `Authorization` resource.
*/
export class CreateAuthorizationRequest {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    */
    'amount': number;
    'currency': Currency;
    /**
    * A randomly generated value that\'ll be associated with the request.
    */
    'idempotencyId'?: string | null;
    /**
    * The ID of the resource.
    */
    'merchant'?: string | null;
    /**
    * The ID of the resource.
    */
    'merchantIdentity'?: string | null;
    /**
    * Name of the transaction processor.
    */
    'processor'?: CreateAuthorizationRequest.ProcessorEnum | string;
    /**
    * The ID of the resource.
    */
    'source'?: string | null;
    'additionalPurchaseData'?: AdditionalPurchaseData;
    /**
    * The `fraud_session_session` ID you want to review for fraud. For more info, see [Fraud Detection](/docs/guides/payments/fraud-detection/).
    */
    'fraudSessionId'?: string;
    'subType'?: SubTypeTransfer;
    'operationKey'?: OperationKey | null;
    /**
    * The ID of the resource.
    */
    'device'?: string | null;
    '_3dSecureAuthentication'?: CreateAuthorizationRequest3dSecureAuthentication | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "idempotencyId",
            "baseName": "idempotency_id",
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
            "name": "processor",
            "baseName": "processor",
            "type": "CreateAuthorizationRequest.ProcessorEnum"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "additionalPurchaseData",
            "baseName": "additional_purchase_data",
            "type": "AdditionalPurchaseData"
        },
        {
            "name": "fraudSessionId",
            "baseName": "fraud_session_id",
            "type": "string"
        },
        {
            "name": "subType",
            "baseName": "sub_type",
            "type": "SubTypeTransfer"
        },
        {
            "name": "operationKey",
            "baseName": "operation_key",
            "type": "OperationKey"
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "string"
        },
        {
            "name": "_3dSecureAuthentication",
            "baseName": "3d_secure_authentication",
            "type": "CreateAuthorizationRequest3dSecureAuthentication"
        }    ];

    static getAttributeTypeMap() {
        return CreateAuthorizationRequest.attributeTypeMap;
    }
}

export namespace CreateAuthorizationRequest {
    export enum ProcessorEnum {
        AffipayV1 = <any> 'AFFIPAY_V1',
        CheckoutV1 = <any> 'CHECKOUT_V1',
        DummyV1 = <any> 'DUMMY_V1',
        ElavonV1 = <any> 'ELAVON_V1',
        ExpressV1 = <any> 'EXPRESS_V1',
        FinixVisaSandboxV1 = <any> 'FINIX_VISA_SANDBOX_V1',
        LitleV1 = <any> 'LITLE_V1',
        MastercardV1 = <any> 'MASTERCARD_V1',
        MicrobiltV1 = <any> 'MICROBILT_V1',
        MythicalV1 = <any> 'MYTHICAL_V1',
        NmiV1 = <any> 'NMI_V1',
        SkrillV1 = <any> 'SKRILL_V1',
        StripeV1 = <any> 'STRIPE_V1',
        TriposCloudV1 = <any> 'TRIPOS_CLOUD_V1',
        TriposMobileV1 = <any> 'TRIPOS_MOBILE_V1',
        TruliooV1 = <any> 'TRULIOO_V1',
        VantivV1 = <any> 'VANTIV_V1',
        VisaV1 = <any> 'VISA_V1'
    }
}
