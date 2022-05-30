import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hopper-cfar-contract-choice',
  templateUrl: './cfar-contract-choice.component.html',
  styleUrls: ['./cfar-contract-choice.component.scss']
})
export class CfarContractChoiceComponent implements OnInit {

  public rules!: string[];

  constructor(
  ) {}

  ngOnInit(): void {
    this.rules = [
      'Add the flexibility to cancel your flight for any reason up to 3 hours before departure',
      'No forms or claims required, without talking to customer service',
    ];
  }
}
