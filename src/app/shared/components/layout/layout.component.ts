import { Component, OnDestroy, OnInit } from "@angular/core";
import { Data } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AppState } from "../../ngrx";
import { selectRouteData } from "../../ngrx/router/router.actions";

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
    private _store: Store<AppState>
  ) {
    this.components.push({ name: 'CFAR Offer Banner', link: 'cfar-offer-banner' });
    this.components.push({ name: 'CFAR Offer Dialog', link: 'cfar-offer-dialog' });
    this.components.push({ name: 'CFAR Exercise Dialog [WIP]', link: 'cfar-exercise-dialog' });
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
  }

  ngOnDestroy(): void {
    this._unsubcriber.next();
    this._unsubcriber.complete();
  }

  onScrollToTop(event: any): void {
    document.querySelector('#scroll-anchor')?.scrollTo(0,0);
  }
}
