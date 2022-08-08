import { Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CfarContract, CfarItinerary, CheckCfarContractExerciceVerificationCodeResponse, CheckCfarContractExerciseVerificationCodeRequest, CreateRefundAuthorizationRequest, CreateRefundRecipientRequest, CreateRefundRequest, RefundAuthorization, RefundRecipient } from '../../apis/hopper-cloud-airline/v1';
import { GlobalComponent } from '../global.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperProxyService } from '../../services/hopper-proxy.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ExerciseActionStep } from '../../enums/exercise-action-step.enum';
import { SendCfarContractExerciceVerificationCodeResponse } from '../../apis/hopper-cloud-airline/v1';
import { ApiHttpUtils, StringUtils } from '../../public-api';

@Component({
  selector: 'hopper-cfar-exercise-dialog',
  templateUrl: './cfar-exercise-dialog.component.html',
  styleUrls: ['./cfar-exercise-dialog.component.scss']
})
export class CfarExerciseDialogComponent extends GlobalComponent implements OnInit {

  public selectedRefundMethod?: 'ftc' | 'cash';
  public cfarContract!: CfarContract;
  public refundMethods!: { value: 'ftc' | 'cash', label: string }[];
  public isHopperRefund!: boolean;
  public isLoading!: boolean;
  public isLoadingHyperwallet!: boolean;
  public isSidebar!: boolean;
  public isValidHyperwalletSubmit!: boolean;
  public isErrorHyperwallet!: boolean;
  public userEmail!: string;
  public cfarContractUserEmail!: string;
  public errorMessage!: string;

  // Mandatory data
  private _hCSessionId!: string;
  private _contractId!: string;
  private _hyperwalletUrl!: string;
  private _navigationStep!: ExerciseActionStep;

  // Forms
  public checkVerificationCodeForm!: FormGroup;
  public step2Form!: FormGroup;

