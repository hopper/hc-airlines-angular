import { ChangeDetectorRef, Directive } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiSource, UiVariant } from '../apis/hopper-cloud-airline/v1';
import { take } from 'rxjs/operators';
import { GlobalComponent } from './global.component';
import { HopperEventsService } from '../services/hopper-events.service';
import { LoggerService } from '../services/logger.service';

@Directive({
  selector: '[HopperGlobalEventComponent]',
})
export class GlobalEventComponent extends GlobalComponent {
  protected uiSource!: UiSource;
  protected uiVariant!: UiVariant;
  protected eventHcSessionId!: string;
  protected cfarOffersIds!: Array<string>;
  protected cfarExerciseId!: string;

  constructor(
    protected _translateService: TranslateService,
    protected _hopperEventService: HopperEventsService,
    protected _cdRef: ChangeDetectorRef,
    protected override _loggerService: LoggerService,
  ) {
    super(_translateService, _cdRef, _loggerService);
  }

  // ********** Cfar purchase events **********/

  protected initCfarPurchaseEventParameters(
    hCSessionId: string,
    cfarOffersIds: Array<string>,
    uiVariant: UiVariant,
  ): void {
    if (this.isFakeBackend) {
      return;
    }
    this.eventHcSessionId = hCSessionId;
    this.cfarOffersIds = cfarOffersIds;
    this.uiVariant = uiVariant;
  }

  protected isPurchaseEventPossible(): boolean {
    if (
      !this.isFakeBackend &&
      this.eventHcSessionId !== undefined &&
      this.eventHcSessionId !== null &&
      this.cfarOffersIds !== undefined &&
      this.cfarOffersIds !== null &&
      this.cfarOffersIds.length > 0
    ) {
      return true;
    }
    return false;
  }

  protected createPurchaseEventsAfterInit(
    hasWarningCoverageMessage: boolean,
  ): void {
    if (!this.isPurchaseEventPossible()) {
      return;
    }
    this._hopperEventService
      .postCreateCfarOffersBannerDisplay(
        this.basePath,
        this.eventHcSessionId,
        this.cfarOffersIds,
        this.uiVariant,
      )
      .pipe(take(1))
      .subscribe({
        next: () => {
          if (hasWarningCoverageMessage) {
            this.createWarningMessageEvent();
          }
        },
        error: (error) => {
          this._loggerService.error(
            'failed to send banner display event',
            {},
            error,
          );
        },
      });
  }

  protected createWarningMessageEvent(): void {
    if (!this.isPurchaseEventPossible()) {
      return;
    }
    this._hopperEventService
      .postCreateCfarForcedChoiceWarning(
        this.basePath,
        this.eventHcSessionId,
        this.cfarOffersIds,
      )
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: (error) => {
          this._loggerService.error(
            'failed to send warning message event',
            {},
            error,
          );
        },
      });
  }

  protected createTermsAndConditionsEvent(): void {
    if (!this.isPurchaseEventPossible()) {
      return;
    }
    this._hopperEventService
      .postCreateCfarViewInfo(
        this.basePath,
        this.eventHcSessionId,
        this.cfarOffersIds,
        this.uiSource,
      )
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: (error) => {
          this._loggerService.error('failed to send t&c event', {}, error);
        },
      });
  }

  protected createDenyPurchaseEvent(): void {
    if (!this.isPurchaseEventPossible()) {
      return;
    }
    this._hopperEventService
      .postCreateCfarDenyPurchase(
        this.basePath,
        this.eventHcSessionId,
        this.cfarOffersIds,
        this.uiSource,
      )
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: (error) => {
          this._loggerService.error(
            'failed to send deny purchase event',
            {},
            error,
          );
        },
      });
  }
}
