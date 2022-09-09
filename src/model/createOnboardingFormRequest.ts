/**
 * Finix API
 */

import { RequestFile } from './models';
import { CreateOnboardingFormRequestMerchantProcessorsInner } from './createOnboardingFormRequestMerchantProcessorsInner';
import { CreateOnboardingFormRequestOnboardingData } from './createOnboardingFormRequestOnboardingData';
import { CreateOnboardingFormRequestOnboardingLinkDetails } from './createOnboardingFormRequestOnboardingLinkDetails';

export class CreateOnboardingFormRequest {
    'onboardingData'?: CreateOnboardingFormRequestOnboardingData;
    /**
    * An array of objects with the processors and gateways users will be onboarded to.
    */
    'merchantProcessors'?: Array<CreateOnboardingFormRequestMerchantProcessorsInner>;
    'onboardingLinkDetails'?: CreateOnboardingFormRequestOnboardingLinkDetails;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "onboardingData",
            "baseName": "onboarding_data",
            "type": "CreateOnboardingFormRequestOnboardingData"
        },
        {
            "name": "merchantProcessors",
            "baseName": "merchant_processors",
            "type": "Array<CreateOnboardingFormRequestMerchantProcessorsInner>"
        },
        {
            "name": "onboardingLinkDetails",
            "baseName": "onboarding_link_details",
            "type": "CreateOnboardingFormRequestOnboardingLinkDetails"
        }    ];

    static getAttributeTypeMap() {
        return CreateOnboardingFormRequest.attributeTypeMap;
    }
}

