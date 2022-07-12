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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./applicationProfilesApi"), exports);
const applicationProfilesApi_1 = require("./applicationProfilesApi");
__exportStar(require("./applicationsApi"), exports);
const applicationsApi_1 = require("./applicationsApi");
__exportStar(require("./authorizationsApi"), exports);
const authorizationsApi_1 = require("./authorizationsApi");
__exportStar(require("./balanceTransfersApi"), exports);
const balanceTransfersApi_1 = require("./balanceTransfersApi");
__exportStar(require("./devicesApi"), exports);
const devicesApi_1 = require("./devicesApi");
__exportStar(require("./disputesApi"), exports);
const disputesApi_1 = require("./disputesApi");
__exportStar(require("./feeProfilesApi"), exports);
const feeProfilesApi_1 = require("./feeProfilesApi");
__exportStar(require("./feesApi"), exports);
const feesApi_1 = require("./feesApi");
__exportStar(require("./filesApi"), exports);
const filesApi_1 = require("./filesApi");
__exportStar(require("./identitiesApi"), exports);
const identitiesApi_1 = require("./identitiesApi");
__exportStar(require("./instrumentUpdatesApi"), exports);
const instrumentUpdatesApi_1 = require("./instrumentUpdatesApi");
__exportStar(require("./merchantProfilesApi"), exports);
const merchantProfilesApi_1 = require("./merchantProfilesApi");
__exportStar(require("./merchantsApi"), exports);
const merchantsApi_1 = require("./merchantsApi");
__exportStar(require("./paymentInstrumentsApi"), exports);
const paymentInstrumentsApi_1 = require("./paymentInstrumentsApi");
__exportStar(require("./paymentInstrumentsP2CApi"), exports);
const paymentInstrumentsP2CApi_1 = require("./paymentInstrumentsP2CApi");
__exportStar(require("./processorsApi"), exports);
const processorsApi_1 = require("./processorsApi");
__exportStar(require("./settlementsApi"), exports);
const settlementsApi_1 = require("./settlementsApi");
__exportStar(require("./subscriptionAmountsApi"), exports);
const subscriptionAmountsApi_1 = require("./subscriptionAmountsApi");
__exportStar(require("./subscriptionEnrollmentsApi"), exports);
const subscriptionEnrollmentsApi_1 = require("./subscriptionEnrollmentsApi");
__exportStar(require("./subscriptionSchedulesApi"), exports);
const subscriptionSchedulesApi_1 = require("./subscriptionSchedulesApi");
__exportStar(require("./transfersApi"), exports);
const transfersApi_1 = require("./transfersApi");
__exportStar(require("./usersApi"), exports);
const usersApi_1 = require("./usersApi");
__exportStar(require("./verificationsApi"), exports);
const verificationsApi_1 = require("./verificationsApi");
__exportStar(require("./webhooksApi"), exports);
const webhooksApi_1 = require("./webhooksApi");
class HttpError extends Error {
    response;
    body;
    statusCode;
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [applicationProfilesApi_1.ApplicationProfilesApi, applicationsApi_1.ApplicationsApi, authorizationsApi_1.AuthorizationsApi, balanceTransfersApi_1.BalanceTransfersApi, devicesApi_1.DevicesApi, disputesApi_1.DisputesApi, feeProfilesApi_1.FeeProfilesApi, feesApi_1.FeesApi, filesApi_1.FilesApi, identitiesApi_1.IdentitiesApi, instrumentUpdatesApi_1.InstrumentUpdatesApi, merchantProfilesApi_1.MerchantProfilesApi, merchantsApi_1.MerchantsApi, paymentInstrumentsApi_1.PaymentInstrumentsApi, paymentInstrumentsP2CApi_1.PaymentInstrumentsP2CApi, processorsApi_1.ProcessorsApi, settlementsApi_1.SettlementsApi, subscriptionAmountsApi_1.SubscriptionAmountsApi, subscriptionEnrollmentsApi_1.SubscriptionEnrollmentsApi, subscriptionSchedulesApi_1.SubscriptionSchedulesApi, transfersApi_1.TransfersApi, usersApi_1.UsersApi, verificationsApi_1.VerificationsApi, webhooksApi_1.WebhooksApi];
//# sourceMappingURL=apis.js.map