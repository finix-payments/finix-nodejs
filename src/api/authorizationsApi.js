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
exports.AuthorizationsApi = exports.AuthorizationsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var AuthorizationsApiApiKeys;
(function (AuthorizationsApiApiKeys) {
})(AuthorizationsApiApiKeys = exports.AuthorizationsApiApiKeys || (exports.AuthorizationsApiApiKeys = {}));
class AuthorizationsApi {
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
        this.authentications[AuthorizationsApiApiKeys[key]].apiKey = value;
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
     * Create an `Authorization` to process a transaction.  `Authorizations` can have two possible `states`:  - **SUCCEEDED**  - **FAILED**  If the `Authorization` has **SUCCEEDED** , it must be captured before `expires_at` passes or the funds will be released.  Learn how to prevent duplicate authorizations by passing an [Idempotency ID](#section/Idempotency-Requests) in the payload.
     * @summary Create an Authorization
     * @param createAuthorizationRequest
     */
    createHelper(createAuthorizationRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/authorizations';
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
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            if (createAuthorizationRequest != undefined && createAuthorizationRequest != null && createAuthorizationRequest.hasOwnProperty('file')) {
                localVarRequestOptions.formData = createAuthorizationRequest;
            }
            else {
                localVarRequestOptions.body = models_1.ObjectSerializer.serialize(createAuthorizationRequest, "CreateAuthorizationRequest");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Authorization");
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
     * Create an `Authorization` to process a transaction.  `Authorizations` can have two possible `states`:  - **SUCCEEDED**  - **FAILED**  If the `Authorization` has **SUCCEEDED** , it must be captured before `expires_at` passes or the funds will be released.  Learn how to prevent duplicate authorizations by passing an [Idempotency ID](#section/Idempotency-Requests) in the payload.
     * @summary Create an Authorization
     * @param createAuthorizationRequest
     */
    create(createAuthorizationRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.createHelper(createAuthorizationRequest, options);
            return responseObject.body;
        });
    }
    /**
     * Create an `Authorization` to process a transaction.  `Authorizations` can have two possible `states`:  - **SUCCEEDED**  - **FAILED**  If the `Authorization` has **SUCCEEDED** , it must be captured before `expires_at` passes or the funds will be released.  Learn how to prevent duplicate authorizations by passing an [Idempotency ID](#section/Idempotency-Requests) in the payload.
     * @summary Create an Authorization
     * @param createAuthorizationRequest
     */
    createHttp(createAuthorizationRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.createHelper(createAuthorizationRequest, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Retrieve the details of a previously created `Authorization`.
     * @summary Get an Authorization
     * @param authorizationId ID of authorization to fetch
     */
    getHelper(authorizationId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/authorizations/{authorization_id}'
                .replace('{' + 'authorization_id' + '}', encodeURIComponent(String(authorizationId)));
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
            // verify required parameter 'authorizationId' is not null or undefined
            if (authorizationId === null || authorizationId === undefined) {
                throw new Error('Required parameter authorizationId was null or undefined when calling getAuthorization.');
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
                                body = models_1.ObjectSerializer.deserialize(body, "Authorization");
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
     * Retrieve the details of a previously created `Authorization`.
     * @summary Get an Authorization
     * @param authorizationId ID of authorization to fetch
     */
    get(authorizationId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(authorizationId, options);
            return responseObject.body;
        });
    }
    /**
     * Retrieve the details of a previously created `Authorization`.
     * @summary Get an Authorization
     * @param authorizationId ID of authorization to fetch
     */
    getHttp(authorizationId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(authorizationId, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Retrieve a list of `Authorizations`.
     * @summary List Authorizations

    */
    listHelper(listAuthorizationsQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/authorizations';
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
            if (listAuthorizationsQueryParams != undefined) {
                if (listAuthorizationsQueryParams.sort !== undefined) {
                    localVarQueryParameters['sort'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.sort, "string");
                }
                if (listAuthorizationsQueryParams.beforeCursor !== undefined) {
                    localVarQueryParameters['before_cursor'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.beforeCursor, "string");
                }
                if (listAuthorizationsQueryParams.limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.limit, "number");
                }
                if (listAuthorizationsQueryParams.idempotencyId !== undefined) {
                    localVarQueryParameters['idempotency_id'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.idempotencyId, "string");
                }
                if (listAuthorizationsQueryParams.state !== undefined) {
                    localVarQueryParameters['state'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.state, "'SUCCEEDED' | 'FAILED' | 'PENDING' | 'CANCELED'");
                }
                if (listAuthorizationsQueryParams.createdAtGte !== undefined) {
                    localVarQueryParameters['created_at.gte'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.createdAtGte, "string");
                }
                if (listAuthorizationsQueryParams.createdAtLte !== undefined) {
                    localVarQueryParameters['created_at.lte'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.createdAtLte, "string");
                }
                if (listAuthorizationsQueryParams.updatedAtGte !== undefined) {
                    localVarQueryParameters['updated_at.gte'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.updatedAtGte, "string");
                }
                if (listAuthorizationsQueryParams.updatedAtLte !== undefined) {
                    localVarQueryParameters['updated_at.lte'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.updatedAtLte, "string");
                }
                if (listAuthorizationsQueryParams.isVoid !== undefined) {
                    localVarQueryParameters['is_void'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.isVoid, "string");
                }
                if (listAuthorizationsQueryParams.amount !== undefined) {
                    localVarQueryParameters['amount'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.amount, "number");
                }
                if (listAuthorizationsQueryParams.amountLt !== undefined) {
                    localVarQueryParameters['amount.lt'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.amountLt, "number");
                }
                if (listAuthorizationsQueryParams.amountGt !== undefined) {
                    localVarQueryParameters['amount.gt'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.amountGt, "number");
                }
                if (listAuthorizationsQueryParams.amountLte !== undefined) {
                    localVarQueryParameters['amount.lte'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.amountLte, "number");
                }
                if (listAuthorizationsQueryParams.amountGte !== undefined) {
                    localVarQueryParameters['amount.gte'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.amountGte, "number");
                }
                if (listAuthorizationsQueryParams.traceId !== undefined) {
                    localVarQueryParameters['trace_id'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.traceId, "string");
                }
                if (listAuthorizationsQueryParams.instrumentBin !== undefined) {
                    localVarQueryParameters['instrument_bin'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.instrumentBin, "string");
                }
                if (listAuthorizationsQueryParams.instrumentAccountLast4 !== undefined) {
                    localVarQueryParameters['instrument_account_last4'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.instrumentAccountLast4, "string");
                }
                if (listAuthorizationsQueryParams.instrumentBrandType !== undefined) {
                    localVarQueryParameters['instrument_brand_type'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.instrumentBrandType, "string");
                }
                if (listAuthorizationsQueryParams.merchantIdentityId !== undefined) {
                    localVarQueryParameters['merchant_identity_id'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.merchantIdentityId, "string");
                }
                if (listAuthorizationsQueryParams.merchantIdentityName !== undefined) {
                    localVarQueryParameters['merchant_identity_name'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.merchantIdentityName, "string");
                }
                if (listAuthorizationsQueryParams.instrumentName !== undefined) {
                    localVarQueryParameters['instrument_name'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.instrumentName, "string");
                }
                if (listAuthorizationsQueryParams.instrumentType !== undefined) {
                    localVarQueryParameters['instrument_type'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.instrumentType, "string");
                }
                if (listAuthorizationsQueryParams.merchantId !== undefined) {
                    localVarQueryParameters['merchant_id'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.merchantId, "string");
                }
                if (listAuthorizationsQueryParams.merchantMid !== undefined) {
                    localVarQueryParameters['merchant_mid'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.merchantMid, "string");
                }
                if (listAuthorizationsQueryParams.instrumentCardLast4 !== undefined) {
                    localVarQueryParameters['instrument_card_last4'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.instrumentCardLast4, "string");
                }
                if (listAuthorizationsQueryParams.merchantProcessorId !== undefined) {
                    localVarQueryParameters['merchant_processor_id'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.merchantProcessorId, "string");
                }
                if (listAuthorizationsQueryParams.type !== undefined) {
                    localVarQueryParameters['type'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.type, "string");
                }
                if (listAuthorizationsQueryParams.afterCursor !== undefined) {
                    localVarQueryParameters['after_cursor'] = models_1.ObjectSerializer.serialize(listAuthorizationsQueryParams.afterCursor, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "AuthorizationsList");
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
     * Retrieve a list of `Authorizations`.
     * @summary List Authorizations
     */
    list(listAuthorizationsQueryParams, options = { headers: {} }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listAuthorizationsQueryParams, options);
            // var queryParam: ListAuthorizationsQueryParams;
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
     * Retrieve a list of `Authorizations`.
     * @summary List Authorizations
     */
    listHttp(listAuthorizationsQueryParams, options = { headers: {} }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listAuthorizationsQueryParams, options);
            //var queryParam: ListAuthorizationsQueryParams;
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
     * If successfully captured, the `transfer` field of the `Authorization` will contain the ID of the `Transfer` resource that\'ll move funds.   By default, `Transfers` are in a **PENDING** state. The **PENDING** state means the system hasn\'t submitted the request to capture funds. Capture requests get submitted via a batch request.   Once the `Authorization` is updated with a `capture_amount` (i.e. *Captured*), the state of the `Transfer` will update to **SUCCEEDED**.  > Voided `Authorizations` can\'t be captured.
     * @summary Update an Authorization
     * @param authorizationId ID of authorization to fetch
     * @param updateAuthorizationRequest
     */
    updateHelper(authorizationId, updateAuthorizationRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/authorizations/{authorization_id}'
                .replace('{' + 'authorization_id' + '}', encodeURIComponent(String(authorizationId)));
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
            // verify required parameter 'authorizationId' is not null or undefined
            if (authorizationId === null || authorizationId === undefined) {
                throw new Error('Required parameter authorizationId was null or undefined when calling updateAuthorization.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            localVarHeaderParams['Finix-Version'] = "2022-02-01";
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            if (updateAuthorizationRequest != undefined && updateAuthorizationRequest != null && updateAuthorizationRequest.hasOwnProperty('file')) {
                localVarRequestOptions.formData = updateAuthorizationRequest;
            }
            else {
                localVarRequestOptions.body = models_1.ObjectSerializer.serialize(updateAuthorizationRequest, "UpdateAuthorizationRequest");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Authorization");
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
     * If successfully captured, the `transfer` field of the `Authorization` will contain the ID of the `Transfer` resource that\'ll move funds.   By default, `Transfers` are in a **PENDING** state. The **PENDING** state means the system hasn\'t submitted the request to capture funds. Capture requests get submitted via a batch request.   Once the `Authorization` is updated with a `capture_amount` (i.e. *Captured*), the state of the `Transfer` will update to **SUCCEEDED**.  > Voided `Authorizations` can\'t be captured.
     * @summary Update an Authorization
     * @param authorizationId ID of authorization to fetch
     * @param updateAuthorizationRequest
     */
    update(authorizationId, updateAuthorizationRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(authorizationId, updateAuthorizationRequest, options);
            return responseObject.body;
        });
    }
    /**
     * If successfully captured, the `transfer` field of the `Authorization` will contain the ID of the `Transfer` resource that\'ll move funds.   By default, `Transfers` are in a **PENDING** state. The **PENDING** state means the system hasn\'t submitted the request to capture funds. Capture requests get submitted via a batch request.   Once the `Authorization` is updated with a `capture_amount` (i.e. *Captured*), the state of the `Transfer` will update to **SUCCEEDED**.  > Voided `Authorizations` can\'t be captured.
     * @summary Update an Authorization
     * @param authorizationId ID of authorization to fetch
     * @param updateAuthorizationRequest
     */
    updateHttp(authorizationId, updateAuthorizationRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(authorizationId, updateAuthorizationRequest, options);
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
exports.AuthorizationsApi = AuthorizationsApi;
