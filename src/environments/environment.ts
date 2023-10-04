import { Theme } from "src/app/shared/enums/theme.enum";
import sdkPackage from 'projects/angular-sdk/package.json';

export const environment = {
  production: false,
  defaultTheme: Theme.THEME_LIGHT_HOPPER,
  version: 'v' + sdkPackage.version
};