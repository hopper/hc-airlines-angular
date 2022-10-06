import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CfarContractCustomer, CfarItinerary, CfarOfferCustomer, CreateCfarContractCustomerRequest, CreateCfarOfferCustomerRequest, RequestType, UiSource, UiVariant } from '../../apis/hopper-cloud-airline/v1';
import { GlobalComponent } from '../global.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperCfarService } from '../../services/hopper-cfar.service';
import { HopperEventsService } from '../../services/hopper-events.service';

@Component({
  selector: 'hopper-cfar-offer-banner-large',
  templateUrl: './cfar-offer-banner-large.component.html',
  styleUrls: ['./cfar-offer-banner-large.component.scss']
})
export class CfarOfferBannerLargeComponent extends GlobalComponent implements OnInit {

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

  @Output() chooseCoverage = new EventEmitter();
  @Output() offersLoaded = new EventEmitter();

  private contractsByChoiceIndex = new Map<number, CfarContractCustomer>();
  private uiSource!: UiSource;

  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _hopperCfarService: HopperCfarService,
    private _hopperEventService: HopperEventsService,
  ) {
    super(_adapter, _translateService);
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
      this._initUiElements();

      this.initCfarOffers();
    }
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public computePercentage(offer: CfarOfferCustomer): number {
    if (offer) {
      const coverage = Number.parseFloat(offer.coverage);
      const totalPrice = Number.parseFloat(offer.itinerary.totalPrice);
  
      return coverage / (totalPrice || 1.0);
    }

    return 0;
  }

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
            .postCfarContracts(this.basePath, this.hCSessionId, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarContractRequest(this.selectedCfarOffer, this.uiSource)))
            .pipe(take(1))
            .subscribe({
              next: (cfarContract: CfarContractCustomer) => {
                // Cache the result into a map (for API performance)
                this.contractsByChoiceIndex.set(this.selectedChoice, cfarContract);
  
                this.chooseCoverage.emit(cfarContract);
                this.isLoading = false;
              },
              error: (error) => {
                console.error(error);
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
    this._hopperCfarService
      .postCfarOffers(this.basePath, this.hCSessionId, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest(this.itineraries)))
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

          // Build corresponding events
          this.createEventsAfterInit();
        },
        error: (error) => {
          console.error(error);
          this.offersLoaded.emit();
          this.isLoading = false;
        }
      });
  }

  protected createEventsAfterInit(): void {
    if (this.isFakeBackend) {
      return;
    }    
    this._hopperEventService
      .postCreateCfarOffersBannerDisplay(this.basePath, this.hCSessionId, this.uiVariant)
      .pipe(take(1))
      .subscribe({
        next: () => {
          if (this.hasWarningCoverageMessage) {
            this.createWarningMessageEvent();
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
  
  protected createWarningMessageEvent(): void {
    if (this.isFakeBackend) {
      return;
    }
    this._hopperEventService
      .postCreateCfarForcedChoiceWarning(this.basePath, this.hCSessionId)
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
      .postCreateCfarViewInfo(this.basePath, this.hCSessionId, this.uiSource)
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
      .postCreateCfarDenyPurchase(this.basePath, this.hCSessionId, this.uiSource)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: (error) => {
          console.error(error);
        }
      });
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  /**
   * Actually, The UI elements are fixed using the input parameters of the component.
   * FIXME In the future, use a dedicated parameter, passed by the airline. 
   * WARN /!\ Call this method only when initializing the component (i.e. ngOnInit), since the flag used can be updated later.
   * @returns 
   */
  private _initUiElements() {
    // this.uiVariant = this.hasNoCoverageOption ? UiVariant.A : UiVariant.B;
    this.uiSource = this.hasNoCoverageOption ? UiSource.BannerVariantA : UiSource.BannerVariantB;
  }
}
