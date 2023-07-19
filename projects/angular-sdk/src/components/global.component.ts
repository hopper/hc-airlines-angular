import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { Locales } from "../i18n";
import { TranslateService } from '@ngx-translate/core';
import { I18n } from "../i18n/i18n.interface";
import { DateAdapter } from "@angular/material/core";
import { CfarContractCustomer, CfarItinerary, CfarOfferCustomer, CfarPriceType, CfarStatus, CreateCfarContractCustomerRequest, CreateCfarOfferCustomerRequest, GetCfarExerciseCustomerResponse, PassengerType, RequestType, UiSource, UiVariant } from "../apis/hopper-cloud-airline/v1";
import { CountryCode } from "../enums/country-code.enum";
import { take } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { ArrayUtils } from "../utils/array-utils";
import { HcAirlinesError } from "../models/hc-airlines-error";
import { Error } from '../apis/hopper-cloud-airline/v1';
import { ErrorCode } from "../enums/error-code.enum";
import { ErrorSdkModel } from "../models";

@Directive({
    selector: '[HopperGlobalComponent]'
})
export class GlobalComponent implements OnChanges {
    
    protected static readonly HTTP_ERROR_UNPROCESSABLE_ENTITY_CODE = 422;

    @Input() currentLang!: string;
    @Input() basePath!: string;
    @Input() imageBasePath?: string;
    @Input() isFakeBackend?: boolean;

    @Output() errorOccurred = new EventEmitter();

    public mapCountries: Map<string, string>;

    constructor(
        protected adapter: DateAdapter<any>,
        protected translateService: TranslateService
    ) {
        // Set Labels
        Locales.forEach((locale: I18n) => {
            this.translateService.setTranslation(locale.lang, locale.data, true);
        });

        // Set availables languages
        this.translateService.addLangs(Locales.map(i18n => i18n.lang));

        // Set default language
        this.translateService.use(this.translateService.getBrowserLang() || 'en');

        // Set default language for datepickers
        this.adapter.setLocale(this.translateService.getBrowserLang());

        // Init map
        this.mapCountries = new Map<string, string>();
    }
    
