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
    @Input() isFakeBackend!: boolean;

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
            accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtjN2FjWmV4bHBvZk1QY3V6UF9HTyJ9.eyJpc3MiOiJodHRwczovL2hvcHBlci1hcGkuYXV0aDAuY29tLyIsInN1YiI6IkJQczlscFdSN2dOR28xS1M5RzBySlhLa1lqSGF6N3BiQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2RldmVsb3BtZW50LmFwaS5ob3BwZXIuY29tIiwiaWF0IjoxNjU1NzI5MjQ0LCJleHAiOjE2NTU4MTU2NDQsImF6cCI6IkJQczlscFdSN2dOR28xS1M5RzBySlhLa1lqSGF6N3BiIiwic2NvcGUiOiJhbGw6Y2ZhciBhbGw6Z2VuZXJhbCBhbGw6cHJpY2VmcmVlemUgYWxsOmtheWFrIGFsbDpmbGlnaHQgYWxsOnBheW1lbnQgYWxsOnVzZXIgYWxsOmV2ZW50IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.VNC8GABOBPicc3bHyB23zVH81oJ5jCk3qALx-_oOv3yaZSPTX8EMEegZu6S2WOnaD6Pa5hISyJEKXCnYoENn2M8Bo4kRUV_8PsrEQj8GtlczcV-UUMA_8v6514ysfzb4_sU-P6eRnoptomCRmqkcdZuBlTOO6peUvazoO1GjVxnqS_t6yaL8St4JJ1jt_hJaSSSbWtkseUoW5CxMurf2BOI5kaFDDbX2Xkm-3IIgI7lAkgbo4j6SeZ9LgdfAbe-rG0GAoPzpqtXbvey0w1B-UJv22T6W8qoubvmFtYD-vrNZZ2mY2i2PQh_zxq-u7ABwT_bSgc8bXhr4Jfrlw2X2jw",
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