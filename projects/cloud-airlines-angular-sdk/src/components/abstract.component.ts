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
            accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtjN2FjWmV4bHBvZk1QY3V6UF9HTyJ9.eyJpc3MiOiJodHRwczovL2hvcHBlci1hcGkuYXV0aDAuY29tLyIsInN1YiI6IkJQczlscFdSN2dOR28xS1M5RzBySlhLa1lqSGF6N3BiQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2RldmVsb3BtZW50LmFwaS5ob3BwZXIuY29tIiwiaWF0IjoxNjU0NzgzMzQwLCJleHAiOjE2NTQ4Njk3NDAsImF6cCI6IkJQczlscFdSN2dOR28xS1M5RzBySlhLa1lqSGF6N3BiIiwic2NvcGUiOiJhbGw6Y2ZhciBhbGw6Z2VuZXJhbCBhbGw6cHJpY2VmcmVlemUgYWxsOmtheWFrIGFsbDpmbGlnaHQgYWxsOnBheW1lbnQgYWxsOnVzZXIgYWxsOmV2ZW50IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.frDbTPxaiPd_kt4rPApO1euYXmrCujRLRsHeGGhnTGzt4wiHOFdTM0KCEgNRIpM7rAk7udXRhMHFhPFh_JsyemERG4MoLRRB31hWI_LrG5NFHCbF9rgc5n86vAx3jLocadwctrzD8b02ic9lu_zzA294GD6wGSQo918XaL4DZgLAygC_jxBiGLKlxML2y4jiSmMVBkEp9QoOjj13JT26sZIbQldgJ4w8u7z8dhUggwPQ7VuRO3wJxlQqqHSSnYI0xE3cRIzv3h3yaZwkMfs6_9FbrYQMrkfgIoQoH4A91OsVDHsSOYKGK-Z0Qg2pgx8XRjLamxcWduupOJhrnQSa8A",
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