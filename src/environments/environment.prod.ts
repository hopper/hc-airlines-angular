import { Theme } from "src/app/shared/enums/theme.enum";
import sdkPackage from 'projects/angular-sdk/package.json';

export const environment = {
  production: true,
  defaultTheme: Theme.THEME_LIGHT_BLUE,
  version: 'v' + sdkPackage.version
};
