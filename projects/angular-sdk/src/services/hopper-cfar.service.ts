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

  postCfarOffers(basePath: string, hCSessionId: string, request: CreateCfarOfferCustomerRequest): Observable<CfarOfferCustomer[]> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.postCustomerCfarOffers(request, hCSessionId);
  }

  postCfarContracts(basePath: string, hCSessionId: string, request: CreateCfarContractCustomerRequest): Observable<CfarContractCustomer> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.postCustomerCfarContracts(request, hCSessionId);
  }

  getCfarExerciseById(basePath: string, hCSessionId: string, id: string): Observable<GetCfarExerciseCustomerResponse> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.getCustomerCfarExercisesId(id, hCSessionId);
  }

  postRefundAuthorizations(basePath: string, hCSessionId: string, request: CreateRefundAuthorizationRequest): Observable<RefundAuthorization> {
    // Init services
    this._overrideConfiguration(basePath);
    
    return this._customerService.postCustomerRefundAuthorizations(request, hCSessionId);
  }

  postRefundRecipients(basePath: string, hCSessionId: string, request: CreateRefundRecipientRequest): Observable<RefundRecipient> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.postCustomerRefundRecipients(request, hCSessionId);
  }

  postInitiateRefund(basePath: string, hCSessionId: string, request: InitiateRefundRequest): Observable<InitiateRefundResponse> {
    // Init services
    this._overrideConfiguration(basePath);
    
    return this._customerService.postCustomerInitiateRefund(request, hCSessionId);
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
