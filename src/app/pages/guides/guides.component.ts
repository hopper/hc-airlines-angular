import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

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
      name: 'CFAR Offer Banner Large',
      link: 'cfar-offer-banner-large',
      description: 'A large banner to display offer to the user'
    });

    this.components.push({ 
      name: 'CFAR Offer Dialog',
      link: 'cfar-offer-dialog',
      description: 'A dialog to choose different coverage options'
    });

    this.components.push({ 
      name: 'CFAR Exercise Flow',
      link: 'cfar-exercise-flow',
      description: 'A flow that allow user to be refund'
    });

    // Working items
    if (!environment.production) {
    }
  }

  // -------------------------------
  // - LIFE CYCLE HOOKS
  // -------------------------------
}
