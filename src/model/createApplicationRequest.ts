/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { IdentityEntityForm } from './identityEntityForm';

export class CreateApplicationRequest {
    'entity'?: IdentityEntityForm;
    /**
    * Maximum amount that can be processed for a single transaction in cents (max 12 characters).
    */
    'maxTransactionAmount'?: number | null;
    /**
    * Merchant\'s full legal business name (If **INDIVIDUAL_SOLE_PROPRIETORSHIP**, enter first name, Full legal last name and middle initial; max 120 characters).
    */
    'name'?: string | null;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * ID of the `User` resource.
    */
    'user': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entity",
            "baseName": "entity",
            "type": "IdentityEntityForm"
        },
        {
            "name": "maxTransactionAmount",
            "baseName": "max_transaction_amount",
            "type": "number"
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
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateApplicationRequest.attributeTypeMap;
    }
}

