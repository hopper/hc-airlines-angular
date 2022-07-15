import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CancelForAnyReasonCFARService, CfarContract, CfarContractExercise, CfarOffer, CreateCfarContractExerciseRequest, CreateCfarContractRequest, CreateCfarOfferRequest } from "../apis/hopper-cloud-airline/v1";

@Injectable({
  providedIn: "root"
})
export class HopperProxyService {

  constructor(
    private _httpClient: HttpClient,
    private _cancelForAnyReasonCFARService: CancelForAnyReasonCFARService
  ) {}

  // ----------------------------------------------------------
  // CFAR
  // ----------------------------------------------------------

  postCfarOffers(basePath: string, hCSessionId: string, request: CreateCfarOfferRequest): Observable<CfarOffer[]> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._cancelForAnyReasonCFARService.postCfarOffers(request, hCSessionId);
  }

  postCfarContractExercises(basePath: string, hCSessionId: string, request: CreateCfarContractExerciseRequest): Observable<CfarContractExercise> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._cancelForAnyReasonCFARService.postCfarContractExercises(request, hCSessionId);
  }

  postCfarContracts(basePath: string, hCSessionId: string, request: CreateCfarContractRequest): Observable<CfarContract> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._cancelForAnyReasonCFARService.postCfarContracts(request, hCSessionId);
  }

  getCfarContractsId(basePath: string, hCSessionId: string, id: string): Observable<CfarContract> {
    // Init services
    this._overrideConfiguration(basePath);

    return this._cancelForAnyReasonCFARService.getCfarContractsId(id, hCSessionId);
  }

  // ----------------------------------------------------------
  // PRIVATES METHODS
  // ----------------------------------------------------------

  private _overrideConfiguration(basePath: string): void {
    this._cancelForAnyReasonCFARService = new CancelForAnyReasonCFARService(this._httpClient, basePath, {
      selectHeaderAccept: (accepts: ['application/json']) => 'application/json',
      selectHeaderContentType: (contentsTypes: ['application/json']) => 'application/json',
      isJsonMime: (mime: 'application/json') => true
    });
  }
}
