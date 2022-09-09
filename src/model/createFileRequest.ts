/**
 * Finix API
 */

import { RequestFile } from './models';

export class CreateFileRequest {
    /**
    * The name of the `File` you\'ll create.
    */
    'displayName'?: string;
    /**
    * The resource ID that you want linked to the `File` (e.g. Merchant ID).
    */
    'linkedTo'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * The type of document. | Available values include: <br>Identity Verification<ul><li> **DRIVERS\\_LICENSE\\_FRONT**<li>**DRIVERS\\_LICENSE\\_BACK**<li>**IDENTIFICATION\\_CARD\\_FRONT**<li>**IDENTIFICATION\\_CARD\\_BACK**</ul>Bank account validation<ul><li>**BANK\\_STATEMENT**</ul>Business Verification<ul><li>**TAX\\_DOCUMENT**<li>**BUSINESS\\_REGISTRATION**<li>**BUSINESS\\_ADDRESS\\_VERIFICATION**</ul>Additional<ul><li>**OTHER**<li>**PCI\\_DOCUMENT**<li>**PASSPORT**<ul>
    */
    'type'?: CreateFileRequest.TypeEnum | string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "linkedTo",
            "baseName": "linked_to",
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
            "type": "CreateFileRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateFileRequest.attributeTypeMap;
    }
}

export namespace CreateFileRequest {
    export enum TypeEnum {
        DriversLicenseFront = <any> 'DRIVERS_LICENSE_FRONT',
        DriversLicenseBack = <any> 'DRIVERS_LICENSE_BACK',
        IdentificationCardFront = <any> 'IDENTIFICATION_CARD_FRONT',
        IdentificationCardBack = <any> 'IDENTIFICATION_CARD_BACK',
        BankStatement = <any> 'BANK_STATEMENT',
        TaxDocument = <any> 'TAX_DOCUMENT',
        BusinessRegistration = <any> 'BUSINESS_REGISTRATION',
        BusinessAddressVerification = <any> 'BUSINESS_ADDRESS_VERIFICATION',
        Other = <any> 'OTHER',
        PciDocument = <any> 'PCI_DOCUMENT',
        Passport = <any> 'PASSPORT'
    }
}
