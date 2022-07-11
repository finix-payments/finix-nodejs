export * from './applicationProfilesApi';
import { ApplicationProfilesApi } from './applicationProfilesApi';
export * from './applicationsApi';
import { ApplicationsApi } from './applicationsApi';
export * from './authorizationsApi';
import { AuthorizationsApi } from './authorizationsApi';
export * from './balanceTransfersApi';
import { BalanceTransfersApi } from './balanceTransfersApi';
export * from './devicesApi';
import { DevicesApi } from './devicesApi';
export * from './disputesApi';
import { DisputesApi } from './disputesApi';
export * from './feeProfilesApi';
import { FeeProfilesApi } from './feeProfilesApi';
export * from './feesApi';
import { FeesApi } from './feesApi';
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
export * from './paymentInstrumentsApi';
import { PaymentInstrumentsApi } from './paymentInstrumentsApi';
export * from './paymentInstrumentsP2CApi';
import { PaymentInstrumentsP2CApi } from './paymentInstrumentsP2CApi';
export * from './processorsApi';
import { ProcessorsApi } from './processorsApi';
export * from './settlementsApi';
import { SettlementsApi } from './settlementsApi';
export * from './subscriptionAmountsApi';
import { SubscriptionAmountsApi } from './subscriptionAmountsApi';
export * from './subscriptionEnrollmentsApi';
import { SubscriptionEnrollmentsApi } from './subscriptionEnrollmentsApi';
export * from './subscriptionSchedulesApi';
import { SubscriptionSchedulesApi } from './subscriptionSchedulesApi';
export * from './transfersApi';
import { TransfersApi } from './transfersApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
export * from './verificationsApi';
import { VerificationsApi } from './verificationsApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ApplicationProfilesApi, ApplicationsApi, AuthorizationsApi, BalanceTransfersApi, DevicesApi, DisputesApi, FeeProfilesApi, FeesApi, FilesApi, IdentitiesApi, InstrumentUpdatesApi, MerchantProfilesApi, MerchantsApi, PaymentInstrumentsApi, PaymentInstrumentsP2CApi, ProcessorsApi, SettlementsApi, SubscriptionAmountsApi, SubscriptionEnrollmentsApi, SubscriptionSchedulesApi, TransfersApi, UsersApi, VerificationsApi, WebhooksApi];
