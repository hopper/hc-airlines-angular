import { MatDialogConfig } from '@angular/material/dialog';

export class DialogUtils {

  /**
   * Get Dialog config
   * @param position 
   * @param width 
   * @param height 
   * @param dialogData 
   * @returns 
   */
  public static getDialogConfig(dialogData: any): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'hopper-dialog-container';
     
    if (dialogData) {
      dialogConfig.data = dialogData;
    }
    
    return dialogConfig;
  }
}
