import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CfarContract, CfarContractCustomer, CfarOffer, CfarOfferCustomer, CreateCfarContractCustomerRequest, CreateCfarOfferCustomerRequest, CreateRefundAuthorizationRequest, CreateRefundRecipientRequest, CreateRefundRequest, CustomerService, RefundAuthorization, RefundRecipient } from "../apis/hopper-cloud-airline/v1";

@Injectable({
  providedIn: "root"
})
export class HopperProxyService {

  constructor(
    private _httpClient: HttpClient,
    private _customerService: CustomerService
  ) {}

  // ----------------------------------------------------------
  // CFAR
  // ----------------------------------------------------------

  postCfarOffers(basePath: string, hCSessionId: string, language: string, request: CreateCfarOfferCustomerRequest): Observable<CfarOfferCustomer[]> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.postCustomerCfarOffers(request, hCSessionId, language.toUpperCase());
  }

  postCfarContracts(basePath: string, hCSessionId: string, request: CreateCfarContractCustomerRequest): Observable<CfarContractCustomer> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.postCustomerCfarContracts(request, hCSessionId);
  }

  getCfarContractsId(basePath: string, hCSessionId: string, id: string): Observable<CfarContract> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._customerService.getCustomerCfarContractsId(id, hCSessionId);
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

  postRefunds(basePath: string, hCSessionId: string, request: CreateRefundRequest): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);
    
    return this._customerService.postCustomerRefunds(request, hCSessionId);
  }

  // ----------------------------------------------------------
  // PRIVATES METHODS
  // ----------------------------------------------------------

  private _overrideConfiguration(basePath: string): void {
    this._customerService = new CustomerService(this._httpClient, basePath, {
      selectHeaderAccept: (accepts: ['application/json']) => 'application/json',
      selectHeaderContentType: (contentsTypes: ['application/json']) => 'application/json',
      isJsonMime: (mime: 'application/json') => true
    });
  }
}
