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
exports.WebhooksApi = exports.WebhooksApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var WebhooksApiApiKeys;
(function (WebhooksApiApiKeys) {
})(WebhooksApiApiKeys = exports.WebhooksApiApiKeys || (exports.WebhooksApiApiKeys = {}));
class WebhooksApi {
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
        this.authentications[WebhooksApiApiKeys[key]].apiKey = value;
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
     * Create a `Webhook` to specify an endpoint where Finix can send events.
     * @summary Create a Webhook
     * @param createWebhookRequest
     */
    createHelper(createWebhookRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/webhooks';
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
            if (createWebhookRequest != undefined && createWebhookRequest != null && createWebhookRequest.hasOwnProperty('file')) {
                localVarRequestOptions.formData = createWebhookRequest;
            }
            else {
                localVarRequestOptions.body = models_1.ObjectSerializer.serialize(createWebhookRequest, "CreateWebhookRequest");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Webhook");
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
     * Create a `Webhook` to specify an endpoint where Finix can send events.
     * @summary Create a Webhook
     * @param createWebhookRequest
     */
    create(createWebhookRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.createHelper(createWebhookRequest, options);
            return responseObject.body;
        });
    }
    /**
     * Create a `Webhook` to specify an endpoint where Finix can send events.
     * @summary Create a Webhook
     * @param createWebhookRequest
     */
    createHttp(createWebhookRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.createHelper(createWebhookRequest, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Retrieve the details of a `Webhook`.
     * @summary Get a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     */
    getHelper(webhookId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/webhooks/{webhook_id}'
                .replace('{' + 'webhook_id' + '}', encodeURIComponent(String(webhookId)));
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
            // verify required parameter 'webhookId' is not null or undefined
            if (webhookId === null || webhookId === undefined) {
                throw new Error('Required parameter webhookId was null or undefined when calling getWebhook.');
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
                                body = models_1.ObjectSerializer.deserialize(body, "Webhook");
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
     * Retrieve the details of a `Webhook`.
     * @summary Get a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     */
    get(webhookId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(webhookId, options);
            return responseObject.body;
        });
    }
    /**
     * Retrieve the details of a `Webhook`.
     * @summary Get a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     */
    getHttp(webhookId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.getHelper(webhookId, options);
            return responseObject;
        });
    }
    /**
     * Helper function.
     * Retrieve a list of `Webhooks`.
     * @summary List Webhooks

    */
    listHelper(listWebhooksQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/webhooks';
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
            if (listWebhooksQueryParams != undefined) {
                if (listWebhooksQueryParams.limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(listWebhooksQueryParams.limit, "number");
                }
                if (listWebhooksQueryParams.afterCursor !== undefined) {
                    localVarQueryParameters['after_cursor'] = models_1.ObjectSerializer.serialize(listWebhooksQueryParams.afterCursor, "string");
                }
                if (listWebhooksQueryParams.beforeCursor !== undefined) {
                    localVarQueryParameters['before_cursor'] = models_1.ObjectSerializer.serialize(listWebhooksQueryParams.beforeCursor, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "WebhooksList");
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
     * Retrieve a list of `Webhooks`.
     * @summary List Webhooks

    */
    list(listWebhooksQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listWebhooksQueryParams, options);
            let dataList = yield this.embeddedHelper(responseObject);
            return dataList;
        });
    }
    /**
     * Retrieve a list of `Webhooks`.
     * @summary List Webhooks

    */
    listHttp(listWebhooksQueryParams, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.listHelper(listWebhooksQueryParams, options);
            let dataList = yield this.embeddedHelper(responseObject);
            return Promise.resolve({ response: responseObject.response, body: dataList });
        });
    }
    /**
     * Helper function.
     * Update an existing `Webhook`.
     * @summary Update a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     * @param updateWebhookRequest
     */
    updateHelper(webhookId, updateWebhookRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/webhooks/{webhook_id}'
                .replace('{' + 'webhook_id' + '}', encodeURIComponent(String(webhookId)));
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
            // verify required parameter 'webhookId' is not null or undefined
            if (webhookId === null || webhookId === undefined) {
                throw new Error('Required parameter webhookId was null or undefined when calling updateWebhook.');
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
            if (updateWebhookRequest != undefined && updateWebhookRequest != null && updateWebhookRequest.hasOwnProperty('file')) {
                localVarRequestOptions.formData = updateWebhookRequest;
            }
            else {
                localVarRequestOptions.body = models_1.ObjectSerializer.serialize(updateWebhookRequest, "UpdateWebhookRequest");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Webhook");
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
     * Update an existing `Webhook`.
     * @summary Update a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     * @param updateWebhookRequest
     */
    update(webhookId, updateWebhookRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(webhookId, updateWebhookRequest, options);
            return responseObject.body;
        });
    }
    /**
     * Update an existing `Webhook`.
     * @summary Update a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     * @param updateWebhookRequest
     */
    updateHttp(webhookId, updateWebhookRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObject = yield this.updateHelper(webhookId, updateWebhookRequest, options);
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
exports.WebhooksApi = WebhooksApi;
