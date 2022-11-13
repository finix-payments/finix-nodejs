/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class CreateInstrumentUpdateRequest {
    /**
    * The binary contents of the file.
    */
    'file'?: RequestFile;
    /**
    * A JSON string of your request. The JSON object needs to contain the following two fields: - `merchant`: ID of the `Merchant` object that you want to associate with the Account Updater batch for your own accounting purposes. You can only associate one `Merchant` to each. - `idemopotency_id`: A randomly generated value that will be associated with this `instrument_update` resource.
    */
    'request'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "file",
            "baseName": "file",
            "type": "RequestFile"
        },
        {
            "name": "request",
            "baseName": "request",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateInstrumentUpdateRequest.attributeTypeMap;
    }
}

