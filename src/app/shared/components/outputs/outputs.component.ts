import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { OutputModel } from "../../models";

@Component({
  selector: "app-outputs",
  templateUrl: "./outputs.component.html",
  styleUrls: ["./outputs.component.scss"],
})
export class OutputsComponent implements OnChanges, AfterViewInit {

  public outputsDataSource: MatTableDataSource<OutputModel>;
  public displayedOutputsColumns: string[];

  @Input() outputs!: OutputModel[];

  @ViewChild('outputSort') public outputSort!: MatSort;

  constructor(
    private _cdRef: ChangeDetectorRef
  ) {
    this.displayedOutputsColumns = ['name', 'description'];
    this.outputsDataSource = new MatTableDataSource<OutputModel>([]);
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.outputs && changes.outputs.currentValue) {
      this.outputsDataSource.data = this.outputs;
    }
  }

  ngAfterViewInit(): void {
    this.outputsDataSource.sort = this.outputSort;

    this._cdRef.detectChanges();
  }
}
