/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class UpdateDeviceRequest {
    /**
    * The action you want to perform on the device. Use **DEACTIVATE** to deactivate the device.
    */
    'action'?: UpdateDeviceRequest.ActionEnum | string;
    /**
    * Used when `action` is **ACTIVATE**. Provide the input code that shows up on the device screen.
    */
    'activationCode'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Message to display on the idle screen.
    */
    'idleMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "UpdateDeviceRequest.ActionEnum"
        },
        {
            "name": "activationCode",
            "baseName": "activation_code",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "idleMessage",
            "baseName": "idle_message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateDeviceRequest.attributeTypeMap;
    }
}

export namespace UpdateDeviceRequest {
    export enum ActionEnum {
        Reboot = <any> 'REBOOT',
        Deactivate = <any> 'DEACTIVATE',
        Activate = <any> 'ACTIVATE',
        CreateIdleMessage = <any> 'CREATE_IDLE_MESSAGE'
    }
}
