import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CfarContractCustomer,
  CfarOfferCustomer,
  CreateCfarContractCustomerRequest,
  CreateCfarOfferCustomerRequest,
  CustomerService,
} from '../apis/hopper-cloud-airline/v1';
import { HopperProxyService } from './hopper-proxy.service';

@Injectable()
export class HopperCfarService extends HopperProxyService {
  constructor(
    protected _httpClient: HttpClient,
    protected _customerService: CustomerService,
  ) {
    super(_httpClient, _customerService);
  }

  postCfarOffers(
    basePath: string,
    hCSessionId: string,
    language: string,
    request: CreateCfarOfferCustomerRequest,
  ): Observable<CfarOfferCustomer[]> {
    // Init services
    this._overrideConfiguration(basePath, hCSessionId);

    return this._customerService.postCustomerCfarOffers(request, language);
  }

  postCfarContracts(
    basePath: string,
    hCSessionId: string,
    language: string,
    request: CreateCfarContractCustomerRequest,
  ): Observable<CfarContractCustomer> {
    // Init services
    this._overrideConfiguration(basePath, hCSessionId);

    return this._customerService.postCustomerCfarContracts(request, language);
  }
}
