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
import { CreateVerificationRequest } from '../model/createVerificationRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error403ForbiddenList } from '../model/error403ForbiddenList';
import { Error404NotFoundList } from '../model/error404NotFoundList';
import { Error406NotAcceptable } from '../model/error406NotAcceptable';
import { ErrorGeneric } from '../model/errorGeneric';
import { Verification } from '../model/verification';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor, SuperSet } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://finix.sandbox-payments-api.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum PaymentInstrumentsP2CApiApiKeys {
}

export class PaymentInstrumentsP2CApi {
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

    public setApiKey(key: PaymentInstrumentsP2CApiApiKeys, value: string) {
        (this.authentications as any)[PaymentInstrumentsP2CApiApiKeys[key]].apiKey = value;
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
     * Verify a `Payment Instrument` to determine if it\'s elligable for Push To Card transactions.   > Only verify `Payment Instruments` for [Push To Card](/guides/push-to-card) customers.
     * @summary Verify a Payment Instrument
     * @param paymentInstrumentId ID of object
     * @param createVerificationRequest 
     */

    public async createPaymentInstrumentVerificationHelper(paymentInstrumentId: string, createVerificationRequest?: CreateVerificationRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Verification;  }> {
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
            throw new Error('Required parameter paymentInstrumentId was null or undefined when calling createPaymentInstrumentVerification.');
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
            body: ObjectSerializer.serialize(createVerificationRequest, "CreateVerificationRequest")
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
     * Verify a `Payment Instrument` to determine if it\'s elligable for Push To Card transactions.   > Only verify `Payment Instruments` for [Push To Card](/guides/push-to-card) customers.
     * @summary Verify a Payment Instrument
     * @param paymentInstrumentId ID of object
     * @param createVerificationRequest 
     */

    public async createPaymentInstrumentVerification(paymentInstrumentId: string, createVerificationRequest?: CreateVerificationRequest, options: {headers: {[name: string]: string}} = {headers: {}}, httpData?: Boolean = false) : 
        Promise<Verification| {response: http.IncomingMessage; body: Verification; }| {response: http.IncomingMessage; body: SuperSet<any>;}> {
        const responseObject = await this.createPaymentInstrumentVerificationHelper(paymentInstrumentId, createVerificationRequest,  options);

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
