import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AppState } from "../../ngrx";

import { selectRouteData } from "../../ngrx/router/router.actions";
import { getCurrentPartnerId } from "../../ngrx/global/global.selectors";
import * as globalActions from "../../ngrx/global/global.actions";


@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit, OnDestroy {

  public components: { name: string; link: string; }[] = [];
  public selectedPath!: string;

  private _unsubcriber: Subject<any> = new Subject<any>();

  constructor(
    private _store: Store<AppState>,
    private _route: ActivatedRoute,
  ) {
    // Working items
    if (!environment.production) {
    }

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
  }

  ngOnDestroy(): void {
    this._unsubcriber.next(null);
    this._unsubcriber.complete();
  }

  onScrollToTop(event: any): void {
    document.querySelector('#scroll-anchor')?.scrollTo(0,0);
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

    if (partnerId == 0) {
      components.push({ name: 'CFAR Offer Banner', link: 'cfar-offer-banner' });
      components.push({ name: 'CFAR Offer Banner Large', link: 'cfar-offer-banner-large' });
      components.push({ name: 'CFAR Offer Dialog', link: 'cfar-offer-dialog' });
      components.push({ name: 'CFAR Exercise Flow', link: 'cfar-exercise-flow' });
    } else if (partnerId == 1) {
      components.push({ name: 'CFAR Offer Dialog', link: 'cfar-offer-dialog' });
      components.push({ name: 'CFAR Exercise Flow', link: 'cfar-exercise-flow' });
    } else {
      components.push({ name: 'CFAR Offer Banner', link: 'cfar-offer-banner' });
      components.push({ name: 'CFAR Offer Banner Large', link: 'cfar-offer-banner-large' });
      components.push({ name: 'CFAR Offer Dialog', link: 'cfar-offer-dialog' });
      components.push({ name: 'CFAR Exercise Flow', link: 'cfar-exercise-flow' });
    }

    this.components = components;
  }
}
