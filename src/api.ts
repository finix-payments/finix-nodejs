// This is the entrypoint for the package
import * as finix from './api/apis';
export * as Models from './model/models';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';
export class Client {

    readonly Authorizations: finix.AuthorizationsApi;
    readonly BalanceTransfers: finix.BalanceTransfersApi;
    readonly ComplianceForms: finix.ComplianceFormsApi;
    readonly Devices: finix.DevicesApi;
    readonly Disputes: finix.DisputesApi;
    readonly FeeProfiles: finix.FeeProfilesApi;
    readonly Files: finix.FilesApi;
    readonly Identities: finix.IdentitiesApi;
    readonly InstrumentUpdates: finix.InstrumentUpdatesApi;
    readonly MerchantProfiles: finix.MerchantProfilesApi;
    readonly Merchants: finix.MerchantsApi;
    readonly OnboardingForms: finix.OnboardingFormsApi;
    readonly PaymentInstruments: finix.PaymentInstrumentsApi;
    readonly Settlements: finix.SettlementsApi;
    readonly Transfers: finix.TransfersApi;
    readonly Verifications: finix.VerificationsApi;
    readonly Webhooks: finix.WebhooksApi;

    protected _basePath = defaultBasePath;

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
        this.Authorizations = new finix.AuthorizationsApi(this.username, this.password, this.basePath);
        this.BalanceTransfers = new finix.BalanceTransfersApi(this.username, this.password, this.basePath);
        this.ComplianceForms = new finix.ComplianceFormsApi(this.username, this.password, this.basePath);
        this.Devices = new finix.DevicesApi(this.username, this.password, this.basePath);
        this.Disputes = new finix.DisputesApi(this.username, this.password, this.basePath);
        this.FeeProfiles = new finix.FeeProfilesApi(this.username, this.password, this.basePath);
        this.Files = new finix.FilesApi(this.username, this.password, this.basePath);
        this.Identities = new finix.IdentitiesApi(this.username, this.password, this.basePath);
        this.InstrumentUpdates = new finix.InstrumentUpdatesApi(this.username, this.password, this.basePath);
        this.MerchantProfiles = new finix.MerchantProfilesApi(this.username, this.password, this.basePath);
        this.Merchants = new finix.MerchantsApi(this.username, this.password, this.basePath);
        this.OnboardingForms = new finix.OnboardingFormsApi(this.username, this.password, this.basePath);
        this.PaymentInstruments = new finix.PaymentInstrumentsApi(this.username, this.password, this.basePath);
        this.Settlements = new finix.SettlementsApi(this.username, this.password, this.basePath);
        this.Transfers = new finix.TransfersApi(this.username, this.password, this.basePath);
        this.Verifications = new finix.VerificationsApi(this.username, this.password, this.basePath);
        this.Webhooks = new finix.WebhooksApi(this.username, this.password, this.basePath);
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
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
    Sandbox = 'https://finix.sandbox-payments-api.com',
    Live = 'https://finix.live-payments-api.com'
}