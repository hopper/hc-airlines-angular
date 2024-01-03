# Angular SDK

This project aims to provide a set of Angular components to subscribe to HTS services such as "Cancel for any reason".

## Changelog

[Changelog](https://github.com/hopper/hc-airlines-angular/blob/main/projects/angular-sdk/CHANGELOG.md)

## Angular compatibility

|  Package version 	|   Angular Version	|
|---	            |---	            |
|   6.0.0 and above |   Angular 15	    |
|   5.0.1           |   Angular 14	    |
|   4.3.3           |   Angular 13	    |
|   3.0.0	        |   Angular 12	    |
|   2.10.0	        |   Angular 11	    |

## Configuration

### 1. Install the package

```
npm install @hopper-cloud-airlines/angular-sdk@latest
```

### 2. Import module

Add this module to your Angular app

```
import { HopperCloudAirlinesAngularSdkModule } from '@hopper-cloud-airlines/angular-sdk';

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
    // Apply the theme to HTS components 
    @import "node_modules/@hopper-cloud-airlines/angular-sdk/src/styles/theme.scss";
    
    @include hopper-cloud-airlines-angular-sdk-components-theme($your-angular-material-theme);
    ```

2. If you want to use a theme provided by HTS

    In your `styles.scss`, add following code :

    ```
    // Load the themes provided by HTS
    @import "node_modules/@hopper-cloud-airlines/angular-sdk/src/styles/theme.scss";
    ```

    - For dialog components :

    Pass the theme name as a parameter in the dialog configuration

    ```
    import { DialogUtils } from '@hopper-cloud-airlines/angular-sdk';

    // ...

    const dialogData = { ... };
    const dialogConfig = DialogUtils.getDialogConfig(dialogData, 'HOPPER-THEME-CLASS');
    const dialogRef = this._dialog.open(HOPPER_COMPONENT, dialogConfig);
    ```
    - For other components :

    Encapsulate each HTS components into an HTML element with the HTS theme class :

    ```
    <div class="HOPPER-THEME-CLASS">
        <!-- <HOPPER-COMPONENT>...</HOPPER-COMPONENT> -->
    </div>
    ```

    More simply you can also add the HTS theme class in the class attribute of the Body tag

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
    "input": "./node_modules/@hopper-cloud-airlines/angular-sdk/assets",
    "output": "/assets/"
}
```