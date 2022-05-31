import { MatDialogConfig } from '@angular/material/dialog';

export class DialogUtils {

  /**
   * Get Dialog config
   * @param dialogData 
   * @param theme
   * @returns 
   */
  public static getDialogConfig(dialogData: any, theme?: string): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = ["hopper-dialog-container", (theme || "")];
     
    if (dialogData) {
      dialogConfig.data = dialogData;
    }
    
    return dialogConfig;
  }
}
