/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ConfigurationDetails } from './configurationDetails';

/**
* 
*/
export class CreateDevice {
    'configuration'?: ConfigurationDetails;
    /**
    * Additional information about device (e.g. self serving terminal).
    */
    'description'?: string;
    /**
    * The model type of the device.
    */
    'model': CreateDevice.ModelEnum | string;
    /**
    * Name of the `Device`.
    */
    'name': string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "ConfigurationDetails"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "CreateDevice.ModelEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateDevice.attributeTypeMap;
    }
}

export namespace CreateDevice {
    export enum ModelEnum {
        Bbpos = <any> 'BBPOS',
        Mx915 = <any> 'MX915',
        Mx925 = <any> 'MX925',
        Ipp320 = <any> 'IPP320',
        Ipp350 = <any> 'IPP350',
        Isc250 = <any> 'ISC250',
        Isc480 = <any> 'ISC480',
        Ismp4 = <any> 'ISMP4',
        Android = <any> 'ANDROID',
        Lane3000 = <any> 'LANE_3000',
        Link2500 = <any> 'LINK_2500'
    }
}
