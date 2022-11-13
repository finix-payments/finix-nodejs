/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { AdditionalBuyerCharges } from './additionalBuyerCharges';
import { AdditionalPurchaseData } from './additionalPurchaseData';
import { CreateAuthorizationRequest3dSecureAuthentication } from './createAuthorizationRequest3dSecureAuthentication';
import { Currency } from './currency';
import { OperationKey } from './operationKey';

/**
* Create an `Authorization` resource.
*/
export class CreateAuthorizationRequest {
    'additionalBuyerCharges'?: AdditionalBuyerCharges | null;
    'additionalPurchaseData'?: AdditionalPurchaseData;
    /**
    * The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    */
    'amount': number;
    'currency': Currency;
    /**
    * The ID of the `Device` that the `Authorization` was created under.
    */
    'device'?: string;
    /**
    * The `fraud_session_session` ID you want to review for fraud. For more info, see [Fraud Detection](/guides/payments/fraud-detection/).
    */
    'fraudSessionId'?: string;
    /**
    * Set to to **true** to process a payment using a `Payment Instrument` [created from a health savings account (HSA) or flexible spending account (FSA)](/docs/guides/making-a-payment/hsa-fsa/).
    */
    'hsaFsaPayment'?: boolean | null;
    /**
    * A randomly generated value that\'ll be associated with the request.
    */
    'idempotencyId'?: string | null;
    /**
    * The ID of the `Merchant` that the `Authorization` was created under.
    */
    'merchant'?: string;
    'operationKey'?: OperationKey | null;
    /**
    * The 3-4 digit security code for the card (i.e. CVV code). Include the CVV code of the card to include [Card Verification Checks](/guides/payments/making-a-payment/card-verification-checks/) with the created `Authorization`.
    */
    'securityCode'?: string;
    /**
    * The ID of the `Payment Instrument` that will be debited and performing the `Authorization`.
    */
    'source'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    '_3dSecureAuthentication'?: CreateAuthorizationRequest3dSecureAuthentication | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalBuyerCharges",
            "baseName": "additional_buyer_charges",
            "type": "AdditionalBuyerCharges"
        },
        {
            "name": "additionalPurchaseData",
            "baseName": "additional_purchase_data",
            "type": "AdditionalPurchaseData"
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
            "name": "device",
            "baseName": "device",
            "type": "string"
        },
        {
            "name": "fraudSessionId",
            "baseName": "fraud_session_id",
            "type": "string"
        },
        {
            "name": "hsaFsaPayment",
            "baseName": "hsa_fsa_payment",
            "type": "boolean"
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
            "name": "operationKey",
            "baseName": "operation_key",
            "type": "OperationKey"
        },
        {
            "name": "securityCode",
            "baseName": "security_code",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
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

