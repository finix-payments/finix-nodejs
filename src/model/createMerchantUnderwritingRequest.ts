/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class CreateMerchantUnderwritingRequest {
    /**
    * Name of the gateway that processes the `Merchant\'s` card present transactions. Use `gateway` only to enable a merchantto accept card present transactions.
    */
    'gateway'?: CreateMerchantUnderwritingRequest.GatewayEnum | string;
    /**
    * Set the acquiring processor. Avalible values include: <ul><li><strong>DUMMY_V1</strong></li><li><strong>LITLE_V1</strong></li><li><strong>MASTERCARD_V1</strong></li><li><strong>VISA_V1</strong></li><li><strong>NMI_V1</strong></li><li><strong>VANTIV_V1</strong></li></ul>Use <strong>DUMMY_V1</strong> or  <strong>null</strong> to use your sandbox. For more details on which processor to use, reach out to your Finix point of contact or email <a href=\"/guides/getting-started/support-at-finix/\">Finix Support</a>.
    */
    'processor': string | null;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "gateway",
            "baseName": "gateway",
            "type": "CreateMerchantUnderwritingRequest.GatewayEnum"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateMerchantUnderwritingRequest.attributeTypeMap;
    }
}

export namespace CreateMerchantUnderwritingRequest {
    export enum GatewayEnum {
        TriposCloudV1 = <any> 'TRIPOS_CLOUD_V1',
        TriposMobileV1 = <any> 'TRIPOS_MOBILE_V1',
        ExpressV1 = <any> 'EXPRESS_V1'
    }
}
