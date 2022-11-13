/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* The information of the initial onboarding link. This is only provided when creating an `onboarding_form`.
*/
export class OnboardingFormOnboardingLink {
    /**
    * A UTC timestamp detailing when the onboarding form expires and will no longer be available via `link_url`. To generate a new link to the same form, see [Get an Onboarding Form URL](/guides/onboarding/onboarding-form/#get-an-onboarding-form-url).
    */
    'expiresAt'?: string;
    /**
    * The URL of the user\'s Finix Onboarding Form. Users can use the `link_url` to return to the form until the link expires.
    */
    'linkUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "linkUrl",
            "baseName": "link_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OnboardingFormOnboardingLink.attributeTypeMap;
    }
}

