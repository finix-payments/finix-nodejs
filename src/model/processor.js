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
exports.Processor = void 0;
/**
*
*/
class Processor {
    /**
    * ID of the `Processor` resource.
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
    /**
    * The ID of the `Application` resource.
    */
    'application';
    'applicationConfig';
    'config';
    /**
    * The ID of the resource.
    */
    'defaultMerchantProfile';
    /**
    * Details if the `Processor` resource is enabled. Set to **false** to disable the `Processor`.
    */
    'enabled';
    /**
    * The name of the processor.
    */
    'processor';
    'systemConfig';
    'links';
    static discriminator = undefined;
    static attributeTypeMap = [
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
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "applicationConfig",
            "baseName": "application_config",
            "type": "ProcessorApplicationConfig"
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "object"
        },
        {
            "name": "defaultMerchantProfile",
            "baseName": "default_merchant_profile",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string"
        },
        {
            "name": "systemConfig",
            "baseName": "system_config",
            "type": "ProcessorSystemConfig"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ProcessorLinks"
        }
    ];
    static getAttributeTypeMap() {
        return Processor.attributeTypeMap;
    }
}
exports.Processor = Processor;
//# sourceMappingURL=processor.js.map