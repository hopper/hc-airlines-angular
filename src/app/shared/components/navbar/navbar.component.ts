import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { select, Store } from "@ngrx/store";
import { Locales } from "projects/angular-sdk/src/i18n";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Theme } from "../../enums/theme.enum";

import { AppState } from "../../ngrx";
import * as globalActions from "../../ngrx/global/global.actions";
import { getCurrentLang, getCurrentTheme, getCurrentPartnerId } from "../../ngrx/global/global.selectors";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavBarComponent implements OnInit, OnDestroy {

  public currentLang!: string;
  public currentTheme!: string;
  public currentPartnerId!: number;
  public version!: string;
  public languages!: string[];
  public themes!: string[];

  private _unsubcriber: Subject<any> = new Subject<any>();

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _store: Store<AppState>,
  ) {
    // Set the current version
    this.version = environment.version;

    // The languages ​​available depend on the languages ​​supported by the API
    this.languages = Locales.map(x => x.lang);

    this.themes = Object.values(Theme);

    // Add SVG icons for each languages
    this.languages.forEach(language => {
      this._matIconRegistry.addSvgIcon("flag_" + language, this._domSanitizer.bypassSecurityTrustResourceUrl("assets/flags/" + language + ".svg"));
    });
  }

  // -------------------------------
  // - LIFE CYCLE HOOKS
  // -------------------------------

  ngOnInit(): void {
    // Update the current theme when it's changing
    this._store.pipe(
      select(getCurrentTheme),
      takeUntil(this._unsubcriber)
    ).subscribe((currentTheme: string) => this.currentTheme = currentTheme);

    // update the currentLang when it's changing
    this._store.pipe(
      select(getCurrentLang),
      takeUntil(this._unsubcriber)
    ).subscribe((currentLanguage: string) => this.currentLang = currentLanguage);

    // Update the currentTheme when the partnerId has changed
    this._store.pipe(
      select(getCurrentPartnerId),
      takeUntil(this._unsubcriber)
    ).subscribe((partnerId: number) => this._loadPartnerData(partnerId));
  }

  ngOnDestroy(): void {
    this._unsubcriber.next(null);
    this._unsubcriber.complete();
  }
  
  // -------------------------------
  // - PUBLICS METHODS
  // -------------------------------

  onSetTheme(newTheme: string): void {
    this._store.dispatch(globalActions.setCurrentTheme({ currentTheme: newTheme }));
  }

  onSetLanguage(newLanguage: string): void {
    this._store.dispatch(globalActions.setCurrentLang({ currentLang: newLanguage }));
  }

  // -------------------------------
  // - PRIVATES METHODS
  // -------------------------------

  /**
   * FIXME : Load config by partner ?
   * @param partnerId 
   */
  private _loadPartnerData(partnerId: number): void {
    this.currentPartnerId = partnerId;
    if (partnerId == 0) {
      this.onSetTheme(Theme.THEME_LIGHT_BLUE);
    } else if (partnerId == 1) {
      this.onSetTheme(Theme.THEME_LIGHT_YELLOW);
    } else {
      this.onSetTheme(Theme.THEME_LIGHT_HOPPER);
    }
  }
}
