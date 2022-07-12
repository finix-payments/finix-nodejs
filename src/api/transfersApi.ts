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
import { CreateReversalRequest } from '../model/createReversalRequest';
import { CreateTransferRequest } from '../model/createTransferRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error402PaymentRequired } from '../model/error402PaymentRequired';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { Error422InvalidFieldList } from '../model/error422InvalidFieldList';
import { ErrorGeneric } from '../model/errorGeneric';
import { Transfer } from '../model/transfer';
import { TransfersList } from '../model/transfersList';
import { UpdateTransferRequest } from '../model/updateTransferRequest';
import { ListTransferReversalsQueryParams } from '../model/listTransferReversalsQueryParams';
import { ListTransfersQueryParams } from '../model/listTransfersQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, SuperSet } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TransfersApiApiKeys {
}

export class TransfersApi {
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

    public setApiKey(key: TransfersApiApiKeys, value: string) {
        (this.authentications as any)[TransfersApiApiKeys[key]].apiKey = value;
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
     * Create a `Transfer`.   > By default, Finix implements a 3 (business) day delay when debiting bank accounts (i.e. eChecks).
     * @summary Create a Transfer
     * @param createTransferRequest 
     */

    private async createHelper(createTransferRequest?: CreateTransferRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Transfer;  }> {
        const localVarPath = this.basePath + '/transfers';
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
            body: ObjectSerializer.serialize(createTransferRequest, "CreateTransferRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Transfer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Transfer");
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
     * Create a `Transfer`.   > By default, Finix implements a 3 (business) day delay when debiting bank accounts (i.e. eChecks).
     * @summary Create a Transfer
     * @param createTransferRequest 
     */

    public async create(createTransferRequest?: CreateTransferRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) : 
        Promise<any> {
        const responseObject = await this.createHelper(createTransferRequest,  options);

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
     * Reverse a transfer with a `type` of **DEBIT**. This reversal creates a new `Transfer` resource with a `type` of **REVERSAL**.   The refund can get delivered in most cases without the physical card. The card only needs to be swiped (to receive the refund) when:  - The payment type is **DEBIT**, and the transaction is no longer in the batch. - The payment type is **CREDIT**, and the transaction is no longer in the batch and is older than 45 days.
     * @summary Refund or Reverse a Transfer
     * @param transferId ID of &#x60;transfer&#x60; object
     * @param createReversalRequest 
     */

    private async createTransferReversalHelper(transferId: string, createReversalRequest?: CreateReversalRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Transfer;  }> {
        const localVarPath = this.basePath + '/transfers/{transfer_id}/reversals'
            .replace('{' + 'transfer_id' + '}', encodeURIComponent(String(transferId)));
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

        // verify required parameter 'transferId' is not null or undefined
        if (transferId === null || transferId === undefined) {
            throw new Error('Required parameter transferId was null or undefined when calling createTransferReversal.');
        }



        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createReversalRequest, "CreateReversalRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Transfer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Transfer");
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
     * Reverse a transfer with a `type` of **DEBIT**. This reversal creates a new `Transfer` resource with a `type` of **REVERSAL**.   The refund can get delivered in most cases without the physical card. The card only needs to be swiped (to receive the refund) when:  - The payment type is **DEBIT**, and the transaction is no longer in the batch. - The payment type is **CREDIT**, and the transaction is no longer in the batch and is older than 45 days.
     * @summary Refund or Reverse a Transfer
     * @param transferId ID of &#x60;transfer&#x60; object
     * @param createReversalRequest 
     */

    public async createTransferReversal(transferId: string, createReversalRequest?: CreateReversalRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) : 
        Promise<any> {
        const responseObject = await this.createTransferReversalHelper(transferId, createReversalRequest,  options);

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
     * Retrieve a `transfer`.
     * @summary Get a Transfer
     * @param transferId ID of &#x60;transfer&#x60; object.
     */

    private async getHelper(transferId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Transfer;  }> {
        const localVarPath = this.basePath + '/transfers/{transfer_id}'
            .replace('{' + 'transfer_id' + '}', encodeURIComponent(String(transferId)));
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

        // verify required parameter 'transferId' is not null or undefined
        if (transferId === null || transferId === undefined) {
            throw new Error('Required parameter transferId was null or undefined when calling getTransfer.');
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
            return new Promise<{ response: http.IncomingMessage; body: Transfer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Transfer");
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
     * Retrieve a `transfer`.
     * @summary Get a Transfer
     * @param transferId ID of &#x60;transfer&#x60; object.
     */

    public async get(transferId: string, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) : 
        Promise<any> {
        const responseObject = await this.getHelper(transferId,  options);

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
     * Retrieve a list of reversals for a `Transfer`.
     * @summary List Reversals on a Transfer

    * @param transferId ID of &#x60;transfer&#x60; object
    * 
    */
    private async listTransfersReversalsHelper (transferId: string, listTransferReversalsQueryParams?:ListTransferReversalsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TransfersList;  }> {
        const localVarPath = this.basePath + '/transfers/{transfer_id}/reversals'
            .replace('{' + 'transfer_id' + '}', encodeURIComponent(String(transferId)));
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

        // verify required parameter 'transferId' is not null or undefined
        if (transferId === null || transferId === undefined) {
            throw new Error('Required parameter transferId was null or undefined when calling listTransferReversals.');
        }

        if (listTransferReversalsQueryParams != undefined){ 
            if (listTransferReversalsQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listTransferReversalsQueryParams.limit, "number");
            }
            if (listTransferReversalsQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listTransferReversalsQueryParams.afterCursor, "string");
            }
            if (listTransferReversalsQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listTransferReversalsQueryParams.beforeCursor, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: TransfersList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "TransfersList");
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
     * Retrieve a list of reversals for a `Transfer`.
     * @summary List Reversals on a Transfer

    * @param transferId ID of &#x60;transfer&#x60; object
    * 
    */
    public async listTransfersReversals (transferId: string, listTransferReversalsQueryParams?:ListTransferReversalsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) :
        Promise<any> {
        const responseObject = await this.listTransfersReversalsHelper(transferId, listTransferReversalsQueryParams, options);

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
     * Retrieve a list of `Transfers`.
     * @summary List Transfers

    */
    private async listHelper (listTransfersQueryParams?:ListTransfersQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TransfersList;  }> {
        const localVarPath = this.basePath + '/transfers';
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

        if (listTransfersQueryParams != undefined){ 
            if (listTransfersQueryParams.sort !== undefined) {
                localVarQueryParameters['sort'] = ObjectSerializer.serialize(listTransfersQueryParams.sort, "string");
            }
            if (listTransfersQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listTransfersQueryParams.afterCursor, "string");
            }
            if (listTransfersQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listTransfersQueryParams.limit, "number");
            }
            if (listTransfersQueryParams.amount !== undefined) {
                localVarQueryParameters['amount'] = ObjectSerializer.serialize(listTransfersQueryParams.amount, "number");
            }
            if (listTransfersQueryParams.amountGte !== undefined) {
                localVarQueryParameters['amount.gte'] = ObjectSerializer.serialize(listTransfersQueryParams.amountGte, "number");
            }
            if (listTransfersQueryParams.amountGt !== undefined) {
                localVarQueryParameters['amount.gt'] = ObjectSerializer.serialize(listTransfersQueryParams.amountGt, "number");
            }
            if (listTransfersQueryParams.amountLte !== undefined) {
                localVarQueryParameters['amount.lte'] = ObjectSerializer.serialize(listTransfersQueryParams.amountLte, "number");
            }
            if (listTransfersQueryParams.amountLt !== undefined) {
                localVarQueryParameters['amount.lt'] = ObjectSerializer.serialize(listTransfersQueryParams.amountLt, "number");
            }
            if (listTransfersQueryParams.createdAtGte !== undefined) {
                localVarQueryParameters['created_at.gte'] = ObjectSerializer.serialize(listTransfersQueryParams.createdAtGte, "string");
            }
            if (listTransfersQueryParams.createdAtLte !== undefined) {
                localVarQueryParameters['created_at.lte'] = ObjectSerializer.serialize(listTransfersQueryParams.createdAtLte, "string");
            }
            if (listTransfersQueryParams.idempotencyId !== undefined) {
                localVarQueryParameters['idempotency_id'] = ObjectSerializer.serialize(listTransfersQueryParams.idempotencyId, "string");
            }
            if (listTransfersQueryParams.id !== undefined) {
                localVarQueryParameters['id'] = ObjectSerializer.serialize(listTransfersQueryParams.id, "string");
            }
            if (listTransfersQueryParams.state !== undefined) {
                localVarQueryParameters['state'] = ObjectSerializer.serialize(listTransfersQueryParams.state, "'ALL' | 'SUCCEEDED' | 'FAILED' | 'PENDING' | 'CANCELED'");
            }
            if (listTransfersQueryParams.readyToSettleAtGte !== undefined) {
                localVarQueryParameters['ready_to_settle_at.gte'] = ObjectSerializer.serialize(listTransfersQueryParams.readyToSettleAtGte, "string");
            }
            if (listTransfersQueryParams.readyToSettleAtLte !== undefined) {
                localVarQueryParameters['ready_to_settle_at.lte'] = ObjectSerializer.serialize(listTransfersQueryParams.readyToSettleAtLte, "string");
            }
            if (listTransfersQueryParams.statementDescriptor !== undefined) {
                localVarQueryParameters['statement_descriptor'] = ObjectSerializer.serialize(listTransfersQueryParams.statementDescriptor, "number");
            }
            if (listTransfersQueryParams.traceId !== undefined) {
                localVarQueryParameters['trace_id'] = ObjectSerializer.serialize(listTransfersQueryParams.traceId, "string");
            }
            if (listTransfersQueryParams.updatedAtGte !== undefined) {
                localVarQueryParameters['updated_at.gte'] = ObjectSerializer.serialize(listTransfersQueryParams.updatedAtGte, "string");
            }
            if (listTransfersQueryParams.updatedAtLte !== undefined) {
                localVarQueryParameters['updated_at.lte'] = ObjectSerializer.serialize(listTransfersQueryParams.updatedAtLte, "string");
            }
            if (listTransfersQueryParams.instrumentBin !== undefined) {
                localVarQueryParameters['instrument_bin'] = ObjectSerializer.serialize(listTransfersQueryParams.instrumentBin, "string");
            }
            if (listTransfersQueryParams.instrumentAccountLast4 !== undefined) {
                localVarQueryParameters['instrument_account_last4'] = ObjectSerializer.serialize(listTransfersQueryParams.instrumentAccountLast4, "string");
            }
            if (listTransfersQueryParams.instrumentBrandType !== undefined) {
                localVarQueryParameters['instrument_brand_type'] = ObjectSerializer.serialize(listTransfersQueryParams.instrumentBrandType, "string");
            }
            if (listTransfersQueryParams.merchantIdentityId !== undefined) {
                localVarQueryParameters['merchant_identity_id'] = ObjectSerializer.serialize(listTransfersQueryParams.merchantIdentityId, "string");
            }
            if (listTransfersQueryParams.merchantIdentityName !== undefined) {
                localVarQueryParameters['merchant_identity_name'] = ObjectSerializer.serialize(listTransfersQueryParams.merchantIdentityName, "string");
            }
            if (listTransfersQueryParams.instrumentName !== undefined) {
                localVarQueryParameters['instrument_name'] = ObjectSerializer.serialize(listTransfersQueryParams.instrumentName, "string");
            }
            if (listTransfersQueryParams.instrumentType !== undefined) {
                localVarQueryParameters['instrument_type'] = ObjectSerializer.serialize(listTransfersQueryParams.instrumentType, "string");
            }
            if (listTransfersQueryParams.merchantId !== undefined) {
                localVarQueryParameters['merchant_id'] = ObjectSerializer.serialize(listTransfersQueryParams.merchantId, "string");
            }
            if (listTransfersQueryParams.merchantMid !== undefined) {
                localVarQueryParameters['merchant_mid'] = ObjectSerializer.serialize(listTransfersQueryParams.merchantMid, "string");
            }
            if (listTransfersQueryParams.instrumentCardLast4 !== undefined) {
                localVarQueryParameters['instrument_card_last4'] = ObjectSerializer.serialize(listTransfersQueryParams.instrumentCardLast4, "string");
            }
            if (listTransfersQueryParams.merchantProcessorId !== undefined) {
                localVarQueryParameters['merchant_processor_id'] = ObjectSerializer.serialize(listTransfersQueryParams.merchantProcessorId, "string");
            }
            if (listTransfersQueryParams.type !== undefined) {
                localVarQueryParameters['type'] = ObjectSerializer.serialize(listTransfersQueryParams.type, "'ALL' | 'DEBITS' | 'CREDITS' | 'REVERSAL' | 'SETTLEMENT'");
            }
            if (listTransfersQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listTransfersQueryParams.beforeCursor, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: TransfersList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "TransfersList");
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
     * Retrieve a list of `Transfers`.
     * @summary List Transfers

    */
    public async list (listTransfersQueryParams?:ListTransfersQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) :
        Promise<any> {
        const responseObject = await this.listHelper(listTransfersQueryParams, options);

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
     * Update a `Transfer`.
     * @summary Update a Transfer
     * @param transferId ID of &#x60;transfer&#x60; object.
     * @param updateTransferRequest 
     */

    private async updateHelper(transferId: string, updateTransferRequest?: UpdateTransferRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Transfer;  }> {
        const localVarPath = this.basePath + '/transfers/{transfer_id}'
            .replace('{' + 'transfer_id' + '}', encodeURIComponent(String(transferId)));
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

        // verify required parameter 'transferId' is not null or undefined
        if (transferId === null || transferId === undefined) {
            throw new Error('Required parameter transferId was null or undefined when calling updateTransfer.');
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
            body: ObjectSerializer.serialize(updateTransferRequest, "UpdateTransferRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Transfer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Transfer");
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
     * Update a `Transfer`.
     * @summary Update a Transfer
     * @param transferId ID of &#x60;transfer&#x60; object.
     * @param updateTransferRequest 
     */

    public async update(transferId: string, updateTransferRequest?: UpdateTransferRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData: Boolean = false) : 
        Promise<any> {
        const responseObject = await this.updateHelper(transferId, updateTransferRequest,  options);

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
