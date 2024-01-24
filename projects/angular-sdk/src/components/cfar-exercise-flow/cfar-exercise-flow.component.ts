import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { CfarStatus, CfarItinerary, CheckCfarContractExerciceVerificationCodeResponse, CheckCfarContractExerciseVerificationCodeRequest, CreateRefundAuthorizationRequest, CreateRefundRecipientRequest, InitiateRefundRequest, RefundAuthorization, RefundRecipient, GetCfarExerciseCustomerResponse, InitiateRefundResponse, ExerciseStepResult } from '../../apis/hopper-cloud-airline/v1';
import { GlobalEventComponent } from '../global-event.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DatePipe } from '@angular/common';
import { SendCfarContractExerciceVerificationCodeResponse } from '../../apis/hopper-cloud-airline/v1';
import { HopperCfarService } from '../../services/hopper-cfar.service';
import { HopperEventsService } from '../../services/hopper-events.service';
import { LoggerService } from '../../services/logger.service';
import { ErrorCode, ExerciseActionStep } from '../../enums';

@Component({
  selector: 'hopper-cfar-exercise-flow',
  templateUrl: './cfar-exercise-flow.component.html',
  styleUrls: ['./cfar-exercise-flow.component.scss']
})
export class CfarExerciseFlowComponent extends GlobalEventComponent implements OnInit {

  public selectedRefundMethod?: 'ftc' | 'cash';
  public cfarExercise!: GetCfarExerciseCustomerResponse;
  public isLoading!: boolean;
  public isLoadingHyperwallet!: boolean;
  public isSidebar!: boolean;
  public isErrorHyperwallet!: boolean;
  public isVerificationCodeAlreadySent!: boolean;
  public userEmail!: string;
  public cfarContractUserEmail!: string;

  private _navigationStep!: ExerciseActionStep;
  private _errorTimer: number = 1000;
  private _verificationCode!: string;

  @Input() hCSessionId!: string;
  @Input() exerciseId!: string;
  @Input() hyperwalletUrl!: string;
  @Input() contactFormUrl!: string;

  @Output() flowCompleted = new EventEmitter();
  @Output() stepCompleted = new EventEmitter();

  // Fake values
  private _fakeVerificationTokenId: string = "1ed2d2bb-8885-67a4-968f-81c642e12735";
  private _minLengthVerificationCode: number = 6;

  // Forms
  public checkVerificationCodeForm!: UntypedFormGroup;
  public step2Form!: UntypedFormGroup;

  @ViewChild('stepper') public stepper!: MatStepper;

  constructor(
    protected override _adapter: DateAdapter<any>,
    protected override _translateService: TranslateService,
    protected override _hopperEventService: HopperEventsService,
    protected override _cdRef: ChangeDetectorRef,
    protected override _loggerService: LoggerService,
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _hopperCfarService: HopperCfarService,
    private _formBuilder: UntypedFormBuilder,
    private _datePipe: DatePipe,
  ) {
    super(_adapter, _translateService, _hopperEventService, _cdRef, _loggerService);

    // Create material icon for refundable ticket
    this._matIconRegistry.addSvgIcon(
      "refundable_ticket",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        (this.imageBasePath || '') + "assets/refundable-ticket.svg"
      )
    );
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    super.ngOnInit();
    // Init Navigation Context
    this._initNavigationContext();

    this._initForms();

    // Int events context and build corresponding events
    this.initCfarExerciseEventParameters(this.hCSessionId, this.exerciseId);
    this.createCfarExercisePortalDisplayEvent();
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public getNbPassengers(itinerary: CfarItinerary): number {
    let nbPassengers = 0;

    if (itinerary && itinerary?.passengerPricing) {
      itinerary.passengerPricing.forEach(pp => nbPassengers += pp.passengerCount.count);
    } 

    return nbPassengers;
  }

  public getMapPassengers(itinerary: CfarItinerary): Map<string, number> {
    const mapPassengers = new Map<string, number>();

    itinerary.passengerPricing.forEach(pp => {
      const passengerType = pp.passengerCount.type;
      const passengerCount = pp.passengerCount.count;

      mapPassengers.set(passengerType, passengerCount + (mapPassengers.get(passengerType) || 0));
    });

    return mapPassengers;
  }

  public asIsOrder(a: any, b: any): number {
    return 1;
  }

  public onSubmitStep1(): void {
    // Go to the next step
    this._validCurrentStep();
  }

