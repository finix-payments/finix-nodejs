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


import localVarRequest from 'request';
import * as http from 'http';

/* tslint:disable:no-unused-locals */
import { CreateFeeRequest } from '../model/createFeeRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { Fee } from '../model/fee';
import { FeesList } from '../model/feesList';
import { UpdateFeeRequest } from '../model/updateFeeRequest';
import { ListFeesQueryParams } from '../model/listFeesQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, SuperSet } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum FeesApiApiKeys {
}

export class FeesApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'BasicAuth': new HttpBasicAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: FeesApiApiKeys, value: string) {
        (this.authentications as any)[FeesApiApiKeys[key]].apiKey = value;
    }

    set username(username: string) {
        this.authentications.BasicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.BasicAuth.password = password;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Helper function. 
     * Create a custom (i.e. one time) `fee`.
     * @summary Create a One-Time Fee
     * @param createFeeRequest 
     */

    private async createHelper(createFeeRequest?: CreateFeeRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fee;  }> {
        const localVarPath = this.basePath + '/fees';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};



        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createFeeRequest, "CreateFeeRequest")
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
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Fee;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Fee");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * Create a custom (i.e. one time) `fee`.
     * @summary Create a One-Time Fee
     * @param createFeeRequest 
     */

    public async create(createFeeRequest?: CreateFeeRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) : 
        Promise< SuperSet<any> |Fee| {response: http.IncomingMessage; body: Fee; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.createHelper(createFeeRequest,  options);

        if (responseObject.body.hasOwnProperty('embedded')) {
            let dataList = await this.embeddedHelper(responseObject);
            if (httpData) {
                return Promise.resolve({response: responseObject.response, body: dataList});
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
     * Retrieve the details of a `Fee`.
     * @summary Get Fee
     * @param feeId ID of fee to use
     */

    private async getHelper(feeId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fee;  }> {
        const localVarPath = this.basePath + '/fees/{fee_id}'
            .replace('{' + 'fee_id' + '}', encodeURIComponent(String(feeId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'feeId' is not null or undefined
        if (feeId === null || feeId === undefined) {
            throw new Error('Required parameter feeId was null or undefined when calling getFee.');
        }



        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
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
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Fee;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Fee");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * Retrieve the details of a `Fee`.
     * @summary Get Fee
     * @param feeId ID of fee to use
     */

    public async get(feeId: string, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) : 
        Promise< SuperSet<any> |Fee| {response: http.IncomingMessage; body: Fee; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.getHelper(feeId,  options);

        if (responseObject.body.hasOwnProperty('embedded')) {
            let dataList = await this.embeddedHelper(responseObject);
            if (httpData) {
                return Promise.resolve({response: responseObject.response, body: dataList});
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
     * Return a collection of `fees`.
     * @summary List Fees

    */
    private async listHelper (listFeesQueryParams?:ListFeesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FeesList;  }> {
        const localVarPath = this.basePath + '/fees';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (listFeesQueryParams != undefined){ 
            if (listFeesQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listFeesQueryParams.limit, "number");
            }
            if (listFeesQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listFeesQueryParams.afterCursor, "string");
            }
            if (listFeesQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listFeesQueryParams.beforeCursor, "string");
            }

        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
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
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: FeesList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "FeesList");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * Return a collection of `fees`.
     * @summary List Fees

    */
    public async list (listFeesQueryParams?:ListFeesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) :
        Promise< SuperSet<any> |FeesList| {response: http.IncomingMessage; body: FeesList; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.listHelper(listFeesQueryParams, options);

        if (responseObject.body.hasOwnProperty('embedded')) {
            let dataList = await this.embeddedHelper(responseObject);
            if (httpData) {
                return Promise.resolve({response: responseObject.response, body: dataList});
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
     * Update the details of a `Fee`.
     * @summary Update Fee
     * @param feeId ID of fee to use
     * @param updateFeeRequest 
     */

    private async updateHelper(feeId: string, updateFeeRequest?: UpdateFeeRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Fee;  }> {
        const localVarPath = this.basePath + '/fees/{fee_id}'
            .replace('{' + 'fee_id' + '}', encodeURIComponent(String(feeId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'feeId' is not null or undefined
        if (feeId === null || feeId === undefined) {
            throw new Error('Required parameter feeId was null or undefined when calling updateFee.');
        }



        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateFeeRequest, "UpdateFeeRequest")
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
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Fee;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Fee");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * Update the details of a `Fee`.
     * @summary Update Fee
     * @param feeId ID of fee to use
     * @param updateFeeRequest 
     */

    public async update(feeId: string, updateFeeRequest?: UpdateFeeRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) : 
        Promise< SuperSet<any> |Fee| {response: http.IncomingMessage; body: Fee; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.updateHelper(feeId, updateFeeRequest,  options);

        if (responseObject.body.hasOwnProperty('embedded')) {
            let dataList = await this.embeddedHelper(responseObject);
            if (httpData) {
                return Promise.resolve({response: responseObject.response, body: dataList});
            }
            return dataList;
        }
        if (httpData) {
            return responseObject;
        }
        return responseObject.body;
    }


    private async embeddedHelper(responseObject: any){
        const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
        let dataList = <SuperSet<any>> responseObject.body.embedded[embeddedName];
        dataList.page = responseObject.body.page;
        dataList.links = responseObject.body.links;
        return dataList;
    }
}
