import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CfarContractCustomer, CfarItinerary, CfarOfferCustomer, CreateCfarContractCustomerRequest, CreateCfarOfferCustomerRequest, RequestType, UiSource, UiVariant } from '../../apis/hopper-cloud-airline/v1';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { GlobalComponent } from '../global.component';
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperCfarService } from '../../services/hopper-cfar.service';
import { HopperEventsService } from '../../services/hopper-events.service';

@Component({
  selector: 'hopper-cfar-offer-dialog',
  templateUrl: './cfar-offer-dialog.component.html',
  styleUrls: ['./cfar-offer-dialog.component.scss']
})
export class CfarOfferDialogComponent extends GlobalComponent implements OnInit, OnChanges {

  public cfarOffers!: CfarOfferCustomer[];
  public selectedCfarOffer!: CfarOfferCustomer;
  public isLoading!: boolean;
  public errorCode?: string;

  private _hCSessionId!: string;
  private _itineraries!: CfarItinerary[];

  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _dialogRef: MatDialogRef<CfarOfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _hopperCfarService: HopperCfarService,
    private _hopperEventService: HopperEventsService
  ) {
    super(_adapter, _translateService);

    // Mandatory data
    this._hCSessionId = data.hCSessionId;

    // Optional data
    this._itineraries = data.itineraries;
    this.cfarOffers = data.cfarOffers;

    // Update parents @inputs manually (Dialog limitation)
    this.isFakeBackend = data.isFakeBackend;
    this.currentLang = data.currentLang;
    this.basePath = data.basePath;
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    // Update languages/labels manually (dialog limitation)
    this._updateLanguage(this.currentLang);

    if (this.isFakeBackend) {
      this.cfarOffers = this._buildFakePostCfarOffersResponse();
      this.selectedCfarOffer = this._getCheapestOffer(this.cfarOffers);
    } else if (this.cfarOffers && this.cfarOffers?.length > 0) {
      this.selectedCfarOffer = this._getCheapestOffer(this.cfarOffers);
    } else {
      this.initCfarOffers();      
    }
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public onClose(): void {
    //Create an event
    this.createDenyPurchaseEvent();
    // Close the window
    this._dialogRef.close();
  }

  public onSubmit(): void {
    this.isLoading = true;

    // Create CFAR Contract
    this._hopperCfarService
      .postCfarContracts(this.basePath, this._hCSessionId, this.currentLang, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarContractRequest(this.selectedCfarOffer, UiSource.Takeover)))
      .pipe(take(1))
      .subscribe({
        next: (cfarContract: CfarContractCustomer) => {
          this._dialogRef.close(ApiTranslatorUtils.modelToCamelCase(cfarContract) as CfarContractCustomer);
        },
        error: (error) => {
          const builtError = this._getHcAirlinesErrorResponse(error);
          this.errorCode = builtError.code;
          
          this.isLoading = false;
        }
      });
  }

  public onSelectOffer(cfarOffer: CfarOfferCustomer): void {
    this.selectedCfarOffer = cfarOffer;
  }

  public onOpenTermsAndConditions(): void {
    this.createTermsAndConditionsEvent();
  }

  public computePercentage(offer: CfarOfferCustomer): number {
    if (offer) {
      const coverage = Number.parseFloat(offer.coverage);
      const totalPrice = Number.parseFloat(offer.itinerary.totalPrice);
  
      return coverage / (totalPrice || 1.0);
    }

    return 0;
  }

  public getPricePerTraveler(offer: CfarOfferCustomer): number {
    var nbTravelers = 0;
    
    offer.itinerary.passengerPricing.forEach(pp => {
      nbTravelers += pp.passengerCount.count
    });

    return +offer.premium / (nbTravelers || 1);
  }

  // -----------------------------------------------
  // Protected Methods
  // -----------------------------------------------

  protected initCfarOffers(): void {
    this.isLoading = true;
    
    this._hopperCfarService
    .postCfarOffers(this.basePath, this._hCSessionId, this.currentLang, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest(this._itineraries)))
    .pipe(take(1))
    .subscribe({
      next: (cfarOffers) => {
        let results: CfarOfferCustomer[] = [];

        if (cfarOffers) {
          cfarOffers.forEach(cfarOffer => {
            results.push(ApiTranslatorUtils.modelToCamelCase(cfarOffer) as CfarOfferCustomer);
          });
        }
        
        this.cfarOffers = results;
        // The cheapest by default
        this.selectedCfarOffer = this._getCheapestOffer(this.cfarOffers);
        this.isLoading = false;

        // Build corresponding events
        this.createEventsAfterInit();
      },
      error: (error) => {
        const builtError = this._getHcAirlinesErrorResponse(error);
        this.errorCode = builtError.code;

        this.isLoading = false;
      }
    });
  }

  protected toCfarOffersIds(): Array<string> {
    return this.cfarOffers.map(cfarOffer => cfarOffer.id)
  }

  protected createEventsAfterInit(): void {
    if (this.isFakeBackend) {
      return;
    }
    this._hopperEventService
      .postCreateCfarOffersTakeoverDisplay(this.basePath, this._hCSessionId, this.toCfarOffersIds())
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: (error) => {
          console.error(error);
        }
      });
  }
  
  protected createTermsAndConditionsEvent(): void {
    if (this.isFakeBackend) {
      return;
    }
    this._hopperEventService
      .postCreateCfarViewInfo(this.basePath, this._hCSessionId, this.toCfarOffersIds(), UiSource.Takeover)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: (error) => {
          console.error(error);
        }
      });
  }
  
  protected createDenyPurchaseEvent(): void {
    if (this.isFakeBackend) {
      return;
    }
    this._hopperEventService
      .postCreateCfarDenyPurchase(this.basePath, this._hCSessionId, this.toCfarOffersIds(), UiSource.Takeover)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: (error) => {
          console.error(error);
        }
      });
  }
}
