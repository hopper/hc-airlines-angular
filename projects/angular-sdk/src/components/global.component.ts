import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Locales } from "../i18n";
import { TranslateService } from '@ngx-translate/core';
import { I18n } from "../i18n/i18n.interface";
import { DateAdapter } from "@angular/material/core";
import { CfarContractCustomer, CfarItinerary, CfarOfferCustomer, CreateCfarContractCustomerRequest, CreateCfarOfferCustomerRequest, RequestType, UiSource } from "../apis/hopper-cloud-airline/v1";
import { CountryCode } from "../enums/country-code.enum";
import { take } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { ArrayUtils } from "../utils/array-utils";
import { HcAirlinesError } from "../models/hc-airlines-error";
import { Error } from '../apis/hopper-cloud-airline/v1';
import { ErrorCode } from "../enums/error-code.enum";

@Directive({
    selector: '[HopperGlobalComponent]'
})
export class GlobalComponent implements OnChanges {
    
    protected static readonly HTTP_ERROR_UNPROCESSABLE_ENTITY_CODE = 422;

    @Input() currentLang!: string;
    @Input() basePath!: string;
    @Input() imageBasePath?: string;
    @Input() isFakeBackend?: boolean;

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

    protected _getCheapestOffer(offers: CfarOfferCustomer[]): CfarOfferCustomer {
        return offers.reduce((previous: CfarOfferCustomer, current: CfarOfferCustomer) => {
            return +previous?.premium < +current?.premium ? previous : current;
        });
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
        const apiErrors = apiError.error.errors;
            
        if (ArrayUtils.isNotEmpty(apiErrors)) {
            const mainApiError = apiErrors[0] as Error;
            return new HcAirlinesError(mainApiError.message, mainApiError.code || ErrorCode.DEFAULT);
        } else {
            console.error(apiError);
            return HcAirlinesError.buildDefault();
        }
    }

    protected _buildCreateCfarOfferRequest(itineraries: CfarItinerary[]): CreateCfarOfferCustomerRequest {
        return {
          itinerary: itineraries,
          requestType: RequestType.Ancillary
        };
      }
    
    protected _buildFakePostCfarOffersResponse(): CfarOfferCustomer[] {   
        return [
            {
                id: "1ecf859e-8785-625f-8eda-198d1ce0d6c4",
                premium: "8.00",
                coverage: "57.78",
                currency: "CAD",
                requestType: "ancillary",
                toUsdExchangeRate: "0.7744877537996369201410187302118379",
                contractExpiryDateTime: new Date("2022-07-08T22:00:00Z"),
                createdDateTime: new Date("2022-06-30T09:49:17.762Z"),
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
                offerDescription: {
                    "en": [
                    "Add the flexibility to cancel your flight for any reason up to <b> 24 hours </b> before departure",
                    "Cancel and get a refund of your flight base fare and taxes, excluding additional services (paid seats, paid bags...)",
                    "Get instant resolution, no forms or claims required"
                    ],
                    "fr": [
                    "Offrez-vous la flexibilité d'une annulation sans aucune justification jusqu'à <b>24 heures</b> avant le départ",
                    "Annulez et recevez un rembousement du prix de votre vol avec les taxes, à l'exclusion des services additionnels (sièges payant, bagages supplémentaires...)",
                    "Traitement instantané, aucun formulaire ou dossier à remplir"
                    ],
                    "es": ["Date la flexibilidad de una cancelación sin justificación hasta <b>24 horas</b> antes de la salida",
                    "Cancela y recibe un reembolso del precio de tu vuelo con impuestos, excluyendo servicios adicionales (asientos pagados, equipaje adicional, etc.)",
                    "Procesamiento instantáneo, sin formularios ni archivos para completar"
                    ],
                    "zh": [
                    "在出发前 <b>24 小时</b> 之前，让自己在没有任何理由的情况下灵活取消",
                    "取消并获得含税的航班价格退款，不包括额外服务（付费座位、额外行李等）",
                    "即时处理，无需填写表格或文件"
                    ]
                }
            },
            {
                id: "1ecf859e-8785-625f-8eda-198d1ce0d6c5",
                premium: "10.00",
                coverage: "71.96",
                currency: "CAD",
                requestType: "ancillary",
                toUsdExchangeRate: "0.7744877537996369201410187302118379",
                contractExpiryDateTime: new Date("2022-07-08T22:00:00Z"),
                createdDateTime: new Date("2022-06-30T09:49:17.762Z"),
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
                offerDescription: {
                    "en": [
                    "Add the flexibility to cancel your flight for any reason up to <b> 24 hours </b> before departure",
                    "Cancel and get a refund of your flight base fare and taxes, excluding additional services (paid seats, paid bags...)",
                    "Get instant resolution, no forms or claims required"
                    ],
                    "fr": [
                    "Offrez-vous la flexibilité d'une annulation sans aucune justification jusqu'à <b>24 heures</b> avant le départ",
                    "Annulez et recevez un rembousement du prix de votre vol avec les taxes, à l'exclusion des services additionnels (sièges payant, bagages supplémentaires...)",
                    "Traitement instantané, aucun formulaire ou dossier à remplir"
                    ],
                    "es": ["Date la flexibilidad de una cancelación sin justificación hasta <b>24 horas</b> antes de la salida",
                    "Cancela y recibe un reembolso del precio de tu vuelo con impuestos, excluyendo servicios adicionales (asientos pagados, equipaje adicional, etc.)",
                    "Procesamiento instantáneo, sin formularios ni archivos para completar"
                    ],
                    "zh": [
                    "在出发前 <b>24 小时</b> 之前，让自己在没有任何理由的情况下灵活取消",
                    "取消并获得含税的航班价格退款，不包括额外服务（付费座位、额外行李等）",
                    "即时处理，无需填写表格或文件"
                    ]
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
            id: "1ecf85ab-211f-68b7-9bb3-4b1a314f1a42",
            premium: "10.00"
        };
    }
    // -----------------------------------------------
    // Public Methods
    // -----------------------------------------------

    public getOfferDescription(offer: CfarOfferCustomer) {
        return offer.offerDescription[this.currentLang];
    }
}