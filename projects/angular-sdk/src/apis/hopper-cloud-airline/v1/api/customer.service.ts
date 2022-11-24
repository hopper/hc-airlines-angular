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

import { AirlineSession } from '../model/airlineSession';
import { BadRequest } from '../model/badRequest';
import { CfarContractCustomer } from '../model/cfarContractCustomer';
import { CfarOfferCustomer } from '../model/cfarOfferCustomer';
import { CheckCfarContractExerciceVerificationCodeResponse } from '../model/checkCfarContractExerciceVerificationCodeResponse';
import { CheckCfarContractExerciseVerificationCodeRequest } from '../model/checkCfarContractExerciseVerificationCodeRequest';
import { CreateAirlineSessionCustomerRequest } from '../model/createAirlineSessionCustomerRequest';
import { CreateCfarContractCustomerRequest } from '../model/createCfarContractCustomerRequest';
import { CreateCfarOfferCustomerRequest } from '../model/createCfarOfferCustomerRequest';
import { CreateRefundAuthorizationRequest } from '../model/createRefundAuthorizationRequest';
import { CreateRefundRecipientRequest } from '../model/createRefundRecipientRequest';
import { Event } from '../model/event';
import { GetCfarExerciseCustomerResponse } from '../model/getCfarExerciseCustomerResponse';
import { GetSessionCustomerResponse } from '../model/getSessionCustomerResponse';
import { InitiateRefundRequest } from '../model/initiateRefundRequest';
import { InitiateRefundResponse } from '../model/initiateRefundResponse';
import { RefundAuthorization } from '../model/refundAuthorization';
import { RefundRecipient } from '../model/refundRecipient';
import { SendCfarContractExerciceVerificationCodeResponse } from '../model/sendCfarContractExerciceVerificationCodeResponse';
import { SendCfarContractExerciseVerificationCodeRequest } from '../model/sendCfarContractExerciseVerificationCodeRequest';
import { UnprocessableEntity } from '../model/unprocessableEntity';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CustomerService {

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
     * Create an Event with a tracking pixel
     * Create a new event for analytics using a tracking pixel
     * @param hcSessionId A unique identifier for a session
     * @param eventName The identifier of an event name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCustomerAnalyticsHcsessionidEventname(hcSessionId: string, eventName: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public getCustomerAnalyticsHcsessionidEventname(hcSessionId: string, eventName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public getCustomerAnalyticsHcsessionidEventname(hcSessionId: string, eventName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public getCustomerAnalyticsHcsessionidEventname(hcSessionId: string, eventName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (hcSessionId === null || hcSessionId === undefined) {
            throw new Error('Required parameter hcSessionId was null or undefined when calling getCustomerAnalyticsHcsessionidEventname.');
        }

        if (eventName === null || eventName === undefined) {
            throw new Error('Required parameter eventName was null or undefined when calling getCustomerAnalyticsHcsessionidEventname.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'image/gif',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Blob>('get',`${this.basePath}/customer/analytics/${encodeURIComponent(String(hcSessionId))}/${encodeURIComponent(String(eventName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a CFAR Exercise
     * Get a CFAR contract
     * @param id A unique identifier for a CFAR exercise
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCustomerCfarExercisesId(id: string, hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<GetCfarExerciseCustomerResponse>;
    public getCustomerCfarExercisesId(id: string, hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCfarExerciseCustomerResponse>>;
    public getCustomerCfarExercisesId(id: string, hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCfarExerciseCustomerResponse>>;
    public getCustomerCfarExercisesId(id: string, hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCustomerCfarExercisesId.');
        }


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
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

        return this.httpClient.request<GetCfarExerciseCustomerResponse>('get',`${this.basePath}/customer/cfar_exercises/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get data for a customer session
     * Retrieve main data of a customer session
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCustomerSessionsRetrieve(hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<GetSessionCustomerResponse>;
    public getCustomerSessionsRetrieve(hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetSessionCustomerResponse>>;
    public getCustomerSessionsRetrieve(hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetSessionCustomerResponse>>;
    public getCustomerSessionsRetrieve(hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
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
        ];

        return this.httpClient.request<GetSessionCustomerResponse>('get',`${this.basePath}/customer/sessions/retrieve`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a CFAR Contract
     * Create a CFAR contract from purchased CFAR offers
     * @param body 
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param language 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerCfarContracts(body: CreateCfarContractCustomerRequest, hCSessionID?: string, language?: string, observe?: 'body', reportProgress?: boolean): Observable<CfarContractCustomer>;
    public postCustomerCfarContracts(body: CreateCfarContractCustomerRequest, hCSessionID?: string, language?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CfarContractCustomer>>;
    public postCustomerCfarContracts(body: CreateCfarContractCustomerRequest, hCSessionID?: string, language?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CfarContractCustomer>>;
    public postCustomerCfarContracts(body: CreateCfarContractCustomerRequest, hCSessionID?: string, language?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerCfarContracts.');
        }



        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
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
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param language 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerCfarOffers(body: CreateCfarOfferCustomerRequest, hCSessionID?: string, language?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CfarOfferCustomer>>;
    public postCustomerCfarOffers(body: CreateCfarOfferCustomerRequest, hCSessionID?: string, language?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CfarOfferCustomer>>>;
    public postCustomerCfarOffers(body: CreateCfarOfferCustomerRequest, hCSessionID?: string, language?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CfarOfferCustomer>>>;
    public postCustomerCfarOffers(body: CreateCfarOfferCustomerRequest, hCSessionID?: string, language?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerCfarOffers.');
        }



        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
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

    /**
     * Create an Event
     * Create a new event for analytics
     * @param body 
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerEvents(body: Event, hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postCustomerEvents(body: Event, hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postCustomerEvents(body: Event, hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postCustomerEvents(body: Event, hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerEvents.');
        }


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
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

        return this.httpClient.request<any>('post',`${this.basePath}/customer/events`,
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
     * Check a verification code associated with a CFAR exercise
     * Check a verification code to a user required to process a CFAR exercise
     * @param body 
     * @param id A unique identifier for a CFAR exercise
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerIdCheckExerciseVerificationCode(body: CheckCfarContractExerciseVerificationCodeRequest, id: string, hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<CheckCfarContractExerciceVerificationCodeResponse>;
    public postCustomerIdCheckExerciseVerificationCode(body: CheckCfarContractExerciseVerificationCodeRequest, id: string, hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CheckCfarContractExerciceVerificationCodeResponse>>;
    public postCustomerIdCheckExerciseVerificationCode(body: CheckCfarContractExerciseVerificationCodeRequest, id: string, hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CheckCfarContractExerciceVerificationCodeResponse>>;
    public postCustomerIdCheckExerciseVerificationCode(body: CheckCfarContractExerciseVerificationCodeRequest, id: string, hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerIdCheckExerciseVerificationCode.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling postCustomerIdCheckExerciseVerificationCode.');
        }


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
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

        return this.httpClient.request<CheckCfarContractExerciceVerificationCodeResponse>('post',`${this.basePath}/customer/${encodeURIComponent(String(id))}/check_exercise_verification_code`,
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
     * Send a verification code associated with a CFAR exercise
     * Send a verification code to a user required to process a CFAR exercise
     * @param body 
     * @param id A unique identifier for a CFAR exercise
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerIdSendExerciseVerificationCode(body: SendCfarContractExerciseVerificationCodeRequest, id: string, hCSessionID?: string, observe?: 'body', reportProgress?: boolean): Observable<SendCfarContractExerciceVerificationCodeResponse>;
    public postCustomerIdSendExerciseVerificationCode(body: SendCfarContractExerciseVerificationCodeRequest, id: string, hCSessionID?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SendCfarContractExerciceVerificationCodeResponse>>;
    public postCustomerIdSendExerciseVerificationCode(body: SendCfarContractExerciseVerificationCodeRequest, id: string, hCSessionID?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SendCfarContractExerciceVerificationCodeResponse>>;
    public postCustomerIdSendExerciseVerificationCode(body: SendCfarContractExerciseVerificationCodeRequest, id: string, hCSessionID?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerIdSendExerciseVerificationCode.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling postCustomerIdSendExerciseVerificationCode.');
        }


        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
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

        return this.httpClient.request<SendCfarContractExerciceVerificationCodeResponse>('post',`${this.basePath}/customer/${encodeURIComponent(String(id))}/send_exercise_verification_code`,
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
     * Create a Refund
     * Initiate the Refund
     * @param body 
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param verificationCode 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerInitiateRefund(body: InitiateRefundRequest, hCSessionID?: string, verificationCode?: string, observe?: 'body', reportProgress?: boolean): Observable<InitiateRefundResponse>;
    public postCustomerInitiateRefund(body: InitiateRefundRequest, hCSessionID?: string, verificationCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InitiateRefundResponse>>;
    public postCustomerInitiateRefund(body: InitiateRefundRequest, hCSessionID?: string, verificationCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InitiateRefundResponse>>;
    public postCustomerInitiateRefund(body: InitiateRefundRequest, hCSessionID?: string, verificationCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerInitiateRefund.');
        }



        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }
        if (verificationCode !== undefined && verificationCode !== null) {
            headers = headers.set('verification-code', String(verificationCode));
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

        return this.httpClient.request<InitiateRefundResponse>('post',`${this.basePath}/customer/initiate_refund`,
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
     * Create a Refund Authorization Token
     * Create a Refund Authorization Token
     * @param body 
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param verificationCode 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerRefundAuthorizations(body: CreateRefundAuthorizationRequest, hCSessionID?: string, verificationCode?: string, observe?: 'body', reportProgress?: boolean): Observable<RefundAuthorization>;
    public postCustomerRefundAuthorizations(body: CreateRefundAuthorizationRequest, hCSessionID?: string, verificationCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RefundAuthorization>>;
    public postCustomerRefundAuthorizations(body: CreateRefundAuthorizationRequest, hCSessionID?: string, verificationCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RefundAuthorization>>;
    public postCustomerRefundAuthorizations(body: CreateRefundAuthorizationRequest, hCSessionID?: string, verificationCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerRefundAuthorizations.');
        }



        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }
        if (verificationCode !== undefined && verificationCode !== null) {
            headers = headers.set('verification-code', String(verificationCode));
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

        return this.httpClient.request<RefundAuthorization>('post',`${this.basePath}/customer/refund_authorizations`,
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
     * Create a Refund Recipient
     * Create a Refund Recipient
     * @param body 
     * @param hCSessionID The ID of the current airline session, see [Sessions](#tag/Sessions)
     * @param verificationCode 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerRefundRecipients(body: CreateRefundRecipientRequest, hCSessionID?: string, verificationCode?: string, observe?: 'body', reportProgress?: boolean): Observable<RefundRecipient>;
    public postCustomerRefundRecipients(body: CreateRefundRecipientRequest, hCSessionID?: string, verificationCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RefundRecipient>>;
    public postCustomerRefundRecipients(body: CreateRefundRecipientRequest, hCSessionID?: string, verificationCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RefundRecipient>>;
    public postCustomerRefundRecipients(body: CreateRefundRecipientRequest, hCSessionID?: string, verificationCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerRefundRecipients.');
        }



        let headers = this.defaultHeaders;
        if (hCSessionID !== undefined && hCSessionID !== null) {
            headers = headers.set('HC-Session-ID', String(hCSessionID));
        }
        if (verificationCode !== undefined && verificationCode !== null) {
            headers = headers.set('verification-code', String(verificationCode));
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

        return this.httpClient.request<RefundRecipient>('post',`${this.basePath}/customer/refund_recipients`,
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
     * Create a customer Session
     * Create a new session for which events will be collected
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCustomerSessions(body: CreateAirlineSessionCustomerRequest, observe?: 'body', reportProgress?: boolean): Observable<AirlineSession>;
    public postCustomerSessions(body: CreateAirlineSessionCustomerRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AirlineSession>>;
    public postCustomerSessions(body: CreateAirlineSessionCustomerRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AirlineSession>>;
    public postCustomerSessions(body: CreateAirlineSessionCustomerRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCustomerSessions.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<AirlineSession>('post',`${this.basePath}/customer/sessions`,
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
