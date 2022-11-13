/**
 * Finix API
 */


import localVarRequest from 'request';
import * as http from 'http';
// @ts-ignore: Some endpoints interact with files
import * as fs from 'fs';
/* tslint:disable:no-unused-locals */
// @ts-ignore: Some unused imports always provided
import { CreateInstrumentUpdateRequest } from '../model/createInstrumentUpdateRequest';
// @ts-ignore: Some unused imports always provided
import { Error401Unauthorized } from '../model/error401Unauthorized';
// @ts-ignore: Some unused imports always provided
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
// @ts-ignore: Some unused imports always provided
import { Error404NotFoundList } from '../model/error404NotFoundList';
// @ts-ignore: Some unused imports always provided
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
// @ts-ignore: Some unused imports always provided
import { ErrorGeneric } from '../model/errorGeneric';
// @ts-ignore: Some unused imports always provided
import { InstrumentUpdate } from '../model/instrumentUpdate';
import { DownloadInstrumentUpdateQueryParams } from '../model/downloadInstrumentUpdateQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, finixList } from '../model/models';
import { HttpBasicAuth } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum InstrumentUpdatesApiApiKeys {
}

export class InstrumentUpdatesApi {
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

    public setApiKey(key: InstrumentUpdatesApiApiKeys, value: string) {
        (this.authentications as any)[InstrumentUpdatesApiApiKeys[key]].apiKey = value;
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
     * To update the card details of your customers, create an `instrument_updates` resource. Include the `Payment Instrument` IDs you want to update in a CSV.
     * @summary Create Instrument Updates
     * @param createInstrumentUpdateRequest 
     */

    private async createHelper(createInstrumentUpdateRequest?: CreateInstrumentUpdateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InstrumentUpdate;  rawBody: any; }> {
        const localVarPath = this.basePath + '/instrument_updates';
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
        localVarHeaderParams['Content-Type'] = "multipart/form-data";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (createInstrumentUpdateRequest && createInstrumentUpdateRequest.hasOwnProperty('file')){
        //if (createInstrumentUpdateRequest != undefined && createInstrumentUpdateRequest != null && createInstrumentUpdateRequest.hasOwnProperty('file')){
            localVarRequestOptions.formData = createInstrumentUpdateRequest;
        }
        else{
            localVarRequestOptions.body = ObjectSerializer.serialize(createInstrumentUpdateRequest, "CreateInstrumentUpdateRequest");   
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
            return new Promise<{ response: http.IncomingMessage; body: InstrumentUpdate;  rawBody: any; }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            const rawBody: string = body;
                            body = ObjectSerializer.deserialize(body, "InstrumentUpdate");
                            resolve({ response: response, body: body, rawBody: rawBody });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * To update the card details of your customers, create an `instrument_updates` resource. Include the `Payment Instrument` IDs you want to update in a CSV.
     * @summary Create Instrument Updates
     * @param createInstrumentUpdateRequest 
     */
    public async create(createInstrumentUpdateRequest?: CreateInstrumentUpdateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<InstrumentUpdate> {
        const responseObject = await this.createHelper(createInstrumentUpdateRequest,  options);
        return responseObject.body;
    }

    /**
     * To update the card details of your customers, create an `instrument_updates` resource. Include the `Payment Instrument` IDs you want to update in a CSV.
     * @summary Create Instrument Updates
     * @param createInstrumentUpdateRequest 
     */
    public async createHttp(createInstrumentUpdateRequest?: CreateInstrumentUpdateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: InstrumentUpdate;  rawBody: any;}> {
        const responseObject = await this.createHelper(createInstrumentUpdateRequest,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * Fetch a previously created `instrument_updates` resource as a CSV.   To fetch the `instrument_updates` resource in JSON, add `?format=json` to the request endpoint.
     * @summary Download Instrument Updates

    * @param instrumentUpdatesId The ID of the &#x60;instrument_updates&#x60; resource. This ID was returned when initially creating the &#x60;instrument_updates&#x60; object.
    * 
    */
    private async downloadHelper (instrumentUpdatesId: string, downloadInstrumentUpdateQueryParams?:DownloadInstrumentUpdateQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Buffer;  rawBody: any; }> {
        const localVarPath = this.basePath + '/instrument_updates/{instrument_updates_id}/download'
            .replace('{' + 'instrument_updates_id' + '}', encodeURIComponent(String(instrumentUpdatesId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/hal+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'instrumentUpdatesId' is not null or undefined
        if (instrumentUpdatesId === null || instrumentUpdatesId === undefined) {
            throw new Error('Required parameter instrumentUpdatesId was null or undefined when calling downloadInstrumentUpdate.');
        }
        if (downloadInstrumentUpdateQueryParams != undefined){ 
            if (downloadInstrumentUpdateQueryParams.format !== undefined) {
                localVarQueryParameters['format'] = ObjectSerializer.serialize(downloadInstrumentUpdateQueryParams.format, "string");
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
            encoding: null,
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
            return new Promise<{ response: http.IncomingMessage; body: Buffer;  rawBody: any; }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            const rawBody: string = body;
                            body = ObjectSerializer.deserialize(body, "Buffer");
                            resolve({ response: response, body: body, rawBody: rawBody });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * Fetch a previously created `instrument_updates` resource as a CSV.   To fetch the `instrument_updates` resource in JSON, add `?format=json` to the request endpoint.
     * @summary Download Instrument Updates
     * @param instrumentUpdatesId The ID of the &#x60;instrument_updates&#x60; resource. This ID was returned when initially creating the &#x60;instrument_updates&#x60; object.
     *  
     */
    public async download (instrumentUpdatesId: string, downloadInstrumentUpdateQueryParams?:DownloadInstrumentUpdateQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<Buffer> {
        const responseObject = await this.downloadHelper(instrumentUpdatesId, downloadInstrumentUpdateQueryParams, options);
        return responseObject.body;
    }

    /**
     * Fetch a previously created `instrument_updates` resource as a CSV.   To fetch the `instrument_updates` resource in JSON, add `?format=json` to the request endpoint.
     * @summary Download Instrument Updates
     * @param instrumentUpdatesId The ID of the &#x60;instrument_updates&#x60; resource. This ID was returned when initially creating the &#x60;instrument_updates&#x60; object.
     * 
     */
    public async downloadHttp (instrumentUpdatesId: string, downloadInstrumentUpdateQueryParams?:DownloadInstrumentUpdateQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<{response: http.IncomingMessage, body: Buffer;  rawBody: any;}> {
        const responseObject = await this.downloadHelper(instrumentUpdatesId, downloadInstrumentUpdateQueryParams, options);
        return responseObject;
    }
    /**
     * Helper function. 
     * Fetch a specific `instrument_update` from an `instrument_updates` resource.
     * @summary Fetch an Instrument Update
     * @param instrumentUpdatesId The ID of the &#x60;instrument_update&#x60;.
     */

    private async getHelper(instrumentUpdatesId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InstrumentUpdate;  rawBody: any; }> {
        const localVarPath = this.basePath + '/instrument_updates/{instrument_updates_id}'
            .replace('{' + 'instrument_updates_id' + '}', encodeURIComponent(String(instrumentUpdatesId)));
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

        // verify required parameter 'instrumentUpdatesId' is not null or undefined
        if (instrumentUpdatesId === null || instrumentUpdatesId === undefined) {
            throw new Error('Required parameter instrumentUpdatesId was null or undefined when calling getInstrumentUpdate.');
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
            return new Promise<{ response: http.IncomingMessage; body: InstrumentUpdate;  rawBody: any; }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            const rawBody: string = body;
                            body = ObjectSerializer.deserialize(body, "InstrumentUpdate");
                            resolve({ response: response, body: body, rawBody: rawBody });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }

    /**
     * Fetch a specific `instrument_update` from an `instrument_updates` resource.
     * @summary Fetch an Instrument Update
     * @param instrumentUpdatesId The ID of the &#x60;instrument_update&#x60;.
     */
    public async get(instrumentUpdatesId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<InstrumentUpdate> {
        const responseObject = await this.getHelper(instrumentUpdatesId,  options);
        return responseObject.body;
    }

    /**
     * Fetch a specific `instrument_update` from an `instrument_updates` resource.
     * @summary Fetch an Instrument Update
     * @param instrumentUpdatesId The ID of the &#x60;instrument_update&#x60;.
     */
    public async getHttp(instrumentUpdatesId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: InstrumentUpdate;  rawBody: any;}> {
        const responseObject = await this.getHelper(instrumentUpdatesId,  options);
        return responseObject;
    }


    /**
     * Extracts page and links fields from response body and assigns as properties to finixList
     */ 
    // @ts-ignore: Not all endpoints have list views
    private embeddedHelper(responseObject: any, dataList: finixList<any>){
        if(responseObject.body.embedded == null || responseObject.body.embedded == undefined){
            dataList.page = responseObject.body.page;
            dataList.links = responseObject.body.links;
            return dataList;
        }
        const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
        let tempList = <finixList<any>> responseObject.body.embedded[embeddedName];
        tempList.forEach((item: any) => {dataList.add(item)});
        dataList.page = responseObject.body.page;
        dataList.links = responseObject.body.links;
        return dataList;
    }

    /**
     * Extracts offset value from response body and determines if end of list has been reached
     */
    // @ts-ignore: Not all endpoints have list views
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
    // @ts-ignore: Not all endpoints have list views
    private getCursorQueryParam(responseObject: any, queryParam: any){
        queryParam.afterCursor = responseObject.body.page.nextCursor;
        var endReached: Boolean = false;
        if (responseObject.body.page.nextCursor == undefined){
            endReached = true;
        }
        return [queryParam, endReached];
    }
}   
