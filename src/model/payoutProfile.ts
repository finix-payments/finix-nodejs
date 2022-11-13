/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { ListLinks } from './listLinks';
import { PayoutProfileGross } from './payoutProfileGross';
import { PayoutProfileNet } from './payoutProfileNet';

/**
* 
*/
export class PayoutProfile {
    /**
    * The ID of the `Payout Profile` resource.
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
    'gross'?: PayoutProfileGross | null;
    /**
    * ID of the resource linked to the `Payout Profile`.
    */
    'linkedId'?: string;
    /**
    * The type of resource the `Payout Profile` is linked to.
    */
    'linkedType'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Configures how fees are calculated and billed from payouts. For more infromation, see [Payout Types](/guides/payouts/#payout-types).
    */
    'type'?: PayoutProfile.TypeEnum | string;
    'links'?: ListLinks;
    'net'?: PayoutProfileNet | null;
    /**
    * Details how `Payout Profiles` with type **CUSTOM** are configured. `Payout Profiles` with type **CUSTOM** can be setup with more specific configurations. To configure a **CUSTOM** `Payout Profile` [contact Finix Support](/guides/payouts/#payout-types).
    */
    'custom'?: object | null;

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
            "name": "gross",
            "baseName": "gross",
            "type": "PayoutProfileGross"
        },
        {
            "name": "linkedId",
            "baseName": "linked_id",
            "type": "string"
        },
        {
            "name": "linkedType",
            "baseName": "linked_type",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PayoutProfile.TypeEnum"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ListLinks"
        },
        {
            "name": "net",
            "baseName": "net",
            "type": "PayoutProfileNet"
        },
        {
            "name": "custom",
            "baseName": "custom",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return PayoutProfile.attributeTypeMap;
    }
}

export namespace PayoutProfile {
    export enum TypeEnum {
        Custom = <any> 'CUSTOM',
        Net = <any> 'NET',
        Gross = <any> 'GROSS'
    }
}
