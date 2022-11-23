import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CfarContractCustomer, CfarOfferCustomer, CheckCfarContractExerciceVerificationCodeResponse, CheckCfarContractExerciseVerificationCodeRequest, CreateCfarContractCustomerRequest, CreateCfarOfferCustomerRequest, CreateRefundAuthorizationRequest, CreateRefundRecipientRequest, CustomerService, GetCfarExerciseCustomerResponse, InitiateRefundRequest, InitiateRefundResponse, RefundAuthorization, RefundRecipient, SendCfarContractExerciceVerificationCodeResponse, SendCfarContractExerciseVerificationCodeRequest } from "../apis/hopper-cloud-airline/v1";
import { HopperProxyService } from "./hopper-proxy.service";

@Injectable()
export class HopperCfarService extends HopperProxyService {

  constructor(
    protected _httpClient: HttpClient,
    protected _customerService: CustomerService
  ) {
    super(_httpClient, _customerService)
  }

  postCfarOffers(basePath: string, hCSessionId: string, language: string, request: CreateCfarOfferCustomerRequest): Observable<CfarOfferCustomer[]> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.postCustomerCfarOffers(request, hCSessionId, language);
  }

  postCfarContracts(basePath: string, hCSessionId: string, language: string, request: CreateCfarContractCustomerRequest): Observable<CfarContractCustomer> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.postCustomerCfarContracts(request, hCSessionId, language);
  }

  getCfarExerciseById(basePath: string, hCSessionId: string, id: string): Observable<GetCfarExerciseCustomerResponse> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.getCustomerCfarExercisesId(id, hCSessionId);
  }

  postRefundAuthorizations(basePath: string, hCSessionId: string, verificationCode: string, request: CreateRefundAuthorizationRequest): Observable<RefundAuthorization> {
    // Init services
    this._overrideConfiguration(basePath);
    
    console.log(verificationCode);

    return this._customerService.postCustomerRefundAuthorizations(request, hCSessionId, verificationCode);
  }

  postRefundRecipients(basePath: string, hCSessionId: string, verificationCode: string, request: CreateRefundRecipientRequest): Observable<RefundRecipient> {
    // Init services
    this._overrideConfiguration(basePath);

    console.log(verificationCode);

    return this._customerService.postCustomerRefundRecipients(request, hCSessionId, verificationCode);
  }

  postInitiateRefund(basePath: string, hCSessionId: string, verificationCode: string, request: InitiateRefundRequest): Observable<InitiateRefundResponse> {
    // Init services
    this._overrideConfiguration(basePath);
    
    console.log(verificationCode);
    
    return this._customerService.postCustomerInitiateRefund(request, hCSessionId, verificationCode);
  }

  postSendCfarExerciseVerificationCode(basePath: string, hCSessionId: string, contractId: string, request: SendCfarContractExerciseVerificationCodeRequest): Observable<SendCfarContractExerciceVerificationCodeResponse> {
    // Init services
    this._overrideConfiguration(basePath);
    
    return this._customerService.postCustomerIdSendExerciseVerificationCode(request, contractId, hCSessionId);
  }

  postCheckCfarExerciseVerificationCode(basePath: string, hCSessionId: string, contractId: string, request: CheckCfarContractExerciseVerificationCodeRequest): Observable<CheckCfarContractExerciceVerificationCodeResponse> {
    // Init services
    this._overrideConfiguration(basePath);
    
    return this._customerService.postCustomerIdCheckExerciseVerificationCode(request, contractId, hCSessionId);
  }
}
