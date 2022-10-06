import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Event, CustomerService, CfarOffersBannerDisplay, UiVariant, CfarOffersTakeoverDisplay, CfarForcedChoiceWarning, CfarViewInfo, UiSource, CfarDenyPurchase, CfarExercisePortalDisplay, CfarExerciseVerificationSent, CfarExerciseVerificationComplete, ExerciseStepResult, CfarExerciseCustomerDataComplete, CfarExercisePortalComplete, CfarExerciseCallbackLaunched, CfarExerciseEmailSent, CfarExerciseEmailOpened, CfarExerciseEmailDelivered } from "../apis/hopper-cloud-airline/v1";
import { HopperProxyService } from "./hopper-proxy.service";

@Injectable()
export class HopperEventsService extends HopperProxyService {

  constructor(
    protected _httpClient: HttpClient,
    protected _customerService: CustomerService
  ) {
    super(_httpClient, _customerService)
  }

  // ----------------------------------------------------------
  // CFAR UI events
  // ----------------------------------------------------------

  // *********************
  // Cfar offers events
  // *********************

  postCreateCfarOffersBannerDisplay(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>, uiVariant: UiVariant): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarOffersBannerDisplay = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      uiVariant: uiVariant,
      type: "cfar_offers_banner_display"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarOffersTakeoverDisplay(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarOffersTakeoverDisplay = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      type: "cfar_offers_takeover_display"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarForcedChoiceWarning(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarForcedChoiceWarning = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      type: "cfar_forced_choice_warning"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarViewInfo(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>, uiSource: UiSource): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarViewInfo = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      uiSource: uiSource,
      type: "cfar_view_info"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarDenyPurchase(basePath: string, hCSessionId: string, cfarOffersIds: Array<string>, uiSource: UiSource): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarDenyPurchase = {
      occurredDateTime: new Date(),
      cfarOffersIds: cfarOffersIds,
      uiSource: uiSource,
      type: "cfar_view_info"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }

  // *********************
  // Cfar purchase events
  // *********************

  // *********************
  // Cfar exercise events
  // *********************
  
  postCreateCfarExercisePortalDisplay(basePath: string, hCSessionId: string, cfarExerciseId: string): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarExercisePortalDisplay = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      type: "cfar_exercise_portal_display"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarExerciseVerificationSent(basePath: string, hCSessionId: string, cfarExerciseId: string): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarExerciseVerificationSent = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      type: "cfar_exercise_verification_sent"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarExerciseVerificationComplete(basePath: string, hCSessionId: string, cfarExerciseId: string, exerciseStepResult: ExerciseStepResult): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarExerciseVerificationComplete = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      result: exerciseStepResult,
      type: "cfar_exercise_verification_complete"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarExerciseCustomerDataComplete(basePath: string, hCSessionId: string, cfarExerciseId: string, exerciseStepResult: ExerciseStepResult): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarExerciseCustomerDataComplete = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      result: exerciseStepResult,
      type: "cfar_exercise_customer_data_complete"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarExercisePortalComplete(basePath: string, hCSessionId: string, cfarExerciseId: string, exerciseStepResult: ExerciseStepResult): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarExercisePortalComplete = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      result: exerciseStepResult,
      type: "cfar_exercise_portal_complete"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarExerciseCallbackLaunched(basePath: string, hCSessionId: string, cfarExerciseId: string, exerciseStepResult: ExerciseStepResult): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarExerciseCallbackLaunched = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      result: exerciseStepResult,
      type: "cfar_exercise_callback_launched"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarExerciseEmailSent(basePath: string, hCSessionId: string, cfarExerciseId: string): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarExerciseEmailSent = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      type: "cfar_exercise_email_sent"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarExerciseEmailDelivered(basePath: string, hCSessionId: string, cfarExerciseId: string): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarExerciseEmailDelivered = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      type: "cfar_exercise_email_delivered"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  postCreateCfarExerciseEmailOpened(basePath: string, hCSessionId: string, cfarExerciseId: string): Observable<any> {
    // Init services
    this._overrideConfiguration(basePath);

    // Build the event
    let event: CfarExerciseEmailOpened = {
      occurredDateTime: new Date(),
      cfarExerciseId: cfarExerciseId,
      type: "cfar_exercise_email_opened"
    }
    
    return this._customerService.postCustomerEvents(event, hCSessionId);
  }
  
  // ----------------------------------------------------------
  // PRIVATES METHODS
  // ----------------------------------------------------------
}
