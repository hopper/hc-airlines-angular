# cloud-airlines-angular-sdk

This project aims to provide a set of Angular components to subscribe to Hopper services such as "Cancel for any reason".

## Configuration

### Install the package

```
npm install @hopper/cloud-airlines-angular-sdk@latest
```

### Configure Theming

1. If you have an Angular Material theme configured

    In your `styles.scss`, add following code :

    ```
    // Apply the theme to Hopper components 

    @import "@hopper/cloud-airlines-angular-sdk/src/styles/theme.scss";

    @include custom-components-theme($your-angular-material-theme);
    ```

2. If you use a theme provided by Hopper

    - For dialog components :

    Pass the theme name as a parameter in the dialog configuration

    ```
    import { DialogUtils } from '@hopper/cloud-airlines-angular-sdk';

    // ...

    const dialogData = { ... };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData, 'HOPPER-THEME-CLASS');
    const dialogRef = this._dialog.open(HOPPER_COMPONENT, dialogConfig);
    ```
    - For other components :

    Encapsulate each Hopper components into an HTML element with the hopper theme class :

    ```
    <div class="HOPPER-THEME-CLASS">
        <!-- <HOPPER-COMPONENT>...</HOPPER-COMPONENT> -->
    </div>
    ```

## Build

Run `ng build cloud-airlines-angular-sdk` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

1. Update the `package.json version`
2. Run `ng build cloud-airlines-angular-sdk`
3. Move to `dist/cloud-airlines-angular-sdk` folder
4. Run `npm pack` in order to generate a tgz file
5. Run `npm publish` to push the new version

## Running unit tests

Run `ng test cloud-airlines-angular-sdk` to execute the unit tests via [Karma](https://karma-runner.github.io).
