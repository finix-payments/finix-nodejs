/**
 * Finix API
 */

import { RequestFile } from './models';

export class CreateOnboardingFormLinkRequest {
    /**
    * Your Terms of Service URL. The URL is provided to users for consent along with Finix\'s Terms of Service.
    */
    'termsOfServiceUrl'?: string;
    /**
    * The URL users get sent to after completing the onboarding flow.
    */
    'returnUrl'?: string;
    /**
    * The URL of the page where you display the fees related to processing payments (for more info, see [Displaying Processing Fees](/guides/onboarding/onboarding-form/#displaying-processing-fees)).
    */
    'feeDetailsUrl'?: string;
    /**
    * The URL users get sent to if the bearer token expires.
    */
    'expiredSessionUrl'?: string;
    /**
    * How long (in minutes) the link is valid for.
    */
    'expirationInMinutes'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "termsOfServiceUrl",
            "baseName": "terms_of_service_url",
            "type": "string"
        },
        {
            "name": "returnUrl",
            "baseName": "return_url",
            "type": "string"
        },
        {
            "name": "feeDetailsUrl",
            "baseName": "fee_details_url",
            "type": "string"
        },
        {
            "name": "expiredSessionUrl",
            "baseName": "expired_session_url",
            "type": "string"
        },
        {
            "name": "expirationInMinutes",
            "baseName": "expiration_in_minutes",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CreateOnboardingFormLinkRequest.attributeTypeMap;
    }
}

