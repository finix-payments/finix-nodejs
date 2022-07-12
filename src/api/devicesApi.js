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
exports.DevicesApi = exports.DevicesApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var DevicesApiApiKeys;
(function (DevicesApiApiKeys) {
})(DevicesApiApiKeys = exports.DevicesApiApiKeys || (exports.DevicesApiApiKeys = {}));
class DevicesApi {
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
        this.authentications[DevicesApiApiKeys[key]].apiKey = value;
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
     * Create a `Device` under a `Merchant`.
     * @summary Create a Device
     * @param merchantId ID of the &#x60;Merchant&#x60; object.
     * @param createDevice
     */
    async createHelper(merchantId, createDevice, options = { headers: {} }) {
        const localVarPath = this.basePath + '/merchants/{merchant_id}/devices'
            .replace('{' + 'merchant_id' + '}', encodeURIComponent(String(merchantId)));
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
        // verify required parameter 'merchantId' is not null or undefined
        if (merchantId === null || merchantId === undefined) {
            throw new Error('Required parameter merchantId was null or undefined when calling createMerchantDevice.');
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
            body: models_1.ObjectSerializer.serialize(createDevice, "CreateDevice")
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
                            body = models_1.ObjectSerializer.deserialize(body, "Device");
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
     * Create a `Device` under a `Merchant`.
     * @summary Create a Device
     * @param merchantId ID of the &#x60;Merchant&#x60; object.
     * @param createDevice
     */
    async create(merchantId, createDevice, options = { headers: {} }, httpData = false) {
        const responseObject = await this.createHelper(merchantId, createDevice, options);
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
     * Retrieve the details of an existing `Device`.  To check the connectivity of the device, include `?include_connection\\=true \\` at the end of the request endpoint.
     * @summary Get Device
     * @param deviceId ID of the &#x60;Device&#x60;.
     */
    async getHelper(deviceId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/devices/{device_id}'
            .replace('{' + 'device_id' + '}', encodeURIComponent(String(deviceId)));
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
        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling getDevice.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "Device");
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
     * Retrieve the details of an existing `Device`.  To check the connectivity of the device, include `?include_connection\\=true \\` at the end of the request endpoint.
     * @summary Get Device
     * @param deviceId ID of the &#x60;Device&#x60;.
     */
    async get(deviceId, options = { headers: {} }, httpData = false) {
        const responseObject = await this.getHelper(deviceId, options);
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
     * Update a `Device` to activate or deactivate it.
     * @summary Update a Device
     * @param deviceId ID of the &#x60;Device&#x60;.
     * @param body
     */
    async updateHelper(deviceId, body, options = { headers: {} }) {
        const localVarPath = this.basePath + '/devices/{device_id}'
            .replace('{' + 'device_id' + '}', encodeURIComponent(String(deviceId)));
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
        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling updateDevice.');
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
            body: models_1.ObjectSerializer.serialize(body, "object")
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
                            body = models_1.ObjectSerializer.deserialize(body, "Device");
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
     * Update a `Device` to activate or deactivate it.
     * @summary Update a Device
     * @param deviceId ID of the &#x60;Device&#x60;.
     * @param body
     */
    async update(deviceId, body, options = { headers: {} }, httpData = false) {
        const responseObject = await this.updateHelper(deviceId, body, options);
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
exports.DevicesApi = DevicesApi;
//# sourceMappingURL=devicesApi.js.map