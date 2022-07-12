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
import http from 'http';

/* tslint:disable:no-unused-locals */
import { BalanceTransfer } from '../model/balanceTransfer';
import { BalanceTransferList } from '../model/balanceTransferList';
import { CreateBalanceTransferRequest } from '../model/createBalanceTransferRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { ErrorGeneric } from '../model/errorGeneric';
import { ListBalanceTransfersQueryParams } from '../model/listBalanceTransfersQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, SuperSet } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum BalanceTransfersApiApiKeys {
}

export class BalanceTransfersApi {
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

    public setApiKey(key: BalanceTransfersApiApiKeys, value: string) {
        (this.authentications as any)[BalanceTransfersApiApiKeys[key]].apiKey = value;
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
     * Create a `balance_transfer`.
     * @summary Create a Balance Transfer
     * @param createBalanceTransferRequest 
     */

    private async createBalanceTransferHelper(createBalanceTransferRequest?: CreateBalanceTransferRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BalanceTransfer;  }> {
        const localVarPath = this.basePath + '/balance_transfers';
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
            body: ObjectSerializer.serialize(createBalanceTransferRequest, "CreateBalanceTransferRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: BalanceTransfer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BalanceTransfer");
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
     * Create a `balance_transfer`.
     * @summary Create a Balance Transfer
     * @param createBalanceTransferRequest 
     */

    public async createBalanceTransfer(createBalanceTransferRequest?: CreateBalanceTransferRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<BalanceTransfer| {response: http.IncomingMessage; body: BalanceTransfer; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.createBalanceTransferHelper(createBalanceTransferRequest,  options);

        if (responseObject.body.hasOwnProperty('embedded')) {
            const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
            let dataList = <SuperSet<any>> responseObject.body.embedded[embeddedName];
            dataList.page = responseObject.body.page;
            dataList.links = responseObject.body.links;

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
     * Retrieve the details of a `balance_transfer`.
     * @summary Get a Balance Transfer
     * @param balanceTransfersId ID of the &#x60;balance_transfer&#x60; resource.
     */

    private async getBalanceTransfersHelper(balanceTransfersId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BalanceTransfer;  }> {
        const localVarPath = this.basePath + '/balance_transfers/{balance_transfers_id}'
            .replace('{' + 'balance_transfers_id' + '}', encodeURIComponent(String(balanceTransfersId)));
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

        // verify required parameter 'balanceTransfersId' is not null or undefined
        if (balanceTransfersId === null || balanceTransfersId === undefined) {
            throw new Error('Required parameter balanceTransfersId was null or undefined when calling getBalanceTransfers.');
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
            return new Promise<{ response: http.IncomingMessage; body: BalanceTransfer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BalanceTransfer");
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
     * Retrieve the details of a `balance_transfer`.
     * @summary Get a Balance Transfer
     * @param balanceTransfersId ID of the &#x60;balance_transfer&#x60; resource.
     */

    public async getBalanceTransfers(balanceTransfersId: string, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<BalanceTransfer| {response: http.IncomingMessage; body: BalanceTransfer; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.getBalanceTransfersHelper(balanceTransfersId,  options);

        if (responseObject.body.hasOwnProperty('embedded')) {
            const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
            let dataList = <SuperSet<any>> responseObject.body.embedded[embeddedName];
            dataList.page = responseObject.body.page;
            dataList.links = responseObject.body.links;

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
     * Retrieve a list of `balance_transfers`.
     * @summary List Balance Transfers

    */
    private async listBalanceTransfersHelper (listBalanceTransfersQueryParams?:ListBalanceTransfersQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BalanceTransferList;  }> {
        const localVarPath = this.basePath + '/balance_transfers';
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

        if (listBalanceTransfersQueryParams != undefined){ 
            if (listBalanceTransfersQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.limit, "number");
            }
            if (listBalanceTransfersQueryParams.offset !== undefined) {
                localVarQueryParameters['offset'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.offset, "number");
            }
            if (listBalanceTransfersQueryParams.pageNumber !== undefined) {
                localVarQueryParameters['pageNumber'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.pageNumber, "number");
            }
            if (listBalanceTransfersQueryParams.pageSize !== undefined) {
                localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.pageSize, "number");
            }
            if (listBalanceTransfersQueryParams.createdAtGte !== undefined) {
                localVarQueryParameters['created_at.gte'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.createdAtGte, "string");
            }
            if (listBalanceTransfersQueryParams.createdAtLte !== undefined) {
                localVarQueryParameters['created_at.lte'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.createdAtLte, "string");
            }
            if (listBalanceTransfersQueryParams.updatedAtGte !== undefined) {
                localVarQueryParameters['updated_at.gte'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.updatedAtGte, "string");
            }
            if (listBalanceTransfersQueryParams.updatedAtLte !== undefined) {
                localVarQueryParameters['updated_at.lte'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.updatedAtLte, "string");
            }
            if (listBalanceTransfersQueryParams.idempotencyId !== undefined) {
                localVarQueryParameters['idempotency_id'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.idempotencyId, "string");
            }
            if (listBalanceTransfersQueryParams.amount !== undefined) {
                localVarQueryParameters['amount'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.amount, "number");
            }
            if (listBalanceTransfersQueryParams.description !== undefined) {
                localVarQueryParameters['description'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.description, "string");
            }
            if (listBalanceTransfersQueryParams.destination !== undefined) {
                localVarQueryParameters['destination'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.destination, "string");
            }
            if (listBalanceTransfersQueryParams.externalReferenceId !== undefined) {
                localVarQueryParameters['external_reference_id'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.externalReferenceId, "string");
            }
            if (listBalanceTransfersQueryParams.referenceId !== undefined) {
                localVarQueryParameters['reference_id'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.referenceId, "string");
            }
            if (listBalanceTransfersQueryParams.source !== undefined) {
                localVarQueryParameters['source'] = ObjectSerializer.serialize(listBalanceTransfersQueryParams.source, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: BalanceTransferList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BalanceTransferList");
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
     * Retrieve a list of `balance_transfers`.
     * @summary List Balance Transfers

    */
    public async listBalanceTransfers (listBalanceTransfersQueryParams?:ListBalanceTransfersQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) :
        Promise<BalanceTransferList| {response: http.IncomingMessage; body: BalanceTransferList; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.listBalanceTransfersHelper(listBalanceTransfersQueryParams, options);

        if (responseObject.body.hasOwnProperty('embedded')) {
            const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
            let dataList = <SuperSet<any>> responseObject.body.embedded[embeddedName];
            dataList.page = responseObject.body.page;
            dataList.links = responseObject.body.links;

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

}
