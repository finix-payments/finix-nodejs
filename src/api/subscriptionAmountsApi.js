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
exports.SubscriptionAmountsApi = exports.SubscriptionAmountsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var SubscriptionAmountsApiApiKeys;
(function (SubscriptionAmountsApiApiKeys) {
})(SubscriptionAmountsApiApiKeys = exports.SubscriptionAmountsApiApiKeys || (exports.SubscriptionAmountsApiApiKeys = {}));
class SubscriptionAmountsApi {
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
        this.authentications[SubscriptionAmountsApiApiKeys[key]].apiKey = value;
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
     * Create a `subscription_amount`.  The `Subscription Amount` is the amount to be charged to a `Merchant`. The `Subscription Amount` must be associated to a `Subscription Schedule`.
     * @summary Create a Subscription Amount
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest
     */
    async lcreateHelper(subscriptionScheduleId, createSubscriptionAmountRequest, options = { headers: {} }) {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts'
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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
        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling createSubscriptionAmounts.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(createSubscriptionAmountRequest, "CreateSubscriptionAmountRequest")
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
                            body = models_1.ObjectSerializer.deserialize(body, "SubscriptionAmount");
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
     * Create a `subscription_amount`.  The `Subscription Amount` is the amount to be charged to a `Merchant`. The `Subscription Amount` must be associated to a `Subscription Schedule`.
     * @summary Create a Subscription Amount
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest
     */
    async lcreate(subscriptionScheduleId, createSubscriptionAmountRequest, options = { headers: {} }, httpData = false) {
        const responseObject = await this.lcreateHelper(subscriptionScheduleId, createSubscriptionAmountRequest, options);
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
     * Delete a previously created `Subscription Amount`.
     * @summary Delete a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */
    async deleteSubscriptionAmountHelper(subscriptionAmountId, subscriptionScheduleId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts/{subscription_amount_id}'
            .replace('{' + 'subscription_amount_id' + '}', encodeURIComponent(String(subscriptionAmountId)))
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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
        // verify required parameter 'subscriptionAmountId' is not null or undefined
        if (subscriptionAmountId === null || subscriptionAmountId === undefined) {
            throw new Error('Required parameter subscriptionAmountId was null or undefined when calling deleteSubscriptionAmount.');
        }
        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling deleteSubscriptionAmount.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
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
     * Delete a previously created `Subscription Amount`.
     * @summary Delete a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */
    async deleteSubscriptionAmount(subscriptionAmountId, subscriptionScheduleId, options = { headers: {} }, httpData = false) {
        const responseObject = await this.deleteSubscriptionAmountHelper(subscriptionAmountId, subscriptionScheduleId, options);
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
     * Retrieve the details of a `subscription_amount`.
     * @summary Get a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */
    async getHelper(subscriptionAmountId, subscriptionScheduleId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts/{subscription_amount_id}'
            .replace('{' + 'subscription_amount_id' + '}', encodeURIComponent(String(subscriptionAmountId)))
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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
        // verify required parameter 'subscriptionAmountId' is not null or undefined
        if (subscriptionAmountId === null || subscriptionAmountId === undefined) {
            throw new Error('Required parameter subscriptionAmountId was null or undefined when calling getSubscriptionAmount.');
        }
        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling getSubscriptionAmount.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "SubscriptionAmount");
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
     * Retrieve the details of a `subscription_amount`.
     * @summary Get a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */
    async get(subscriptionAmountId, subscriptionScheduleId, options = { headers: {} }, httpData = false) {
        const responseObject = await this.getHelper(subscriptionAmountId, subscriptionScheduleId, options);
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
     * Retrive a list of `Subscription Amounts`.
     * @summary List Subscription Amounts

    * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
    *
    */
    async listBySubscriptionScheduleHelper(subscriptionScheduleId, listSubscriptionAmountQueryParams, options = { headers: {} }) {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts'
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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
        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling listSubscriptionAmount.');
        }
        if (listSubscriptionAmountQueryParams != undefined) {
            if (listSubscriptionAmountQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(listSubscriptionAmountQueryParams.limit, "number");
            }
            if (listSubscriptionAmountQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = models_1.ObjectSerializer.serialize(listSubscriptionAmountQueryParams.afterCursor, "string");
            }
            if (listSubscriptionAmountQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = models_1.ObjectSerializer.serialize(listSubscriptionAmountQueryParams.beforeCursor, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "SubscriptionAmountList");
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
     * Retrive a list of `Subscription Amounts`.
     * @summary List Subscription Amounts

    * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
    *
    */
    async listBySubscriptionSchedule(subscriptionScheduleId, listSubscriptionAmountQueryParams, options = { headers: {} }, httpData = false) {
        const responseObject = await this.listBySubscriptionScheduleHelper(subscriptionScheduleId, listSubscriptionAmountQueryParams, options);
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
     * Update the details of a `subscription_amount`.
     * @summary Update a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest
     */
    async patchSubscriptionAmountHelper(subscriptionAmountId, subscriptionScheduleId, createSubscriptionAmountRequest, options = { headers: {} }) {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts/{subscription_amount_id}'
            .replace('{' + 'subscription_amount_id' + '}', encodeURIComponent(String(subscriptionAmountId)))
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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
        // verify required parameter 'subscriptionAmountId' is not null or undefined
        if (subscriptionAmountId === null || subscriptionAmountId === undefined) {
            throw new Error('Required parameter subscriptionAmountId was null or undefined when calling patchSubscriptionAmount.');
        }
        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling patchSubscriptionAmount.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(createSubscriptionAmountRequest, "CreateSubscriptionAmountRequest")
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
                            body = models_1.ObjectSerializer.deserialize(body, "SubscriptionAmount");
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
     * Update the details of a `subscription_amount`.
     * @summary Update a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest
     */
    async patchSubscriptionAmount(subscriptionAmountId, subscriptionScheduleId, createSubscriptionAmountRequest, options = { headers: {} }, httpData = false) {
        const responseObject = await this.patchSubscriptionAmountHelper(subscriptionAmountId, subscriptionScheduleId, createSubscriptionAmountRequest, options);
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
exports.SubscriptionAmountsApi = SubscriptionAmountsApi;
