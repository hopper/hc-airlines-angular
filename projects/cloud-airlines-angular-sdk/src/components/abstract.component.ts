import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Locales } from "../i18n";
import { TranslateService } from '@ngx-translate/core';
import { I18n } from "../i18n/i18n.interface";
import { DateAdapter } from "@angular/material/core";

@Directive({
    selector: '[HopperAbstractComponent]'
})
export abstract class AbstractComponent implements OnChanges {
    
    @Input() currentLang!: string;
    @Input() basePath!: string;
    @Input() isFakeBackend!: boolean;

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
}