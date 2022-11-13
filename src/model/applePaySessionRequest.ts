/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class ApplePaySessionRequest {
    /**
    * This will be the merchant name shown to users when making a purchase via Apple Pay.
    */
    'displayName'?: string;
    /**
    * The domain (or website) where the buyer is initiating the payment.
    */
    'domain'?: string;
    /**
    * The `merchant_identity_id` used when registering the business with Apple Pay through our registration API.
    */
    'merchantIdentity'?: string;
    /**
    * A unique validation URL that will be provided by the Apple SDK front-end for every payment.
    */
    'validationUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "merchantIdentity",
            "baseName": "merchant_identity",
            "type": "string"
        },
        {
            "name": "validationUrl",
            "baseName": "validation_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApplePaySessionRequest.attributeTypeMap;
    }
}

