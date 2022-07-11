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
import { CreateWebhookRequest } from '../model/createWebhookRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { Error422InvalidFieldList } from '../model/error422InvalidFieldList';
import { ErrorGeneric } from '../model/errorGeneric';
import { UpdateWebhookRequest } from '../model/updateWebhookRequest';
import { Webhook } from '../model/webhook';
import { WebhooksList } from '../model/webhooksList';
import { ListWebhooksQueryParams } from '../model/listWebhooksQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, SuperSet } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum WebhooksApiApiKeys {
}

export class WebhooksApi {
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

    public setApiKey(key: WebhooksApiApiKeys, value: string) {
        (this.authentications as any)[WebhooksApiApiKeys[key]].apiKey = value;
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
     * Create a `Webhook` to specify an endpoint where Finix can send events.
     * @summary Create a Webhook
     * @param createWebhookRequest 
     */

    public async createHelper(createWebhookRequest?: CreateWebhookRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Webhook;  }> {
        const localVarPath = this.basePath + '/webhooks';
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
            body: ObjectSerializer.serialize(createWebhookRequest, "CreateWebhookRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Webhook;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Webhook");
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
     * Create a `Webhook` to specify an endpoint where Finix can send events.
     * @summary Create a Webhook
     * @param createWebhookRequest 
     */

    public async create(createWebhookRequest?: CreateWebhookRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<Webhook| {response: http.IncomingMessage; body: Webhook; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.createHelper(createWebhookRequest,  options);

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
     * Retrieve the details of a `Webhook`.
     * @summary Get a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     */

    public async getHelper(webhookId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Webhook;  }> {
        const localVarPath = this.basePath + '/webhooks/{webhook_id}'
            .replace('{' + 'webhook_id' + '}', encodeURIComponent(String(webhookId)));
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

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling getWebhook.');
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
            return new Promise<{ response: http.IncomingMessage; body: Webhook;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Webhook");
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
     * Retrieve the details of a `Webhook`.
     * @summary Get a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     */

    public async get(webhookId: string, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<Webhook| {response: http.IncomingMessage; body: Webhook; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.getHelper(webhookId,  options);

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
     * Retrieve a list of `Webhooks`.
     * @summary List Webhooks

    */
    public async listHelper (listWebhooksQueryParams?:ListWebhooksQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: WebhooksList;  }> {
        const localVarPath = this.basePath + '/webhooks';
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

        if (listWebhooksQueryParams != undefined){ 
            if (listWebhooksQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listWebhooksQueryParams.limit, "number");
            }
            if (listWebhooksQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listWebhooksQueryParams.afterCursor, "string");
            }
            if (listWebhooksQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listWebhooksQueryParams.beforeCursor, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: WebhooksList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "WebhooksList");
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
     * Retrieve a list of `Webhooks`.
     * @summary List Webhooks

    */
    public async list (listWebhooksQueryParams?:ListWebhooksQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) :
        Promise<WebhooksList| {response: http.IncomingMessage; body: WebhooksList; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.listHelper(listWebhooksQueryParams, options);

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
     * Update an existing `Webhook`.
     * @summary Update a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     * @param updateWebhookRequest 
     */

    public async updateHelper(webhookId: string, updateWebhookRequest?: UpdateWebhookRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Webhook;  }> {
        const localVarPath = this.basePath + '/webhooks/{webhook_id}'
            .replace('{' + 'webhook_id' + '}', encodeURIComponent(String(webhookId)));
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

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling updateWebhook.');
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
            body: ObjectSerializer.serialize(updateWebhookRequest, "UpdateWebhookRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: Webhook;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Webhook");
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
     * Update an existing `Webhook`.
     * @summary Update a Webhook
     * @param webhookId ID of &#x60;Webhook&#x60; object.
     * @param updateWebhookRequest 
     */

    public async update(webhookId: string, updateWebhookRequest?: UpdateWebhookRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<Webhook| {response: http.IncomingMessage; body: Webhook; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.updateHelper(webhookId, updateWebhookRequest,  options);

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
