/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class CreateExternalLinkRequest {
    /**
    * Set how long (in minutes) the external link should be active for. The link can be active for up to 7 days in the future.
    */
    'duration'?: number;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * <ul><li>Set to <strong>UPLOAD</strong> to create a link that can be used to upload files to Finix.<li>Set to <strong>DOWNLOAD</strong> to create a link where the uploaded file can be downloaded from.<li>Set to <strong>VIEW</strong> to create a link that displays the file in browser.
    */
    'type'?: CreateExternalLinkRequest.TypeEnum | string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateExternalLinkRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateExternalLinkRequest.attributeTypeMap;
    }
}

export namespace CreateExternalLinkRequest {
    export enum TypeEnum {
        Upload = <any> 'UPLOAD',
        Download = <any> 'DOWNLOAD',
        View = <any> 'VIEW'
    }
}
