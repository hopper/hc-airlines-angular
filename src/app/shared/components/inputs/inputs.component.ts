import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { InputModel } from "../../models";

@Component({
  selector: "app-inputs",
  templateUrl: "./inputs.component.html",
  styleUrls: ["./inputs.component.scss"],
})
export class InputsComponent implements OnChanges, AfterViewInit {

  public inputsDataSource: MatTableDataSource<InputModel>;
  public displayedInputsColumns: string[];

  @Input() inputs!: InputModel[];

  @ViewChild('inputSort') public inputSort!: MatSort;

  constructor(
    private _cdRef: ChangeDetectorRef
  ) {
    this.displayedInputsColumns = ['name', 'description', 'required'];
    this.inputsDataSource = new MatTableDataSource<InputModel>([]);
  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputs && changes.inputs.currentValue) {
      this.inputsDataSource.data = this.inputs;
    }
  }

  ngAfterViewInit(): void {
    this.inputsDataSource.sort = this.inputSort;

    this._cdRef.detectChanges();
  }
}
