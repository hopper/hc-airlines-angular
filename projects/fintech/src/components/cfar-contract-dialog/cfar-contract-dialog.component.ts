import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'hopper-cfar-contract-dialog',
  templateUrl: './cfar-contract-dialog.component.html',
  styleUrls: ['./cfar-contract-dialog.component.scss']
})
export class CfarContractDialogComponent implements OnInit {

  public rules!: string[];
  public offers!: any[];
  public selectedOffer: any;

  constructor(
    private _dialogRef: MatDialogRef<CfarContractDialogComponent>
  ) {}

  ngOnInit(): void {
    this.rules = [
      'Add the flexibility to cancel your flight for any reason up to 3 hours before departure',
      'Cancel and choose between an XX% refund of your flightase fare and taxes or XX% airline travel credit',
      'Get instant resolution through Air Canada, no form or claims required!',
    ];

    this.offers = [
      {
        id: 1,
        title: 'XX% flight cost covered'
      },
      {
        id: 2,
        title: 'YY% flight cost covered'
      }
    ];

    this.selectedOffer = this.offers[0];
  }

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
