import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Locales } from '../i18n';
import { TranslateService } from '@ngx-translate/core';
import {
  CfarContractCustomer,
  CfarItinerary,
  CfarOfferCustomer,
  CreateCfarContractCustomerRequest,
  CreateCfarOfferCustomerRequest,
  RequestType,
  UiSource,
  UiVariant,
} from '../apis/hopper-cloud-airline/v1';
import { take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ArrayUtils } from '../utils/array-utils';
import { HcAirlinesError } from '../models/hc-airlines-error';
import { Error } from '../apis/hopper-cloud-airline/v1';
import { ErrorSdkModel } from '../models';
import { LoggerService } from '../services/logger.service';
import { ErrorCode } from '../enums/error-code.enum';

@Directive({
  selector: '[HopperGlobalComponent]',
})
export class GlobalComponent implements OnChanges {
  protected static readonly HTTP_ERROR_UNPROCESSABLE_ENTITY_CODE = 422;

  @Input() currentLang!: string;
  @Input() basePath!: string;
  @Input() imageBasePath?: string;
  @Input() isFakeBackend?: boolean;
  @Input() env?: string;

  @Output() errorOccurred = new EventEmitter();

  public errorCode?: string;
  public errorMessage?: string;

  constructor(
    protected _translateService: TranslateService,
    protected _cdRef: ChangeDetectorRef,
    protected _loggerService: LoggerService,
  ) {
    // Set Labels
    Locales.forEach((data: Object, lang: string) => {
      this._translateService.setTranslation(lang, data, true);
    });

    // Set availables languages
    this._translateService.addLangs(Array.from(Locales.keys()));

    // Set default language
    this._updateLanguage(this._translateService.getBrowserLang() || 'en');
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    this._loggerService.setEnv(this.env);
    this._loggerService.info('sdk initialized, lang:' + this.currentLang);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentLang && changes.currentLang.currentValue) {
      // Update languages
      this._updateLanguage(changes.currentLang.currentValue);
    }
  }

  ngAfterContentChecked(): void {
    this._cdRef.detectChanges();
  }

  // -----------------------------------------------
  // Protected Methods
  // -----------------------------------------------

  protected _getDefaultOffer(offers: CfarOfferCustomer[]): CfarOfferCustomer {
    return offers[0];
  }

  protected _updateLanguage(newLanguage: string): void {
    if (!Locales.has(newLanguage)) {
      this._loggerService.warn('unexpected language ' + newLanguage);
    }
    // Set language for components
    this._translateService.use(newLanguage);
  }

  protected _getHcAirlinesErrorResponse(
    apiError: HttpErrorResponse,
  ): HcAirlinesError {
    const apiErrors = apiError?.error?.errors;

    if (ArrayUtils.isNotEmpty(apiErrors)) {
      const mainApiError = apiErrors[0] as Error;
      // RF009 = Unknown
      return new HcAirlinesError(
        this._extractErrorMessage(mainApiError),
        mainApiError.code || ErrorCode.RF009,
      );
    } else {
      return HcAirlinesError.buildDefault();
    }
  }

  protected _extractErrorMessage(error: Error): string {
    if (error.messages !== undefined) {
      const defaultErrorMessage = error.messages['EN']
        ? error.messages['EN']
        : error.message;
      return error.messages[this.currentLang.toUpperCase()]
        ? error.messages[this.currentLang.toUpperCase()]
        : defaultErrorMessage;
    } else return error.message;
  }

  protected _buildCreateCfarOfferRequest(
    itineraries: CfarItinerary[],
    uiVariant?: UiVariant,
  ): CreateCfarOfferCustomerRequest {
    return {
      itinerary: itineraries,
      requestType: RequestType.Ancillary,
      uiVariant: uiVariant,
    };
  }

  protected _fakeCfarContractId: string =
    '1ecf85ab-211f-68b7-9bb3-4b1a314f1a42';

  protected _buildFakePostCfarOffersResponse(): CfarOfferCustomer[] {
    return [
      {
        id: '1ecf859e-8785-625f-8eda-198d1ce0d6c4',
        premium: '8.00',
        coverage: '57.78',
        coveragePercentage: '80.0',
        currency: 'CAD',
        requestType: 'ancillary',
        contractExpiryDateTime: new Date('2022-07-08T22:00:00Z'),
        createdDateTime: new Date('2022-06-30T09:49:17.762Z'),
        taxesTotal: '2',
        itinerary: {
          passengerPricing: [
            {
              passengerCount: {
                count: 3,
                type: 'adult',
              },
              individualPrice: 'null',
            },
          ],
          currency: 'CAD',
          slices: [
            {
              segments: [
                {
                  originAirport: 'YYZ',
                  destinationAirport: 'YUL',
                  departureDateTime: '2022-07-09T18:00',
                  arrivalDateTime: '2022-07-09T19:14',
                  flightNumber: '894',
                  validatingCarrierCode: 'AC',
                  fareClass: 'economy',
                },
                {
                  originAirport: 'YUL',
                  destinationAirport: 'NCE',
                  departureDateTime: '2022-07-09T20:50',
                  arrivalDateTime: '2022-07-10T10:25',
                  flightNumber: '878',
                  validatingCarrierCode: 'AC',
                  fareClass: 'economy',
                },
              ],
            },
            {
              segments: [
                {
                  originAirport: 'NCE',
                  destinationAirport: 'YUL',
                  departureDateTime: '2022-07-15T13:15',
                  arrivalDateTime: '2022-07-15T15:55',
                  flightNumber: '879',
                  validatingCarrierCode: 'AC',
                  fareClass: 'economy',
                },
                {
                  originAirport: 'YUL',
                  destinationAirport: 'YYZ',
                  departureDateTime: '2022-07-15T17:30',
                  arrivalDateTime: '2022-07-15T18:50',
                  flightNumber: '895',
                  validatingCarrierCode: 'AC',
                  fareClass: 'economy',
                },
              ],
            },
          ],
          ancillaries: [],
          totalPrice: '71.96',
        },
        contents: {
          en: {
            bulletPoints: [
              'Cancel your booking up to <b> 24 hours </b> before departure, no reason required',
              'Receive a <b>cash</b> refund of your flight cost (air transportation charges, taxes, fees and charges, excluding any additional services)',
              'Cancelling is easy via the My Bookings page, refund is provided by HTS',
              'Offer is only available at time of booking and can only be purchased for all passengers',
            ],
            labels: {},
          },
          fr: {
            bulletPoints: [
              "Annulez votre réservation jusqu'à <b>24 heures</b> avant le départ, aucun motif requis",
              "Recevez un remboursement <b>en argent comptant</b> du coût de votre vol (frais de transport aérien, taxes, frais et droits, à l'exclusion de tout service additionnel)",
              'Annulez en toute simplicité sur la page Mes réservations, le remboursement est effectué par Hopper',
              "L'offre est uniquement disponible au moment de la réservation et ne peut être achetée que pour tous les passagers",
            ],
            labels: {},
          },
          zh: {
            bulletPoints: [
              '最迟可在出发前24小时无理由取消订单',
              '获得航班费用的现金退款（航空运输费用、税费和其他费用，额外服务费除外）',
              '您可以通过“我的订单 (My Bookings) 页面轻松取消预订, 退款由HTS提供',
              '优惠仅在预订时有效，且必须为所有乘客购买',
            ],
            labels: {},
          },
        },
        termsConditionsUrl: {
          en: 'https://hopper.com/',
          fr: 'https://hopper.com/fr',
        },
      },
      {
        id: '1ecf859e-8785-625f-8eda-198d1ce0d6c5',
        premium: '10.00',
        coverage: '71.96',
        coveragePercentage: '100.0',
        currency: 'CAD',
        requestType: 'ancillary',
        contractExpiryDateTime: new Date('2022-07-08T22:00:00Z'),
        createdDateTime: new Date('2022-06-30T09:49:17.762Z'),
        taxesTotal: '2',
        itinerary: {
          passengerPricing: [
            {
              passengerCount: {
                count: 3,
                type: 'adult',
              },
              individualPrice: 'null',
            },
          ],
          currency: 'CAD',
          slices: [
            {
              segments: [
                {
                  originAirport: 'YYZ',
                  destinationAirport: 'YUL',
                  departureDateTime: '2022-07-09T18:00',
                  arrivalDateTime: '2022-07-09T19:14',
                  flightNumber: '894',
                  validatingCarrierCode: 'AC',
                  fareClass: 'economy',
                },
                {
                  originAirport: 'YUL',
                  destinationAirport: 'NCE',
                  departureDateTime: '2022-07-09T20:50',
                  arrivalDateTime: '2022-07-10T10:25',
                  flightNumber: '878',
                  validatingCarrierCode: 'AC',
                  fareClass: 'economy',
                },
              ],
            },
            {
              segments: [
                {
                  originAirport: 'NCE',
                  destinationAirport: 'YUL',
                  departureDateTime: '2022-07-15T13:15',
                  arrivalDateTime: '2022-07-15T15:55',
                  flightNumber: '879',
                  validatingCarrierCode: 'AC',
                  fareClass: 'economy',
                },
                {
                  originAirport: 'YUL',
                  destinationAirport: 'YYZ',
                  departureDateTime: '2022-07-15T17:30',
                  arrivalDateTime: '2022-07-15T18:50',
                  flightNumber: '895',
                  validatingCarrierCode: 'AC',
                  fareClass: 'economy',
                },
              ],
            },
          ],
          ancillaries: [],
          totalPrice: '71.96',
        },
        contents: {
          en: {
            bulletPoints: [
              'Cancel your booking up to <b> 24 hours </b> before departure, no reason required',
              'Receive a <b>cash</b> refund of your flight cost (air transportation charges, taxes, fees and charges, excluding any additional services)',
              'Cancelling is easy via the My Bookings page, refund is provided by HTS',
              'Offer is only available at time of booking and can only be purchased for all passengers',
            ],
            labels: {},
          },
          fr: {
            bulletPoints: [
              "Annulez votre réservation jusqu'à <b>24 heures</b> avant le départ, aucun motif requis",
              "Recevez un remboursement <b>en argent comptant</b> du coût de votre vol (frais de transport aérien, taxes, frais et droits, à l'exclusion de tout service additionnel)",
              'Annulez en toute simplicité sur la page Mes réservations, le remboursement est effectué par HTS',
              "L'offre est uniquement disponible au moment de la réservation et ne peut être achetée que pour tous les passagers",
            ],
            labels: {},
          },
          zh: {
            bulletPoints: [
              '最迟可在出发前24小时无理由取消订单',
              '获得航班费用的现金退款（航空运输费用、税费和其他费用，额外服务费除外）',
              '您可以通过“我的订单 (My Bookings) 页面轻松取消预订, 退款由HTS提供',
              '优惠仅在预订时有效，且必须为所有乘客购买',
            ],
            labels: {},
          },
        },
        termsConditionsUrl: {
          en: 'https://hopper.com/',
          fr: 'https://hopper.com/fr',
        },
      },
    ];
  }

  protected _buildCreateCfarContractRequest(
    offer: CfarOfferCustomer,
    uiSource: UiSource,
  ): CreateCfarContractCustomerRequest {
    return {
      offerIds: [offer.id],
      itinerary: offer.itinerary,
      uiSource: uiSource,
    };
  }

  protected _buildFakePostCfarContractsResponse(): CfarContractCustomer {
    return {
      id: this._fakeCfarContractId,
      premium: '10.00',
    };
  }

  // -----------------------------------------------
  // Public Methods
  // -----------------------------------------------

  public getOfferDescription(offer: CfarOfferCustomer): string[] {
    return offer.contents[this.currentLang || 'en']?.bulletPoints;
  }

  public getTCsUrl(offer: CfarOfferCustomer): string {
    if (offer) {
      return offer.termsConditionsUrl[this.currentLang]
        ? offer.termsConditionsUrl[this.currentLang]
        : offer.termsConditionsUrl['en'];
    }

    return '';
  }

  // *********************
  // Errors
  // *********************

  public handleApiError(error: HttpErrorResponse, errorEndPoint: string) {
    const builtError = this._getHcAirlinesErrorResponse(error);
    this._loggerService.error(error.message, {}, error);

    if (builtError !== null) {
      this.errorCode = builtError.code;

      if (this.errorCode !== undefined && this.errorCode !== null) {
        // Push the error context for the client
        this.pushSdkError(errorEndPoint, builtError);
      }
    }
  }

  /**
   * Get Error Label and emit the event
   * @param errorEndPoint
   * @param builtError
   * @param takeErrorLabelFromUIProject Must be set to false in the future
   */
  public pushSdkError(
    errorEndPoint: string,
    builtError: HcAirlinesError,
    takeErrorLabelFromUIProject: boolean = false,
  ) {
    let emitWithUIProjectLabel = true;
    let errorMessage = builtError.message;

    if (!takeErrorLabelFromUIProject) {
      if (errorMessage !== null && errorMessage.length > 0) {
        emitWithUIProjectLabel = false;
        this.errorMessage = errorMessage;

        const errorSdk: ErrorSdkModel = {
          endpoint: errorEndPoint,
          errorCode: builtError.code,
          errorDescription: errorMessage,
        };
        this.errorOccurred.emit(errorSdk);
      }
    }

    if (emitWithUIProjectLabel) {
      this._translateService
        .get('COMMON.ERROR_CODE.' + builtError.code)
        .pipe(take(1))
        .subscribe((errorDescription) => {
          this.errorMessage = errorDescription;

          const errorSdk: ErrorSdkModel = {
            endpoint: errorEndPoint,
            errorCode: builtError.code,
            errorDescription: errorDescription,
          };
          this.errorOccurred.emit(errorSdk);
        });
    }
  }
}
