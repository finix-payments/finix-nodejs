import {Client, Environment, Models} from '../api';

describe('Onboarding Forms API', () => {

    let client: Client;
    let onboardingFormId: string;

    beforeAll(() => {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Sandbox);
    });

    test('Test: Create an onboarding form', async() => {
        const onboardingFormRequest: Models.CreateOnboardingFormRequest = {
            onboardingData : {
                maxTransactionAmount : 100000
            }, 
            merchantProcessors : [{
                processor: "LITLE_V1"
            }], 
            onboardingLinkDetails : {
                returnUrl: "https://www.finix.com/docs",
                expiredSessionUrl: "https://www.finix.com/",
                termsOfServiceUrl: "https://www.finix.com/terms-and-policies",
                feeDetailsUrl : "https://www.finix.com/docs",
                expirationInMinutes: "30"
            }
        };

        const onboardingForm = await client.OnboardingForms.create(onboardingFormRequest);
        onboardingFormId = onboardingForm.id; 
        expect(onboardingForm.onboardingData.maxTransactionAmount).toBe(onboardingFormRequest.onboardingData.maxTransactionAmount);
        expect(onboardingForm.merchantProcessors[0].processor).toBe(onboardingFormRequest.merchantProcessors[0].processor);
    });

    test('Test: Create an onboarding form link', async() => {
        const onboardingLinkRequest: Models.CreateOnboardingFormLinkRequest = {
            termsOfServiceUrl :"https://www.finix.com/terms-and-policies",
            returnUrl:"https://www.finix.com/docs",
            feeDetailsUrl:"https://www.finix.com/docs",
            expiredSessionUrl:"https://www.finix.com/",
            expirationInMinutes:30 
        };

        const onboardingLink = await client.OnboardingForms.createLink(onboardingFormId, onboardingLinkRequest); 
        expect(onboardingLink.linkUrl.includes(onboardingFormId)).toBe(true);
    });

    test('Test: Fetch an onboarding form',async () => {
        const fetchedOnboardingForm = await client.OnboardingForms.get(onboardingFormId);
        expect(fetchedOnboardingForm.onboardingData.maxTransactionAmount).toBe(100000);
        expect(fetchedOnboardingForm.merchantProcessors[0].processor).toBe("LITLE_V1");
        
    });

})
 