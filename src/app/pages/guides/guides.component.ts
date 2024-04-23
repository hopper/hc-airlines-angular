import { Component } from "@angular/core";

@Component({
  selector: "app-guides-page",
  templateUrl: "./guides.component.html",
  styleUrls: ["./guides.component.scss"],
})
export class GuidesPageComponent {

  public components: { 
    name: string;
    link: string;
    description: string;
  }[] = [];
  
  constructor() {
    this.components = [
      { 
        name: 'CFAR Offer Banner',
        link: 'cfar-offer-banner',
        description: 'A banner to display offer to the user'
      },
      { 
        name: 'CFAR Offer Banner Large',
        link: 'cfar-offer-banner-large',
        description: 'A large banner to display offer to the user'
      },
      { 
        name: 'CFAR Offer Dialog',
        link: 'cfar-offer-dialog',
        description: 'A dialog to choose different coverage options'
      }
    ];
  }
}
