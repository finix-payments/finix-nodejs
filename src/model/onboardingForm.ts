/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { CreateOnboardingFormRequestMerchantProcessorsInner } from './createOnboardingFormRequestMerchantProcessorsInner';
import { OnboardingFormOnboardingData } from './onboardingFormOnboardingData';
import { OnboardingFormOnboardingLink } from './onboardingFormOnboardingLink';

export class OnboardingForm {
    /**
    * The ID of the `onboarding_form` resource.
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
    * An array of objects with the processors and gateways users will be onboarded to.
    */
    'merchantProcessors'?: Array<CreateOnboardingFormRequestMerchantProcessorsInner>;
    'onboardingData'?: OnboardingFormOnboardingData;
    'onboardingLink'?: OnboardingFormOnboardingLink;
    /**
    * Status of the `onboarding_from`.
    */
    'status'?: OnboardingForm.StatusEnum | string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; } | null;

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
            "name": "merchantProcessors",
            "baseName": "merchant_processors",
            "type": "Array<CreateOnboardingFormRequestMerchantProcessorsInner>"
        },
        {
            "name": "onboardingData",
            "baseName": "onboarding_data",
            "type": "OnboardingFormOnboardingData"
        },
        {
            "name": "onboardingLink",
            "baseName": "onboarding_link",
            "type": "OnboardingFormOnboardingLink"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OnboardingForm.StatusEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return OnboardingForm.attributeTypeMap;
    }
}

export namespace OnboardingForm {
    export enum StatusEnum {
        InProgress = <any> 'IN_PROGRESS',
        Completed = <any> 'COMPLETED'
    }
}