  public onSubmitStep2(): void {
    this._purgeErrorContext();

    this.isErrorHyperwallet = false;
    this.isLoadingHyperwallet = true;
    // this.isValidStep2 = false;

    if (this.isFakeBackend) {
      // this.isValidHyperwalletSubmit = true;

      // Go to the next step
      this._validCurrentStep();

      setTimeout(() => {
        this.isLoadingHyperwallet = false;
        this.userEmail = "sample@hopper.com";

        // Go to the next step
        this._validCurrentStep();

        // The flow is completed
        this.flowCompleted.emit(this._fakeVerificationTokenId);
      }, 2000);
    } else {
      this._hopperCfarService
        .postRefundRecipients(this.basePath, this.hCSessionId, this._verificationCode, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateRefundRecipientRequest()))
        .pipe(take(1))
        .subscribe({
          next: (refundRecipient: RefundRecipient) => {
            // Events management
            this.createCfarExerciseCustomerDataCompleteEvent(ExerciseStepResult.Success)

            // this.isValidStep2 = true;

            setTimeout(() => {
              // Go to the next step
              this._validCurrentStep();
            }, 0);
            
            const userId = refundRecipient.id;
            const url = this.hyperwalletUrl + userId + "/" + this.currentLang + ".v2_4_5.min.js";
            // const url = this.hyperwalletUrl + userId + "/" + this.currentLang + ".min.js";
            const mainScript = document.createElement('script');
  
            mainScript.type = 'text/javascript';
            mainScript.async = true;
            mainScript.src = url;
            mainScript.onerror = (error) => {
              // Events management
              this.createCfarExercisePortalCompleteEvent(ExerciseStepResult.TechnicalError);

              // Datadog event
              this._loggerService.error(`[Cfar Exercise Flow] - onSubmitStep2 / postRefundRecipients - error: ${error}`);

              this.isLoadingHyperwallet = false;
              this.isErrorHyperwallet = true;
            }
            mainScript.onload = () => {
              const request: CreateRefundAuthorizationRequest = {
                userId: userId
              };
          
              this._hopperCfarService
                .postRefundAuthorizations(this.basePath, this.hCSessionId, this._verificationCode, ApiTranslatorUtils.modelToSnakeCase(request))
                .pipe(take(1))
                .subscribe({
                  next: (authorization: RefundAuthorization) => {
                    const script = document.createElement('script');
                      
                    script.type = 'text/javascript';
                    script.async = false;
                    script.innerHTML =  `
                      window.HWWidgets.initialize((onSuccess, onFailure) => {
                        onSuccess("${authorization.token}");
                      });
            
                      window.HWWidgets.transferMethods.configure({
                        "template": 'plain',
                        el: document.getElementById("TransferMethodUI")
                      }).create({
                        profileType: 'INDIVIDUAL',
                        country: 'CA',
                        currency: 'CAD'
                      });

                      window.HWWidgets.events.on("widget:transfermethods:completed", (trmObject, completionResult) => {
                        if (trmObject) {
                          window.dispatchEvent(new CustomEvent('hopper-hyperwallet', {
                            'detail': {
                              trmObject: trmObject,
                              completionResult: completionResult
                            }}
                          ));
                        }
                      });
                    `;
            
                    document.body.appendChild(script);
                    this.isLoadingHyperwallet = false;
              
                    // Events management
                    this.createCfarExercisePortalCompleteEvent(ExerciseStepResult.Success)
                  },
                  error: (error: any) => {
                    this.handleApiError(error, "exercise")

                    this.isLoadingHyperwallet = false;
                    this.isErrorHyperwallet = true;
              
                    // Events management
                    this.createCfarExercisePortalCompleteEvent(ExerciseStepResult.TechnicalError);
                    
                    this._loggerService.error(`[Cfar Exercise Flow] - onSubmitStep2 / postRefundAuthorizations - error: ${error}`);

                    // Scroll on the error message
                    this.stepCompleted.emit(this._errorTimer);
                  }
              });
            };
  
            document.head.appendChild(mainScript);
          },
          error: (error: any) => {
            this.handleApiError(error, "exercise")
  
            this.isLoadingHyperwallet = false;
            this.isErrorHyperwallet = true;

            // Events management
            this.createCfarExerciseCustomerDataCompleteEvent(ExerciseStepResult.Failure)
  
            // Scroll on the error message
            this.stepCompleted.emit(this._errorTimer);
          }
        });
    }
  }

  @HostListener('window:hopper-hyperwallet', ['$event']) 
  public checkHyperwalletCallback(event: CustomEvent): void {
    this._purgeErrorContext();

    // this.isValidHyperwalletSubmit = true;

    const request: InitiateRefundRequest = {
      transferMethodId: event.detail.trmObject.token
    };

    this._hopperCfarService
      .postInitiateRefund(this.basePath, this.hCSessionId, this._verificationCode, ApiTranslatorUtils.modelToSnakeCase(request))
      .pipe(take(1))
      .subscribe({
        next: (initiateRefundResponse: InitiateRefundResponse) => {
          const result = ApiTranslatorUtils.modelToCamelCase(initiateRefundResponse) as InitiateRefundResponse;
          const redirectionToken = result.redirectionToken;

          this.isLoadingHyperwallet = false;
          this.userEmail = event.detail.trmObject.email;
          
          // Go to the next step
          this._validCurrentStep();

          // Events management
          if (redirectionToken !== null && redirectionToken.length > 0) {
            this.createCfarExerciseCallbackLaunchedEvent(ExerciseStepResult.Success)
          } else {
            this.createCfarExerciseCallbackLaunchedEvent(ExerciseStepResult.Failure)
          }

          // The flow is completed
          this.flowCompleted.emit(redirectionToken);
        },
        error: (error) => {
          this.handleApiError(error, "exercise")
          
          this.isLoadingHyperwallet = false;

          // Events management
          this.createCfarExercisePortalCompleteEvent(ExerciseStepResult.TechnicalError);

          this._loggerService.error(`[Cfar Exercise Flow] - checkHyperwalletCallback - error: ${error}`);

          // Scroll on the error message
          this.stepCompleted.emit(this._errorTimer);
        }
      });
  }

  public isSendVerificationCodeStep(): Boolean {
    return this._navigationStep === ExerciseActionStep.SEND_VERIFICATION_STEP;
  }

  public isCheckVerificationCodeStep(): Boolean {
    return this._navigationStep === ExerciseActionStep.CHECK_VERIFICATION_STEP;
  }

  public isProcessCfarExerciseStep(): Boolean {
    return this._navigationStep === ExerciseActionStep.PROCESS_CFAR_EXERCISE_STEP;
  }

  public isCheckVerificationCodeFormValid(): boolean {
    return this.checkVerificationCodeForm.valid;
  }

  public isCfarContractExercised(): boolean {
    return this.cfarExercise ? this.cfarExercise.status === CfarStatus.Confirmed : false;
  }

  public onSendVerificationCode(): void {
    this._purgeErrorContext();

    if (this.isFakeBackend) {
      this.cfarContractUserEmail = "sample@hopper.com";
      this._setStep(ExerciseActionStep.CHECK_VERIFICATION_STEP);
    } else {
      this.isLoading = true;

      this._hopperCfarService
        .postSendCfarExerciseVerificationCode(this.basePath, this.hCSessionId, this.exerciseId, ApiTranslatorUtils.modelToSnakeCase({}))
        .pipe(take(1))
        .subscribe({
          next: (sendVerificationCodeResult: SendCfarContractExerciceVerificationCodeResponse) => {
            const result = ApiTranslatorUtils.modelToCamelCase(sendVerificationCodeResult) as SendCfarContractExerciceVerificationCodeResponse;

            this.exerciseId = result.exerciseId;
            this.cfarContractUserEmail = result.anonymizedEmailAddress;
            this._setStep(ExerciseActionStep.CHECK_VERIFICATION_STEP);

            this.createCfarExerciseVerificationSentEvent();

            this.isLoading = false;
          },
          error: (error: any) => {
            this.handleApiError(error, "exercise");

            // Code already sent
            if (this.errorCode === ErrorCode.EX037) {
              this.isVerificationCodeAlreadySent = true;
            }

            this.isLoading = false;

            // Scroll on the error message
            this.stepCompleted.emit(this._errorTimer);
          }
        });
    }
  }

  public onCheckVerificationCode(): void {
    this._purgeErrorContext();

    if (this.isFakeBackend) {
      const request = this._buildCheckExerciseVerificationCodeRequest();

      if (request.verificationCode && request.verificationCode?.length >= this._minLengthVerificationCode) {
        this._loadContractExercise();
      } else {
        // Invalid verification code
        this.errorCode = ErrorCode.EX019;              
      }
    } else {
      this.isLoading = true;

      const request = ApiTranslatorUtils.modelToSnakeCase(this._buildCheckExerciseVerificationCodeRequest());

      this._hopperCfarService
        .postCheckCfarExerciseVerificationCode(this.basePath, this.hCSessionId, this.exerciseId, request)
        .pipe(take(1))
        .subscribe({
          next: (checkVerificationCodeResult: CheckCfarContractExerciceVerificationCodeResponse) => {
            const result = ApiTranslatorUtils.modelToCamelCase(checkVerificationCodeResult) as CheckCfarContractExerciceVerificationCodeResponse;

            if (result.compliant) {                    
              this.exerciseId = result.exerciseId;

              // Save the verificationCode
              this._verificationCode = this.checkVerificationCodeForm.get('verificationCode')?.value,

              // Events management
              this.updateCfarExerciseIdForEvent(this.exerciseId);
              this.createCfarExerciseVerificationCompleteEvent(ExerciseStepResult.Success);

              // Load the contract and the associated exercise
              this._loadContractExercise();
            } else {
              // Invalid verification code
              this.errorCode = ErrorCode.EX019;
              this.isLoading = false;

              // Events management
              this.createCfarExerciseVerificationCompleteEvent(ExerciseStepResult.Failure)
            }     
          },
          error: (error: any) => {
            this.handleApiError(error, "exercise")

            this.isLoading = false;

            // Events management
            this.createCfarExerciseVerificationCompleteEvent(ExerciseStepResult.TechnicalError);

            // Scroll on the error message
            this.stepCompleted.emit(this._errorTimer);
          }
        });
    }
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  private _loadContractExercise(): void {
    this._purgeErrorContext();
    this._setStep(ExerciseActionStep.PROCESS_CFAR_EXERCISE_STEP);

    if (this.isFakeBackend) {
      this.cfarExercise = this._buildFakeCfarExercisesResponse();
    } else {
      this.isLoading = true;

      // Get the contract with the exercise
      this._hopperCfarService
        .getCfarExercises(this.basePath, this.hCSessionId, this._verificationCode)
        .pipe(take(1))
        .subscribe({
          next: (cfarExercise: GetCfarExerciseCustomerResponse) => {
            const result = ApiTranslatorUtils.modelToCamelCase(cfarExercise) as GetCfarExerciseCustomerResponse;

            this.cfarExercise = result;

            this.isLoading = false;
          },
          error: (error: any) => {
            this.handleApiError(error, "exercise")

            this.isLoading = false;

            // Scroll on the error message
            this.stepCompleted.emit(this._errorTimer);
          }
        });
    }
  }

  private _initNavigationContext(): void {
    this._navigationStep = ExerciseActionStep.SEND_VERIFICATION_STEP;
  }

  private _setStep(currentStep: ExerciseActionStep): void {
    this._navigationStep = currentStep;
  }

  private _purgeErrorContext() {
    this.errorCode = undefined;
    this.errorMessage = undefined;
    this.isVerificationCodeAlreadySent = false;
  }

  private _initForms(): void {
    this._purgeErrorContext();
    
    this.checkVerificationCodeForm = this._formBuilder.group({
      verificationCode: [null, [Validators.pattern('[0-9]{6}'), Validators.required]]
    });

    this.step2Form = this._formBuilder.group({
      firstName: new UntypedFormControl(null, [Validators.required]),
      middleName: new UntypedFormControl(null),
      lastName: new UntypedFormControl(null, [Validators.required]),
      dateOfBirth: new UntypedFormControl(null, [Validators.required]),
      addressLine1: new UntypedFormControl(null, [Validators.required]),
      addressLine2: new UntypedFormControl(),
      city: new UntypedFormControl(null, [Validators.required]),
      country: new UntypedFormControl(null, [Validators.required]),
      state: new UntypedFormControl(null, [Validators.required]),
      zip: new UntypedFormControl(null, [Validators.required])
    });
  }

  private _buildCreateRefundRecipientRequest(): CreateRefundRecipientRequest {
    return {
      firstName: this.step2Form.get('firstName')?.value,
      lastName: this.step2Form.get('lastName')?.value,
      dateOfBirth: this._datePipe.transform(this.step2Form.get('dateOfBirth')?.value, 'yyyy-MM-dd') || '',
      addressFirstLine: this.step2Form.get('addressLine1')?.value,
      addressSecondLine: this.step2Form.get('addressLine2')?.value?.length > 0 ? this.step2Form.get('addressLine2')?.value : undefined,
      city: this.step2Form.get('city')?.value,
      stateProvince: this.step2Form.get('state')?.value,
      country: this.step2Form.get('country')?.value,
      postalCode: this.step2Form.get('zip')?.value
    };
  }

  private _buildCheckExerciseVerificationCodeRequest(): CheckCfarContractExerciseVerificationCodeRequest {
    return {
      verificationCode: this.checkVerificationCodeForm.get('verificationCode')?.value
    };
  }

  private _validCurrentStep(): void {
    if (this.stepper) {
      if (this.stepper.selected) {
        // complete the current step
        this.stepper.selected.completed = true;
      }

      // move to next step
      this.stepper.next();
    }
  }
}
