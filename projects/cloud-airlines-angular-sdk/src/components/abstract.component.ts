import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { CancelForAnyReasonCFARService } from "../apis/hopper-cloud-airline/v1";
import { Locales } from "../i18n";
import { TranslateService } from '@ngx-translate/core';
import { I18n } from "../i18n/i18n.interface";
import { DateAdapter } from "@angular/material/core";

@Directive({
    selector: '[HopperAbstractComponent]'
})
export abstract class AbstractComponent implements OnChanges {
    
    @Input() currentLang!: string;

    constructor(
        protected adapter: DateAdapter<any>,
        protected translateService: TranslateService,
        protected cancelForAnyReasonCFARService: CancelForAnyReasonCFARService
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

        // Init API configuration
        this.cancelForAnyReasonCFARService.configuration = {
            accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtjN2FjWmV4bHBvZk1QY3V6UF9HTyJ9.eyJpc3MiOiJodHRwczovL2hvcHBlci1hcGkuYXV0aDAuY29tLyIsInN1YiI6IkJQczlscFdSN2dOR28xS1M5RzBySlhLa1lqSGF6N3BiQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2RldmVsb3BtZW50LmFwaS5ob3BwZXIuY29tIiwiaWF0IjoxNjU0ODU0MTI5LCJleHAiOjE2NTQ5NDA1MjksImF6cCI6IkJQczlscFdSN2dOR28xS1M5RzBySlhLa1lqSGF6N3BiIiwic2NvcGUiOiJhbGw6Y2ZhciBhbGw6Z2VuZXJhbCBhbGw6cHJpY2VmcmVlemUgYWxsOmtheWFrIGFsbDpmbGlnaHQgYWxsOnBheW1lbnQgYWxsOnVzZXIgYWxsOmV2ZW50IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.hmf_pRt9xW9BX67xnpH1ooJckSRqFuwCz3f5k-yOmgoF8f62SK7B3-cWrgg2P2HSlXmebOWclzTzuj1Sg-HE1joPYES7K8dkpHa-od2M5kDOktIie2lGrpWbz2BbivdsTuI_K5kIr1quhMuQPKs4hjBsb7p8_Q6WIcdx4gZwV6QeB8FS01zgcU_uq55gzvjG548QyT_JdPix_URTOB24yLNKZqAUvyOuZ-YCKwmHSWpszLP2XKg84nlcSVlfabCuQI3cv9iE0oF7qHjG9DhyD4Je_kfOyMe4hws4AuYZyFXkGCrWSfc2CP2LSOUrLX_-mu5BLHIg71RP-zMjf9IATQ",
            selectHeaderAccept: (accepts: ['application/json']) => 'application/json',
            selectHeaderContentType: (contentsTypes: ['application/json']) => 'application/json',
            isJsonMime: (mime: 'application/json') => true
        };
    }
    
    // -----------------------------------------------
    // Life Cycle Hooks
    // -----------------------------------------------

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.currentLang && changes.currentLang.currentValue) {
            // update current language
            this.translateService.use(changes.currentLang.currentValue);
        }
    }

    // -----------------------------------------------
    // Publics Methods
    // -----------------------------------------------

    // -----------------------------------------------
    // Privates Methods
    // -----------------------------------------------
}