import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AnalyticsService,
  CancelForAnyReasonCFARService,
  CfarContractCustomer,
  CfarOfferCustomer,
  CreateCfarContractCustomerRequest,
  CreateCfarOfferCustomerRequest,
} from '../apis/hopper-cloud-airline/v1';
import { HopperProxyService } from './hopper-proxy.service';

@Injectable()
export class HopperCfarService extends HopperProxyService {
  constructor(
    protected _httpClient: HttpClient,
    protected _cancelForAnyReasonCFARService: CancelForAnyReasonCFARService,
    protected _analyticsService: AnalyticsService,
  ) {
    super(_httpClient, _cancelForAnyReasonCFARService, _analyticsService);
  }

  postCfarOffers(
    basePath: string,
    hCSessionId: string,
    language: string,
    request: CreateCfarOfferCustomerRequest,
  ): Observable<CfarOfferCustomer[]> {
    // Init services
    this._overrideConfiguration(basePath, hCSessionId);

    return this._cancelForAnyReasonCFARService.postCustomerCfarOffers(request, language);
  }

  postCfarContracts(
    basePath: string,
    hCSessionId: string,
    language: string,
    request: CreateCfarContractCustomerRequest,
  ): Observable<CfarContractCustomer> {
    // Init services
    this._overrideConfiguration(basePath, hCSessionId);

    return this._cancelForAnyReasonCFARService.postCustomerCfarContracts(request, language);
  }
}
