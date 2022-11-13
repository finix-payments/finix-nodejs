/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* The prefilled information of the user that\'s being onboarding. See [Prefilling Fields](/guides/onboarding/onboarding-form/).
*/
export class OnboardingFormOnboardingData {
    /**
    * Additional underwriting data about the user.
    */
    'additionalUnderwritingData'?: object;
    /**
    * The `entities` saved in the `associated_identities` of the user. For more information, see [Create an Associated Identity](/api/#operation/createAssociatedIdentity).
    */
    'associatedEntities'?: Array<object>;
    /**
    * The `entity` information saved in the `Identity` of the user.
    */
    'entity'?: object;
    /**
    * Maximum amount that can be transacted for a single transaction in cents (max 12 characters). Must be equal to or less than your `max_transaction_amount`.
    */
    'maxTransactionAmount'?: number;
    /**
    * The `Payment Instrument` that\'ll be used to payout the user. For more information, see [Payouts](/guides/payouts).
    */
    'paymentInstruments'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalUnderwritingData",
            "baseName": "additional_underwriting_data",
            "type": "object"
        },
        {
            "name": "associatedEntities",
            "baseName": "associated_entities",
            "type": "Array<object>"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "object"
        },
        {
            "name": "maxTransactionAmount",
            "baseName": "max_transaction_amount",
            "type": "number"
        },
        {
            "name": "paymentInstruments",
            "baseName": "payment_instruments",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return OnboardingFormOnboardingData.attributeTypeMap;
    }
}

