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
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { MerchantProfile } from '../model/merchantProfile';
import { MerchantProfilesList } from '../model/merchantProfilesList';
import { ListMerchantProfilesQueryParams } from '../model/listMerchantProfilesQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, finixList } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum MerchantProfilesApiApiKeys {
}

export class MerchantProfilesApi {
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

    public setApiKey(key: MerchantProfilesApiApiKeys, value: string) {
        (this.authentications as any)[MerchantProfilesApiApiKeys[key]].apiKey = value;
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
     * Get the merchant profile object
     * @summary Show Merchant Profile
     * @param merchantProfileId ID of merchant profile
     */

    private async getHelper(merchantProfileId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: MerchantProfile;  }> {
        const localVarPath = this.basePath + '/merchant_profiles/{merchant_profile_id}'
            .replace('{' + 'merchant_profile_id' + '}', encodeURIComponent(String(merchantProfileId)));
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

        // verify required parameter 'merchantProfileId' is not null or undefined
        if (merchantProfileId === null || merchantProfileId === undefined) {
            throw new Error('Required parameter merchantProfileId was null or undefined when calling getMerchantProfile.');
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
            return new Promise<{ response: http.IncomingMessage; body: MerchantProfile;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "MerchantProfile");
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
     * Get the merchant profile object
     * @summary Show Merchant Profile
     * @param merchantProfileId ID of merchant profile
     */
    public async get(merchantProfileId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<MerchantProfile> {
        const responseObject = await this.getHelper(merchantProfileId,  options);
        return responseObject.body;
    }

    /**
     * Get the merchant profile object
     * @summary Show Merchant Profile
     * @param merchantProfileId ID of merchant profile
     */
    public async getHttp(merchantProfileId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: MerchantProfile; }> {
        const responseObject = await this.getHelper(merchantProfileId,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * Get list of all the merchant_profiles objects
     * @summary List Merchant Profiles

    */
    private async listHelper (listMerchantProfilesQueryParams?:ListMerchantProfilesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: MerchantProfilesList;  }> {
        const localVarPath = this.basePath + '/merchant_profiles';
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

        if (listMerchantProfilesQueryParams != undefined){ 
            if (listMerchantProfilesQueryParams.id !== undefined) {
                localVarQueryParameters['id'] = ObjectSerializer.serialize(listMerchantProfilesQueryParams.id, "string");
            }
            if (listMerchantProfilesQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listMerchantProfilesQueryParams.beforeCursor, "string");
            }
            if (listMerchantProfilesQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listMerchantProfilesQueryParams.afterCursor, "string");
            }
            if (listMerchantProfilesQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listMerchantProfilesQueryParams.limit, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: MerchantProfilesList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "MerchantProfilesList");
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
     * Get list of all the merchant_profiles objects
     * @summary List Merchant Profiles
     */
    public async list (listMerchantProfilesQueryParams?:ListMerchantProfilesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<finixList<any>> {
        const responseObject = await this.listHelper(listMerchantProfilesQueryParams, options);
        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        var reachedEnd: Boolean;
        if(responseObject.body?.page?.hasOwnProperty('nextCursor')){
            var queryParam: any = {
                afterCursor: '',
                limit: 20
            };
            [queryParam, reachedEnd] = this.getCursorQueryParam(responseObject, queryParam);
        }
        else{
            var queryParam: any = {
                offset: '',
                limit: 20
            };
            [queryParam, reachedEnd] = this.getOffsetQueryParam(responseObject, queryParam);
        }
        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.list(queryParam);
        }
        let dataList = new finixList<any>(nextFetch);
        dataList = await this.embeddedHelper(responseObject, dataList);
        dataList.hasMore = !reachedEnd;
        return dataList;
    }

    /**
     * Get list of all the merchant_profiles objects
     * @summary List Merchant Profiles
     */
    public async listHttp (listMerchantProfilesQueryParams?:ListMerchantProfilesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<{response: http.IncomingMessage, body: finixList<any>}> {
        const responseObject = await this.listHelper(listMerchantProfilesQueryParams, options);
        var reachedEnd: Boolean;

        // Check if response body has nextCursor property or offset property and extract the corresponding fields
        if(responseObject.body?.page?.hasOwnProperty('nextCursor')){
            var queryParam: any = {
                afterCursor: '',
                limit: 20
            };
            [queryParam, reachedEnd]  = this.getCursorQueryParam(responseObject, queryParam);
        }
        else{
            var queryParam: any = {
                offset: '',
                limit: 20
            };
            [queryParam, reachedEnd] = this.getOffsetQueryParam(responseObject, queryParam);
        }
        const nextFetch = (limit?: number) => {
            queryParam.limit = limit;
            if (reachedEnd){
                throw new RangeError("End of list reached");
            }
            return this.list(queryParam);
        }
        let dataList = new finixList<any>(nextFetch);
        dataList = await this.embeddedHelper(responseObject, dataList);
        dataList.hasMore = !reachedEnd;
        return Promise.resolve({response: responseObject.response, body: dataList});
    }
    /**
     * Helper function. 
     * Update a merchant profile
     * @summary Update a Merchant Profile
     * @param merchantProfileId ID of merchant profile
     * @param body 
     */

    private async updateHelper(merchantProfileId: string, body?: object, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: MerchantProfile;  }> {
        const localVarPath = this.basePath + '/merchant_profiles/{merchant_profile_id}'
            .replace('{' + 'merchant_profile_id' + '}', encodeURIComponent(String(merchantProfileId)));
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

        // verify required parameter 'merchantProfileId' is not null or undefined
        if (merchantProfileId === null || merchantProfileId === undefined) {
            throw new Error('Required parameter merchantProfileId was null or undefined when calling updateMerchantProfile.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
        localVarHeaderParams['Content-Type'] = "application/hal+json";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (body != undefined && body != null && body.hasOwnProperty('file')){
            localVarRequestOptions.formData = body;
        }
        else{
            localVarRequestOptions.body = ObjectSerializer.serialize(body, "object");   
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
            return new Promise<{ response: http.IncomingMessage; body: MerchantProfile;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "MerchantProfile");
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
     * Update a merchant profile
     * @summary Update a Merchant Profile
     * @param merchantProfileId ID of merchant profile
     * @param body 
     */
    public async update(merchantProfileId: string, body?: object, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<MerchantProfile> {
        const responseObject = await this.updateHelper(merchantProfileId, body,  options);
        return responseObject.body;
    }

    /**
     * Update a merchant profile
     * @summary Update a Merchant Profile
     * @param merchantProfileId ID of merchant profile
     * @param body 
     */
    public async updateHttp(merchantProfileId: string, body?: object, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: MerchantProfile; }> {
        const responseObject = await this.updateHelper(merchantProfileId, body,  options);
        return responseObject;
    }

    /**
     * Extracts page and links fields from response body and assigns as properties to finixList
     */ 
    private async embeddedHelper(responseObject: any, dataList: finixList<any>){
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
        queryParam.offset = responseObject.body.page.offset;
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
