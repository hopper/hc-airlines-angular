# cloud-airlines-angular-sdk

This project aims to provide a set of Angular components to subscribe to Hopper services such as "Cancel for any reason".

## Configuration

### 1. Install the package

```
npm install @hopper/cloud-airlines-angular-sdk@latest
```

### 2. Import module

Add this module to your Angular app

```
import { HopperCloudAirlinesAngularSdkModule } from '@hopper/cloud-airlines-angular-sdk';

// ...

@NgModule({
  imports: [
    // ...

    HopperCloudAirlinesAngularSdkModule
  ]
})
export class YourModule { }
```

### 3. Configure Theming

1. If you have an Angular Material theme configured

    In your `styles.scss`, add following code :

    ```
    // Apply the theme to Hopper components 

    @import "@hopper/cloud-airlines-angular-sdk/src/styles/theme.scss";

    @include hopper-cloud-airlines-angular-sdk-components-theme($your-angular-material-theme);
    ```

2. If you want to use a theme provided by Hopper

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

    More simply you can also add the hopper theme class in the class attribute of the Body tag

    ```
    <body class="HOPPER-THEME-CLASS">

        <!-- Your code / Apps / ... -->

        <!-- <HOPPER-COMPONENT>...</HOPPER-COMPONENT> -->
    </body>
    ```

### Configure Assets for the SDK

In your angular.json file into your Angular project, you need to add following lines in the `assets` parameter :

```
{
    "glob": "**/*",
    "input": "./node_modules/@hopper/cloud-airlines-angular-sdk/assets",
    "output": "/assets/"
}
```