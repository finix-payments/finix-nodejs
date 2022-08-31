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
import * as fs from 'fs';
/* tslint:disable:no-unused-locals */
import { CreateVerificationRequest } from '../model/createVerificationRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { Error422InvalidFieldList } from '../model/error422InvalidFieldList';
import { ErrorGeneric } from '../model/errorGeneric';
import { Verification } from '../model/verification';
import { VerificationsList } from '../model/verificationsList';
import { ListMerchantVerificationsQueryParams } from '../model/listMerchantVerificationsQueryParams';
import { ListPaymentInstrumentVerificationsQueryParams } from '../model/listPaymentInstrumentVerificationsQueryParams';
import { ListVerificationsQueryParams } from '../model/listVerificationsQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, finixList } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum VerificationsApiApiKeys {
}

export class VerificationsApi {
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

    public setApiKey(key: VerificationsApiApiKeys, value: string) {
        (this.authentications as any)[VerificationsApiApiKeys[key]].apiKey = value;
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
     * Create a `Verification` to verify a merchant\'s `Identity`.  Verifications can also be created directly on the resources you want to verify: - `POST /merchants/{merchant_id}/verifications`  Verify `Payment Instruments` directly on the resource:  - `POST /payment_instruments/{payment_instrument_id}/verifications`
     * @summary Create a Merchant Verification
     * @param createVerificationRequest 
     */

    private async createHelper(createVerificationRequest?: CreateVerificationRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Verification;  }> {
        const localVarPath = this.basePath + '/verifications';
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
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
        localVarHeaderParams['Content-Type'] = "application/hal+json";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (createVerificationRequest && createVerificationRequest.hasOwnProperty('file')){
        //if (createVerificationRequest != undefined && createVerificationRequest != null && createVerificationRequest.hasOwnProperty('file')){
            localVarRequestOptions.formData = createVerificationRequest;
        }
        else{
            localVarRequestOptions.body = ObjectSerializer.serialize(createVerificationRequest, "CreateVerificationRequest");   
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
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Verification;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Verification");
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
     * Create a `Verification` to verify a merchant\'s `Identity`.  Verifications can also be created directly on the resources you want to verify: - `POST /merchants/{merchant_id}/verifications`  Verify `Payment Instruments` directly on the resource:  - `POST /payment_instruments/{payment_instrument_id}/verifications`
     * @summary Create a Merchant Verification
     * @param createVerificationRequest 
     */
    public async create(createVerificationRequest?: CreateVerificationRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<Verification> {
        const responseObject = await this.createHelper(createVerificationRequest,  options);
        return responseObject.body;
    }

    /**
     * Create a `Verification` to verify a merchant\'s `Identity`.  Verifications can also be created directly on the resources you want to verify: - `POST /merchants/{merchant_id}/verifications`  Verify `Payment Instruments` directly on the resource:  - `POST /payment_instruments/{payment_instrument_id}/verifications`
     * @summary Create a Merchant Verification
     * @param createVerificationRequest 
     */
    public async createHttp(createVerificationRequest?: CreateVerificationRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: Verification; }> {
        const responseObject = await this.createHelper(createVerificationRequest,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * Retrieve the details of a `Verification`.
     * @summary Fetch a Verification
     * @param verificationId ID of &#x60;Verification&#x60; object.
     */

    private async getHelper(verificationId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Verification;  }> {
        const localVarPath = this.basePath + '/verifications/{verification_id}'
            .replace('{' + 'verification_id' + '}', encodeURIComponent(String(verificationId)));
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

        // verify required parameter 'verificationId' is not null or undefined
        if (verificationId === null || verificationId === undefined) {
            throw new Error('Required parameter verificationId was null or undefined when calling getVerification.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
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
            return new Promise<{ response: http.IncomingMessage; body: Verification;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Verification");
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
     * Retrieve the details of a `Verification`.
     * @summary Fetch a Verification
     * @param verificationId ID of &#x60;Verification&#x60; object.
     */
    public async get(verificationId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<Verification> {
        const responseObject = await this.getHelper(verificationId,  options);
        return responseObject.body;
    }

    /**
     * Retrieve the details of a `Verification`.
     * @summary Fetch a Verification
     * @param verificationId ID of &#x60;Verification&#x60; object.
     */
    public async getHttp(verificationId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: Verification; }> {
        const responseObject = await this.getHelper(verificationId,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * Get a list of all the `Verifications` for a `Merchant` resource.
     * @summary List Merchant Verifications

    * @param merchantId ID of &#x60;Merchant&#x60; object.
    * 
    */
    private async listByMerchantIdHelper (merchantId: string, listMerchantVerificationsQueryParams?:ListMerchantVerificationsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VerificationsList;  }> {
        const localVarPath = this.basePath + '/merchants/{merchant_id}/verifications'
            .replace('{' + 'merchant_id' + '}', encodeURIComponent(String(merchantId)));
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

        // verify required parameter 'merchantId' is not null or undefined
        if (merchantId === null || merchantId === undefined) {
            throw new Error('Required parameter merchantId was null or undefined when calling listMerchantVerifications.');
        }
        if (listMerchantVerificationsQueryParams != undefined){ 
            if (listMerchantVerificationsQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listMerchantVerificationsQueryParams.limit, "number");
            }
            if (listMerchantVerificationsQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listMerchantVerificationsQueryParams.afterCursor, "string");
            }
            if (listMerchantVerificationsQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listMerchantVerificationsQueryParams.beforeCursor, "string");
            }

        }
        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
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
            return new Promise<{ response: http.IncomingMessage; body: VerificationsList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "VerificationsList");
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
     * Get a list of all the `Verifications` for a `Merchant` resource.
     * @summary List Merchant Verifications
     * @param merchantId ID of &#x60;Merchant&#x60; object.
     *  
     */
    public async listByMerchantId (merchantId: string, listMerchantVerificationsQueryParams?:ListMerchantVerificationsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<finixList<any>> {
        const responseObject = await this.listByMerchantIdHelper(merchantId, listMerchantVerificationsQueryParams, options);
        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        let reachedEnd: Boolean;
        const hasNextCursor: any = responseObject.body?.page?.hasOwnProperty('nextCursor');
        let queryParam: any = hasNextCursor ? { afterCursor: '', limit: 20 } : { offset: '', limit: 20 };

        [queryParam, reachedEnd] = hasNextCursor
        ? this.getCursorQueryParam(responseObject, queryParam) 
        : this.getOffsetQueryParam(responseObject, queryParam);

        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.listByMerchantId(merchantId, queryParam);
        }
        let dataList = new finixList<any>(nextFetch, !reachedEnd);
        dataList = this.embeddedHelper(responseObject, dataList);
        return dataList;
    }

    /**
     * Get a list of all the `Verifications` for a `Merchant` resource.
     * @summary List Merchant Verifications
     * @param merchantId ID of &#x60;Merchant&#x60; object.
     * 
     */
    public async listByMerchantIdHttp (merchantId: string, listMerchantVerificationsQueryParams?:ListMerchantVerificationsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<{response: http.IncomingMessage, body: finixList<any>}> {
        const responseObject = await this.listByMerchantIdHelper(merchantId, listMerchantVerificationsQueryParams, options);
        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        let reachedEnd: Boolean;
        const hasNextCursor: any = responseObject.body?.page?.hasOwnProperty('nextCursor');
        let queryParam: any = hasNextCursor ? { afterCursor: '', limit: 20 } : { offset: '', limit: 20 };

        [queryParam, reachedEnd] = hasNextCursor
        ? this.getCursorQueryParam(responseObject, queryParam) 
        : this.getOffsetQueryParam(responseObject, queryParam);

        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.listByMerchantId(merchantId, queryParam);
        }
        let dataList = new finixList<any>(nextFetch, reachedEnd);
        dataList = this.embeddedHelper(responseObject, dataList);
        //dataList.hasMore = !reachedEnd;
        return Promise.resolve({response: responseObject.response, body: dataList});
    }
    /**
     * Helper function. 
     * List all the `Verifications` created for a `Payment Instrument`.
     * @summary List Payment Instrument Verifications

    * @param paymentInstrumentId ID of &#x60;Payment Instrument &#x60;object.
    * 
    */
    private async listByPaymentInstrumentIdHelper (paymentInstrumentId: string, listPaymentInstrumentVerificationsQueryParams?:ListPaymentInstrumentVerificationsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VerificationsList;  }> {
        const localVarPath = this.basePath + '/payment_instruments/{payment_instrument_id}/verifications'
            .replace('{' + 'payment_instrument_id' + '}', encodeURIComponent(String(paymentInstrumentId)));
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

        // verify required parameter 'paymentInstrumentId' is not null or undefined
        if (paymentInstrumentId === null || paymentInstrumentId === undefined) {
            throw new Error('Required parameter paymentInstrumentId was null or undefined when calling listPaymentInstrumentVerifications.');
        }
        if (listPaymentInstrumentVerificationsQueryParams != undefined){ 
            if (listPaymentInstrumentVerificationsQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listPaymentInstrumentVerificationsQueryParams.limit, "number");
            }
            if (listPaymentInstrumentVerificationsQueryParams.offset !== undefined) {
                localVarQueryParameters['offset'] = ObjectSerializer.serialize(listPaymentInstrumentVerificationsQueryParams.offset, "number");
            }
            if (listPaymentInstrumentVerificationsQueryParams.pageNumber !== undefined) {
                localVarQueryParameters['pageNumber'] = ObjectSerializer.serialize(listPaymentInstrumentVerificationsQueryParams.pageNumber, "number");
            }
            if (listPaymentInstrumentVerificationsQueryParams.pageSize !== undefined) {
                localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(listPaymentInstrumentVerificationsQueryParams.pageSize, "number");
            }

        }
        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
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
            return new Promise<{ response: http.IncomingMessage; body: VerificationsList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "VerificationsList");
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
     * List all the `Verifications` created for a `Payment Instrument`.
     * @summary List Payment Instrument Verifications
     * @param paymentInstrumentId ID of &#x60;Payment Instrument &#x60;object.
     *  
     */
    public async listByPaymentInstrumentId (paymentInstrumentId: string, listPaymentInstrumentVerificationsQueryParams?:ListPaymentInstrumentVerificationsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<finixList<any>> {
        const responseObject = await this.listByPaymentInstrumentIdHelper(paymentInstrumentId, listPaymentInstrumentVerificationsQueryParams, options);
        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        let reachedEnd: Boolean;
        const hasNextCursor: any = responseObject.body?.page?.hasOwnProperty('nextCursor');
        let queryParam: any = hasNextCursor ? { afterCursor: '', limit: 20 } : { offset: '', limit: 20 };

        [queryParam, reachedEnd] = hasNextCursor
        ? this.getCursorQueryParam(responseObject, queryParam) 
        : this.getOffsetQueryParam(responseObject, queryParam);

        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.listByPaymentInstrumentId(paymentInstrumentId, queryParam);
        }
        let dataList = new finixList<any>(nextFetch, !reachedEnd);
        dataList = this.embeddedHelper(responseObject, dataList);
        return dataList;
    }

    /**
     * List all the `Verifications` created for a `Payment Instrument`.
     * @summary List Payment Instrument Verifications
     * @param paymentInstrumentId ID of &#x60;Payment Instrument &#x60;object.
     * 
     */
    public async listByPaymentInstrumentIdHttp (paymentInstrumentId: string, listPaymentInstrumentVerificationsQueryParams?:ListPaymentInstrumentVerificationsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<{response: http.IncomingMessage, body: finixList<any>}> {
        const responseObject = await this.listByPaymentInstrumentIdHelper(paymentInstrumentId, listPaymentInstrumentVerificationsQueryParams, options);
        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        let reachedEnd: Boolean;
        const hasNextCursor: any = responseObject.body?.page?.hasOwnProperty('nextCursor');
        let queryParam: any = hasNextCursor ? { afterCursor: '', limit: 20 } : { offset: '', limit: 20 };

        [queryParam, reachedEnd] = hasNextCursor
        ? this.getCursorQueryParam(responseObject, queryParam) 
        : this.getOffsetQueryParam(responseObject, queryParam);

        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.listByPaymentInstrumentId(paymentInstrumentId, queryParam);
        }
        let dataList = new finixList<any>(nextFetch, reachedEnd);
        dataList = this.embeddedHelper(responseObject, dataList);
        //dataList.hasMore = !reachedEnd;
        return Promise.resolve({response: responseObject.response, body: dataList});
    }
    /**
     * Helper function. 
     * Retrieve a list of `Verifications`.
     * @summary List Verifications

    */
    private async listHelper (listVerificationsQueryParams?:ListVerificationsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VerificationsList;  }> {
        const localVarPath = this.basePath + '/verifications';
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

        if (listVerificationsQueryParams != undefined){ 
            if (listVerificationsQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listVerificationsQueryParams.limit, "number");
            }
            if (listVerificationsQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listVerificationsQueryParams.afterCursor, "string");
            }
            if (listVerificationsQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listVerificationsQueryParams.beforeCursor, "string");
            }

        }
        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
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
            return new Promise<{ response: http.IncomingMessage; body: VerificationsList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "VerificationsList");
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
     * Retrieve a list of `Verifications`.
     * @summary List Verifications
     */
    public async list (listVerificationsQueryParams?:ListVerificationsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<finixList<any>> {
        const responseObject = await this.listHelper(listVerificationsQueryParams, options);
        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        let reachedEnd: Boolean;
        const hasNextCursor: any = responseObject.body?.page?.hasOwnProperty('nextCursor');
        let queryParam: any = hasNextCursor ? { afterCursor: '', limit: 20 } : { offset: '', limit: 20 };

        [queryParam, reachedEnd] = hasNextCursor
        ? this.getCursorQueryParam(responseObject, queryParam) 
        : this.getOffsetQueryParam(responseObject, queryParam);

        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.list(queryParam);
        }
        let dataList = new finixList<any>(nextFetch, !reachedEnd);
        dataList = this.embeddedHelper(responseObject, dataList);
        return dataList;
    }

    /**
     * Retrieve a list of `Verifications`.
     * @summary List Verifications
     */
    public async listHttp (listVerificationsQueryParams?:ListVerificationsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<{response: http.IncomingMessage, body: finixList<any>}> {
        const responseObject = await this.listHelper(listVerificationsQueryParams, options);
        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        let reachedEnd: Boolean;
        const hasNextCursor: any = responseObject.body?.page?.hasOwnProperty('nextCursor');
        let queryParam: any = hasNextCursor ? { afterCursor: '', limit: 20 } : { offset: '', limit: 20 };

        [queryParam, reachedEnd] = hasNextCursor
        ? this.getCursorQueryParam(responseObject, queryParam) 
        : this.getOffsetQueryParam(responseObject, queryParam);

        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.list(queryParam);
        }
        let dataList = new finixList<any>(nextFetch, reachedEnd);
        dataList = this.embeddedHelper(responseObject, dataList);
        //dataList.hasMore = !reachedEnd;
        return Promise.resolve({response: responseObject.response, body: dataList});
    }

    /**
     * Extracts page and links fields from response body and assigns as properties to finixList
     */ 
    private embeddedHelper(responseObject: any, dataList: finixList<any>){
        if(responseObject.body.embedded == null || responseObject.body.embedded == undefined){
            dataList.page = responseObject.body.page;
            dataList.links = responseObject.body.links;
            return dataList;
        }
        const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
        let tempList = <finixList<any>> responseObject.body.embedded[embeddedName];
        tempList.forEach(item => {dataList.add(item)});
        dataList.page = responseObject.body.page;
        dataList.links = responseObject.body.links;
        return dataList;
    }

    /**
     * Extracts offset value from response body and determines if end of list has been reached
     */
    private getOffsetQueryParam(responseObject: any, queryParam: any){
        queryParam.offset = responseObject.body.page.offset + responseObject.body.page.limit;
        var endReached: Boolean = false;
        if (responseObject.body.page.offset + responseObject.body.page.limit > responseObject.body.page.count){
            endReached = true;
        }
        return [queryParam, endReached];
    }

    /**
    * Extracts nextCursor value from response body and determines if end of list has been reached
    */
    private getCursorQueryParam(responseObject: any, queryParam: any){
        queryParam.afterCursor = responseObject.body.page.nextCursor;
        var endReached: Boolean = false;
        if (responseObject.body.page.nextCursor == undefined){
            endReached = true;
        }
        return [queryParam, endReached];
    }
}   
