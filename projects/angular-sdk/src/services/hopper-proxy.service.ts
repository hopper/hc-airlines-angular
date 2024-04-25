import { HttpClient } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { AnalyticsService, CancelForAnyReasonCFARService } from '../apis/hopper-cloud-airline/v1';

export class HopperProxyService extends ErrorHandler {
  constructor(
    protected _httpClient: HttpClient,
    protected _cancelForAnyReasonCFARService: CancelForAnyReasonCFARService,
    protected _analyticsService: AnalyticsService,
  ) {
    super();
  }

  // ----------------------------------------------------------
  // PROTECTED METHODS
  // ----------------------------------------------------------

  protected _overrideConfiguration(
    basePath: string,
    hcSessionId?: string,
  ): void {
    this._cancelForAnyReasonCFARService = new CancelForAnyReasonCFARService(this._httpClient, basePath, {
      selectHeaderAccept: (accepts: ['application/json']) =>
        'application/json',
      selectHeaderContentType: (contentsTypes: ['application/json']) =>
        'application/json',
      isJsonMime: (mime: 'application/json') => true,
      apiKeys: hcSessionId ? { 'HC-Session-ID': hcSessionId } : undefined
    });

    this._analyticsService = new AnalyticsService(this._httpClient, basePath, {
      selectHeaderAccept: (accepts: ['application/json']) =>
        'application/json',
      selectHeaderContentType: (contentsTypes: ['application/json']) =>
        'application/json',
      isJsonMime: (mime: 'application/json') => true,
      apiKeys: hcSessionId ? { 'HC-Session-ID': hcSessionId } : undefined
    });
  }
}
