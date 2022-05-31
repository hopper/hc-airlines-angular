import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AbstractComponent } from '../abstract.component';

@Component({
  selector: 'hopper-cfar-exercise-dialog',
  templateUrl: './cfar-exercise-dialog.component.html',
  styleUrls: ['./cfar-exercise-dialog.component.scss']
})
export class CfarExerciseDialogComponent extends AbstractComponent implements OnInit {

  public offers: any[] = [];
  public selectedOffer: any;
  public cancelDate!: Date;
  public passengers: any[] = [];
  public refundMethods: any[] = [];

  constructor(
    private _dialogRef: MatDialogRef<CfarExerciseDialogComponent>
  ) {
    super();
  }

  // ################################################
  // Life Cycle Hooks
  // ################################################

  ngOnInit(): void {
    this.offers = [
      {
        id: 1,
        title: 'XX% airline credit refund',
        description: "You'll receive your full flight cost of $ZZZ in credits to use toward any flights with the airline!"
      },
      {
        id: 2,
        title: 'YY% cash refund',
        description: "You'll receive YY% of your flight in cash through the refund method of your choice."
      }
    ];

    this.refundMethods = [
      { value: 'PAYPAL', label: 'Paypal' },
      { value: 'STRIPE', label: 'Stripe' }
    ];

    this.passengers = [
      { firstName: 'John', lastName: 'DOE' },
      { firstName: 'Hopper', lastName: 'CLOUD' }
    ]

    this.cancelDate = new Date();
    this.selectedOffer = this.offers[0];
  }

  // ################################################
  // Publics Methods
  // ################################################

  /**
   * @description Triggered when clicking on the 'Close' button.
   */
  onClose(): void {
    this._dialogRef.close();
  }

  onSubmit(): void {
    // TODO
  }

  onSelectOffer(offer: any): void {
    this.selectedOffer = offer;
  }

  onViewDetails(offer: any): void {
    this.onSelectOffer(offer);

    // TODO
  }
}
