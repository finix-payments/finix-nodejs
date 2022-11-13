/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ModelFile } from './modelFile';

/**
* List of `File` objects.
*/
export class FilesListEmbedded {
    /**
    * `File` objects.
    */
    'files'?: Array<ModelFile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<ModelFile>"
        }    ];

    static getAttributeTypeMap() {
        return FilesListEmbedded.attributeTypeMap;
    }
}

