import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppState } from './shared/ngrx';
import { getCurrentTheme } from './shared/ngrx/global/global.selectors';
import * as globalActions from "./shared/ngrx/global/global.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  
  public currentTheme!: string;
  private _unsubcriber: Subject<any> = new Subject<any>();
  
  constructor(
    private _store: Store<AppState>
  ) {

    // Set Default theme
    this._store.dispatch(globalActions.setCurrentTheme({ currentTheme: environment.defaultTheme }));
  }

  // -------------------------------
  // - LIFE CYCLE HOOKS
  // -------------------------------

  ngOnInit(): void {
    // Update the current theme when it's changing
    this._store.pipe(
      select(getCurrentTheme),
      takeUntil(this._unsubcriber)
    ).subscribe((currentTheme: string) => {
      // Remove active theme
      document.body.classList.remove(this.currentTheme);  

      // Activate the new theme
      this.currentTheme = currentTheme;
      document.body.classList.add(this.currentTheme);
    });
  }

  ngOnDestroy(): void {
    this._unsubcriber.next(null);
    this._unsubcriber.complete();
  }
}
