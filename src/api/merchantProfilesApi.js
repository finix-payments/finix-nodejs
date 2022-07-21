"use strict";
/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantProfilesApi = exports.MerchantProfilesApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var MerchantProfilesApiApiKeys;
(function (MerchantProfilesApiApiKeys) {
})(MerchantProfilesApiApiKeys = exports.MerchantProfilesApiApiKeys || (exports.MerchantProfilesApiApiKeys = {}));
class MerchantProfilesApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'BasicAuth': new models_2.HttpBasicAuth(),
        };
        this.interceptors = [];
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
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[MerchantProfilesApiApiKeys[key]].apiKey = value;
    }
    set username(username) {
        this.authentications.BasicAuth.username = username;
    }
    set password(password) {
        this.authentications.BasicAuth.password = password;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    /**
     * Helper function.
     * Get the merchant profile object
     * @summary Show Merchant Profile
     * @param merchantProfileId ID of merchant profile
     */
    getHelper(merchantProfileId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/merchant_profiles/{merchant_profile_id}'
                .replace('{' + 'merchant_profile_id' + '}', encodeURIComponent(String(merchantProfileId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/hal+json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'merchantProfileId' is not null or undefined
            if (merchantProfileId === null || merchantProfileId === undefined) {
                throw new Error('Required parameter merchantProfileId was null or undefined when calling getMerchantProfile.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            localVarHeaderParams['Finix-Version'] = "2022-02-01";
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "MerchantProfile");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Get the merchant profile object
     * @summary Show Merchant Profile
     * @param merchantProfileId ID of merchant profile
     */
    get(merchantProfileId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(merchantProfileId, options);
            return responseObject.body;
        });
    }
    /**
     * Get the merchant profile object
     * @summary Show Merchant Profile
     * @param merchantProfileId ID of merchant profile
     */
    getHttp(merchantProfileId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(merchantProfileId, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Get list of all the merchant_profiles objects
     * @summary List Merchant Profiles

    */
    listHelper(listMerchantProfilesQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/merchant_profiles';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/hal+json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (listMerchantProfilesQueryParams != undefined) {
                if (listMerchantProfilesQueryParams.id !== undefined) {
                    localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(listMerchantProfilesQueryParams.id, "string");
                }
                if (listMerchantProfilesQueryParams.beforeCursor !== undefined) {
                    localVarQueryParameters['before_cursor'] = models_1.ObjectSerializer.serialize(listMerchantProfilesQueryParams.beforeCursor, "string");
                }
                if (listMerchantProfilesQueryParams.afterCursor !== undefined) {
                    localVarQueryParameters['after_cursor'] = models_1.ObjectSerializer.serialize(listMerchantProfilesQueryParams.afterCursor, "string");
                }
                if (listMerchantProfilesQueryParams.limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(listMerchantProfilesQueryParams.limit, "number");
                }
            }
            Object.assign(localVarHeaderParams, options.headers);
            localVarHeaderParams['Finix-Version'] = "2022-02-01";
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "MerchantProfilesList");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Get list of all the merchant_profiles objects
     * @summary List Merchant Profiles
     */
    list(listMerchantProfilesQueryParams, options = { headers: {} }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listMerchantProfilesQueryParams, options);
            // var queryParam: ListMerchantProfilesQueryParams;
            var reachedEnd;
            if ((_b = (_a = responseObject.body) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.hasOwnProperty('nextCursor')) {
                var queryParam = {
                    afterCursor: '',
                    limit: 20
                };
                [queryParam, reachedEnd] = this.getCursorQueryParam(responseObject, queryParam);
            }
            else {
                var queryParam = {
                    offset: '',
                    limit: 20
                };
                [queryParam, reachedEnd] = this.getoffsetQueryParam(responseObject, queryParam);
            }
            const nextFetch = (limit) => {
                queryParam.limit = limit;
                if (reachedEnd) {
                    throw new RangeError("End of list reached");
                }
                return this.list(queryParam);
            };
            let dataList = new models_1.finixList(nextFetch);
            dataList = yield this.embeddedHelper(responseObject, dataList);
            dataList.hasMore = !reachedEnd;
            return dataList;
        });
    }
    /**
     * Get list of all the merchant_profiles objects
     * @summary List Merchant Profiles
     */
    listHttp(listMerchantProfilesQueryParams, options = { headers: {} }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listMerchantProfilesQueryParams, options);
            //var queryParam: ListMerchantProfilesQueryParams;
            var reachedEnd;
            if ((_b = (_a = responseObject.body) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.hasOwnProperty('nextCursor')) {
                var queryParam = {
                    afterCursor: '',
                    limit: 20
                };
                [queryParam, reachedEnd] = this.getCursorQueryParam(responseObject, queryParam);
            }
            else {
                var queryParam = {
                    offset: '',
                    limit: 20
                };
                [queryParam, reachedEnd] = this.getoffsetQueryParam(responseObject, queryParam);
            }
            const nextFetch = (limit) => {
                queryParam.limit = limit;
                if (reachedEnd) {
                    throw new RangeError("End of list reached");
                }
                return this.list(queryParam);
            };
            let dataList = new models_1.finixList(nextFetch);
            dataList = yield this.embeddedHelper(responseObject, dataList);
            dataList.hasMore = !reachedEnd;
            return Promise.resolve({ response: responseObject.response, body: dataList });
        });
    }
    /**
     * Helper function.
     * Update a merchant profile
     * @summary Update a Merchant Profile
     * @param merchantProfileId ID of merchant profile
     * @param body
     */
    updateHelper(merchantProfileId, body, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/merchant_profiles/{merchant_profile_id}'
                .replace('{' + 'merchant_profile_id' + '}', encodeURIComponent(String(merchantProfileId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/hal+json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'merchantProfileId' is not null or undefined
            if (merchantProfileId === null || merchantProfileId === undefined) {
                throw new Error('Required parameter merchantProfileId was null or undefined when calling updateMerchantProfile.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            localVarHeaderParams['Finix-Version'] = "2022-02-01";
            localVarHeaderParams['Content-Type'] = "application/hal+json";
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            if (body != undefined && body != null && body.hasOwnProperty('file')) {
                localVarRequestOptions.formData = body;
            }
            else {
                localVarRequestOptions.body = models_1.ObjectSerializer.serialize(body, "object");
            }
            let authenticationPromise = Promise.resolve();
            if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "MerchantProfile");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * Update a merchant profile
     * @summary Update a Merchant Profile
     * @param merchantProfileId ID of merchant profile
     * @param body
     */
    update(merchantProfileId, body, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(merchantProfileId, body, options);
            return responseObject.body;
        });
    }
    /**
     * Update a merchant profile
     * @summary Update a Merchant Profile
     * @param merchantProfileId ID of merchant profile
     * @param body
     */
    updateHttp(merchantProfileId, body, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(merchantProfileId, body, options);
            return responseObject;
        });
    }
    embeddedHelper(responseObject, dataList) {
        return __awaiter(this, void 0, void 0, function* () {
            if (responseObject.body.embedded == null || responseObject.body.embedded == undefined) {
                // const dataList = new finixList<any>();
                dataList.page = responseObject.body.page;
                dataList.links = responseObject.body.links;
                return dataList;
            }
            const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
            let tempList = responseObject.body.embedded[embeddedName];
            // const dataList = new finixList<any>();
            tempList.forEach(item => { dataList.add(item); });
            dataList.page = responseObject.body.page;
            dataList.links = responseObject.body.links;
            return dataList;
        });
    }
    getoffsetQueryParam(responseObject, queryParam) {
        queryParam.offset = responseObject.body.page.offset;
        var endReached = false;
        if (responseObject.body.page.offset + responseObject.body.page.limit > responseObject.body.page.count) {
            endReached = true;
        }
        return [queryParam, endReached];
    }
    getCursorQueryParam(responseObject, queryParam) {
        queryParam.afterCursor = responseObject.body.page.nextCursor;
        var endReached = false;
        if (responseObject.body.page.nextCursor == undefined) {
            endReached = true;
        }
        return [queryParam, endReached];
    }
}
exports.MerchantProfilesApi = MerchantProfilesApi;
//# sourceMappingURL=merchantProfilesApi.js.map