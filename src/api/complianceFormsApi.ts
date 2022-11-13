/**
 * Finix API
 */


import localVarRequest from 'request';
import * as http from 'http';
// @ts-ignore: Some endpoints interact with files
import * as fs from 'fs';
/* tslint:disable:no-unused-locals */
// @ts-ignore: Some unused imports always provided
import { ComplianceForm } from '../model/complianceForm';
// @ts-ignore: Some unused imports always provided
import { Error401Unauthorized } from '../model/error401Unauthorized';
// @ts-ignore: Some unused imports always provided
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
// @ts-ignore: Some unused imports always provided
import { Error404NotFoundList } from '../model/error404NotFoundList';
// @ts-ignore: Some unused imports always provided
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
// @ts-ignore: Some unused imports always provided
import { Error422InvalidFieldList } from '../model/error422InvalidFieldList';
// @ts-ignore: Some unused imports always provided
import { UpdateComplianceFormRequest } from '../model/updateComplianceFormRequest';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, finixList } from '../model/models';
import { HttpBasicAuth } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ComplianceFormsApiApiKeys {
}

export class ComplianceFormsApi {
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

    public setApiKey(key: ComplianceFormsApiApiKeys, value: string) {
        (this.authentications as any)[ComplianceFormsApiApiKeys[key]].apiKey = value;
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
     * A webhook notifies you when Finix creates a `compliance_form`.  Use the ID in the webhook to fetch the `compliance_form` resource from the `/compliance_forms/:COMPLIANCE_FORM_ID:` endpoint.
     * @summary View Compliance Forms
     * @param complianceFormsId ID of the &#x60;compliance_form&#x60;.
     */

    private async listHelper(complianceFormsId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ComplianceForm;  rawBody: any; }> {
        const localVarPath = this.basePath + '/compliance_forms/{compliance_forms_id}'
            .replace('{' + 'compliance_forms_id' + '}', encodeURIComponent(String(complianceFormsId)));
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

        // verify required parameter 'complianceFormsId' is not null or undefined
        if (complianceFormsId === null || complianceFormsId === undefined) {
            throw new Error('Required parameter complianceFormsId was null or undefined when calling getComplianceForms.');
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
            return new Promise<{ response: http.IncomingMessage; body: ComplianceForm;  rawBody: any; }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            const rawBody: string = body;
                            body = ObjectSerializer.deserialize(body, "ComplianceForm");
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
     * A webhook notifies you when Finix creates a `compliance_form`.  Use the ID in the webhook to fetch the `compliance_form` resource from the `/compliance_forms/:COMPLIANCE_FORM_ID:` endpoint.
     * @summary View Compliance Forms
     * @param complianceFormsId ID of the &#x60;compliance_form&#x60;.
     */
    public async list(complianceFormsId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<ComplianceForm> {
        const responseObject = await this.listHelper(complianceFormsId,  options);
        return responseObject.body;
    }

    /**
     * A webhook notifies you when Finix creates a `compliance_form`.  Use the ID in the webhook to fetch the `compliance_form` resource from the `/compliance_forms/:COMPLIANCE_FORM_ID:` endpoint.
     * @summary View Compliance Forms
     * @param complianceFormsId ID of the &#x60;compliance_form&#x60;.
     */
    public async listHttp(complianceFormsId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: ComplianceForm;  rawBody: any;}> {
        const responseObject = await this.listHelper(complianceFormsId,  options);
        return responseObject;
    }
    /**
     * Helper function. 
     * As part of onboarding your users, you\'ll need to build a UI experience that allows users to complete the PCI `compliance_form` and download the form as a PDF if requested.  For more information, see [Managing Compliance Forms](/guides/security-and-compliance/pci-dss-compliance/managing-pci-compliance/#completing-compliance-forms).
     * @summary Complete Compliance Forms
     * @param complianceFormsId ID of the &#x60;compliance_form&#x60;.
     * @param updateComplianceFormRequest 
     */

    private async updateHelper(complianceFormsId: string, updateComplianceFormRequest?: UpdateComplianceFormRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ComplianceForm;  rawBody: any; }> {
        const localVarPath = this.basePath + '/compliance_forms/{compliance_forms_id}'
            .replace('{' + 'compliance_forms_id' + '}', encodeURIComponent(String(complianceFormsId)));
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

        // verify required parameter 'complianceFormsId' is not null or undefined
        if (complianceFormsId === null || complianceFormsId === undefined) {
            throw new Error('Required parameter complianceFormsId was null or undefined when calling updateComplianceForms.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);
        localVarHeaderParams['Finix-Version'] = "2022-02-01";
        localVarHeaderParams['Content-Type'] = "application/json";
        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        if (updateComplianceFormRequest && updateComplianceFormRequest.hasOwnProperty('file')){
        //if (updateComplianceFormRequest != undefined && updateComplianceFormRequest != null && updateComplianceFormRequest.hasOwnProperty('file')){
            localVarRequestOptions.formData = updateComplianceFormRequest;
        }
        else{
            localVarRequestOptions.body = ObjectSerializer.serialize(updateComplianceFormRequest, "UpdateComplianceFormRequest");   
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
            return new Promise<{ response: http.IncomingMessage; body: ComplianceForm;  rawBody: any; }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            const rawBody: string = body;
                            body = ObjectSerializer.deserialize(body, "ComplianceForm");
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
     * As part of onboarding your users, you\'ll need to build a UI experience that allows users to complete the PCI `compliance_form` and download the form as a PDF if requested.  For more information, see [Managing Compliance Forms](/guides/security-and-compliance/pci-dss-compliance/managing-pci-compliance/#completing-compliance-forms).
     * @summary Complete Compliance Forms
     * @param complianceFormsId ID of the &#x60;compliance_form&#x60;.
     * @param updateComplianceFormRequest 
     */
    public async update(complianceFormsId: string, updateComplianceFormRequest?: UpdateComplianceFormRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<ComplianceForm> {
        const responseObject = await this.updateHelper(complianceFormsId, updateComplianceFormRequest,  options);
        return responseObject.body;
    }

    /**
     * As part of onboarding your users, you\'ll need to build a UI experience that allows users to complete the PCI `compliance_form` and download the form as a PDF if requested.  For more information, see [Managing Compliance Forms](/guides/security-and-compliance/pci-dss-compliance/managing-pci-compliance/#completing-compliance-forms).
     * @summary Complete Compliance Forms
     * @param complianceFormsId ID of the &#x60;compliance_form&#x60;.
     * @param updateComplianceFormRequest 
     */
    public async updateHttp(complianceFormsId: string, updateComplianceFormRequest?: UpdateComplianceFormRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : 
        Promise<{response: http.IncomingMessage, body: ComplianceForm;  rawBody: any;}> {
        const responseObject = await this.updateHelper(complianceFormsId, updateComplianceFormRequest,  options);
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
