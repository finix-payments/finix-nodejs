// This is the entrypoint for the package
import * as finix from './api/apis';
export * as Models from './model/models';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';
export class Client {

    readonly ApplicationProfiles: finix.ApplicationProfilesApi;
    readonly Applications: finix.ApplicationsApi;
    readonly Authorizations: finix.AuthorizationsApi;
    readonly BalanceTransfers: finix.BalanceTransfersApi;
    readonly Devices: finix.DevicesApi;
    readonly Disputes: finix.DisputesApi;
    readonly FeeProfiles: finix.FeeProfilesApi;
    readonly Fees: finix.FeesApi;
    readonly Files: finix.FilesApi;
    readonly Identities: finix.IdentitiesApi;
    readonly InstrumentUpdates: finix.InstrumentUpdatesApi;
    readonly MerchantProfiles: finix.MerchantProfilesApi;
    readonly Merchants: finix.MerchantsApi;
    readonly PaymentInstruments: finix.PaymentInstrumentsApi;
    readonly PaymentInstrumentsP2C: finix.PaymentInstrumentsP2CApi;
    readonly Processors: finix.ProcessorsApi;
    readonly Settlements: finix.SettlementsApi;
    readonly SubscriptionAmounts: finix.SubscriptionAmountsApi;
    readonly SubscriptionEnrollments: finix.SubscriptionEnrollmentsApi;
    readonly SubscriptionSchedules: finix.SubscriptionSchedulesApi;
    readonly Transfers: finix.TransfersApi;
    readonly Users: finix.UsersApi;
    readonly Verifications: finix.VerificationsApi;
    readonly Webhooks: finix.WebhooksApi;

    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected _username;
    protected _password;

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
        this.ApplicationProfiles = new finix.ApplicationProfilesApi(this.username, this.password, this.basePath);
        this.Applications = new finix.ApplicationsApi(this.username, this.password, this.basePath);
        this.Authorizations = new finix.AuthorizationsApi(this.username, this.password, this.basePath);
        this.BalanceTransfers = new finix.BalanceTransfersApi(this.username, this.password, this.basePath);
        this.Devices = new finix.DevicesApi(this.username, this.password, this.basePath);
        this.Disputes = new finix.DisputesApi(this.username, this.password, this.basePath);
        this.FeeProfiles = new finix.FeeProfilesApi(this.username, this.password, this.basePath);
        this.Fees = new finix.FeesApi(this.username, this.password, this.basePath);
        this.Files = new finix.FilesApi(this.username, this.password, this.basePath);
        this.Identities = new finix.IdentitiesApi(this.username, this.password, this.basePath);
        this.InstrumentUpdates = new finix.InstrumentUpdatesApi(this.username, this.password, this.basePath);
        this.MerchantProfiles = new finix.MerchantProfilesApi(this.username, this.password, this.basePath);
        this.Merchants = new finix.MerchantsApi(this.username, this.password, this.basePath);
        this.PaymentInstruments = new finix.PaymentInstrumentsApi(this.username, this.password, this.basePath);
        this.PaymentInstrumentsP2C = new finix.PaymentInstrumentsP2CApi(this.username, this.password, this.basePath);
        this.Processors = new finix.ProcessorsApi(this.username, this.password, this.basePath);
        this.Settlements = new finix.SettlementsApi(this.username, this.password, this.basePath);
        this.SubscriptionAmounts = new finix.SubscriptionAmountsApi(this.username, this.password, this.basePath);
        this.SubscriptionEnrollments = new finix.SubscriptionEnrollmentsApi(this.username, this.password, this.basePath);
        this.SubscriptionSchedules = new finix.SubscriptionSchedulesApi(this.username, this.password, this.basePath);
        this.Transfers = new finix.TransfersApi(this.username, this.password, this.basePath);
        this.Users = new finix.UsersApi(this.username, this.password, this.basePath);
        this.Verifications = new finix.VerificationsApi(this.username, this.password, this.basePath);
        this.Webhooks = new finix.WebhooksApi(this.username, this.password, this.basePath);
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    set username(username: string) {
        this._username = username;
    }

    set password(password: string) {
        this._password = password;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

}

export enum Environment{
    Test = 'https://finix.sandbox-payments-api.com'

}