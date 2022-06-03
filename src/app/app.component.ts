import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CfarContractDialogComponent } from 'projects/cloud-airlines-angular-sdk/src/components/cfar-contract-dialog/cfar-contract-dialog.component';
import { CfarExerciseDialogComponent } from 'projects/cloud-airlines-angular-sdk/src/components/cfar-exercise-dialog/cfar-exercise-dialog.component';
import { DialogUtils } from 'projects/cloud-airlines-angular-sdk/src/utils/dialog.utils';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.theme.scss']
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // Add Angular Material theme to the body
    this._document.body.classList.add(environment.defaultTheme)
  }

  onOpenCfarContractDialog(): void {
    const dialogData = { };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData, "hopper-theme-A");
    const dialogRef = this._dialog.open(CfarContractDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        // No action when dialog is closed  
        console.log(result);
      });
  }

  onOpenCfarExerciseDialog(): void {
    const dialogData = { };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData);
    const dialogRef = this._dialog.open(CfarExerciseDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        // No action when dialog is closed  
        console.log(result);
      });
  }

  isDarkMode(): boolean {
    return this._document.body.classList.contains('theme-dark-hopper');
  }

  switchThemeMode(): void {
    if (this.isDarkMode()) {
      this._document.body.classList.remove("theme-dark-hopper");
      this._document.body.classList.add("theme-light-hopper");
    } else {
      this._document.body.classList.remove("theme-light-hopper");
      this._document.body.classList.add("theme-dark-hopper");
    }
  }
}
