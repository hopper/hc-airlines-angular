import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hopper-event-button',
  templateUrl: './event-button.component.html',
  styleUrls: ['./event-button.component.scss']
})
export class EventButtonComponent implements OnInit {

  hopperEventId!: string;
  hopperEventObject: any;

  constructor() { }

  ngOnInit(): void {
    this.hopperEventId = "123SOLEIL";
    this.hopperEventObject = {
      firstName: 'John',
      lastName: 'DOE',
      age: 10
    };
  }

}
