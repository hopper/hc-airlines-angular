import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CfarOffer } from '../../apis/hopper-cloud-airline/v1';
import { AbstractComponent } from '../abstract.component';

@Component({
  selector: 'hopper-cfar-contract-choice',
  templateUrl: './cfar-contract-choice.component.html',
  styleUrls: ['./cfar-contract-choice.component.scss']
})
export class CfarContractChoiceComponent extends AbstractComponent implements OnInit {

  public rules!: any[];

  @Input() offer!: CfarOffer;
  @Output() emitSubmit = new EventEmitter();
  
  constructor(
  ) {
    super();
  }

  // ################################################
  // Life Cycle Hooks
  // ################################################

  ngOnInit(): void {
    this.rules = [
      'Add the flexibility to cancel your flight for any reason up to 3 hours before departure',
      'No forms or claims required, without talking to customer service',
    ];
  }

  // ################################################
  // Publics Methods
  // ################################################

  public onSubmit(): void {
    this.emitSubmit.emit(this.offer);
  }
}
