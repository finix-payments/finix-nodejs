/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { CreateOnboardingFormRequestMerchantProcessorsInner } from './createOnboardingFormRequestMerchantProcessorsInner';
import { CreateOnboardingFormRequestOnboardingData } from './createOnboardingFormRequestOnboardingData';
import { CreateOnboardingFormRequestOnboardingLinkDetails } from './createOnboardingFormRequestOnboardingLinkDetails';

export class CreateOnboardingFormRequest {
    /**
    * An array of objects with the processors and gateways users will be onboarded to.
    */
    'merchantProcessors'?: Array<CreateOnboardingFormRequestMerchantProcessorsInner>;
    'onboardingData'?: CreateOnboardingFormRequestOnboardingData;
    'onboardingLinkDetails'?: CreateOnboardingFormRequestOnboardingLinkDetails;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantProcessors",
            "baseName": "merchant_processors",
            "type": "Array<CreateOnboardingFormRequestMerchantProcessorsInner>"
        },
        {
            "name": "onboardingData",
            "baseName": "onboarding_data",
            "type": "CreateOnboardingFormRequestOnboardingData"
        },
        {
            "name": "onboardingLinkDetails",
            "baseName": "onboarding_link_details",
            "type": "CreateOnboardingFormRequestOnboardingLinkDetails"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CreateOnboardingFormRequest.attributeTypeMap;
    }
}

