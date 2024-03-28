import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AppState } from "../../ngrx";

import { selectRouteData } from "../../ngrx/router/router.actions";
import { getCurrentLang, getCurrentPartnerId, getCurrentTheme } from "../../ngrx/global/global.selectors";
import * as globalActions from "../../ngrx/global/global.actions";
import { MatDrawerMode } from "@angular/material/sidenav";
import { Theme } from "../../enums";
import { Locales } from "projects/angular-sdk/src/i18n";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Variables } from "../../variables";


@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit, OnDestroy {

  public components: { name: string; link: string; }[] = [];
  public selectedPath!: string;
  public mode!: MatDrawerMode;
  public currentLang!: string;
  public currentTheme!: string;
  public currentPartnerId!: number;
  public version!: string;
  public languages!: string[];
  public themes!: string[];
  public isOpened!: boolean;

  private _unsubcriber: Subject<any> = new Subject<any>();

  constructor(
    private _store: Store<AppState>,
    private _route: ActivatedRoute,
    private _matIconRegistry: MatIconRegistry,
    private _breakpointObserver: BreakpointObserver,
    private _domSanitizer: DomSanitizer
  ) {
    // Working items
    if (!environment.production) {
    }

    // Set the current version
    this.version = environment.version;

    // The languages ​​available depend on the languages ​​supported by the API
    this.languages = Array.from(Locales.keys());

    this.themes = Object.values(Theme);

    // Add SVG icons for each languages
    this.languages.forEach(language => {
      this._matIconRegistry.addSvgIcon("flag_" + language, this._domSanitizer.bypassSecurityTrustResourceUrl("assets/flags/" + language + ".svg"));
    });

    // Set the partnerId in the state
    this._store.dispatch(globalActions.setCurrentPartnerId({ currentPartnerId: this._route.snapshot.params.partnerId }));
  }

  // -------------------------------
  // - LIFE CYCLE HOOKS
  // -------------------------------

  ngOnInit(): void {
    // Update the selectedPath when it's changing
    this._store.pipe(
      select(selectRouteData),
      takeUntil(this._unsubcriber)
    ).subscribe((data: Data) => this.selectedPath = data.path);

    // Update the visibles components when the partnerId has changed
    this._store.pipe(
      select(getCurrentPartnerId),
      takeUntil(this._unsubcriber)
    ).subscribe((partnerId: number) => this._loadPartnerData(partnerId));

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

    // Listener of the size of the screen
    this._breakpointObserver
      .observe(Variables.NAVIGATION_BREAKPOINT)
      .pipe(takeUntil(this._unsubcriber))
      .subscribe(() => {
        // Adjust settings of side nav
        this.mode = this._breakpointObserver.isMatched(Variables.NAVIGATION_BREAKPOINT) ? 'side' : 'over';
        this.isOpened = this._breakpointObserver.isMatched(Variables.NAVIGATION_BREAKPOINT);
      });
  }

  ngOnDestroy(): void {
    this._unsubcriber.next(null);
    this._unsubcriber.complete();
  }

  onScrollToTop(event: any): void {
    document.querySelector('#scroll-anchor')?.scrollTo(0,0);
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
    var components = [];

    this.currentPartnerId = partnerId;

    if (partnerId == 0) {
      this.onSetTheme(Theme.THEME_LIGHT_BLUE);

      components.push({ name: 'CFAR Offer Banner', link: 'cfar-offer-banner' });
      components.push({ name: 'CFAR Offer Banner Large', link: 'cfar-offer-banner-large' });
      components.push({ name: 'CFAR Offer Dialog', link: 'cfar-offer-dialog' });
      components.push({ name: 'CFAR Exercise Flow', link: 'cfar-exercise-flow' });
    } else if (partnerId == 1) {
      this.onSetTheme(Theme.THEME_LIGHT_YELLOW);

      components.push({ name: 'CFAR Offer Dialog', link: 'cfar-offer-dialog' });
      components.push({ name: 'CFAR Exercise Flow', link: 'cfar-exercise-flow' });
    } else {
      this.onSetTheme(Theme.THEME_LIGHT_HOPPER);
      
      components.push({ name: 'CFAR Offer Banner', link: 'cfar-offer-banner' });
      components.push({ name: 'CFAR Offer Banner Large', link: 'cfar-offer-banner-large' });
      components.push({ name: 'CFAR Offer Dialog', link: 'cfar-offer-dialog' });
      components.push({ name: 'CFAR Exercise Flow', link: 'cfar-exercise-flow' });
    }

    this.components = components;
  }
}
