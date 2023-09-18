import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerService, CfarOffersBannerDisplay, UiVariant, CfarOffersTakeoverDisplay, CfarForcedChoiceWarning, CfarViewInfo, UiSource, CfarDenyPurchase, CfarExercisePortalDisplay, CfarExerciseVerificationSent, CfarExerciseVerificationComplete, ExerciseStepResult, CfarExerciseCustomerDataComplete, CfarExercisePortalComplete, CfarExerciseCallbackLaunched } from "../apis/hopper-cloud-airline/v1";
import { ApiTranslatorUtils } from "../utils/api-translator.utils";
import { HopperProxyService } from "./hopper-proxy.service";

@Injectable()
export class HopperEventsService extends HopperProxyService {

  constructor(
    protected _httpClient: HttpClient,
    protected _customerService: CustomerService
  ) {
    super(_httpClient, _customerService)
  }

  // -----------------------------------------------
  // Private Methods
  // -----------------------------------------------

  private _postCustomerEventRequest(basePath: string, hCSessionId: string, event: any): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath, hCSessionId);

    return this._customerService.postCustomerEvents(ApiTranslatorUtils.modelToSnakeCase(event));
  }

  // -----------------------------------------------
  // Public Methods : CFAR UI events
  // ----------------------------------------------------------

  // *********************
  // Cfar offers events
  // *********************

  postCreateCfarOffersBannerDisplay(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>, uiVariant: UiVariant): Observable<any> {
    // Build the event
    let event: CfarOffersBannerDisplay = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      uiVariant: uiVariant,
      type: "cfar_offers_banner_display"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
  
  postCreateCfarOffersTakeoverDisplay(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>): Observable<any> {
    // Build the event
    let event: CfarOffersTakeoverDisplay = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      type: "cfar_offers_takeover_display"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
  
  postCreateCfarForcedChoiceWarning(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>): Observable<any> {
    // Build the event
    let event: CfarForcedChoiceWarning = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      type: "cfar_forced_choice_warning"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
  
  postCreateCfarViewInfo(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>, uiSource: UiSource): Observable<any> {
    // Build the event
    let event: CfarViewInfo = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      uiSource: uiSource,
      type: "cfar_view_info"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
  
  postCreateCfarDenyPurchase(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>, uiSource: UiSource): Observable<any> {
    // Build the event
    let event: CfarDenyPurchase = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      uiSource: uiSource,
      type: "cfar_deny_purchase"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }

  // *********************
  // Cfar purchase events
  // *********************

  // *********************
  // Cfar exercise events
  // *********************
  
  postCreateCfarExercisePortalDisplay(basePath: string, hCSessionId: string, cfarExerciseId: string): Observable<any> {
    // Build the event
    let event: CfarExercisePortalDisplay = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      type: "cfar_exercise_portal_display"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
  
  postCreateCfarExerciseVerificationSent(basePath: string, hCSessionId: string, cfarExerciseId: string): Observable<any> {
    // Build the event
    let event: CfarExerciseVerificationSent = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      type: "cfar_exercise_verification_sent"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
  
  postCreateCfarExerciseVerificationComplete(basePath: string, hCSessionId: string, cfarExerciseId: string, exerciseStepResult: ExerciseStepResult): Observable<any> {
    // Build the event
    let event: CfarExerciseVerificationComplete = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      result: exerciseStepResult,
      type: "cfar_exercise_verification_complete"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
  
  postCreateCfarExerciseCustomerDataComplete(basePath: string, hCSessionId: string, cfarExerciseId: string, exerciseStepResult: ExerciseStepResult): Observable<any> {
    // Build the event
    let event: CfarExerciseCustomerDataComplete = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      result: exerciseStepResult,
      type: "cfar_exercise_customer_data_complete"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
  
  postCreateCfarExercisePortalComplete(basePath: string, hCSessionId: string, cfarExerciseId: string, exerciseStepResult: ExerciseStepResult): Observable<any> {
    // Build the event
    let event: CfarExercisePortalComplete = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      result: exerciseStepResult,
      type: "cfar_exercise_portal_complete"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
  
  postCreateCfarExerciseCallbackLaunched(basePath: string, hCSessionId: string, cfarExerciseId: string, exerciseStepResult: ExerciseStepResult): Observable<any> {
    // Build the event
    let event: CfarExerciseCallbackLaunched = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      result: exerciseStepResult,
      type: "cfar_exercise_callback_launched"
    }
    
    return this._postCustomerEventRequest(basePath, hCSessionId, event);
  }
}
