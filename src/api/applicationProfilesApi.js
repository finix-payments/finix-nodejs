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
exports.ApplicationProfilesApi = exports.ApplicationProfilesApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var ApplicationProfilesApiApiKeys;
(function (ApplicationProfilesApiApiKeys) {
})(ApplicationProfilesApiApiKeys = exports.ApplicationProfilesApiApiKeys || (exports.ApplicationProfilesApiApiKeys = {}));
class ApplicationProfilesApi {
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
        this.authentications[ApplicationProfilesApiApiKeys[key]].apiKey = value;
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
     * Find an existing `application_profile` by ID.
     * @summary Get Application Profile
     * @param applicationProfileId ID of application profile to use
     */
    getHelper(applicationProfileId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/application_profiles/{application_profile_id}'
                .replace('{' + 'application_profile_id' + '}', encodeURIComponent(String(applicationProfileId)));
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
            // verify required parameter 'applicationProfileId' is not null or undefined
            if (applicationProfileId === null || applicationProfileId === undefined) {
                throw new Error('Required parameter applicationProfileId was null or undefined when calling getApplicationProfile.');
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
                                body = models_1.ObjectSerializer.deserialize(body, "ApplicationProfile");
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
     * Find an existing `application_profile` by ID.
     * @summary Get Application Profile
     * @param applicationProfileId ID of application profile to use
     */
    get(applicationProfileId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(applicationProfileId, options);
            return responseObject.body;
        });
    }
    /**
     * Find an existing `application_profile` by ID.
     * @summary Get Application Profile
     * @param applicationProfileId ID of application profile to use
     */
    getHttp(applicationProfileId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(applicationProfileId, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Return a collection of `application_profiles`.
     * @summary List Application Profiles

    */
    listHelper(listApplicationProfilesQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/application_profiles';
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
            if (listApplicationProfilesQueryParams != undefined) {
                if (listApplicationProfilesQueryParams.limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(listApplicationProfilesQueryParams.limit, "number");
                }
                if (listApplicationProfilesQueryParams.afterCursor !== undefined) {
                    localVarQueryParameters['after_cursor'] = models_1.ObjectSerializer.serialize(listApplicationProfilesQueryParams.afterCursor, "string");
                }
                if (listApplicationProfilesQueryParams.beforeCursor !== undefined) {
                    localVarQueryParameters['before_cursor'] = models_1.ObjectSerializer.serialize(listApplicationProfilesQueryParams.beforeCursor, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "ApplicationProfilesList");
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
     * Return a collection of `application_profiles`.
     * @summary List Application Profiles

    */
    list(listApplicationProfilesQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listApplicationProfilesQueryParams, options);
            let dataList = yield this.embeddedHelper(responseObject);
            return dataList;
        });
    }
    /**
     * Return a collection of `application_profiles`.
     * @summary List Application Profiles

    */
    listHttp(listApplicationProfilesQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listApplicationProfilesQueryParams, options);
            let dataList = yield this.embeddedHelper(responseObject);
            return Promise.resolve({ response: responseObject.response, body: dataList });
        });
    }
    /**
     * Helper function.
     * Update an existing `application_profile`.
     * @summary Update Application Profile
     * @param applicationProfileId ID of application profile to use
     * @param updateApplicationProfileRequest
     */
    updateHelper(applicationProfileId, updateApplicationProfileRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/application_profiles/{application_profile_id}'
                .replace('{' + 'application_profile_id' + '}', encodeURIComponent(String(applicationProfileId)));
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
            // verify required parameter 'applicationProfileId' is not null or undefined
            if (applicationProfileId === null || applicationProfileId === undefined) {
                throw new Error('Required parameter applicationProfileId was null or undefined when calling updateApplicationProfile.');
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
            if (updateApplicationProfileRequest != undefined && updateApplicationProfileRequest != null && updateApplicationProfileRequest.hasOwnProperty('file')) {
                localVarRequestOptions.formData = updateApplicationProfileRequest;
            }
            else {
                localVarRequestOptions.body = models_1.ObjectSerializer.serialize(updateApplicationProfileRequest, "UpdateApplicationProfileRequest");
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
                                body = models_1.ObjectSerializer.deserialize(body, "ApplicationProfile");
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
     * Update an existing `application_profile`.
     * @summary Update Application Profile
     * @param applicationProfileId ID of application profile to use
     * @param updateApplicationProfileRequest
     */
    update(applicationProfileId, updateApplicationProfileRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(applicationProfileId, updateApplicationProfileRequest, options);
            return responseObject.body;
        });
    }
    /**
     * Update an existing `application_profile`.
     * @summary Update Application Profile
     * @param applicationProfileId ID of application profile to use
     * @param updateApplicationProfileRequest
     */
    updateHttp(applicationProfileId, updateApplicationProfileRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(applicationProfileId, updateApplicationProfileRequest, options);
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
exports.ApplicationProfilesApi = ApplicationProfilesApi;
