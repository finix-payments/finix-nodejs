/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* The information of the initial onboarding link. This is only provided when creating an `onboarding_form`.
*/
export class CreateOnboardingFormRequestOnboardingLinkDetails {
    /**
    * The URL users get sent to after completing the onboarding flow.
    */
    'returnUrl'?: string;
    /**
    * The URL users get sent to if the bearer token expires.
    */
    'expiredSessionUrl'?: string;
    /**
    * Your Terms of Service URL. The URL is provided to users for consent along with [Finix\'s Terms of Service](https://finix-hosted-content.s3.amazonaws.com/flex/v2/finix-terms-of-service.html).
    */
    'termsOfServiceUrl'?: string;
    /**
    * The URL of the page where you display the fees related to processing payments (for more info, see [Displaying Processing Fees](/guides/onboarding/onboarding-form/#displaying-processing-fees)).
    */
    'feeDetailsUrl'?: string;
    /**
    * How long (in minutes) the link should be valid for. Defaults to 60 minutes.
    */
    'expirationInMinutes'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "returnUrl",
            "baseName": "return_url",
            "type": "string"
        },
        {
            "name": "expiredSessionUrl",
            "baseName": "expired_session_url",
            "type": "string"
        },
        {
            "name": "termsOfServiceUrl",
            "baseName": "terms_of_service_url",
            "type": "string"
        },
        {
            "name": "feeDetailsUrl",
            "baseName": "fee_details_url",
            "type": "string"
        },
        {
            "name": "expirationInMinutes",
            "baseName": "expiration_in_minutes",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateOnboardingFormRequestOnboardingLinkDetails.attributeTypeMap;
    }
}

