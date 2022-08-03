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
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthorizationsApi, BalanceTransfersApi, DevicesApi, DisputesApi, FeeProfilesApi, FilesApi, IdentitiesApi, InstrumentUpdatesApi, MerchantProfilesApi, MerchantsApi, PaymentInstrumentsApi, SettlementsApi, TransfersApi, VerificationsApi, WebhooksApi];
