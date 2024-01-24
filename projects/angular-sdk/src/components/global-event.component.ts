import { ChangeDetectorRef, Directive } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { ExerciseStepResult, UiSource, UiVariant } from "../apis/hopper-cloud-airline/v1";
import { take } from "rxjs/operators";
import { GlobalComponent } from "./global.component";
import { HopperEventsService } from "../services/hopper-events.service";
import { LoggerService } from "../services/logger.service";

@Directive({
    selector: '[HopperGlobalEventComponent]'
})
export class GlobalEventComponent extends GlobalComponent {

    protected uiSource!: UiSource;
    protected uiVariant!: UiVariant;
    protected eventHcSessionId!: string;
    protected cfarOffersIds!: Array<string>;
    protected cfarExerciseId!: string;

    constructor(
        protected _adapter: DateAdapter<any>,
        protected _translateService: TranslateService,
        protected _hopperEventService: HopperEventsService,
        protected _cdRef: ChangeDetectorRef,
        protected override _loggerService: LoggerService
    ) {
        super(_adapter, _translateService, _cdRef, _loggerService);
    }

    // -----------------------------------------------
    // Life Cycle Hooks
    // -----------------------------------------------

    // -----------------------------------------------
    // Protected Methods
    // -----------------------------------------------

    // ********** Cfar purchase events **********/

    protected initCfarPurchaseEventParameters(hCSessionId: string, cfarOffersIds: Array<string>, uiVariant: UiVariant): void {
        if (this.isFakeBackend) {
            return;
        }
        this.eventHcSessionId = hCSessionId;
        this.cfarOffersIds = cfarOffersIds;
        this.uiVariant = uiVariant;
    }

    protected isPurchaseEventPossible(): boolean {
        if (!this.isFakeBackend 
            && (this.eventHcSessionId !== undefined && this.eventHcSessionId !== null)  
            && (this.cfarOffersIds !== undefined && this.cfarOffersIds !== null && this.cfarOffersIds.length > 0)) {
           return true;
        }
        return false;  
    }

    protected createPurchaseEventsAfterInit(hasWarningCoverageMessage: boolean): void {
        if (!this.isPurchaseEventPossible()) {
            return;
        }
        this._hopperEventService
            .postCreateCfarOffersBannerDisplay(this.basePath, this.eventHcSessionId, this.cfarOffersIds, this.uiVariant)
            .pipe(take(1))
            .subscribe({
            next: () => {
                if (hasWarningCoverageMessage) {
                this.createWarningMessageEvent();
                }
            },
            error: (error) => {
                console.error(error);
            }
        });
    }

    protected createWarningMessageEvent(): void {
        if (!this.isPurchaseEventPossible()) {
            return;
        }
        this._hopperEventService
            .postCreateCfarForcedChoiceWarning(this.basePath, this.eventHcSessionId, this.cfarOffersIds)
            .pipe(take(1))
            .subscribe({
                next: () => {},
                error: (error) => {
                console.error(error);
                }
            });
    }

    protected createTermsAndConditionsEvent(): void {
        if (!this.isPurchaseEventPossible()) {
            return;
        }
        this._hopperEventService
            .postCreateCfarViewInfo(this.basePath, this.eventHcSessionId, this.cfarOffersIds, this.uiSource)
            .pipe(take(1))
            .subscribe({
                next: () => {},
                error: (error) => {
                console.error(error);
                }
            });
    }

    protected createDenyPurchaseEvent(): void {
        if (!this.isPurchaseEventPossible()) {
            return;
        }
        this._hopperEventService
            .postCreateCfarDenyPurchase(this.basePath, this.eventHcSessionId, this.cfarOffersIds, this.uiSource)
            .pipe(take(1))
            .subscribe({
                next: () => {},
                error: (error) => {
                console.error(error);
                }
            });
    }

    // ********** Cfar purchase / payment events **********/

    // ********** Cfar exercise events **********/

    protected initCfarExerciseEventParameters(hCSessionId: string, cfarExerciseId: string): void {
        if (this.isFakeBackend) {
            return;
        }
        this.eventHcSessionId = hCSessionId;
        this.cfarExerciseId = cfarExerciseId
    }
    
    protected updateCfarExerciseIdForEvent(cfarExerciseId: string): void {
        if (this.isFakeBackend) {
            return;
        }
        this.cfarExerciseId = cfarExerciseId
    }

    private isExerciseEventPossible(): boolean {
        if (!this.isFakeBackend 
            && (this.eventHcSessionId !== undefined && this.eventHcSessionId !== null)  
            && (this.cfarExerciseId !== undefined && this.cfarExerciseId !== null)) {
           return true;
        }
        return false;  
    }

    protected createCfarExercisePortalDisplayEvent(): void {
        if (!this.isExerciseEventPossible) {
            return;
        }
        this._hopperEventService
            .postCreateCfarExercisePortalDisplay(this.basePath, this.eventHcSessionId, this.cfarExerciseId)
            .pipe(take(1))
            .subscribe({
                next: () => {},
                error: (error) => {
                console.error(error);
                }
            });
    }

    protected createCfarExerciseVerificationSentEvent(): void {
        if (!this.isExerciseEventPossible) {
            return;
        }
        this._hopperEventService
            .postCreateCfarExerciseVerificationSent(this.basePath, this.eventHcSessionId, this.cfarExerciseId)
            .pipe(take(1))
            .subscribe({
                next: () => {},
                error: (error) => {
                console.error(error);
                }
            });
    }

    protected createCfarExerciseVerificationCompleteEvent(exerciseStepResult: ExerciseStepResult): void {
        if (!this.isExerciseEventPossible) {
            return;
        }
        this._hopperEventService
            .postCreateCfarExerciseVerificationComplete(this.basePath, this.eventHcSessionId, this.cfarExerciseId, exerciseStepResult)
            .pipe(take(1))
            .subscribe({
                next: () => {},
                error: (error) => {
                console.error(error);
                }
            });
    }

    protected createCfarExerciseCustomerDataCompleteEvent(exerciseStepResult: ExerciseStepResult): void {
        if (!this.isExerciseEventPossible) {
            return;
        }
        this._hopperEventService
            .postCreateCfarExerciseCustomerDataComplete(this.basePath, this.eventHcSessionId, this.cfarExerciseId, exerciseStepResult)
            .pipe(take(1))
            .subscribe({
                next: () => {},
                error: (error) => {
                console.error(error);
                }
            });
    }

    protected createCfarExercisePortalCompleteEvent(exerciseStepResult: ExerciseStepResult): void {
        if (!this.isExerciseEventPossible) {
            return;
        }
        this._hopperEventService
            .postCreateCfarExercisePortalComplete(this.basePath, this.eventHcSessionId, this.cfarExerciseId, exerciseStepResult)
            .pipe(take(1))
            .subscribe({
                next: () => {},
                error: (error) => {
                console.error(error);
                }
            });
    }

    protected createCfarExerciseCallbackLaunchedEvent(exerciseStepResult: ExerciseStepResult): void {
        if (!this.isExerciseEventPossible) {
            return;
        }
        this._hopperEventService
            .postCreateCfarExerciseCallbackLaunched(this.basePath, this.eventHcSessionId, this.cfarExerciseId, exerciseStepResult)
            .pipe(take(1))
            .subscribe({
                next: () => {},
                error: (error) => {
                console.error(error);
                }
            });
    }
}
