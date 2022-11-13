/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class RemoveSettlementTransfer {
    /**
    * ID of `Transfer` resource.
    */
    'transfers'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return RemoveSettlementTransfer.attributeTypeMap;
    }
}

