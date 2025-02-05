export * from './authorizationsApi';
import { AuthorizationsApi } from './authorizationsApi';
export * from './balanceTransfersApi';
import { BalanceTransfersApi } from './balanceTransfersApi';
export * from './complianceFormsApi';
import { ComplianceFormsApi } from './complianceFormsApi';
export * from './devicesApi';
import { DevicesApi } from './devicesApi';
export * from './disputesApi';
import { DisputesApi } from './disputesApi';
export * from './feeProfilesApi';
import { FeeProfilesApi } from './feeProfilesApi';
export * from './filesApi';
import { FilesApi } from './filesApi';
export * from './identitiesApi';
import { IdentitiesApi } from './identitiesApi';
export * from './instrumentUpdatesApi';
import { InstrumentUpdatesApi } from './instrumentUpdatesApi';
export * from './merchantProfilesApi';
import { MerchantProfilesApi } from './merchantProfilesApi';
export * from './merchantsApi';
import { MerchantsApi } from './merchantsApi';
export * from './onboardingFormsApi';
import { OnboardingFormsApi } from './onboardingFormsApi';
export * from './paymentInstrumentsApi';
import { PaymentInstrumentsApi } from './paymentInstrumentsApi';
export * from './payoutProfilesApi';
import { PayoutProfilesApi } from './payoutProfilesApi';
export * from './settlementsApi';
import { SettlementsApi } from './settlementsApi';
export * from './transfersApi';
import { TransfersApi } from './transfersApi';
export * from './verificationsApi';
import { VerificationsApi } from './verificationsApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as http from 'http';

export class HttpError extends Error {
    public response: http.IncomingMessage;
    public body: any;
    public headers: any;
    public statusCode: number;

    constructor (response: http.IncomingMessage, rawBody: any, statusCode: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
        this.response = response;
        this.body = rawBody?._embedded?.errors;
        this.statusCode = statusCode;
        this.headers = response.rawHeaders;
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthorizationsApi, BalanceTransfersApi, ComplianceFormsApi, DevicesApi, DisputesApi, FeeProfilesApi, FilesApi, IdentitiesApi, InstrumentUpdatesApi, MerchantProfilesApi, MerchantsApi, OnboardingFormsApi, PaymentInstrumentsApi, PayoutProfilesApi, SettlementsApi, TransfersApi, VerificationsApi, WebhooksApi];
