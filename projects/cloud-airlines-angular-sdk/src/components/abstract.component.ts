import { Directive } from "@angular/core";
import { CancelForAnyReasonCFARService } from "../apis/hopper-cloud-airline/v1";

@Directive({
    selector: '[HopperAbstractComponent]'
})
export abstract class AbstractComponent {
    
    constructor(
        protected cancelForAnyReasonCFARService: CancelForAnyReasonCFARService
    ) {
    }

    // ################################################
    // Life Cycle Hooks
    // ################################################

    // ################################################
    // Privates Methods
    // ################################################
}