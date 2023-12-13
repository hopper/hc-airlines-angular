import { ChangeDetectorRef, Component, Inject, OnChanges, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CfarContractCustomer, CfarItinerary, CfarOfferCustomer, CreateCfarContractCustomerRequest, CreateCfarOfferCustomerRequest, RequestType, UiSource, UiVariant } from '../../apis/hopper-cloud-airline/v1';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { GlobalComponent } from '../global.component';
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperCfarService } from '../../services/hopper-cfar.service';
import { HopperEventsService } from '../../services/hopper-events.service';
import { DecimalPipe } from '@angular/common';
import { Logger } from '../../services/logger.service';

@Component({
  selector: 'hopper-cfar-offer-dialog',
  templateUrl: './cfar-offer-dialog.component.html',
  styleUrls: ['./cfar-offer-dialog.component.scss']
})
export class CfarOfferDialogComponent extends GlobalComponent implements OnInit, OnChanges {

  public cfarOffers!: CfarOfferCustomer[];
  public selectedCfarOffer!: CfarOfferCustomer;
  public isLoading!: boolean;

  private _hCSessionId!: string;
  private _itineraries!: CfarItinerary[];

  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _dialogRef: MatDialogRef<CfarOfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _hopperCfarService: HopperCfarService,
    private _hopperEventService: HopperEventsService,
    private _decimalPipe: DecimalPipe,
    private _cdRef: ChangeDetectorRef,
    private _logger: Logger
  ) {
    super(_adapter, _translateService, _cdRef);

    // Mandatory data
    this._hCSessionId = data.hCSessionId;

    // Optional data
    this._itineraries = data.itineraries;
    this.cfarOffers = data.cfarOffers;

    // Update parents @inputs manually (Dialog limitation)
    this.isFakeBackend = data.isFakeBackend;
    this.currentLang = data.currentLang;
    this.basePath = data.basePath;
    this.imageBasePath = data.imageBasePath;
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    // Update languages/labels manually (dialog limitation)
    this._updateLanguage(this.currentLang);

    if (this.isFakeBackend) {
      this.cfarOffers = this._buildFakePostCfarOffersResponse();
      this.selectedCfarOffer = this._getDefaultOffer(this.cfarOffers);
    } else if (this.cfarOffers && this.cfarOffers?.length > 0) {
      this.selectedCfarOffer = this._getDefaultOffer(this.cfarOffers);
    } else {
      // No offers exist. We create offers from itineraries data first
      this.initCfarOffers();      
    }
  }

  ngAfterContentChecked(): void {
    this._cdRef.detectChanges();
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
    if (!this.isFakeBackend) {
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
            this.handleApiError(error, "contracts");
            
            this.isLoading = false;
          }
        });
    }
  }

  public onSelectOffer(cfarOffer: CfarOfferCustomer): void {
    this.selectedCfarOffer = cfarOffer;
  }

  public onOpenTermsAndConditions(): void {
    this.createTermsAndConditionsEvent();
  }

  public getPricePerTraveler(offer: CfarOfferCustomer): number {
    var nbTravelers = 0;
    
    offer.itinerary.passengerPricing.forEach(pp => {
      nbTravelers += pp.passengerCount.count
    });

    return +offer.premium / (nbTravelers || 1);
  }

  public getDynamicCoverage(): string {
    let dynamicCoverage: string = '';

    this._translateService
      .get('CFAR_OFFER_DIALOG.BUTTON.SUBMIT', { 
        coverage: this._decimalPipe.transform(this.selectedCfarOffer.coveragePercentage, '1.0-0')
      })
      .pipe(take(1))
      .subscribe(label => dynamicCoverage = label);

    return dynamicCoverage;
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
        this.selectedCfarOffer = this._getDefaultOffer(this.cfarOffers);
        this.isLoading = false;

        // Build corresponding events
        this.createEventsAfterInit();
      },
      error: (error) => {                    
        this.handleApiError(error, "offers");

        this.isLoading = false;
      }
    });
  }

  protected toCfarOffersIds(): Array<string> {
    return this.cfarOffers.map(cfarOffer => cfarOffer.id)
  }

  private isOfferDialogEventPossible(): boolean {
      if (!this.isFakeBackend 
          && (this.cfarOffers !== undefined && this.cfarOffers !== null && this.cfarOffers.length > 0)) {
         return true;
      }
      return false;  
  }

  protected createEventsAfterInit(): void {
    if (!this.isOfferDialogEventPossible()) {
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
    if (!this.isOfferDialogEventPossible()) {
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
    if (!this.isOfferDialogEventPossible()) {
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
