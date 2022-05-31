import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HopperEventsService } from '../services/hopper-events.service';
import { take } from 'rxjs/operators';

@Directive({
    selector: '[HopperEventsDirective]'
})
export class HopperEventsDirective {

    @Input() hopperEventId: string = '';
    @Input() hopperEventObject: any;
             
    constructor(
        private _element: ElementRef,
        private _hopperEventsService: HopperEventsService
    ) {
        // TODO something at init
        //this._element.nativeElement.style.backgroundColor = 'green';
        //console.log(">>>>>> Directive : background basculé en green")
    }

    // Drop listener
    @HostListener('click', ['$event'])
    public onClick(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        console.log(">>>>>> Directive : clique détecté");
        try {
            console.log("HopperEventID :")
            console.log(this.hopperEventId);
            console.log("HopperEventObject :")
            console.log(this.hopperEventObject);

            this._hopperEventsService
                .pushEvents(this.hopperEventId)
                .pipe(take(1))
                .subscribe(result => console.log("Event pushé"));
        } catch (error) {
            console.error(error);
        }
    }
}
