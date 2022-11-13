/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

export class CreateOnboardingFormRequestMerchantProcessorsInner {
    /**
    * The name of the processor you plan to onboard users to.
    */
    'processor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateOnboardingFormRequestMerchantProcessorsInner.attributeTypeMap;
    }
}

