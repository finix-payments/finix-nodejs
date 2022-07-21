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
__exportStar(require("./settlementsApi"), exports);
const settlementsApi_1 = require("./settlementsApi");
__exportStar(require("./transfersApi"), exports);
const transfersApi_1 = require("./transfersApi");
__exportStar(require("./verificationsApi"), exports);
const verificationsApi_1 = require("./verificationsApi");
__exportStar(require("./webhooksApi"), exports);
const webhooksApi_1 = require("./webhooksApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [authorizationsApi_1.AuthorizationsApi, balanceTransfersApi_1.BalanceTransfersApi, devicesApi_1.DevicesApi, disputesApi_1.DisputesApi, feeProfilesApi_1.FeeProfilesApi, filesApi_1.FilesApi, identitiesApi_1.IdentitiesApi, instrumentUpdatesApi_1.InstrumentUpdatesApi, merchantProfilesApi_1.MerchantProfilesApi, merchantsApi_1.MerchantsApi, paymentInstrumentsApi_1.PaymentInstrumentsApi, settlementsApi_1.SettlementsApi, transfersApi_1.TransfersApi, verificationsApi_1.VerificationsApi, webhooksApi_1.WebhooksApi];
//# sourceMappingURL=apis.js.map