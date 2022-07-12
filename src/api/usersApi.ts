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
import { CreateUserRequest } from '../model/createUserRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { ErrorGeneric } from '../model/errorGeneric';
import { UpdateUserRequest } from '../model/updateUserRequest';
import { User } from '../model/user';
import { UsersList } from '../model/usersList';
import { ListUsersQueryParams } from '../model/listUsersQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, SuperSet } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum UsersApiApiKeys {
}

export class UsersApi {
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

    public setApiKey(key: UsersApiApiKeys, value: string) {
        (this.authentications as any)[UsersApiApiKeys[key]].apiKey = value;
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
     * This is the equivalent of provisioning API keys (i.e. credentials) for an `Application`.  > Each Application can have multiple `Users` which allows each merchant to have multiple API keys that can be independently enabled and disabled. Merchants only have read access to the API.
     * @summary Create an Application User
     * @param applicationId ID of application to use
     * @param createUserRequest 
     */

    private async createApplicationUserHelper(applicationId: string, createUserRequest?: CreateUserRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: User;  }> {
        const localVarPath = this.basePath + '/applications/{application_id}/users'
            .replace('{' + 'application_id' + '}', encodeURIComponent(String(applicationId)));
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

        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling createApplicationUser.');
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
            body: ObjectSerializer.serialize(createUserRequest, "CreateUserRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: User;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "User");
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
     * This is the equivalent of provisioning API keys (i.e. credentials) for an `Application`.  > Each Application can have multiple `Users` which allows each merchant to have multiple API keys that can be independently enabled and disabled. Merchants only have read access to the API.
     * @summary Create an Application User
     * @param applicationId ID of application to use
     * @param createUserRequest 
     */

    public async createApplicationUser(applicationId: string, createUserRequest?: CreateUserRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<User| {response: http.IncomingMessage; body: User; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.createApplicationUserHelper(applicationId, createUserRequest,  options);

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
     * Retrieve a specific user with the ID of the `User`.
     * @summary Find a User by ID
     * @param userId ID of &#x60;User&#x60; object.
     */

    private async getHelper(userId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: User;  }> {
        const localVarPath = this.basePath + '/users/{user_id}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));
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

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUser.');
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
            return new Promise<{ response: http.IncomingMessage; body: User;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "User");
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
     * Retrieve a specific user with the ID of the `User`.
     * @summary Find a User by ID
     * @param userId ID of &#x60;User&#x60; object.
     */

    public async get(userId: string, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<User| {response: http.IncomingMessage; body: User; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.getHelper(userId,  options);

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
     * Get a `User`.
     * @summary List Users

    */
    private async listHelper (listUsersQueryParams?:ListUsersQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UsersList;  }> {
        const localVarPath = this.basePath + '/users';
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

        if (listUsersQueryParams != undefined){ 
            if (listUsersQueryParams.id !== undefined) {
                localVarQueryParameters['id'] = ObjectSerializer.serialize(listUsersQueryParams.id, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: UsersList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "UsersList");
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
     * Get a `User`.
     * @summary List Users

    */
    public async list (listUsersQueryParams?:ListUsersQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) :
        Promise<UsersList| {response: http.IncomingMessage; body: UsersList; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.listHelper(listUsersQueryParams, options);

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
     * You can update the `User` with new tags or to disable the `User`.
     * @summary Update User
     * @param userId ID of &#x60;User&#x60; object.
     * @param updateUserRequest 
     */

    private async updateHelper(userId: string, updateUserRequest?: UpdateUserRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: User;  }> {
        const localVarPath = this.basePath + '/users/{user_id}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));
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

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUser.');
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
            body: ObjectSerializer.serialize(updateUserRequest, "UpdateUserRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: User;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "User");
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
     * You can update the `User` with new tags or to disable the `User`.
     * @summary Update User
     * @param userId ID of &#x60;User&#x60; object.
     * @param updateUserRequest 
     */

    public async update(userId: string, updateUserRequest?: UpdateUserRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<User| {response: http.IncomingMessage; body: User; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.updateHelper(userId, updateUserRequest,  options);

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
