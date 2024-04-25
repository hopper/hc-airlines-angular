/**
 * Airline API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { BadRequest } from '../model/badRequest';
import { CfarContractCustomer } from '../model/cfarContractCustomer';
import { CfarOfferCustomer } from '../model/cfarOfferCustomer';
import { CreateCfarContractCustomerRequest } from '../model/createCfarContractCustomerRequest';
import { CreateCfarOfferCustomerRequest } from '../model/createCfarOfferCustomerRequest';
import { UnprocessableEntity } from '../model/unprocessableEntity';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CancelForAnyReasonCFARService {

    protected basePath = '/airline/v1.1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Create a CFAR Contract
     * Create a CFAR contract from purchased CFAR offers
     * @param body 
     * @param language 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerCfarContracts(body: CreateCfarContractCustomerRequest, language?: string, observe?: 'body', reportProgress?: boolean): Observable<CfarContractCustomer>;
    public postCustomerCfarContracts(body: CreateCfarContractCustomerRequest, language?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CfarContractCustomer>>;
    public postCustomerCfarContracts(body: CreateCfarContractCustomerRequest, language?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CfarContractCustomer>>;
    public postCustomerCfarContracts(body: CreateCfarContractCustomerRequest, language?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerCfarContracts.');
        }


        let headers = this.defaultHeaders;
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
        }

        // authentication (SessionAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["HC-Session-ID"]) {
            headers = headers.set('HC-Session-ID', this.configuration.apiKeys["HC-Session-ID"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CfarContractCustomer>('post',`${this.basePath}/customer/cfar_contracts`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create CFAR Offers
     * Create a CFAR offers for a customer&#x27;s trip
     * @param body 
     * @param language 
     * @param userAgent 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerCfarOffers(body: CreateCfarOfferCustomerRequest, language?: string, userAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CfarOfferCustomer>>;
    public postCustomerCfarOffers(body: CreateCfarOfferCustomerRequest, language?: string, userAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CfarOfferCustomer>>>;
    public postCustomerCfarOffers(body: CreateCfarOfferCustomerRequest, language?: string, userAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CfarOfferCustomer>>>;
    public postCustomerCfarOffers(body: CreateCfarOfferCustomerRequest, language?: string, userAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerCfarOffers.');
        }



        let headers = this.defaultHeaders;
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers = headers.set('User-Agent', String(userAgent));
        }

        // authentication (SessionAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["HC-Session-ID"]) {
            headers = headers.set('HC-Session-ID', this.configuration.apiKeys["HC-Session-ID"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Array<CfarOfferCustomer>>('post',`${this.basePath}/customer/cfar_offers`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
