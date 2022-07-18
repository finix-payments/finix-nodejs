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
import { CreateSubscriptionAmountRequest } from '../model/createSubscriptionAmountRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { SubscriptionAmount } from '../model/subscriptionAmount';
import { SubscriptionAmountList } from '../model/subscriptionAmountList';
import { ListSubscriptionAmountQueryParams } from '../model/listSubscriptionAmountQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, SuperSet } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SubscriptionAmountsApiApiKeys {
}

export class SubscriptionAmountsApi {
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

    public setApiKey(key: SubscriptionAmountsApiApiKeys, value: string) {
        (this.authentications as any)[SubscriptionAmountsApiApiKeys[key]].apiKey = value;
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
     * Create a `subscription_amount`.  The `Subscription Amount` is the amount to be charged to a `Merchant`. The `Subscription Amount` must be associated to a `Subscription Schedule`.
     * @summary Create a Subscription Amount
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest 
     */

    private async lcreateHelper(subscriptionScheduleId: string, createSubscriptionAmountRequest?: CreateSubscriptionAmountRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SubscriptionAmount;  }> {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts'
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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

        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling createSubscriptionAmounts.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (createSubscriptionAmountRequest != undefined && createSubscriptionAmountRequest != null && createSubscriptionAmountRequest.hasOwnProperty('file')){
            localVarRequestOptions.formData = createSubscriptionAmountRequest;
        }
        else{
            localVarRequestOptions.body = ObjectSerializer.serialize(createSubscriptionAmountRequest, "CreateSubscriptionAmountRequest");   
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
            return new Promise<{ response: http.IncomingMessage; body: SubscriptionAmount;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SubscriptionAmount");
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
     * Create a `subscription_amount`.  The `Subscription Amount` is the amount to be charged to a `Merchant`. The `Subscription Amount` must be associated to a `Subscription Schedule`.
     * @summary Create a Subscription Amount
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest 
     */

    public async lcreate(subscriptionScheduleId: string, createSubscriptionAmountRequest?: CreateSubscriptionAmountRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<SubscriptionAmount> {
        const responseObject = await this.lcreateHelper(subscriptionScheduleId, createSubscriptionAmountRequest,  options);
        return responseObject.body;
    }

    /**
     * Create a `subscription_amount`.  The `Subscription Amount` is the amount to be charged to a `Merchant`. The `Subscription Amount` must be associated to a `Subscription Schedule`.
     * @summary Create a Subscription Amount
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest 
     */

    public async lcreateHttp(subscriptionScheduleId: string, createSubscriptionAmountRequest?: CreateSubscriptionAmountRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: SubscriptionAmount; }> {
        const responseObject = await this.lcreateHelper(subscriptionScheduleId, createSubscriptionAmountRequest,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * Delete a previously created `Subscription Amount`.
     * @summary Delete a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */

    private async deleteSubscriptionAmountHelper(subscriptionAmountId: string, subscriptionScheduleId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts/{subscription_amount_id}'
            .replace('{' + 'subscription_amount_id' + '}', encodeURIComponent(String(subscriptionAmountId)))
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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

        // verify required parameter 'subscriptionAmountId' is not null or undefined
        if (subscriptionAmountId === null || subscriptionAmountId === undefined) {
            throw new Error('Required parameter subscriptionAmountId was null or undefined when calling deleteSubscriptionAmount.');
        }
        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling deleteSubscriptionAmount.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
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
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
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
     * Delete a previously created `Subscription Amount`.
     * @summary Delete a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */

    public async deleteSubscriptionAmount(subscriptionAmountId: string, subscriptionScheduleId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<any> {
        const responseObject = await this.deleteSubscriptionAmountHelper(subscriptionAmountId, subscriptionScheduleId,  options);
        return responseObject.body;
    }

    /**
     * Delete a previously created `Subscription Amount`.
     * @summary Delete a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */

    public async deleteSubscriptionAmountHttp(subscriptionAmountId: string, subscriptionScheduleId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body?: any; }> {
        const responseObject = await this.deleteSubscriptionAmountHelper(subscriptionAmountId, subscriptionScheduleId,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * Retrieve the details of a `subscription_amount`.
     * @summary Get a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */

    private async getHelper(subscriptionAmountId: string, subscriptionScheduleId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SubscriptionAmount;  }> {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts/{subscription_amount_id}'
            .replace('{' + 'subscription_amount_id' + '}', encodeURIComponent(String(subscriptionAmountId)))
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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

        // verify required parameter 'subscriptionAmountId' is not null or undefined
        if (subscriptionAmountId === null || subscriptionAmountId === undefined) {
            throw new Error('Required parameter subscriptionAmountId was null or undefined when calling getSubscriptionAmount.');
        }
        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling getSubscriptionAmount.');
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
            return new Promise<{ response: http.IncomingMessage; body: SubscriptionAmount;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SubscriptionAmount");
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
     * Retrieve the details of a `subscription_amount`.
     * @summary Get a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */

    public async get(subscriptionAmountId: string, subscriptionScheduleId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<SubscriptionAmount> {
        const responseObject = await this.getHelper(subscriptionAmountId, subscriptionScheduleId,  options);
        return responseObject.body;
    }

    /**
     * Retrieve the details of a `subscription_amount`.
     * @summary Get a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     */

    public async getHttp(subscriptionAmountId: string, subscriptionScheduleId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: SubscriptionAmount; }> {
        const responseObject = await this.getHelper(subscriptionAmountId, subscriptionScheduleId,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * Retrive a list of `Subscription Amounts`.
     * @summary List Subscription Amounts

    * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
    * 
    */
    private async listBySubscriptionScheduleHelper (subscriptionScheduleId: string, listSubscriptionAmountQueryParams?:ListSubscriptionAmountQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SubscriptionAmountList;  }> {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts'
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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

        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling listSubscriptionAmount.');
        }
        if (listSubscriptionAmountQueryParams != undefined){ 
            if (listSubscriptionAmountQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listSubscriptionAmountQueryParams.limit, "number");
            }
            if (listSubscriptionAmountQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listSubscriptionAmountQueryParams.afterCursor, "string");
            }
            if (listSubscriptionAmountQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listSubscriptionAmountQueryParams.beforeCursor, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: SubscriptionAmountList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SubscriptionAmountList");
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
     * Retrive a list of `Subscription Amounts`.
     * @summary List Subscription Amounts

    * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
    * 
    */
    public async listBySubscriptionSchedule (subscriptionScheduleId: string, listSubscriptionAmountQueryParams?:ListSubscriptionAmountQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<SuperSet<any>> {
        const responseObject = await this.listBySubscriptionScheduleHelper(subscriptionScheduleId, listSubscriptionAmountQueryParams, options);

        let dataList = await this.embeddedHelper(responseObject);
        return dataList;
    }

    /**
     * Retrive a list of `Subscription Amounts`.
     * @summary List Subscription Amounts

    * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
    * 
    */
    public async listBySubscriptionScheduleHttp (subscriptionScheduleId: string, listSubscriptionAmountQueryParams?:ListSubscriptionAmountQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) :
        Promise<{response: http.IncomingMessage, body: SuperSet<any>}> {
        const responseObject = await this.listBySubscriptionScheduleHelper(subscriptionScheduleId, listSubscriptionAmountQueryParams, options);

        let dataList = await this.embeddedHelper(responseObject);
        return Promise.resolve({response: responseObject.response, body: dataList});
    }
    /**
     * Helper function. 
     * Update the details of a `subscription_amount`.
     * @summary Update a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest 
     */

    private async patchSubscriptionAmountHelper(subscriptionAmountId: string, subscriptionScheduleId: string, createSubscriptionAmountRequest?: CreateSubscriptionAmountRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SubscriptionAmount;  }> {
        const localVarPath = this.basePath + '/subscription/subscription_schedules/{subscription_schedule_id}/subscription_amounts/{subscription_amount_id}'
            .replace('{' + 'subscription_amount_id' + '}', encodeURIComponent(String(subscriptionAmountId)))
            .replace('{' + 'subscription_schedule_id' + '}', encodeURIComponent(String(subscriptionScheduleId)));
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

        // verify required parameter 'subscriptionAmountId' is not null or undefined
        if (subscriptionAmountId === null || subscriptionAmountId === undefined) {
            throw new Error('Required parameter subscriptionAmountId was null or undefined when calling patchSubscriptionAmount.');
        }
        // verify required parameter 'subscriptionScheduleId' is not null or undefined
        if (subscriptionScheduleId === null || subscriptionScheduleId === undefined) {
            throw new Error('Required parameter subscriptionScheduleId was null or undefined when calling patchSubscriptionAmount.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (createSubscriptionAmountRequest != undefined && createSubscriptionAmountRequest != null && createSubscriptionAmountRequest.hasOwnProperty('file')){
            localVarRequestOptions.formData = createSubscriptionAmountRequest;
        }
        else{
            localVarRequestOptions.body = ObjectSerializer.serialize(createSubscriptionAmountRequest, "CreateSubscriptionAmountRequest");   
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
            return new Promise<{ response: http.IncomingMessage; body: SubscriptionAmount;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SubscriptionAmount");
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
     * Update the details of a `subscription_amount`.
     * @summary Update a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest 
     */

    public async patchSubscriptionAmount(subscriptionAmountId: string, subscriptionScheduleId: string, createSubscriptionAmountRequest?: CreateSubscriptionAmountRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<SubscriptionAmount> {
        const responseObject = await this.patchSubscriptionAmountHelper(subscriptionAmountId, subscriptionScheduleId, createSubscriptionAmountRequest,  options);
        return responseObject.body;
    }

    /**
     * Update the details of a `subscription_amount`.
     * @summary Update a Subscription Amount
     * @param subscriptionAmountId The ID of the &#x60;Subscription Amount&#x60;.
     * @param subscriptionScheduleId The ID of the &#x60;Subscription Schedule&#x60;.
     * @param createSubscriptionAmountRequest 
     */

    public async patchSubscriptionAmountHttp(subscriptionAmountId: string, subscriptionScheduleId: string, createSubscriptionAmountRequest?: CreateSubscriptionAmountRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: SubscriptionAmount; }> {
        const responseObject = await this.patchSubscriptionAmountHelper(subscriptionAmountId, subscriptionScheduleId, createSubscriptionAmountRequest,  options);
        return responseObject;
    }


    private async embeddedHelper(responseObject: any){
        if(responseObject.embedded == null || responseObject.embedded == undefined){
            const dataList = new SuperSet<any>();
            dataList.page = responseObject.body.page;
            dataList.links = responseObject.body.links;
            return dataList;
        }
        const embeddedName = Object.getOwnPropertyNames(responseObject.body.embedded)[0];
        let tempList = <SuperSet<any>> responseObject.body.embedded[embeddedName];
        const dataList = new SuperSet<any>();
        tempList.forEach(item => {dataList.add(item)});
        dataList.page = responseObject.body.page;
        dataList.links = responseObject.body.links;
        return dataList;
    }
}
