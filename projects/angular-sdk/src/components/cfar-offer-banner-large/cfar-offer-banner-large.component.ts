import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CfarContractCustomer, CfarItinerary, CfarOfferCustomer, UiSource, UiVariant } from '../../apis/hopper-cloud-airline/v1';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperCfarService } from '../../services/hopper-cfar.service';
import { HopperEventsService } from '../../services/hopper-events.service';
import { GlobalEventComponent } from '../global-event.component';

@Component({
  selector: 'hopper-cfar-offer-banner-large',
  templateUrl: './cfar-offer-banner-large.component.html',
  styleUrls: ['./cfar-offer-banner-large.component.scss']
})
export class CfarOfferBannerLargeComponent extends GlobalEventComponent implements OnInit {

  public cfarOffers!: CfarOfferCustomer[];
  public selectedCfarOffer!: CfarOfferCustomer;
  public isLoading!: boolean;
  public selectedChoice!: number;
  public currency!: string;

  @Input() hCSessionId!: string;
  @Input() itineraries!: CfarItinerary[];
  @Input() uiVariant!: UiVariant;
  @Input() hasNoCoverageOption: boolean = true;
  @Input() hasWarningCoverageMessage: boolean = false;
  @Input() termsLink!: string;

  @Output() chooseCoverage = new EventEmitter();
  @Output() offersLoaded = new EventEmitter();

  private contractsByChoiceIndex = new Map<number, CfarContractCustomer>();

  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _hopperCfarService: HopperCfarService,
    private _hopperEventService: HopperEventsService,
  ) {
    super(_adapter, _translateService, _hopperEventService);
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    if (this.isFakeBackend) {
      this.cfarOffers = this._buildFakePostCfarOffersResponse();
      this.selectedCfarOffer = this._getCheapestOffer(this.cfarOffers);
      this.offersLoaded.emit(this.cfarOffers);
    } else {
      this._initUiParameters();

      this.initCfarOffers();
    }
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public onChooseCoverage(): void {
    // After the first choice, we force the display of the 'decline' option
    this.hasNoCoverageOption = true;
    
    // Update descriptions
    this.selectedCfarOffer = this.selectedChoice > -1 ? this.cfarOffers[this.selectedChoice] : this._getCheapestOffer(this.cfarOffers);
  
    if (this.selectedChoice != -1) {

      if (this.isFakeBackend) {
        this.chooseCoverage.emit(this._buildFakePostCfarContractsResponse());
      } else {
        // Emit the cached element
        if (this.contractsByChoiceIndex.has(this.selectedChoice)) {
          this.chooseCoverage.emit(this.contractsByChoiceIndex.get(this.selectedChoice));
        // Backend call
        } else {
          this.isLoading = true;

          // Create CFAR Contract
          this._hopperCfarService
            .postCfarContracts(this.basePath, this.hCSessionId, this.currentLang, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarContractRequest(this.selectedCfarOffer, this.uiSource)))
            .pipe(take(1))
            .subscribe({
              next: (cfarContract: CfarContractCustomer) => {
                // Cache the result into a map (for API performance)
                this.contractsByChoiceIndex.set(this.selectedChoice, cfarContract);
  
                this.chooseCoverage.emit(cfarContract);
                this.isLoading = false;
              },
              error: (error) => {
                this.manageSdkError(error, "contracts");
                this.isLoading = false;
              }
            });
        } 
      }
    } else {  // The user decline the offer
      this.chooseCoverage.emit(null);
      
      // Create an event
      this.createDenyPurchaseEvent();
    }
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

  // -----------------------------------------------
  //  Protected Methods
  // -----------------------------------------------

  protected initCfarOffers(): void {
    this.isLoading = true;
    console.log(this.hCSessionId)
    this._hopperCfarService
      .postCfarOffers(this.basePath, this.hCSessionId, this.currentLang, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest(this.itineraries)))
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
          this.selectedCfarOffer = this._getCheapestOffer(this.cfarOffers);
          this.offersLoaded.emit(this.cfarOffers);          
          this.isLoading = false;

          // Int events context and build corresponding events
          this.initCfarPurchaseEventParameters(this.hCSessionId, this.toCfarOffersIds(), this.uiVariant);
          this.createPurchaseEventsAfterInit(this.hasWarningCoverageMessage);
        },
        error: (error) => {
          this.manageSdkError(error, "offers");
          this.offersLoaded.emit();
          this.isLoading = false;
        }
      });
  }

  protected toCfarOffersIds(): Array<string> {
    return this.cfarOffers.map(cfarOffer => cfarOffer.id)
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  /**
   * Init UI parameters
   * @returns 
   */
  private _initUiParameters() {
    if (this.uiVariant === UiVariant.A) {
      this.uiSource = UiSource.BannerVariantA;
    } else if (this.uiVariant === UiVariant.B) {
      this.uiSource = UiSource.BannerVariantB;
    } else if (this.uiVariant === UiVariant.C) {
      this.uiSource = UiSource.BannerVariantC;
    } else {
      this.uiSource = UiSource.BannerVariantA;
    }
  }
}
