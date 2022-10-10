<a name="4.2.4"></a>

# 4.2.4 (2022-10-07)
General:
- Price per traveler is now based of the premium amount (iso the coverage amount)
- Offer description is now refreshed when the language is updated
- Complete elements related to analytics events
- Update language at offer and contract creation

<a name="4.2.3"></a>

# 4.2.3 (2022-10-04)
Offer Banner Large:
- New parameter: uiVariant

<a name="4.2.2"></a>

# 4.2.2 (2022-09-29)
General:
- Update the list of error labels

<a name="4.2.1"></a>

# 4.2.1 (2022-09-29)
General:
- Use an exercise ID instead of a contract ID at claims portal opening
- Complete the callbackUrl with a redirection token 

<a name="4.2.0"></a>

# 4.2.0 (2022-09-22)
General:
- Analytics events management

<a name="4.1.1"></a>

# 4.1.1 (2022-09-20)
Offer Banner Large:
- Fixed a display issue with the PoweredBy Logo

General:
- Reduced the CSS weight (faster loading)

<a name="4.1.0"></a>

# 4.1.0 (2022-09-12)

Offer Banner:
- Fixed an issue with the offers descriptions

General:
- Improved the theming managment
- Added a new theme: theme-light-yellow
- Fixed deprecated subscriptions (required by the next release of RxJS)

<a name="4.0.0"></a>

# 4.0.0 (2022-09-09)

### Major changes
- Added support for Angular 13

<a name="3.0.0"></a>

# 3.0.0 (2022-09-08)

### Major changes
- Added support for Angular 12

<a name="2.10.0"></a>

# 2.10.0 (2022-09-07)

### Minor changes
- Offer Banner Large:
    - Improved the display of the error message when there are no offers
    - Transmission of the premium price when selecting an offer

<a name="2.9.0"></a>

# 2.9.0 (2022-08-30)

### Bug fixes / Small changes
- Improved rendering in mobile view
- The CFAR eligibility deadline is now in bold in the descriptions of the offers

### Minor changes
- Exercise flow: 
    - Improved wording
    - New output: 'flowCompleted', after the completion of the flow

<a name="2.8.2"></a>

# 2.8.2 (2022-08-25)

### Bug fixes / Small changes
- CFAR Offer Banner Large: 
    - Fixed the display of warning message
    - Added a message when the booking has already been refunded
- CFAR Offer Dialog:
    - Fixed the display of price per traveler
- General:
    - Fixed XSS vulnerability
    - Changed some labels

<a name="2.8.1"></a>

# 2.8.1 (2022-08-24)

### Bug fixes / Small changes
- Fixed loading error of some svg icons
- Exercise flow:
    - Fixed display issue on mobile
    - Fixed display issue on 'resend code' button

<a name="2.8.0"></a>

# 2.8.0 (2022-08-23)

### Bug fixes / Small changes
- Fixed import issue
- Fixed css issue

### Minor changes
- Update the API

<a name="2.7.0"></a>

# 2.7.0 (2022-08-19)

### Bug fixes / Small changes
- Fixed a css issue related to the source code examples 

### Minor changes
- New optional parameter: imageBasePath
- Cfar Exercise Dialog:
    - The component is not a dialog anymore

<a name="2.6.1"></a>

# 2.6.1 (2022-08-17)

### Bug fixes / Small changes
- Fixed an issue with ngx-highlight module
- Exercise Dialog:
    - Fixed circular dependencies
    - Fixed an issue with the verification email during the verification step

<a name="2.6.0"></a>

# 2.6.O (2022-08-09)

### Bug fixes / Small changes
- Exercise Dialog:
    - Fixed Terms and conditions label case

### Minor changes
- Exercise Dialog:
    - Send and validate a one time password before processing an exercise

<a name="2.5.0"></a>

# 2.5.O (2022-08-04)

### Bug fixes / Small changes
- CFAR Exercise dialog:
    - Fixed a display issue in mobile view
    - Translation of passengers types

### Minor changes
- CFAR Exercise dialog:
    - Improved itinerary display
