/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class CreateVerificationRequest {
    /**
    * ID of the `Identity` resource associated with the `Merchant`.
    */
    'identity'?: string;
    /**
    * The ID of the `Merchant`.
    */
    'merchant'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;
    /**
    * Set the acquiring processor. Avalible values include: <ul><li><strong>DUMMY_V1</strong></li><li><strong>LITLE_V1</strong></li><li><strong>MASTERCARD_V1</strong></li><li><strong>VISA_V1</strong></li><li><strong>NMI_V1</strong></li><li><strong>VANTIV_V1</strong></li></ul>Use <strong>DUMMY_V1</strong> or  <strong>null</strong> to use your sandbox. For more details on which processor to use, reach out to your Finix point of contact or email <a href=\"/guides/getting-started/support-at-finix/\">Finix Support</a>.
    */
    'processor'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateVerificationRequest.attributeTypeMap;
    }
}

