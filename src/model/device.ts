/**
 * Finix API
 */

import { RequestFile } from './models';
import { DeviceConfigDetails } from './deviceConfigDetails';
import { DeviceLinks } from './deviceLinks';

/**
* `Device` resource.
*/
export class Device {
    /**
    * The ID of the resource.
    */
    'id'?: string | null;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    'configurationDetails'?: DeviceConfigDetails | null;
    /**
    * Details if the `Device` is connected and online. Only returned when `include_connection parameter` provided.
    */
    'connection'?: string;
    /**
    * Additional information about device (e.g. self serving terminal).
    */
    'description'?: string | null;
    /**
    * Details if the `Device` resource is enabled. Set to **false** to disable the `Device`.
    */
    'enabled'?: boolean;
    /**
    * The message that diplays on the device after a period of inactivity.
    */
    'idleMessage'?: string | null;
    /**
    * ID of the `Merchant` resource.
    */
    'merchant'?: string;
    /**
    * Details the model of the card reader.
    */
    'model'?: string;
    /**
    * Name of the `Device`.
    */
    'name'?: string;
    /**
    * Serial number of the device.
    */
    'serialNumber'?: string | null;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    'links'?: DeviceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "configurationDetails",
            "baseName": "configuration_details",
            "type": "DeviceConfigDetails"
        },
        {
            "name": "connection",
            "baseName": "connection",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "idleMessage",
            "baseName": "idle_message",
            "type": "string"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "serialNumber",
            "baseName": "serial_number",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DeviceLinks"
        }    ];

    static getAttributeTypeMap() {
        return Device.attributeTypeMap;
    }
}

