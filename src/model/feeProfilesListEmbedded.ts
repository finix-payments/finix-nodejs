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
import { FeeProfile } from './feeProfile';

export class FeeProfilesListEmbedded {
    'feeProfiles'?: Set<FeeProfile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feeProfiles",
            "baseName": "fee_profiles",
            "type": "Set<FeeProfile>"
        }    ];

    static getAttributeTypeMap() {
        return FeeProfilesListEmbedded.attributeTypeMap;
    }
}

