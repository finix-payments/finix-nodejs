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
exports.UsersApi = exports.UsersApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var UsersApiApiKeys;
(function (UsersApiApiKeys) {
})(UsersApiApiKeys = exports.UsersApiApiKeys || (exports.UsersApiApiKeys = {}));
class UsersApi {
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
        this.authentications[UsersApiApiKeys[key]].apiKey = value;
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
     * This is the equivalent of provisioning API keys (i.e. credentials) for an `Application`.  > Each Application can have multiple `Users` which allows each merchant to have multiple API keys that can be independently enabled and disabled. Merchants only have read access to the API.
     * @summary Create an Application User
     * @param applicationId ID of application to use
     * @param createUserRequest
     */
    createApplicationUserHelper(applicationId, createUserRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/applications/{application_id}/users'
                .replace('{' + 'application_id' + '}', encodeURIComponent(String(applicationId)));
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
            // verify required parameter 'applicationId' is not null or undefined
            if (applicationId === null || applicationId === undefined) {
                throw new Error('Required parameter applicationId was null or undefined when calling createApplicationUser.');
            }
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
            if (createUserRequest != undefined && createUserRequest != null && createUserRequest.hasOwnProperty('file')) {
                localVarRequestOptions.formData = createUserRequest;
            }
            else {
                localVarRequestOptions.body = models_1.ObjectSerializer.serialize(createUserRequest, "CreateUserRequest");
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
                                body = models_1.ObjectSerializer.deserialize(body, "User");
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
     * This is the equivalent of provisioning API keys (i.e. credentials) for an `Application`.  > Each Application can have multiple `Users` which allows each merchant to have multiple API keys that can be independently enabled and disabled. Merchants only have read access to the API.
     * @summary Create an Application User
     * @param applicationId ID of application to use
     * @param createUserRequest
     */
    createApplicationUser(applicationId, createUserRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.createApplicationUserHelper(applicationId, createUserRequest, options);
            return responseObject.body;
        });
    }
    /**
     * This is the equivalent of provisioning API keys (i.e. credentials) for an `Application`.  > Each Application can have multiple `Users` which allows each merchant to have multiple API keys that can be independently enabled and disabled. Merchants only have read access to the API.
     * @summary Create an Application User
     * @param applicationId ID of application to use
     * @param createUserRequest
     */
    createApplicationUserHttp(applicationId, createUserRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.createApplicationUserHelper(applicationId, createUserRequest, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Retrieve a specific user with the ID of the `User`.
     * @summary Find a User by ID
     * @param userId ID of &#x60;User&#x60; object.
     */
    getHelper(userId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/users/{user_id}'
                .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));
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
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getUser.');
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
                                body = models_1.ObjectSerializer.deserialize(body, "User");
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
     * Retrieve a specific user with the ID of the `User`.
     * @summary Find a User by ID
     * @param userId ID of &#x60;User&#x60; object.
     */
    get(userId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(userId, options);
            return responseObject.body;
        });
    }
    /**
     * Retrieve a specific user with the ID of the `User`.
     * @summary Find a User by ID
     * @param userId ID of &#x60;User&#x60; object.
     */
    getHttp(userId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(userId, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Get a `User`.
     * @summary List Users

    */
    listHelper(listUsersQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/users';
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
            if (listUsersQueryParams != undefined) {
                if (listUsersQueryParams.id !== undefined) {
                    localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(listUsersQueryParams.id, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "UsersList");
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
     * Get a `User`.
     * @summary List Users

    */
    list(listUsersQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listUsersQueryParams, options);
            let dataList = yield this.embeddedHelper(responseObject);
            return dataList;
        });
    }
    /**
     * Get a `User`.
     * @summary List Users

    */
    listHttp(listUsersQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listUsersQueryParams, options);
            let dataList = yield this.embeddedHelper(responseObject);
            return Promise.resolve({ response: responseObject.response, body: dataList });
        });
    }
    /**
     * Helper function.
     * You can update the `User` with new tags or to disable the `User`.
     * @summary Update User
     * @param userId ID of &#x60;User&#x60; object.
     * @param updateUserRequest
     */
    updateHelper(userId, updateUserRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/users/{user_id}'
                .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));
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
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling updateUser.');
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
            if (updateUserRequest != undefined && updateUserRequest != null && updateUserRequest.hasOwnProperty('file')) {
                localVarRequestOptions.formData = updateUserRequest;
            }
            else {
                localVarRequestOptions.body = models_1.ObjectSerializer.serialize(updateUserRequest, "UpdateUserRequest");
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
                                body = models_1.ObjectSerializer.deserialize(body, "User");
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
     * You can update the `User` with new tags or to disable the `User`.
     * @summary Update User
     * @param userId ID of &#x60;User&#x60; object.
     * @param updateUserRequest
     */
    update(userId, updateUserRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(userId, updateUserRequest, options);
            return responseObject.body;
        });
    }
    /**
     * You can update the `User` with new tags or to disable the `User`.
     * @summary Update User
     * @param userId ID of &#x60;User&#x60; object.
     * @param updateUserRequest
     */
    updateHttp(userId, updateUserRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(userId, updateUserRequest, options);
            return responseObject;
        });
    }
    embeddedHelper(responseObject) {
        return __awaiter(this, void 0, void 0, function* () {
            if (responseObject.embedded == null || responseObject.embedded == undefined) {
                const dataList = new models_1.SuperSet();
                dataList.page = responseObject.body.page;
                dataList.links = responseObject.body.links;
                return dataList;
            }
            const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
            let tempList = responseObject.body.embedded[embeddedName];
            const dataList = new models_1.SuperSet();
            tempList.forEach(item => { dataList.add(item); });
            dataList.page = responseObject.body.page;
            dataList.links = responseObject.body.links;
            return dataList;
        });
    }
}
exports.UsersApi = UsersApi;
