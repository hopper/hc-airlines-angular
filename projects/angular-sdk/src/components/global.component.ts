import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Locales } from "../i18n";
import { TranslateService } from '@ngx-translate/core';
import { I18n } from "../i18n/i18n.interface";
import { DateAdapter } from "@angular/material/core";
import { CfarOfferCustomer } from "../apis/hopper-cloud-airline/v1";
import { CountryCode } from "../enums/country-code.enum";
import { take } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { ArrayUtils } from "../utils/array-utils";
import { HcAirlinesError } from "../models/hc-airlines-error";
import { Error } from '../apis/hopper-cloud-airline/v1';

@Directive({
    selector: '[HopperGlobalComponent]'
})
export class GlobalComponent implements OnChanges {
    
    protected static readonly HTTP_ERROR_UNPROCESSABLE_ENTITY_CODE = 422;

    @Input() currentLang!: string;
    @Input() basePath!: string;
    @Input() isFakeBackend!: boolean;

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
        this.translateService.use(this.translateService.getBrowserLang());

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
        if (apiError.status == GlobalComponent.HTTP_ERROR_UNPROCESSABLE_ENTITY_CODE) {
            const apiErrors = apiError.error.errors;
            
            if (ArrayUtils.isNotEmpty(apiErrors)) {
                const mainApiError = apiErrors[0] as Error;
                return new HcAirlinesError(mainApiError.message, mainApiError.code);
            } else {
                console.error(apiError);
            }
        } else {
            console.error(apiError);
        }

        return HcAirlinesError.buildDefault();
    }
}