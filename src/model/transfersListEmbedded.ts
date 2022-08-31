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
import { Transfer } from './transfer';

/**
* List of `Transfer` objects.
*/
export class TransfersListEmbedded {
    /**
    * `Transfer` objects.
    */
    'transfers'?: Set<Transfer>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Set<Transfer>"
        }    ];

    static getAttributeTypeMap() {
        return TransfersListEmbedded.attributeTypeMap;
    }
}

