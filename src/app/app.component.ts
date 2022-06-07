import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CfarContractDialogComponent } from 'projects/cloud-airlines-angular-sdk/src/components/cfar-contract-dialog/cfar-contract-dialog.component';
import { CfarExerciseDialogComponent } from 'projects/cloud-airlines-angular-sdk/src/components/cfar-exercise-dialog/cfar-exercise-dialog.component';
import { Locales } from 'projects/cloud-airlines-angular-sdk/src/i18n';
import { I18n } from 'projects/cloud-airlines-angular-sdk/src/i18n/i18n.interface';
import { DialogUtils } from 'projects/cloud-airlines-angular-sdk/src/utils/dialog.utils';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.theme.scss']
})
export class AppComponent implements OnInit {

  public currentLang!: string;
  public languages!: string[];

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // Add Angular Material theme to the body
    this._document.body.classList.add(environment.defaultTheme);

    // Language by default
    this.currentLang = 'en';

    this.languages = Locales.map(x => x.lang);

    // Add SVG icons for each languages
    this.languages.forEach(language => {
      this._matIconRegistry.addSvgIcon("flag_" + language, this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/flags/" + language + ".svg"));
    });
  }

  onOpenCfarContractDialog(): void {
    const dialogData = { currentLang: this.currentLang };
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
    const dialogData = { currentLang: this.currentLang };
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

  onSwitchThemeMode(): void {
    if (this.isDarkMode()) {
      this._document.body.classList.remove("theme-dark-hopper");
      this._document.body.classList.add("theme-light-hopper");
    } else {
      this._document.body.classList.remove("theme-light-hopper");
      this._document.body.classList.add("theme-dark-hopper");
    }
  }

  onSetCurrentLang(newLanguage: string): void {
    this.currentLang = newLanguage;
  }
}
