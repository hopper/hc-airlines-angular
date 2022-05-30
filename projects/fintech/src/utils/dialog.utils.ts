import { MatDialogConfig } from '@angular/material/dialog';
import { DialogPositionEnum } from '../enums/dialog-position.enum';

export class DialogUtils {

  /**
   * Get Dialog config
   * @param position 
   * @param width 
   * @param height 
   * @param dialogData 
   * @returns 
   */
  public static getDialogConfig(position: DialogPositionEnum, dialogData: any): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    switch (position) {
      case DialogPositionEnum.CENTER:
        dialogConfig.panelClass = 'hopper-center-dialog-container';
        break;
      case DialogPositionEnum.ASIDE:
        dialogConfig.panelClass = 'hopper-aside-dialog-container';
        dialogConfig.position = { right: '0px' };
        break;
      default:
        dialogConfig.panelClass = 'hopper-center-dialog-container';
        break;
    }
    

    /*if (position && position != null) {
      dialogConfig.position = position;
    }

    if (width && width != null) {
      dialogConfig.width = width;
    }

    if (height && height != null) {
      dialogConfig.height = height;
    }*/



    if (dialogData) {
      dialogConfig.data = dialogData;
    }
    
    return dialogConfig;
  }
}