  @ViewChild('dialogContentAnchor') public anchor!: ElementRef;
  @ViewChild('stepper') public stepper!: MatStepper;

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _dialogRef: MatDialogRef<CfarExerciseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _hopperProxyService: HopperProxyService,
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _datePipe: DatePipe
  ) {
    super(_adapter, _translateService);

    // Mandatory data
    this._hCSessionId = data.hCSessionId;
    this._contractId = data.contractId;
    this._hyperwalletUrl = data.hyperwalletUrl;

    // Optional data
    this.isSidebar = data.isSidebar;

    // Update parents @inputs manually (Dialog limitation)
    this.isFakeBackend = data.isFakeBackend;
    this.currentLang = data.currentLang;
    this.basePath = data.basePath;

    // Create material icon for refundable ticket
    this._matIconRegistry.addSvgIcon("refundable_ticket", this._domSanitizer.bypassSecurityTrustResourceUrl("assets/refundable-ticket.svg"));
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    // Update languages/labels manually (dialog limitation)
    this._updateLanguage(this.currentLang);

    // Update countries labels manually (dialog limitation)
    this._setCountriesLabels();

    // Init Navigation Context
    this._initNavigationContext();

    // Load the contract and the associated exercise
    //this._loadContractExercise();

    this.refundMethods = [
      { value: 'ftc', label: 'FTC' },
      { value: 'cash', label: 'CASH' }
    ];
    
    this._initForms();
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public onClose(): void {
    this._dialogRef.close();
  }

  public onSelectRefundType(type: string): void {
    this.isHopperRefund = type == 'hopper';
  }

  public onScrollToTop(event: StepperSelectionEvent): void {
    // Scroll to top of the stepper when step changes (timer due to rendering delay)
    setTimeout(() => this.anchor.nativeElement.scrollTo(0,0), 0);
  }

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
    if (this.isHopperRefund) {
      // Go to the next step
      this.stepper.next();
    } else {
      // Send a notification to the client
      this._dialogRef.close("AIRLINE_REFUND");
    }
  }

  public onSubmitStep2(): void {
    // Go to the next step
    this.stepper.next();

    this.isErrorHyperwallet = false;
    this.isLoadingHyperwallet = true;

    if (this.isFakeBackend) {
      this.isValidHyperwalletSubmit = true;

      setTimeout(() => {
        this.isLoadingHyperwallet = true;
        this.userEmail = "sample@hopper.com";
        this.stepper.next();
      }, 2000);
    } else {
      this._hopperProxyService
        .postRefundRecipients(this.basePath, this._hCSessionId, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateRefundRecipientRequest()))
        .pipe(take(1))
        .subscribe(
          (refundRecipient: RefundRecipient) => {
            const userId = refundRecipient.id;
            const url = this._hyperwalletUrl + userId + "/" + this.currentLang + ".min.js";
            const mainScript = document.createElement('script');
  
            mainScript.type = 'text/javascript';
            mainScript.async = true;
            mainScript.src = url;
            mainScript.onerror = (error) => {
              console.error('Error loading Hyperwallet script', error);
              this.isLoadingHyperwallet = false;
              this.isErrorHyperwallet = true;
            }
            mainScript.onload = () => {
              const request: CreateRefundAuthorizationRequest = {
                userId: userId
              };
          
              this._hopperProxyService
                .postRefundAuthorizations(this.basePath, this._hCSessionId, ApiTranslatorUtils.modelToSnakeCase(request))
                .pipe(take(1))
                .subscribe(
                  (authorization: RefundAuthorization) => {
                    const script = document.createElement('script');
                      
                    script.type = 'text/javascript';
                    script.async = false;
                    script.innerHTML =  `
                      window.HWWidgets.initialize((onSuccess, onFailure) => {
                        onSuccess("${authorization.token}");
                      });
            
                      window.HWWidgets.transferMethods.configure({
                        template: 'plain',
                        el: document.getElementById("TransferMethodUI"),
                        transferMethodConfiguration: {
                          profileType: 'INDIVIDUAL'
                        },
                        onComplete: function(trmObject, completionResult) {
                          if (trmObject) {
                            window.dispatchEvent(new CustomEvent('hopper-hyperwallet', {
                              'detail': {
                                trmObject: trmObject,
                                completionResult: completionResult
                              }}
                            ));
                          }
                        }
                      }).display();
                    `;
            
                    document.body.appendChild(script);
                    this.isLoadingHyperwallet = false;
                  },
                  (error: any) => {
                    this.isLoadingHyperwallet = false;
                    this.isErrorHyperwallet = true;
                    console.error(error);
                  }
                );
            };
  
            document.head.appendChild(mainScript);
          },
          (error: any) => {
            console.error(error);
            this.isLoadingHyperwallet = false;
            this.isErrorHyperwallet = true;
          }
        );
    }
  }

  @HostListener('window:hopper-hyperwallet', ['$event']) 
  public checkHyperwalletCallback(event: CustomEvent): void {
    this.isValidHyperwalletSubmit = true;

    const request: CreateRefundRequest = {
      transferMethodId: event.detail.trmObject.token
    };

    this._hopperProxyService
      .postRefunds(this.basePath, this._hCSessionId, ApiTranslatorUtils.modelToSnakeCase(request))
      .pipe(take(1))
      .subscribe(
        () => {
          this.isLoadingHyperwallet = false;
          this.userEmail = event.detail.trmObject.email;
          this.stepper.next();
        },
        (error) => {
          console.error(error);
          this.isLoadingHyperwallet = false;
        }
      );
  }



  // -----------------------------------------------
  // Navigation
  // -----------------------------------------------

  public isSendVerificationCodeStep(): Boolean {
    return this._navigationStep === ExerciseActionStep.SEND_VERIFICATION_STEP;
  }

  public isCheckVerificationCodeStep(): Boolean {
    return this._navigationStep === ExerciseActionStep.CHECK_VERIFICATION_STEP;
  }

  public isProcessCfarExerciseStep(): Boolean {
    return this._navigationStep === ExerciseActionStep.PROCESS_CFAR_EXERCISE_STEP;
  }

  public onSendVerificationCode(): void {
    this._purgeErrorMessageContext();
    if (this.isFakeBackend) {
      this.setStep(ExerciseActionStep.CHECK_VERIFICATION_STEP);
      // TODO complete fake backend mode
      //this.cfarContract = this._loadContractExercise();
    } else {
      this.isLoading = true;

      this._hopperProxyService
        .postSendCfarExerciseVerificationCode(this.basePath, this._hCSessionId, this._contractId, ApiTranslatorUtils.modelToSnakeCase({}))
        .pipe(take(1))
        .subscribe(
          (sendVerificationCodeResult: SendCfarContractExerciceVerificationCodeResponse) => {
            const result = ApiTranslatorUtils.modelToCamelCase(sendVerificationCodeResult) as SendCfarContractExerciceVerificationCodeResponse;

            this._contractId = result.contractId;
            this.cfarContractUserEmail = result.anonymizedEmailAddress;
            this.setStep(ExerciseActionStep.CHECK_VERIFICATION_STEP);

            this.isLoading = false;
          },
          (error: any) => {
            console.error(error);
            this.isLoading = false;
          }
        );
    }
  }

  public isCheckVerificationCodeFormValid(): boolean {
    return this.checkVerificationCodeForm.valid;
  }

  public onCheckVerificationCode(): void {
    this._purgeErrorMessageContext();
    if (this.isFakeBackend) {
      this.setStep(ExerciseActionStep.PROCESS_CFAR_EXERCISE_STEP);
      // TODO complete fake backend mode
      //this.cfarContract = this._loadContractExercise();
    } else {
      this.isLoading = true;

      this._hopperProxyService
        .postCheckCfarExerciseVerificationCode(this.basePath, this._hCSessionId, this._contractId, ApiTranslatorUtils.modelToSnakeCase(this._buildCheckExerciseVerificationCodeRequest()))
        .pipe(take(1))
        .subscribe(
          (checkVerificationCodeResult: CheckCfarContractExerciceVerificationCodeResponse) => {
            const result = ApiTranslatorUtils.modelToCamelCase(checkVerificationCodeResult) as CheckCfarContractExerciceVerificationCodeResponse;

            if (result.compliant) {                    
              this._contractId = result.contractId;

              // Load the contract and the associated exercise
              this.setStep(ExerciseActionStep.PROCESS_CFAR_EXERCISE_STEP);
              this._loadContractExercise();
            } else {
              this.errorMessage = 'Incorrect code';
              console.log(result)
              this.isLoading = false;
            }     
          },
          (error: any) => {
            const airlinesError = ApiHttpUtils.manageErrorResponse(error);
            console.log(airlinesError.toString());
            this.errorMessage = airlinesError.message;  // Nota : We must use the code and retrieve the corresponding label with i18n
            this.isLoading = false;
          }
        );
    }
  }

  private _initNavigationContext(): void {
    this._navigationStep = ExerciseActionStep.SEND_VERIFICATION_STEP;
  }

  private setStep(currentStep: ExerciseActionStep): void {
    this._navigationStep = currentStep;
  }
  
  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  private _loadContractExercise(): void {
    this._purgeErrorMessageContext();
    if (this.isFakeBackend) {
      this.cfarContract = this._buildFakeCfarContractExercisesResponse();
      // Force to true for the MVP
      this.isHopperRefund = true;
    } else {
      this.isLoading = true;

      // Get the contract with the exercise
      this._hopperProxyService
        .getCfarContractsId(this.basePath, this._hCSessionId, this._contractId)
        .pipe(take(1))
        .subscribe(
          (cfarContract: CfarContract) => {
            const result = ApiTranslatorUtils.modelToCamelCase(cfarContract) as CfarContract;

            this.cfarContract = result;

            this.isLoading = false;
            
            // Hopper offer by default
            this.isHopperRefund = true;
          },
          (error: any) => {
            console.error(error);
            this.isLoading = false;
          }
        );
    }
  }

  private _buildFakeCfarContractExercisesResponse(): CfarContract {
    return {
      id: "1ecf85ab-211f-68b7-9bb3-4b1a314f1a42",
      offers: [
        {
          id: "1ecf85a8-1c43-6fad-9bb3-0dca2ca4e73a",
          premium: "14.00",
          coverage: "57.78",
          currency: "CAD",
          requestType: "ancillary",
          toUsdExchangeRate: "0.7743486179425866960712648520064921",
          contractExpiryDateTime: new Date("2022-07-08T22:00:00Z"),
          createdDateTime: new Date("2022-06-30T09:53:34.950Z"),
          itinerary: {
            passengerPricing: [
              {
                passengerCount: {
                  count: 3,
                  type: "adult"
                },
                individualPrice: "null"
              }
            ],
            currency: "CAD",
            slices: [
              {
                segments: [
                  {
                    originAirport: "YYZ",
                    destinationAirport: "YUL",
                    departureDateTime: "2022-07-09T18:00",
                    arrivalDateTime: "2022-07-09T19:14",
                    flightNumber: "AC894",
                    validatingCarrierCode: "AC",
                    fareClass: "economy"
                  },
                  {
                    originAirport: "YUL",
                    destinationAirport: "NCE",
                    departureDateTime: "2022-07-09T20:50",
                    arrivalDateTime: "2022-07-10T10:25",
                    flightNumber: "AC878",
                    validatingCarrierCode: "AC",
                    fareClass: "economy"
                  }
                ]
              },
              {
                segments: [
                  {
                    originAirport: "NCE",
                    destinationAirport: "YUL",
                    departureDateTime: "2022-07-15T13:15",
                    arrivalDateTime: "2022-07-15T15:55",
                    flightNumber: "AC879",
                    validatingCarrierCode: "AC",
                    fareClass: "economy"
                  },
                  {
                    originAirport: "YUL",
                    destinationAirport: "YYZ",
                    departureDateTime: "2022-07-15T17:30",
                    arrivalDateTime: "2022-07-15T18:50",
                    flightNumber: "AC895",
                    validatingCarrierCode: "AC",
                    fareClass: "economy"
                  }
                ]
              }
            ],
            ancillaries: [],
            totalPrice: "7170.96"
          },
          offerDescription: [
            "Add the flexibility to cancel your flight for any reason up to 24 hours before departure",
            "Cancel and get a refund of your flight base fare and taxes, excluding additional services (paid seats, paid bags...)",
            "Get instant resolution, no forms or claims required"
          ],
          extAttributes: {}
        }
      ],
      itinerary: {
        passengerPricing: [
          {
            passengerCount: {
              count: 3,
              type: "adult"
            },
            individualPrice: "null"
          }
        ],
        currency: "CAD",
        slices: [
          {
            segments: [
              {
                originAirport: "YYZ",
                destinationAirport: "YUL",
                departureDateTime: "2022-07-09T18:00",
                arrivalDateTime: "2022-07-09T19:14",
                flightNumber: "AC894",
                validatingCarrierCode: "AC",
                fareClass: "economy"
              },
              {
                originAirport: "YUL",
                destinationAirport: "NCE",
                departureDateTime: "2022-07-09T20:50",
                arrivalDateTime: "2022-07-10T10:25",
                flightNumber: "AC878",
                validatingCarrierCode: "AC",
                fareClass: "economy"
              }
            ]
          },
          {
            segments: [
              {
                originAirport: "NCE",
                destinationAirport: "YUL",
                departureDateTime: "2022-07-15T13:15",
                arrivalDateTime: "2022-07-15T15:55",
                flightNumber: "AC879",
                validatingCarrierCode: "AC",
                fareClass: "economy"
              },
              {
                originAirport: "YUL",
                destinationAirport: "YYZ",
                departureDateTime: "2022-07-15T17:30",
                arrivalDateTime: "2022-07-15T18:50",
                flightNumber: "AC895",
                validatingCarrierCode: "AC",
                fareClass: "economy"
              }
            ]
          }
        ],
        ancillaries: [],
        totalPrice: "71.96"
      },
      contractExercise: {
        id: '123456',
        contractId: '123456789',
        exerciseInitiatedDateTime: new Date(),
        hopperRefund: '57.78',
        hopperRefundMethod: 'cash',
        extAttributes: {},
        airlineRefundAllowance: '47.78',
        airlineRefundMethod: 'cash'
      },
      coverage: "57.78",
      premium: "14.00",
      currency: "CAD",
      createdDateTime: new Date("2022-06-30T09:54:55.989Z"),
      expiryDateTime: new Date("2022-07-08T18:00Z"),
      status: "created",
      extAttributes: {}
    };
  }

  private _purgeErrorMessageContext() {
    this.errorMessage = '';
  }

  public displayErrorMessageBlock(): boolean {
    return StringUtils.isNotEmpty(this.errorMessage);
  }

  private _initForms(): void {
    this._purgeErrorMessageContext();
    
    this.checkVerificationCodeForm = this._formBuilder.group({
      verificationCode: [null, [Validators.pattern('[0-9]{6}'), Validators.required]]
    });

    this.step2Form = this._formBuilder.group({
      firstName: new FormControl(null, [Validators.required]),
      middleName: new FormControl(null),
      lastName: new FormControl(null, [Validators.required]),
      dateOfBirth: new FormControl({ value: new Date(), disabled: true }, [Validators.required]),
      addressLine1: new FormControl(null, [Validators.required]),
      addressLine2: new FormControl(null),
      city: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required])
    });
  }

  private _buildCreateRefundRecipientRequest(): CreateRefundRecipientRequest {
    return {
      firstName: this.step2Form.get('firstName')?.value,
      lastName: this.step2Form.get('lastName')?.value,
      dateOfBirth: this._datePipe.transform(this.step2Form.get('dateOfBirth')?.value, 'yyyy-MM-dd') || '',
      address: this.step2Form.get('addressLine1')?.value + ', ' + this.step2Form.get('addressLine2')?.value,
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
}
