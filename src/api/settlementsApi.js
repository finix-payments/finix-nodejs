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
exports.SettlementsApi = exports.SettlementsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://finix.sandbox-payments-api.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var SettlementsApiApiKeys;
(function (SettlementsApiApiKeys) {
})(SettlementsApiApiKeys = exports.SettlementsApiApiKeys || (exports.SettlementsApiApiKeys = {}));
class SettlementsApi {
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
        this.authentications[SettlementsApiApiKeys[key]].apiKey = value;
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
     * Create a batch `Settlement`. A `Settlement` is a collection of **SUCCEEDED** `Transfers` that are ready to get paid out to a `Merchant`.
     * @summary Create a Batch Settlement
     * @param createSettlementRequest
     */
    async createHelper(createSettlementRequest, options = { headers: {} }) {
        const localVarPath = this.basePath + '/settlements';
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
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(createSettlementRequest, "CreateSettlementRequest")
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
                            body = models_1.ObjectSerializer.deserialize(body, "Settlement");
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
     * Create a batch `Settlement`. A `Settlement` is a collection of **SUCCEEDED** `Transfers` that are ready to get paid out to a `Merchant`.
     * @summary Create a Batch Settlement
     * @param createSettlementRequest
     */
    async create(createSettlementRequest, options = { headers: {} }, httpData = false) {
        const responseObject = await this.createHelper(createSettlementRequest, options);
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
     * Retreive the details of a `Settlement`.
     * @summary Get a Settlement
     * @param settlementId ID of &#x60;Settlement&#x60; object.
     */
    async getHelper(settlementId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/settlements/{settlement_id}'
            .replace('{' + 'settlement_id' + '}', encodeURIComponent(String(settlementId)));
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
        // verify required parameter 'settlementId' is not null or undefined
        if (settlementId === null || settlementId === undefined) {
            throw new Error('Required parameter settlementId was null or undefined when calling getSettlement.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "Settlement");
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
     * Retreive the details of a `Settlement`.
     * @summary Get a Settlement
     * @param settlementId ID of &#x60;Settlement&#x60; object.
     */
    async get(settlementId, options = { headers: {} }, httpData = false) {
        const responseObject = await this.getHelper(settlementId, options);
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
     * Retrieve the `Transfers` in a `Settlement` that have `type` **CREDIT**.
     * @summary List Settlement Funding Transfers

    * @param settlementId ID of &#x60;Settlement&#x60; object.
    *
    */
    async listFundingTransfersHelper(settlementId, listSettlementFundingTransfersQueryParams, options = { headers: {} }) {
        const localVarPath = this.basePath + '/settlements/{settlement_id}/funding_transfers'
            .replace('{' + 'settlement_id' + '}', encodeURIComponent(String(settlementId)));
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
        // verify required parameter 'settlementId' is not null or undefined
        if (settlementId === null || settlementId === undefined) {
            throw new Error('Required parameter settlementId was null or undefined when calling listSettlementFundingTransfers.');
        }
        if (listSettlementFundingTransfersQueryParams != undefined) {
            if (listSettlementFundingTransfersQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(listSettlementFundingTransfersQueryParams.limit, "number");
            }
            if (listSettlementFundingTransfersQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = models_1.ObjectSerializer.serialize(listSettlementFundingTransfersQueryParams.afterCursor, "string");
            }
            if (listSettlementFundingTransfersQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = models_1.ObjectSerializer.serialize(listSettlementFundingTransfersQueryParams.beforeCursor, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "TransfersList");
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
     * Retrieve the `Transfers` in a `Settlement` that have `type` **CREDIT**.
     * @summary List Settlement Funding Transfers

    * @param settlementId ID of &#x60;Settlement&#x60; object.
    *
    */
    async listFundingTransfers(settlementId, listSettlementFundingTransfersQueryParams, options = { headers: {} }, httpData = false) {
        const responseObject = await this.listFundingTransfersHelper(settlementId, listSettlementFundingTransfersQueryParams, options);
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
     * Retrieve the `Transfers` in a `Settlement` that have `type` **DEBIT** or **REFUND**.
     * @summary List Settlement Transfers

    * @param settlementId ID of &#x60;Settlement&#x60; object.
    *
    */
    async listTransfersBySettlementIdHelper(settlementId, listSettlementTransfersQueryParams, options = { headers: {} }) {
        const localVarPath = this.basePath + '/settlements/{settlement_id}/transfers'
            .replace('{' + 'settlement_id' + '}', encodeURIComponent(String(settlementId)));
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
        // verify required parameter 'settlementId' is not null or undefined
        if (settlementId === null || settlementId === undefined) {
            throw new Error('Required parameter settlementId was null or undefined when calling listSettlementTransfers.');
        }
        if (listSettlementTransfersQueryParams != undefined) {
            if (listSettlementTransfersQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(listSettlementTransfersQueryParams.limit, "number");
            }
            if (listSettlementTransfersQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = models_1.ObjectSerializer.serialize(listSettlementTransfersQueryParams.afterCursor, "string");
            }
            if (listSettlementTransfersQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = models_1.ObjectSerializer.serialize(listSettlementTransfersQueryParams.beforeCursor, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "TransfersList");
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
     * Retrieve the `Transfers` in a `Settlement` that have `type` **DEBIT** or **REFUND**.
     * @summary List Settlement Transfers

    * @param settlementId ID of &#x60;Settlement&#x60; object.
    *
    */
    async listTransfersBySettlementId(settlementId, listSettlementTransfersQueryParams, options = { headers: {} }, httpData = false) {
        const responseObject = await this.listTransfersBySettlementIdHelper(settlementId, listSettlementTransfersQueryParams, options);
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
     * Retrieve a list of `Settlements`.
     * @summary List Settlements

    */
    async listHelper(listSettlementsQueryParams, options = { headers: {} }) {
        const localVarPath = this.basePath + '/settlements';
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
        if (listSettlementsQueryParams != undefined) {
            if (listSettlementsQueryParams.createdAtGte !== undefined) {
                localVarQueryParameters['created_at.gte'] = models_1.ObjectSerializer.serialize(listSettlementsQueryParams.createdAtGte, "string");
            }
            if (listSettlementsQueryParams.createdAtLte !== undefined) {
                localVarQueryParameters['created_at.lte'] = models_1.ObjectSerializer.serialize(listSettlementsQueryParams.createdAtLte, "string");
            }
            if (listSettlementsQueryParams.updatedAtGte !== undefined) {
                localVarQueryParameters['updated_at.gte'] = models_1.ObjectSerializer.serialize(listSettlementsQueryParams.updatedAtGte, "string");
            }
            if (listSettlementsQueryParams.updatedAtLte !== undefined) {
                localVarQueryParameters['updated_at.lte'] = models_1.ObjectSerializer.serialize(listSettlementsQueryParams.updatedAtLte, "string");
            }
            if (listSettlementsQueryParams.id !== undefined) {
                localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(listSettlementsQueryParams.id, "string");
            }
            if (listSettlementsQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(listSettlementsQueryParams.limit, "number");
            }
            if (listSettlementsQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = models_1.ObjectSerializer.serialize(listSettlementsQueryParams.afterCursor, "string");
            }
            if (listSettlementsQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = models_1.ObjectSerializer.serialize(listSettlementsQueryParams.beforeCursor, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "SettlementsList");
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
     * Retrieve a list of `Settlements`.
     * @summary List Settlements

    */
    async list(listSettlementsQueryParams, options = { headers: {} }, httpData = false) {
        const responseObject = await this.listHelper(listSettlementsQueryParams, options);
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
     * Remove a `Transfer` from a `Settlement`.  As long as the `Settlement` hasn\'t been funded, you can remove the `Transfer` or an array of `Transfers`, along with its corresponding `fee` from a batch `Settlement`.   > Per the JSON API for deleting a resource, our API doesn\'t have a response body when removing a `Transfer` from a `Settlement`.
     * @summary Delete Settlement Transfers
     * @param settlementId ID of &#x60;Settlement&#x60; object.
     * @param removeSettlementTransfer
     */
    async removeTransfersFromSettlementHelper(settlementId, removeSettlementTransfer, options = { headers: {} }) {
        const localVarPath = this.basePath + '/settlements/{settlement_id}/transfers'
            .replace('{' + 'settlement_id' + '}', encodeURIComponent(String(settlementId)));
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
        // verify required parameter 'settlementId' is not null or undefined
        if (settlementId === null || settlementId === undefined) {
            throw new Error('Required parameter settlementId was null or undefined when calling removeSettlementTransfers.');
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
            body: models_1.ObjectSerializer.serialize(removeSettlementTransfer, "RemoveSettlementTransfer")
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
     * Remove a `Transfer` from a `Settlement`.  As long as the `Settlement` hasn\'t been funded, you can remove the `Transfer` or an array of `Transfers`, along with its corresponding `fee` from a batch `Settlement`.   > Per the JSON API for deleting a resource, our API doesn\'t have a response body when removing a `Transfer` from a `Settlement`.
     * @summary Delete Settlement Transfers
     * @param settlementId ID of &#x60;Settlement&#x60; object.
     * @param removeSettlementTransfer
     */
    async removeTransfersFromSettlement(settlementId, removeSettlementTransfer, options = { headers: {} }, httpData = false) {
        const responseObject = await this.removeTransfersFromSettlementHelper(settlementId, removeSettlementTransfer, options);
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
     * Update a `Settlement`.
     * @summary Update a Settlement
     * @param settlementId ID of &#x60;Settlement&#x60; object.
     * @param updateSettlementRequest
     */
    async updateHelper(settlementId, updateSettlementRequest, options = { headers: {} }) {
        const localVarPath = this.basePath + '/settlements/{settlement_id}'
            .replace('{' + 'settlement_id' + '}', encodeURIComponent(String(settlementId)));
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
        // verify required parameter 'settlementId' is not null or undefined
        if (settlementId === null || settlementId === undefined) {
            throw new Error('Required parameter settlementId was null or undefined when calling updateSettlement.');
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
            body: models_1.ObjectSerializer.serialize(updateSettlementRequest, "UpdateSettlementRequest")
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
                            body = models_1.ObjectSerializer.deserialize(body, "Settlement");
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
     * Update a `Settlement`.
     * @summary Update a Settlement
     * @param settlementId ID of &#x60;Settlement&#x60; object.
     * @param updateSettlementRequest
     */
    async update(settlementId, updateSettlementRequest, options = { headers: {} }, httpData = false) {
        const responseObject = await this.updateHelper(settlementId, updateSettlementRequest, options);
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
exports.SettlementsApi = SettlementsApi;
//# sourceMappingURL=settlementsApi.js.map