- CFAR Offer Banner:
    - Added an event when loading offers fails.
    - The component content's is now hidden when offers fail to load.
- CFAR Offer Banner Large:
    - Added an event when loading offers fails.
    - The component content's is now hidden when offers fail to load.
    - Added a new input: hasWarningCoverageMessage

<a name="2.4.0"></a>

# 2.4.O (2022-08-01)

### Minor changes
- General:
    - WCAG compliance
- CFAR Offer Banner Large: 
    - Added "Powered By Hopper" logo
    - Added Terms and conditions link
    - Improved offer descriptions

<a name="2.3.0"></a>

# 2.3.O (2022-07-28)

### Bug fixes / Small changes
- CFAR Exercise Dialog:
    - Fixed a label issue when the address line 1 was empty
    - Fixed the display of the loader
    - Forced the display of the 'decline option' after a first selection
- CFAR Offer Banner Large:
    - Fixed a display issue in mobile view

### Minor changes
- CFAR Offer banner and CFAR Offer banner large:
    - Added new event: offersLoaded
- CFAR Offer dialog:
    - Added new parameter: cfarOffers

<a name="2.2.0"></a>

# 2.2.0 (2022-07-27)

### Bug fixes
- General:
    - Fixed date format
    - Adjusted values of countryCode enum (Alpha-2)
- CFAR offer banner large:
    - Removed unused block 'choose or decline coverage'
    - Improved performance
    - Fixed the descriptions (next to the check icon) to be displayed in the current language


### Minor changes
- New component: Exercise Dialog
- Catch errors of http calls
- CFAR offer banner: 
    - OfferAccepted event now returns a CfarContractCustomer object
    - Display the descriptions (next to the check icon) in the current language
- CFAR offer banner large: 
    - OfferAccepted event now returns a CfarContractCustomer object
    - Remove 'Continue' button
    - Add separator between coverages choices
    - Display price per traveler
    - New parameter (hasNoCoverageOption)


<a name="2.1.7"></a>

# 2.1.7 (2022-07-18)

### Bug fixes / Small changes
- Fixed labels issues on CFAR Offer Banner Large component
- Fixed labels issues on CFAR Offer Banner component
- Add Author info

<a name="2.1.6"></a>

# 2.1.6 (2022-07-15)

### Bug fixes
- Fixed architecture issue

<a name="2.1.5"></a>

# 2.1.5 (2022-07-15)

### Bug fixes
- Fixed architecture issue

<a name="2.1.4"></a>

# 2.1.4 (2022-07-15)

### Bug fixes
- Fixed architecture issue

<a name="2.1.3"></a>

# 2.1.3 (2022-07-15)

### Bug fixes
- Fixed architecture issue

<a name="2.1.2"></a>

# 2.1.2 (2022-07-15)

### Bug fixes
- Fixed Service Import issue

<a name="2.1.1"></a>

# 2.1.1 (2022-07-13)

### Bug fixes
- Fixed licence issue
- Remove 'currentTheme' required field from "CFAR offer banner large" component
- Fixed some descriptions mistakes

<a name="2.1.0"></a>

# 2.1.0 (2022-07-13)

### Minor changes
- New component: CFAR Offer Banner Large
- Remove 'extAttributes' field from all components

<a name="2.0.0"></a>

# 2.0.0 (2022-07-11)

### Major changes
- New url of the package: https://www.npmjs.com/package/@hopper-cloud-airlines/angular-sdk
- The project was renamed to angular-sdk
- Downgrade Angular requirement to Angular 11

### Bug fixes
- Fixed accessibility issue with the npm registry

<a name="1.2.0"></a>

# 1.2.0 (2022-07-04)

### Minor changes
- Add changelog to the project

<a name="1.1.0"></a>

# 1.1.0 (2022-06-30)

### Minor changes
- Add documentation on "importing the SDK module into a project"
- Addition of imports in the code examples of the “TS” tabs
- Update descriptions
- Deleting unused fields

### Bug fixes
- CSS issue on CFAR offer dialog component when called from CFAR offer banner component
- The language changes when the user interacts with the different components of the SDK

