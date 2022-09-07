/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* ID of the `subscription_enrollment`.
*/
export class UpdateSubscriptionEnrollmentRequest {
    /**
    * ID of the `subscription_enrollment`.
    */
    'id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateSubscriptionEnrollmentRequest.attributeTypeMap;
    }
}

