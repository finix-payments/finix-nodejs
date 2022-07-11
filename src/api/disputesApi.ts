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
import { AdjustmentTransfersList } from '../model/adjustmentTransfersList';
import { CreateDisputeEvidenceRequest } from '../model/createDisputeEvidenceRequest';
import { Dispute } from '../model/dispute';
import { DisputeEvidence } from '../model/disputeEvidence';
import { DisputeEvidenceList } from '../model/disputeEvidenceList';
import { DisputesList } from '../model/disputesList';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { ListDisputeEvidenceQueryParams } from '../model/listDisputeEvidenceQueryParams';
import { ListDisputesQueryParams } from '../model/listDisputesQueryParams';
import { ListDisputesAdjustmentsQueryParams } from '../model/listDisputesAdjustmentsQueryParams';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, SuperSet } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DisputesApiApiKeys {
}

export class DisputesApi {
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

    public setApiKey(key: DisputesApiApiKeys, value: string) {
        (this.authentications as any)[DisputesApiApiKeys[key]].apiKey = value;
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
     * Upload dispute evidence for a `Dispute`.  There are four values available for `state` that details the status of the evidence upload:  * **PENDING**: The evidence file has not yet been submitted to the `Processor`. No user action is required. * **SUCCEEDED**: The evidence file has been successfully sent to the `Processor`. No further user action is required. * **CANCELED**: The evidence file upload was not completed due to user action. * **FAILED**: An issue occurred. User action is required. Any of the following issues could have occurred:     * There was an error in the system and the user should retry uploading their evidence file.     * There is an issue with the file and the user should retry uploading a different file.     * There is an issue and the user should contact Support. 
     * @summary Create Dispute Evidence
     * @param disputeId ID of &#x60;Dispute&#x60; to mange evidence for.
     * @param createDisputeEvidenceRequest 
     */

    public async createDisputeEvidenceHelper(disputeId: string, createDisputeEvidenceRequest?: CreateDisputeEvidenceRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DisputeEvidence;  }> {
        const localVarPath = this.basePath + '/disputes/{dispute_id}/evidence'
            .replace('{' + 'dispute_id' + '}', encodeURIComponent(String(disputeId)));
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

        // verify required parameter 'disputeId' is not null or undefined
        if (disputeId === null || disputeId === undefined) {
            throw new Error('Required parameter disputeId was null or undefined when calling createDisputeEvidence.');
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
            body: ObjectSerializer.serialize(createDisputeEvidenceRequest, "CreateDisputeEvidenceRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: DisputeEvidence;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DisputeEvidence");
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
     * Upload dispute evidence for a `Dispute`.  There are four values available for `state` that details the status of the evidence upload:  * **PENDING**: The evidence file has not yet been submitted to the `Processor`. No user action is required. * **SUCCEEDED**: The evidence file has been successfully sent to the `Processor`. No further user action is required. * **CANCELED**: The evidence file upload was not completed due to user action. * **FAILED**: An issue occurred. User action is required. Any of the following issues could have occurred:     * There was an error in the system and the user should retry uploading their evidence file.     * There is an issue with the file and the user should retry uploading a different file.     * There is an issue and the user should contact Support. 
     * @summary Create Dispute Evidence
     * @param disputeId ID of &#x60;Dispute&#x60; to mange evidence for.
     * @param createDisputeEvidenceRequest 
     */

    public async createDisputeEvidence(disputeId: string, createDisputeEvidenceRequest?: CreateDisputeEvidenceRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<DisputeEvidence| {response: http.IncomingMessage; body: DisputeEvidence; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.createDisputeEvidenceHelper(disputeId, createDisputeEvidenceRequest,  options);

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
     * Retrieve the details of a previously created `Dispute`.
     * @summary Get Dispute
     * @param disputeId ID of &#x60;Dispute&#x60; to fetch.
     */

    public async getHelper(disputeId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Dispute;  }> {
        const localVarPath = this.basePath + '/disputes/{dispute_id}'
            .replace('{' + 'dispute_id' + '}', encodeURIComponent(String(disputeId)));
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

        // verify required parameter 'disputeId' is not null or undefined
        if (disputeId === null || disputeId === undefined) {
            throw new Error('Required parameter disputeId was null or undefined when calling getDispute.');
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
            return new Promise<{ response: http.IncomingMessage; body: Dispute;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Dispute");
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
     * Retrieve the details of a previously created `Dispute`.
     * @summary Get Dispute
     * @param disputeId ID of &#x60;Dispute&#x60; to fetch.
     */

    public async get(disputeId: string, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<Dispute| {response: http.IncomingMessage; body: Dispute; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.getHelper(disputeId,  options);

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
     * Fetch evidence uploaded for a `Dispute`.   If you don\'t have the Finix Dashboard available, you can fetch the evidence to review the `status` of the upload to confirm the evidence got sent to the processor.
     * @summary Fetch Dispute Evidence
     * @param disputeId ID of &#x60;Dispute&#x60; to fetch evidence for.
     * @param evidenceId ID of &#x60;evidence&#x60; to fetch.
     */

    public async getDisputeEvidenceHelper(disputeId: string, evidenceId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DisputeEvidence;  }> {
        const localVarPath = this.basePath + '/disputes/{dispute_id}/evidence/{evidence_id}'
            .replace('{' + 'dispute_id' + '}', encodeURIComponent(String(disputeId)))
            .replace('{' + 'evidence_id' + '}', encodeURIComponent(String(evidenceId)));
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

        // verify required parameter 'disputeId' is not null or undefined
        if (disputeId === null || disputeId === undefined) {
            throw new Error('Required parameter disputeId was null or undefined when calling getDisputeEvidence.');
        }

        // verify required parameter 'evidenceId' is not null or undefined
        if (evidenceId === null || evidenceId === undefined) {
            throw new Error('Required parameter evidenceId was null or undefined when calling getDisputeEvidence.');
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
            return new Promise<{ response: http.IncomingMessage; body: DisputeEvidence;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DisputeEvidence");
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
     * Fetch evidence uploaded for a `Dispute`.   If you don\'t have the Finix Dashboard available, you can fetch the evidence to review the `status` of the upload to confirm the evidence got sent to the processor.
     * @summary Fetch Dispute Evidence
     * @param disputeId ID of &#x60;Dispute&#x60; to fetch evidence for.
     * @param evidenceId ID of &#x60;evidence&#x60; to fetch.
     */

    public async getDisputeEvidence(disputeId: string, evidenceId: string, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<DisputeEvidence| {response: http.IncomingMessage; body: DisputeEvidence; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.getDisputeEvidenceHelper(disputeId, evidenceId,  options);

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
     * Retrieve a list of dispute evidence for a `Dispute`.
     * @summary List Dispute Evidence

    * @param disputeId ID of &#x60;Dispute&#x60; to mange evidence for.
    * 
    */
    public async listDisputeEvidenceByDisputeIdHelper (disputeId: string, listDisputeEvidenceQueryParams?:ListDisputeEvidenceQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DisputeEvidenceList;  }> {
        const localVarPath = this.basePath + '/disputes/{dispute_id}/evidence'
            .replace('{' + 'dispute_id' + '}', encodeURIComponent(String(disputeId)));
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

        // verify required parameter 'disputeId' is not null or undefined
        if (disputeId === null || disputeId === undefined) {
            throw new Error('Required parameter disputeId was null or undefined when calling listDisputeEvidence.');
        }

        if (listDisputeEvidenceQueryParams != undefined){ 
            if (listDisputeEvidenceQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listDisputeEvidenceQueryParams.limit, "number");
            }
            if (listDisputeEvidenceQueryParams.afterCursor !== undefined) {
                localVarQueryParameters['after_cursor'] = ObjectSerializer.serialize(listDisputeEvidenceQueryParams.afterCursor, "string");
            }
            if (listDisputeEvidenceQueryParams.beforeCursor !== undefined) {
                localVarQueryParameters['before_cursor'] = ObjectSerializer.serialize(listDisputeEvidenceQueryParams.beforeCursor, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: DisputeEvidenceList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DisputeEvidenceList");
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
     * Retrieve a list of dispute evidence for a `Dispute`.
     * @summary List Dispute Evidence

    * @param disputeId ID of &#x60;Dispute&#x60; to mange evidence for.
    * 
    */
    public async listDisputeEvidenceByDisputeId (disputeId: string, listDisputeEvidenceQueryParams?:ListDisputeEvidenceQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) :
        Promise<DisputeEvidenceList| {response: http.IncomingMessage; body: DisputeEvidenceList; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.listDisputeEvidenceByDisputeIdHelper(disputeId, listDisputeEvidenceQueryParams, options);

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
     * Retrieve a list of `Disputes`.
     * @summary List Disputes

    */
    public async listHelper (listDisputesQueryParams?:ListDisputesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DisputesList;  }> {
        const localVarPath = this.basePath + '/disputes';
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

        if (listDisputesQueryParams != undefined){ 
            if (listDisputesQueryParams.sort !== undefined) {
                localVarQueryParameters['sort'] = ObjectSerializer.serialize(listDisputesQueryParams.sort, "string");
            }
            if (listDisputesQueryParams.offset !== undefined) {
                localVarQueryParameters['offset'] = ObjectSerializer.serialize(listDisputesQueryParams.offset, "number");
            }
            if (listDisputesQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listDisputesQueryParams.limit, "number");
            }
            if (listDisputesQueryParams.createdAtGte !== undefined) {
                localVarQueryParameters['created_at.gte'] = ObjectSerializer.serialize(listDisputesQueryParams.createdAtGte, "string");
            }
            if (listDisputesQueryParams.createdAtLte !== undefined) {
                localVarQueryParameters['created_at.lte'] = ObjectSerializer.serialize(listDisputesQueryParams.createdAtLte, "string");
            }
            if (listDisputesQueryParams.updatedAtGte !== undefined) {
                localVarQueryParameters['updated_at.gte'] = ObjectSerializer.serialize(listDisputesQueryParams.updatedAtGte, "string");
            }
            if (listDisputesQueryParams.updatedAtLte !== undefined) {
                localVarQueryParameters['updated_at.lte'] = ObjectSerializer.serialize(listDisputesQueryParams.updatedAtLte, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: DisputesList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DisputesList");
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
     * Retrieve a list of `Disputes`.
     * @summary List Disputes

    */
    public async list (listDisputesQueryParams?:ListDisputesQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) :
        Promise<DisputesList| {response: http.IncomingMessage; body: DisputesList; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.listHelper(listDisputesQueryParams, options);

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
     * List the adjustment `Transfers` for a `Dispute`. Depending on the stage of the `Dispute`, different adjustment `Transfer` subtypes can be applied.  There are four available subtypes for adjustment `Transfers` in `Disputes`: <ul><li><strong>PLATFORM\\_CREDIT</strong><li><strong>MERCHANT\\_DEBIT</strong><li><strong>MERCHANT\\_CREDIT</strong><li><strong>PLATFORM\\_DEBIT</strong></ul>
     * @summary Fetch Dispute Adjustment Transfers

    * @param disputeId ID of the &#x60;Dispute&#x60; resource.
    * 
    */
    public async listDisputesAdjustmentsHelper (disputeId: string, listDisputesAdjustmentsQueryParams?:ListDisputesAdjustmentsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AdjustmentTransfersList;  }> {
        const localVarPath = this.basePath + '/disputes/{dispute_id}/adjustment_transfers'
            .replace('{' + 'dispute_id' + '}', encodeURIComponent(String(disputeId)));
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

        // verify required parameter 'disputeId' is not null or undefined
        if (disputeId === null || disputeId === undefined) {
            throw new Error('Required parameter disputeId was null or undefined when calling listDisputesAdjustments.');
        }

        if (listDisputesAdjustmentsQueryParams != undefined){ 
            if (listDisputesAdjustmentsQueryParams.limit !== undefined) {
                localVarQueryParameters['limit'] = ObjectSerializer.serialize(listDisputesAdjustmentsQueryParams.limit, "number");
            }
            if (listDisputesAdjustmentsQueryParams.offset !== undefined) {
                localVarQueryParameters['offset'] = ObjectSerializer.serialize(listDisputesAdjustmentsQueryParams.offset, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: AdjustmentTransfersList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AdjustmentTransfersList");
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
     * List the adjustment `Transfers` for a `Dispute`. Depending on the stage of the `Dispute`, different adjustment `Transfer` subtypes can be applied.  There are four available subtypes for adjustment `Transfers` in `Disputes`: <ul><li><strong>PLATFORM\\_CREDIT</strong><li><strong>MERCHANT\\_DEBIT</strong><li><strong>MERCHANT\\_CREDIT</strong><li><strong>PLATFORM\\_DEBIT</strong></ul>
     * @summary Fetch Dispute Adjustment Transfers

    * @param disputeId ID of the &#x60;Dispute&#x60; resource.
    * 
    */
    public async listDisputesAdjustments (disputeId: string, listDisputesAdjustmentsQueryParams?:ListDisputesAdjustmentsQueryParams, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) :
        Promise<AdjustmentTransfersList| {response: http.IncomingMessage; body: AdjustmentTransfersList; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.listDisputesAdjustmentsHelper(disputeId, listDisputesAdjustmentsQueryParams, options);

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
