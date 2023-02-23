import { HttpClient } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";
import { CustomerService } from "../apis/hopper-cloud-airline/v1";

export class HopperProxyService extends ErrorHandler {

  constructor(
    protected _httpClient: HttpClient,
    protected _customerService: CustomerService
  ) {
    super();
  }

  // ----------------------------------------------------------
  // PROTECTED METHODS
  // ----------------------------------------------------------

  protected _overrideConfiguration(basePath: string): void {
    this._customerService = new CustomerService(this._httpClient, basePath, {
      selectHeaderAccept: (accepts: ['application/json']) => 'application/json',
      selectHeaderContentType: (contentsTypes: ['application/json']) => 'application/json',
      isJsonMime: (mime: 'application/json') => true
    });
  }
}
