/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* The 3D secure information for an authorization.
*/
export class CreateTransferRequest3dSecureAuthentication {
    /**
    * Provides evidence that the cardholder authentication occurred or that the merchant attempted authentication. This is unique for each authentication transaction.
    */
    'cardholderAuthentication'?: string;
    /**
    * Only required for American Express cards. Format is nnn.nnn.nnn.nnn
    */
    'cardholderIpAddress'?: string;
    /**
    * AUTHENTICATED: Approved by 3D Secure Vendor; ATTEMPTED: Issuer or cardholder does not support 3D Secure
    */
    'electronicCommerceIndicator'?: string;
    /**
    * Only valid for Visa transactions
    */
    'transactionId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardholderAuthentication",
            "baseName": "cardholder_authentication",
            "type": "string"
        },
        {
            "name": "cardholderIpAddress",
            "baseName": "cardholder_ip_address",
            "type": "string"
        },
        {
            "name": "electronicCommerceIndicator",
            "baseName": "electronic_commerce_indicator",
            "type": "string"
        },
        {
            "name": "transactionId",
            "baseName": "transaction_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateTransferRequest3dSecureAuthentication.attributeTypeMap;
    }
}

