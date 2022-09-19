import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Event, CustomerService, CfarOffersBannerDisplay, UiVariant, CfarOffersTakeoverDisplay, CfarForcedChoiceWarning, CfarViewInfo, UiSource, CfarDenyPurchase } from "../apis/hopper-cloud-airline/v1";
import { HopperProxyService } from "./hopper-proxy.service";

@Injectable({
  providedIn: "root"
})
export class HopperEventsService extends HopperProxyService {

  constructor(
    protected _httpClient: HttpClient,
    protected _customerService: CustomerService
  ) {
    super(_httpClient, _customerService)
  }

  // ----------------------------------------------------------
  // CFAR events
  // ----------------------------------------------------------

  postCreateCfarOffersBannerDisplay(basePath: string, hCSessionId: string, uiVariant: UiVariant): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarOffersBannerDisplay = {
      occurredDateTime: new Date(),
      uiVariant: uiVariant,
      type: "cfar_offers_banner_display"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarOffersTakeoverDisplay(basePath: string, hCSessionId: string, uiVariant: UiVariant): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarOffersTakeoverDisplay = {
      occurredDateTime: new Date(),
      uiVariant: uiVariant,
      type: "cfar_offers_takeover_display"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateForcedChoiceWarning(basePath: string, hCSessionId: string): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarForcedChoiceWarning = {
      occurredDateTime: new Date(),
      type: "cfar_forced_choice_warning"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarViewInfo(basePath: string, hCSessionId: string, uiSource: UiSource): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarViewInfo = {
      occurredDateTime: new Date(),
      uiSource: uiSource,
      type: "cfar_view_info"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarDenyPurchase(basePath: string, hCSessionId: string, uiSource: UiSource): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarDenyPurchase = {
      occurredDateTime: new Date(),
      uiSource: uiSource,
      type: "cfar_view_info"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  // ----------------------------------------------------------
  // PRIVATES METHODS
  // ----------------------------------------------------------
}
