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
exports.FeeProfilesApi = exports.FeeProfilesApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var FeeProfilesApiApiKeys;
(function (FeeProfilesApiApiKeys) {
})(FeeProfilesApiApiKeys = exports.FeeProfilesApiApiKeys || (exports.FeeProfilesApiApiKeys = {}));
class FeeProfilesApi {
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
        this.authentications[FeeProfilesApiApiKeys[key]].apiKey = value;
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
     * Create fee profiles
     * @summary Create a Fee Profile
     * @param createFeeProfileRequest
     */
    createHelper(createFeeProfileRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/fee_profiles';
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
            Object.assign(localVarHeaderParams, options.headers);
            localVarHeaderParams['Finix-Version'] = "2022-02-01";
            localVarHeaderParams['Content-Type'] = "application/hal+json";
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            if (createFeeProfileRequest != undefined && createFeeProfileRequest != null && createFeeProfileRequest.hasOwnProperty('file')) {
                localVarRequestOptions.formData = createFeeProfileRequest;
            }
            else {
                localVarRequestOptions.body = models_1.ObjectSerializer.serialize(createFeeProfileRequest, "CreateFeeProfileRequest");
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
                                body = models_1.ObjectSerializer.deserialize(body, "FeeProfile");
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
     * Create fee profiles
     * @summary Create a Fee Profile
     * @param createFeeProfileRequest
     */
    create(createFeeProfileRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.createHelper(createFeeProfileRequest, options);
            return responseObject.body;
        });
    }
    /**
     * Create fee profiles
     * @summary Create a Fee Profile
     * @param createFeeProfileRequest
     */
    createHttp(createFeeProfileRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.createHelper(createFeeProfileRequest, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Get fee profile
     * @summary Fetch a Fee Profile
     * @param feeProfileId The ID of the fee profile.
     */
    getHelper(feeProfileId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/fee_profiles/{fee_profile_id}'
                .replace('{' + 'fee_profile_id' + '}', encodeURIComponent(String(feeProfileId)));
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
            // verify required parameter 'feeProfileId' is not null or undefined
            if (feeProfileId === null || feeProfileId === undefined) {
                throw new Error('Required parameter feeProfileId was null or undefined when calling getFeeProfile.');
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
                                body = models_1.ObjectSerializer.deserialize(body, "FeeProfile");
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
     * Get fee profile
     * @summary Fetch a Fee Profile
     * @param feeProfileId The ID of the fee profile.
     */
    get(feeProfileId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(feeProfileId, options);
            return responseObject.body;
        });
    }
    /**
     * Get fee profile
     * @summary Fetch a Fee Profile
     * @param feeProfileId The ID of the fee profile.
     */
    getHttp(feeProfileId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(feeProfileId, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Get all fee profiles
     * @summary List Fee Profiles

    */
    listHelper(listFeeProfilesQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/fee_profiles';
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
            if (listFeeProfilesQueryParams != undefined) {
                if (listFeeProfilesQueryParams.afterCursor !== undefined) {
                    localVarQueryParameters['after_cursor'] = models_1.ObjectSerializer.serialize(listFeeProfilesQueryParams.afterCursor, "string");
                }
                if (listFeeProfilesQueryParams.beforeCursor !== undefined) {
                    localVarQueryParameters['before_cursor'] = models_1.ObjectSerializer.serialize(listFeeProfilesQueryParams.beforeCursor, "string");
                }
                if (listFeeProfilesQueryParams.limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(listFeeProfilesQueryParams.limit, "number");
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
                                body = models_1.ObjectSerializer.deserialize(body, "FeeProfilesList");
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
     * Get all fee profiles
     * @summary List Fee Profiles
     */
    list(listFeeProfilesQueryParams, options = { headers: {} }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listFeeProfilesQueryParams, options);
            // var queryParam: ListFeeProfilesQueryParams;
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
     * Get all fee profiles
     * @summary List Fee Profiles
     */
    listHttp(listFeeProfilesQueryParams, options = { headers: {} }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listFeeProfilesQueryParams, options);
            //var queryParam: ListFeeProfilesQueryParams;
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
exports.FeeProfilesApi = FeeProfilesApi;
//# sourceMappingURL=feeProfilesApi.js.map