"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = exports.Client = exports.Models = void 0;
// This is the entrypoint for the package
const finix = __importStar(require("./api/apis"));
exports.Models = __importStar(require("./model/models"));
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
class Client {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
        this.Authorizations = new finix.AuthorizationsApi(this.username, this.password, this.basePath);
        this.BalanceTransfers = new finix.BalanceTransfersApi(this.username, this.password, this.basePath);
        this.Devices = new finix.DevicesApi(this.username, this.password, this.basePath);
        this.Disputes = new finix.DisputesApi(this.username, this.password, this.basePath);
        this.FeeProfiles = new finix.FeeProfilesApi(this.username, this.password, this.basePath);
        this.Files = new finix.FilesApi(this.username, this.password, this.basePath);
        this.Identities = new finix.IdentitiesApi(this.username, this.password, this.basePath);
        this.InstrumentUpdates = new finix.InstrumentUpdatesApi(this.username, this.password, this.basePath);
        this.MerchantProfiles = new finix.MerchantProfilesApi(this.username, this.password, this.basePath);
        this.Merchants = new finix.MerchantsApi(this.username, this.password, this.basePath);
        this.PaymentInstruments = new finix.PaymentInstrumentsApi(this.username, this.password, this.basePath);
        this.Settlements = new finix.SettlementsApi(this.username, this.password, this.basePath);
        this.Transfers = new finix.TransfersApi(this.username, this.password, this.basePath);
        this.Verifications = new finix.VerificationsApi(this.username, this.password, this.basePath);
        this.Webhooks = new finix.WebhooksApi(this.username, this.password, this.basePath);
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    set username(username) {
        this._username = username;
    }
    set password(password) {
        this._password = password;
    }
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
}
exports.Client = Client;
var Environment;
(function (Environment) {
    Environment["Test"] = "https://finix.sandbox-payments-api.com";
})(Environment = exports.Environment || (exports.Environment = {}));
//# sourceMappingURL=api.js.map