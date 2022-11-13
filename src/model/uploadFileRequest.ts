/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class UploadFileRequest {
    /**
    * Path to the file you want to upload<br>(e.g. **_/Users/Desktop/finix_file.png**).
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
        return UploadFileRequest.attributeTypeMap;
    }
}

