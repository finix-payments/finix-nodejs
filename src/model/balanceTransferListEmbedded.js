"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceTransferListEmbedded = void 0;
/**
* List of `balance_transfer` objects.
*/
class BalanceTransferListEmbedded {
    'balanceTransfers';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "balanceTransfers",
            "baseName": "balance_transfers",
            "type": "Array<BalanceTransferList>"
        }
    ];
    static getAttributeTypeMap() {
        return BalanceTransferListEmbedded.attributeTypeMap;
    }
}
exports.BalanceTransferListEmbedded = BalanceTransferListEmbedded;
//# sourceMappingURL=balanceTransferListEmbedded.js.map