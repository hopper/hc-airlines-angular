/**
 * Airline API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
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
import { CfarContract } from '../model/cfarContract';
import { CfarContractExercise } from '../model/cfarContractExercise';
import { CfarOffer } from '../model/cfarOffer';
import { CreateCfarContractExerciseRequest } from '../model/createCfarContractExerciseRequest';
import { CreateCfarContractRequest } from '../model/createCfarContractRequest';
import { CreateCfarOfferRequest } from '../model/createCfarOfferRequest';
import { MarkCfarContractExerciseCompleteRequest } from '../model/markCfarContractExerciseCompleteRequest';
import { UnprocessableEntity } from '../model/unprocessableEntity';
import { UpdateCfarContractRequest } from '../model/updateCfarContractRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CancelForAnyReasonCFARService {

    protected basePath = '/airline/v1.0';
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
     * Get a CFAR Contract
     * Get a CFAR contract
     * @param id A unique identifier for a CFAR contract
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCfarContractsId(id: string, hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<CfarContract>;
    public getCfarContractsId(id: string, hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CfarContract>>;
    public getCfarContractsId(id: string, hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CfarContract>>;
    public getCfarContractsId(id: string, hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCfarContractsId.');
        }


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }

        // authentication (PartnerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/plain'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CfarContract>('get',`${this.basePath}/cfar_contracts/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create CFAR Exercise Request
     * Record that a request to exercise a CFAR contract has occurred
     * @param body 
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCfarContractExercises(body: CreateCfarContractExerciseRequest, hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<CfarContractExercise>;
    public postCfarContractExercises(body: CreateCfarContractExerciseRequest, hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CfarContractExercise>>;
    public postCfarContractExercises(body: CreateCfarContractExerciseRequest, hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CfarContractExercise>>;
    public postCfarContractExercises(body: CreateCfarContractExerciseRequest, hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCfarContractExercises.');
        }


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }

        // authentication (PartnerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
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

        return this.httpClient.request<CfarContractExercise>('post',`${this.basePath}/cfar_contract_exercises`,
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
     * Create a CFAR Contract
     * Create a CFAR contract from a purchased CFAR offer
     * @param body 
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param validateOnly When this flag is set to &#x60;true&#x60;, the CFAR contract creation will not be performed, it will only be validated
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCfarContracts(body: CreateCfarContractRequest, hCSessionID?: string, validateOnly?: boolean, observe?: 'body', reportProgress?: boolean): Observable<CfarContract>;
    public postCfarContracts(body: CreateCfarContractRequest, hCSessionID?: string, validateOnly?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CfarContract>>;
    public postCfarContracts(body: CreateCfarContractRequest, hCSessionID?: string, validateOnly?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CfarContract>>;
    public postCfarContracts(body: CreateCfarContractRequest, hCSessionID?: string, validateOnly?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCfarContracts.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (validateOnly !== undefined && validateOnly !== null) {
            queryParameters = queryParameters.set('validate_only', <any>validateOnly);
        }

        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }

        // authentication (PartnerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
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

        return this.httpClient.request<CfarContract>('post',`${this.basePath}/cfar_contracts`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a CFAR Offer
     * Create a CFAR offer for a user&#x27;s trip
     * @param body 
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCfarOffers(body: CreateCfarOfferRequest, hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CfarOffer>>;
    public postCfarOffers(body: CreateCfarOfferRequest, hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CfarOffer>>>;
    public postCfarOffers(body: CreateCfarOfferRequest, hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CfarOffer>>>;
    public postCfarOffers(body: CreateCfarOfferRequest, hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCfarOffers.');
        }


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }

        // authentication (PartnerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
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

        return this.httpClient.request<Array<CfarOffer>>('post',`${this.basePath}/cfar_offers`,
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
     * Complete CFAR Exercise
     * Record that a request to exercise a CFAR contract has been completed
     * @param body 
     * @param id A unique identifier for a CFAR contract exercise
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putCfarContractExercisesIdMarkCompleted(body: MarkCfarContractExerciseCompleteRequest, id: string, hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<CfarContractExercise>;
    public putCfarContractExercisesIdMarkCompleted(body: MarkCfarContractExerciseCompleteRequest, id: string, hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CfarContractExercise>>;
    public putCfarContractExercisesIdMarkCompleted(body: MarkCfarContractExerciseCompleteRequest, id: string, hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CfarContractExercise>>;
    public putCfarContractExercisesIdMarkCompleted(body: MarkCfarContractExerciseCompleteRequest, id: string, hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putCfarContractExercisesIdMarkCompleted.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling putCfarContractExercisesIdMarkCompleted.');
        }


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }

        // authentication (PartnerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
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

        return this.httpClient.request<CfarContractExercise>('put',`${this.basePath}/cfar_contract_exercises/${encodeURIComponent(String(id))}/mark_completed`,
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
     * Update a CFAR Contract
     * Update the CFAR contract
     * @param body 
     * @param id A unique identifier for a CFAR contract
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putCfarContractsIdUpdateStatus(body: UpdateCfarContractRequest, id: string, hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<CfarContract>;
    public putCfarContractsIdUpdateStatus(body: UpdateCfarContractRequest, id: string, hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CfarContract>>;
    public putCfarContractsIdUpdateStatus(body: UpdateCfarContractRequest, id: string, hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CfarContract>>;
    public putCfarContractsIdUpdateStatus(body: UpdateCfarContractRequest, id: string, hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putCfarContractsIdUpdateStatus.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling putCfarContractsIdUpdateStatus.');
        }


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }

        // authentication (PartnerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
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

        return this.httpClient.request<CfarContract>('put',`${this.basePath}/cfar_contracts/${encodeURIComponent(String(id))}/update_status`,
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