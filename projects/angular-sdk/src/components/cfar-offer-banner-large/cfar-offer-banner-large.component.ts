import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { take } from 'rxjs/operators';
import {
  CfarContractCustomer,
  CfarItinerary,
  CfarOfferCustomer,
  UiSource,
  UiVariant,
} from '../../apis/hopper-cloud-airline/v1';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material/core';
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperCfarService } from '../../services/hopper-cfar.service';
import { HopperEventsService } from '../../services/hopper-events.service';
import { GlobalEventComponent } from '../global-event.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'hopper-cfar-offer-banner-large',
  templateUrl: './cfar-offer-banner-large.component.html',
  styleUrls: ['./cfar-offer-banner-large.component.scss'],
})
export class CfarOfferBannerLargeComponent
  extends GlobalEventComponent
  implements OnInit
{
  public cfarOffers!: CfarOfferCustomer[];
  public selectedCfarOffer!: CfarOfferCustomer;
  public selectedChoice!: number;
  public currency!: string;
  public isLoadingContract!: boolean;

  @Input() hCSessionId!: string;
  @Input() itineraries!: CfarItinerary[];
  @Input() uiVariant!: UiVariant;
  @Input() hasNoCoverageOption: boolean = true;
  @Input() hasWarningCoverageMessage: boolean = false;

  @Output() chooseCoverage = new EventEmitter();
  @Output() offersLoaded = new EventEmitter();

  private _contractsByChoiceIndex = new Map<number, CfarContractCustomer>();

  constructor(
    protected override _adapter: DateAdapter<any>,
    protected override _translateService: TranslateService,
    protected override _hopperEventService: HopperEventsService,
    protected override _cdRef: ChangeDetectorRef,
    protected override _loggerService: LoggerService,
    private _hopperCfarService: HopperCfarService,
  ) {
    super(
      _adapter,
      _translateService,
      _hopperEventService,
      _cdRef,
      _loggerService,
    );
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    super.ngOnInit();

    if (this.isFakeBackend) {
      this.cfarOffers = this._buildFakePostCfarOffersResponse();
      this.selectedCfarOffer = this._getDefaultOffer(this.cfarOffers);
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
    this.selectedCfarOffer =
      this.selectedChoice > -1
        ? this.cfarOffers[this.selectedChoice]
        : this._getDefaultOffer(this.cfarOffers);

    if (this.selectedChoice != -1) {
      if (this.isFakeBackend) {
        this.chooseCoverage.emit(this._buildFakePostCfarContractsResponse());
      } else {
        // Emit the cached element
        if (this._contractsByChoiceIndex.has(this.selectedChoice)) {
          this.chooseCoverage.emit(
            this._contractsByChoiceIndex.get(this.selectedChoice),
          );
          // Backend call
        } else {
          // Lock the checkboxes until the API response
          this.isLoadingContract = true;

          // Create CFAR Contract
          this._hopperCfarService
            .postCfarContracts(
              this.basePath,
              this.hCSessionId,
              this.currentLang,
              ApiTranslatorUtils.modelToSnakeCase(
                this._buildCreateCfarContractRequest(
                  this.selectedCfarOffer,
                  this.uiSource,
                ),
              ),
            )
            .pipe(take(1))
            .subscribe({
              next: (cfarContract: CfarContractCustomer) => {
                // Cache the result into a map (for API performance)
                this._contractsByChoiceIndex.set(
                  this.selectedChoice,
                  cfarContract,
                );

                this.chooseCoverage.emit(cfarContract);

                // Unlock the checkboxes
                this.isLoadingContract = false;
              },
              error: (error) => {
                this.handleApiError(error, 'contracts');

                // Unlock the checkboxes
                this.isLoadingContract = false;
              },
            });
        }
      }
    } else {
      // The user decline the offer
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

    offer.itinerary.passengerPricing.forEach((pp) => {
      nbTravelers += pp.passengerCount.count;
    });

    return +offer.premium / (nbTravelers || 1);
  }

  // -----------------------------------------------
  //  Protected Methods
  // -----------------------------------------------

  protected initCfarOffers(): void {
    this._hopperCfarService
      .postCfarOffers(
        this.basePath,
        this.hCSessionId,
        this.currentLang,
        ApiTranslatorUtils.modelToSnakeCase(
          this._buildCreateCfarOfferRequest(this.itineraries, this.uiVariant),
        ),
      )
      .pipe(take(1))
      .subscribe({
        next: (cfarOffers) => {
          let results: CfarOfferCustomer[] = [];

          if (cfarOffers) {
            cfarOffers.forEach((cfarOffer) => {
              results.push(
                ApiTranslatorUtils.modelToCamelCase(
                  cfarOffer,
                ) as CfarOfferCustomer,
              );
            });
          }

          this.cfarOffers = results;
          this.selectedCfarOffer = this._getDefaultOffer(this.cfarOffers);
          this.offersLoaded.emit(this.cfarOffers);

          // Int events context and build corresponding events
          this.initCfarPurchaseEventParameters(
            this.hCSessionId,
            this.toCfarOffersIds(),
            this.uiVariant,
          );
          this.createPurchaseEventsAfterInit(this.hasWarningCoverageMessage);
        },
        error: (error) => {
          this.handleApiError(error, 'offers');
          this.offersLoaded.emit();
        },
      });
  }

  protected toCfarOffersIds(): Array<string> {
    return this.cfarOffers.map((cfarOffer) => cfarOffer.id);
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
