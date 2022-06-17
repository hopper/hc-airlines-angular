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
            accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtjN2FjWmV4bHBvZk1QY3V6UF9HTyJ9.eyJpc3MiOiJodHRwczovL2hvcHBlci1hcGkuYXV0aDAuY29tLyIsInN1YiI6IkJQczlscFdSN2dOR28xS1M5RzBySlhLa1lqSGF6N3BiQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2RldmVsb3BtZW50LmFwaS5ob3BwZXIuY29tIiwiaWF0IjoxNjU1NDU5NTE1LCJleHAiOjE2NTU1NDU5MTUsImF6cCI6IkJQczlscFdSN2dOR28xS1M5RzBySlhLa1lqSGF6N3BiIiwic2NvcGUiOiJhbGw6Y2ZhciBhbGw6Z2VuZXJhbCBhbGw6cHJpY2VmcmVlemUgYWxsOmtheWFrIGFsbDpmbGlnaHQgYWxsOnBheW1lbnQgYWxsOnVzZXIgYWxsOmV2ZW50IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.XlCtTubugTvm1cJ2EX8tSAvUllVIjf-bN23mPqQdScRkOZdWdA8mGqwnAqzPTp8yNLuKuXoUttHvY7_Dp7fzgUzREOpChE9csv1O0HddQC8L0blYBNYB7sfiAB_Rm7alLOdPCqU9Ar8Vhxk7srJh74fQMI87cIwNEb9eOObCTuVnqqkoh-PfVsasD1znUzKXQVECJ1ElP-KT_Jbo4ZFSAiKO2hdtIqVL4hp567kt9xo-Eq7JMYfWg1QfIt7rFLkTJCyXwD1x2NESjkoufA4E8bZbDcpp_5EivDheN41iOQ7eOOIEFmMtgMVReWfBqUymLUoMGS4Pjun5Sw5OngX5tQ",
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