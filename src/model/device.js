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
exports.Device = void 0;
/**
* `Device` resource.
*/
class Device {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags';
    /**
    * Additional information about device (e.g. self serving terminal).
    */
    'description';
    /**
    * The ID of the resource.
    */
    'id';
    /**
    * Timestamp of when the object was created.
    */
    'createdAt';
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt';
    'configurationDetails';
    /**
    * Details if the `Device` is connected and online.
    */
    'connection';
    /**
    * Details if the `Device` resource is enabled. Set to **false** to disable the `Device`.
    */
    'enabled';
    /**
    * ID of `Device`.
    */
    'idleMessage';
    'inputDetails';
    /**
    * ID of the `Merchant` resource.
    */
    'merchant';
    /**
    * Please select one of the following values which will let Finix know the type of device being used:<ul><li>BBPOS<li>MX915<li>MX925<li>IPP320<li>IPP350<li>ISC250<li>ISC480<li>ISMP4<li>LANE\\_3000<li>ANDROID
    */
    'model';
    /**
    * Name of the `Device`.
    */
    'name';
    /**
    * Serial number of the device.
    */
    'serialNumber';
    'links';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
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
            "name": "inputDetails",
            "baseName": "input_details",
            "type": "InputDetails"
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
            "name": "links",
            "baseName": "_links",
            "type": "DeviceLinks"
        }
    ];
    static getAttributeTypeMap() {
        return Device.attributeTypeMap;
    }
}
exports.Device = Device;
