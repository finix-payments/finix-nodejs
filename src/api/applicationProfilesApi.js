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
    _basePath = defaultBasePath;
    _defaultHeaders = {};
    _useQuerystring = false;
    authentications = {
        'default': new models_1.VoidAuth(),
        'BasicAuth': new models_2.HttpBasicAuth(),
    };
    interceptors = [];
    constructor(basePathOrUsername, password, basePath) {
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
    async getHelper(applicationProfileId, options = { headers: {} }) {
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
    }
    /**
     * Find an existing `application_profile` by ID.
     * @summary Get Application Profile
     * @param applicationProfileId ID of application profile to use
     */
    async get(applicationProfileId, options = { headers: {} }, httpData = false) {
        const responseObject = await this.getHelper(applicationProfileId, options);
        if (responseObject.body.hasOwnProperty('embedded')) {
            let dataList = await this.embeddedHelper(responseObject);
            if (httpData) {
                return Promise.resolve({ response: responseObject.response, body: dataList });
            }
            return dataList;
        }
        if (httpData) {
            return responseObject;
        }
        return responseObject.body;
    }
    /**
     * Helper function.
     * Return a collection of `application_profiles`.
     * @summary List Application Profiles

    */
    async listHelper(listApplicationProfilesQueryParams, options = { headers: {} }) {
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
    }
    /**
     * Return a collection of `application_profiles`.
     * @summary List Application Profiles

    */
    async list(listApplicationProfilesQueryParams, options = { headers: {} }, httpData = false) {
        const responseObject = await this.listHelper(listApplicationProfilesQueryParams, options);
        if (responseObject.body.hasOwnProperty('embedded')) {
            let dataList = await this.embeddedHelper(responseObject);
            if (httpData) {
                return Promise.resolve({ response: responseObject.response, body: dataList });
            }
            return dataList;
        }
        if (httpData) {
            return responseObject;
        }
        return responseObject.body;
    }
    /**
     * Helper function.
     * Update an existing `application_profile`.
     * @summary Update Application Profile
     * @param applicationProfileId ID of application profile to use
     * @param updateApplicationProfileRequest
     */
    async updateHelper(applicationProfileId, updateApplicationProfileRequest, options = { headers: {} }) {
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
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(updateApplicationProfileRequest, "UpdateApplicationProfileRequest")
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
    }
    /**
     * Update an existing `application_profile`.
     * @summary Update Application Profile
     * @param applicationProfileId ID of application profile to use
     * @param updateApplicationProfileRequest
     */
    async update(applicationProfileId, updateApplicationProfileRequest, options = { headers: {} }, httpData = false) {
        const responseObject = await this.updateHelper(applicationProfileId, updateApplicationProfileRequest, options);
        if (responseObject.body.hasOwnProperty('embedded')) {
            let dataList = await this.embeddedHelper(responseObject);
            if (httpData) {
                return Promise.resolve({ response: responseObject.response, body: dataList });
            }
            return dataList;
        }
        if (httpData) {
            return responseObject;
        }
        return responseObject.body;
    }
    async embeddedHelper(responseObject) {
        const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
        let dataList = responseObject.body.embedded[embeddedName];
        dataList.page = responseObject.body.page;
        dataList.links = responseObject.body.links;
        return dataList;
    }
}
exports.ApplicationProfilesApi = ApplicationProfilesApi;
//# sourceMappingURL=applicationProfilesApi.js.map