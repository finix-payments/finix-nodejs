/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ProcessorApplicationConfig } from './processorApplicationConfig';
import { ProcessorConfig } from './processorConfig';
import { ProcessorLinks } from './processorLinks';
import { ProcessorSystemConfig } from './processorSystemConfig';

/**
* 
*/
export class Processor {
    /**
    * ID of the `Processor` resource.
    */
    'id'?: string;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The ID of the `Application` resource.
    */
    'application'?: string;
    'applicationConfig'?: ProcessorApplicationConfig | null;
    'config'?: ProcessorConfig | null;
    /**
    * The ID of the `Merchant Profile` resource used to create the `Processor`.
    */
    'defaultMerchantProfile'?: string;
    /**
    * Details if the `Processor` resource is enabled. Set to **false** to disable the `Processor`.
    */
    'enabled'?: boolean;
    /**
    * The name of the processor.
    */
    'processor'?: string;
    'systemConfig'?: ProcessorSystemConfig | null;
    'links'?: ProcessorLinks;

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
            "type": "ProcessorConfig"
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
        }    ];

    static getAttributeTypeMap() {
        return Processor.attributeTypeMap;
    }
}

