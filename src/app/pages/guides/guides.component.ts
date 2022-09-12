import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subject, takeUntil } from "rxjs";
import { AppState } from "src/app/shared/ngrx";
import { getCurrentPartnerId } from "src/app/shared/ngrx/global/global.selectors";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-guides-page",
  templateUrl: "./guides.component.html",
  styleUrls: ["./guides.component.scss"],
})
export class GuidesPageComponent implements OnInit, OnDestroy {

  public components: { 
    name: string;
    link: string;
    description: string;
  }[] = [];

  private _unsubcriber: Subject<any> = new Subject<any>();
  
  constructor(
    private _store: Store<AppState>,
  ) {
    // Working items
    if (!environment.production) {
    }
  }

  // -------------------------------
  // - LIFE CYCLE HOOKS
  // -------------------------------

  ngOnInit(): void {
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

  // -------------------------------
  // - PRIVATES METHODS
  // -------------------------------

  private _loadPartnerData(partnerId: number): void {
    var components = [];

    if (partnerId == 0) {
      components.push({ 
        name: 'CFAR Offer Banner',
        link: 'cfar-offer-banner',
        description: 'A banner to display offer to the user'
      });
  
      components.push({ 
        name: 'CFAR Offer Banner Large',
        link: 'cfar-offer-banner-large',
        description: 'A large banner to display offer to the user'
      });
  
      components.push({ 
        name: 'CFAR Offer Dialog',
        link: 'cfar-offer-dialog',
        description: 'A dialog to choose different coverage options'
      });
  
      components.push({ 
        name: 'CFAR Exercise Flow',
        link: 'cfar-exercise-flow',
        description: 'A flow that allow user to be refund'
      });
    } else if (partnerId == 1) {
      components.push({ 
        name: 'CFAR Offer Dialog',
        link: 'cfar-offer-dialog',
        description: 'A dialog to choose different coverage options'
      });
  
      components.push({ 
        name: 'CFAR Exercise Flow',
        link: 'cfar-exercise-flow',
        description: 'A flow that allow user to be refund'
      });
    } else {
      components.push({ 
        name: 'CFAR Offer Banner',
        link: 'cfar-offer-banner',
        description: 'A banner to display offer to the user'
      });
  
      components.push({ 
        name: 'CFAR Offer Banner Large',
        link: 'cfar-offer-banner-large',
        description: 'A large banner to display offer to the user'
      });
  
      components.push({ 
        name: 'CFAR Offer Dialog',
        link: 'cfar-offer-dialog',
        description: 'A dialog to choose different coverage options'
      });
  
      components.push({ 
        name: 'CFAR Exercise Flow',
        link: 'cfar-exercise-flow',
        description: 'A flow that allow user to be refund'
      });
    }

    this.components = components;
  }
}
