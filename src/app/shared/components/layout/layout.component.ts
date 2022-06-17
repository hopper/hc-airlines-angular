import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent {

  public components: { name: string; link: string; }[] = [];
  public selectedPath!: string;

  constructor(
    private _route: ActivatedRoute
  ) {
    this.components.push({ name: 'CFAR Contract Dialog', link: 'cfar-contract-dialog' });
    this.components.push({ name: 'CFAR Contract Choice', link: 'cfar-contract-choice' });
    this.components.push({ name: 'CFAR Exercise Dialog', link: 'cfar-exercise-dialog' });

    this.selectedPath = this._route.snapshot.data.path;
  }

  onScrollToTop(event: any): void {
    document.querySelector('#scroll-anchor')?.scrollTo(0,0);
  }
}