    // -----------------------------------------------
    // Life Cycle Hooks
    // -----------------------------------------------

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.currentLang && changes.currentLang.currentValue) {
            // Update languages
            this._updateLanguage(changes.currentLang.currentValue);

            // Update countries labels
            this._setCountriesLabels();
        }
    }

    // -----------------------------------------------
    // Protected Methods
    // -----------------------------------------------

    protected _getDefaultOffer(offers: CfarOfferCustomer[]): CfarOfferCustomer {
        // return offers.reduce((previous: CfarOfferCustomer, current: CfarOfferCustomer) => {
        //     return +previous?.premium < +current?.premium ? previous : current;
        // });

        return offers[0];
    }

    protected _updateLanguage(newLanguage: string): void {
        // Set language for components
        this.translateService.use(newLanguage);

        // Set language for datepickers
        this.adapter.setLocale(newLanguage);
    }

    protected _setCountriesLabels(): void {
        const countries = Object.keys(CountryCode);

        countries.forEach(countryCode => {
            // Get Label and fill the map
            this.translateService.get('COMMON.COUNTRY.' + countryCode)
                .pipe(take(1))
                .subscribe(label => this.mapCountries.set(countryCode, label));            
        });
        
        // Sort the map by label (alphabetical order)
        this.mapCountries = new Map([...this.mapCountries.entries()].sort((a, b) => a[1].localeCompare(b[1])));
    }

    protected _getHcAirlinesErrorResponse(apiError: HttpErrorResponse): HcAirlinesError {
        const apiErrors = apiError?.error?.errors;
            
        if (ArrayUtils.isNotEmpty(apiErrors)) {
            const mainApiError = apiErrors[0] as Error;
            // RF009 = Unknown
            return new HcAirlinesError(mainApiError.message, mainApiError.code || ErrorCode.RF009);
        } else {
            console.error(apiError);
            return HcAirlinesError.buildDefault();
        }
    }

    protected _buildCreateCfarOfferRequest(itineraries: CfarItinerary[], uiVariant?: UiVariant): CreateCfarOfferCustomerRequest {
        return {
          itinerary: itineraries,
          requestType: RequestType.Ancillary,
          uiVariant: uiVariant
        };
      }
    
    protected _fakeCfarContractId: string = "1ecf85ab-211f-68b7-9bb3-4b1a314f1a42";
  
    protected _buildFakePostCfarOffersResponse(): CfarOfferCustomer[] {   
        return [
            {
                id: "1ecf859e-8785-625f-8eda-198d1ce0d6c4",
                premium: "8.00",
                coverage: "57.78",
                coveragePercentage: "80.0",
                currency: "CAD",
                requestType: "ancillary",
                contractExpiryDateTime: new Date("2022-07-08T22:00:00Z"),
                createdDateTime: new Date("2022-06-30T09:49:17.762Z"),
                taxesTotal: '2',
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
                    "currency": "CAD",
                    slices: [
                    {
                        segments: [
                        {
                            originAirport: "YYZ",
                            destinationAirport: "YUL",
                            departureDateTime: "2022-07-09T18:00",
                            arrivalDateTime: "2022-07-09T19:14",
                            flightNumber: "894",
                            validatingCarrierCode: "AC",
                            fareClass: "economy"
                        },
                        {
                            originAirport: "YUL",
                            destinationAirport: "NCE",
                            departureDateTime: "2022-07-09T20:50",
                            arrivalDateTime: "2022-07-10T10:25",
                            flightNumber: "878",
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
                            flightNumber: "879",
                            validatingCarrierCode: "AC",
                            fareClass: "economy"
                        },
                        {
                            originAirport: "YUL",
                            destinationAirport: "YYZ",
                            departureDateTime: "2022-07-15T17:30",
                            arrivalDateTime: "2022-07-15T18:50",
                            flightNumber: "895",
                            validatingCarrierCode: "AC",
                            fareClass: "economy"
                        }
                        ]
                    }
                    ],
                    ancillaries: [],
                    totalPrice: "71.96"
                },
                contents: {
                    "en": {
                        bulletPoints: [
                            "Cancel your booking up to <b> 24 hours </b> before departure, no reason required",
                            "Receive a <b>cash</b> refund of your flight cost (air transportation charges, taxes, fees and charges, excluding any additional services)",
                            "Cancelling is easy via the My Bookings page, refund is provided by Hopper",
                            "Offer is only available at time of booking and can only be purchased for all passengers"
                        ],
                        labels: {}
                    },
                    "fr": {
                        bulletPoints: [
                            "Annulez votre réservation jusqu'à <b>24 heures</b> avant le départ, aucun motif requis",
                            "Recevez un remboursement <b>en argent comptant</b> du coût de votre vol (frais de transport aérien, taxes, frais et droits, à l'exclusion de tout service additionnel)",
                            "Annulez en toute simplicité sur la page Mes réservations, le remboursement est effectué par Hopper",
                            "L'offre est uniquement disponible au moment de la réservation et ne peut être achetée que pour tous les passagers"
                        ],
                        labels: {}
                    },
                    "zh": {
                        bulletPoints: [
                            "最迟可在出发前24小时无理由取消订单",
                            "获得航班费用的现金退款（航空运输费用、税费和其他费用，额外服务费除外）",
                            "您可以通过“我的订单 (My Bookings) 页面轻松取消预订, 退款由Hopper提供",
                            "优惠仅在预订时有效，且必须为所有乘客购买"
                        ],
                        labels: {}
                    }
                },
                termsConditionsUrl: {
                    "en": "https://hopper.com/",
                    "fr": "https://hopper.com/fr"
                }
            },
            {
                id: "1ecf859e-8785-625f-8eda-198d1ce0d6c5",
                premium: "10.00",
                coverage: "71.96",
                coveragePercentage: "100.0",
                currency: "CAD",
                requestType: "ancillary",
                contractExpiryDateTime: new Date("2022-07-08T22:00:00Z"),
                createdDateTime: new Date("2022-06-30T09:49:17.762Z"),
                taxesTotal: '2',
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
                            flightNumber: "894",
                            validatingCarrierCode: "AC",
                            fareClass: "economy"
                        },
                        {
                            originAirport: "YUL",
                            destinationAirport: "NCE",
                            departureDateTime: "2022-07-09T20:50",
                            arrivalDateTime: "2022-07-10T10:25",
                            flightNumber: "878",
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
                            flightNumber: "879",
                            validatingCarrierCode: "AC",
                            fareClass: "economy"
                        },
                        {
                            originAirport: "YUL",
                            destinationAirport: "YYZ",
                            departureDateTime: "2022-07-15T17:30",
                            arrivalDateTime: "2022-07-15T18:50",
                            flightNumber: "895",
                            validatingCarrierCode: "AC",
                            fareClass: "economy"
                        }
                        ]
                    }
                    ],
                    ancillaries: [],
                    totalPrice: "71.96"
                },
                contents: {
                    "en": {
                        bulletPoints: [
                            "Cancel your booking up to <b> 24 hours </b> before departure, no reason required",
                            "Receive a <b>cash</b> refund of your flight cost (air transportation charges, taxes, fees and charges, excluding any additional services)",
                            "Cancelling is easy via the My Bookings page, refund is provided by Hopper",
                            "Offer is only available at time of booking and can only be purchased for all passengers"
                        ],
                        labels: {}
                    },
                    "fr": {
                        bulletPoints: [
                            "Annulez votre réservation jusqu'à <b>24 heures</b> avant le départ, aucun motif requis",
                            "Recevez un remboursement <b>en argent comptant</b> du coût de votre vol (frais de transport aérien, taxes, frais et droits, à l'exclusion de tout service additionnel)",
                            "Annulez en toute simplicité sur la page Mes réservations, le remboursement est effectué par Hopper",
                            "L'offre est uniquement disponible au moment de la réservation et ne peut être achetée que pour tous les passagers"
                        ],
                        labels: {}
                    },
                    "zh": {
                        bulletPoints: [
                            "最迟可在出发前24小时无理由取消订单",
                            "获得航班费用的现金退款（航空运输费用、税费和其他费用，额外服务费除外）",
                            "您可以通过“我的订单 (My Bookings) 页面轻松取消预订, 退款由Hopper提供",
                            "优惠仅在预订时有效，且必须为所有乘客购买"
                        ],
                        labels: {}
                    }
                },
                termsConditionsUrl: {
                    "en": "https://hopper.com/",
                    "fr": "https://hopper.com/fr"
                }
            }
        ];
    }

    protected _buildCreateCfarContractRequest(offer: CfarOfferCustomer, uiSource: UiSource): CreateCfarContractCustomerRequest {
        return {
          offerIds: [offer.id],
          itinerary: offer.itinerary,
          uiSource: uiSource
        };
    }

    protected _buildFakePostCfarContractsResponse(): CfarContractCustomer {
        return {
            id: this._fakeCfarContractId,
            premium: "10.00"
        };
    }

    protected _fakeCfarContractExerciseId: string = "1ecf85ab-211f-68b7-9bb3-f1d35b1c2045";

    protected _buildFakeCfarExercisesResponse(): GetCfarExerciseCustomerResponse {
      return {
        id: this._fakeCfarContractExerciseId,
        contractId: this._fakeCfarContractId,
        itinerary: {
          passengerPricing: [
            {
              passengerCount: {
                count: 3,
                type: PassengerType.Adult
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
                  flightNumber: "894",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                },
                {
                  originAirport: "YUL",
                  destinationAirport: "NCE",
                  departureDateTime: "2022-07-09T20:50",
                  arrivalDateTime: "2022-07-10T10:25",
                  flightNumber: "878",
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
                  flightNumber: "879",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                },
                {
                  originAirport: "YUL",
                  destinationAirport: "YYZ",
                  departureDateTime: "2022-07-15T17:30",
                  arrivalDateTime: "2022-07-15T18:50",
                  flightNumber: "895",
                  validatingCarrierCode: "AC",
                  fareClass: "economy"
                }
              ]
            }
          ],
          ancillaries: [],
          totalPrice: "71.96"
        },
        cfarPrices: [{
            coverage: '19.26',
            nbPax: 3,
            passengerType: PassengerType.Adult,
            premium: '8',
            cfarPriceType: CfarPriceType.Ancillary
        }],
        cashRefundAllowance: "57.78",
        hopperRefundCurrency: "CAD",
        contractExpiryDateTime: new Date("2022-07-08T18:00Z"),
        status: CfarStatus.Created
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
            return offer.termsConditionsUrl[this.currentLang] ? 
                offer.termsConditionsUrl[this.currentLang] : offer.termsConditionsUrl['en'];
        }

        return '';
    }

    public pushSdkError(error: any, errorEndPoint: string) {
        const builtError = this._getHcAirlinesErrorResponse(error);
        if (builtError !== null) {
            const errorCode = builtError.code;
            if (errorCode !== undefined && errorCode !== null) {
                // Get Error Label and emit the event
                this.translateService.get('COMMON.ERROR_CODE.' + errorCode)
                .pipe(take(1))
                .subscribe(errorDescription => {
                    const errorSdk: ErrorSdkModel = {endpoint: errorEndPoint, errorCode: errorCode, errorDescription: errorDescription}
                    this.errorOccurred.emit(errorSdk);
                });
            }
        }
    }
}