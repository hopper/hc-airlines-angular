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

  constructor(
  ) {
    this.components.push({ 
      name: 'CFAR Offer Banner',
      link: 'cfar-offer-banner',
      description: 'A banner to display offer to the user'
    });

    this.components.push({ 
      name: 'CFAR Contract Dialog',
      link: 'cfar-contract-dialog',
      description: 'A dialog to choose different coverage options'
    });

    this.components.push({ 
      name: 'CFAR Exercise Dialog',
      link: 'cfar-exercise-dialog',
      description: 'A dialog that allow user to be refund'
    });
  }

  // -------------------------------
  // - LIFE CYCLE HOOKS
  // -------------------------------
}
