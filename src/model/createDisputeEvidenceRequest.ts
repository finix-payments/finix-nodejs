/**
 * Finix API
 */

import { RequestFile } from './models';

export class CreateDisputeEvidenceRequest {
    /**
    * The binary contents of the file.
    */
    'file'?: RequestFile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "file",
            "baseName": "file",
            "type": "RequestFile"
        }    ];

    static getAttributeTypeMap() {
        return CreateDisputeEvidenceRequest.attributeTypeMap;
    }
}

