import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CfarContractCustomer, CfarItinerary, CfarOfferCustomer, CreateCfarOfferCustomerRequest, RequestType } from '../../apis/hopper-cloud-airline/v1';
import { GlobalComponent } from '../global.component';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperCfarService } from '../../services/hopper-cfar.service';
import { MatDialog } from '@angular/material/dialog';
import { CfarOfferDialogComponent } from '../cfar-offer-dialog/cfar-offer-dialog.component';
import { DialogUtils } from '../../utils/dialog.utils';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'hopper-cfar-offer-banner',
  templateUrl: './cfar-offer-banner.component.html',
  styleUrls: ['./cfar-offer-banner.component.scss']
})
export class CfarOfferBannerComponent extends GlobalComponent implements OnInit {

  public selectedCfarOffer!: CfarOfferCustomer;
  public isLoading!: boolean;

  private _cfarOffers!: CfarOfferCustomer[];

  @Input() hCSessionId!: string;
  @Input() itineraries!: CfarItinerary[];
  @Input() currentTheme!: string;

  @Output() offerAccepted = new EventEmitter();
  @Output() offersLoaded = new EventEmitter();
  
  constructor(
    protected override _adapter: DateAdapter<any>,
    protected override _translateService: TranslateService,
    protected override _cdRef: ChangeDetectorRef,
    protected override _loggerService: LoggerService,
    private _hopperCfarService: HopperCfarService,
    private _dialog: MatDialog,
  ) {
    super(_adapter, _translateService, _cdRef, _loggerService);
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    super.ngOnInit();
    
    if (this.isFakeBackend) {
      this._cfarOffers = this._buildFakePostCfarOffersResponse();
      this.selectedCfarOffer = this._getDefaultOffer(this._cfarOffers);
      this.offersLoaded.emit(this._cfarOffers);
    } else {
      this.isLoading = true;

      this._hopperCfarService
        .postCfarOffers(this.basePath, this.hCSessionId, this.currentLang, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest(this.itineraries)))
        .pipe(take(1))
        .subscribe({
          next: (cfarOffers: CfarOfferCustomer[]) => {
            let results: CfarOfferCustomer[] = [];

            if (cfarOffers) {
              cfarOffers.forEach(cfarOffer => {
                results.push(ApiTranslatorUtils.modelToCamelCase(cfarOffer) as CfarOfferCustomer);
              });
            }
            
            this._cfarOffers = results;
            this.selectedCfarOffer = this._getDefaultOffer(this._cfarOffers);
            this.offersLoaded.emit(this._cfarOffers);
            
            this.isLoading = false;
          },
          error: (error: any) => {
            this.handleApiError(error, "offers")
            
            this.offersLoaded.emit();
            this.isLoading = false;
          }
        });
    }
  }

  ngAfterContentChecked(): void {
    this._cdRef.detectChanges();
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  public onSubmit(cfarOffer: CfarOfferCustomer): void {
    const dialogData = { 
      currentLang: this.currentLang,
      basePath: this.basePath,
      hCSessionId: this.hCSessionId,
      cfarOffers: this._cfarOffers
    };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData, this.currentTheme);
    const dialogRef = this._dialog.open(CfarOfferDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe({
        next: (result: CfarContractCustomer) => {
          if (result) {
            this.offerAccepted.emit(result);
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

}
