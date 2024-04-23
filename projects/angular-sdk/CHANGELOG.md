<a name="6.3.0"></a>

# 6.3.0 (2024-04-23)

- Removed the exercise flow. 
- Code cleanup.

<a name="6.2.1"></a>

# 6.2.1 (2024-04-18)

- Redesign of the offer banner large.

<a name="6.2.0"></a>

# 6.2.0 (2024-03-28)

- Rework of i18n management.

<a name="6.0.8"></a>

# 6.0.8 (2024-01-24)

- Improved logged data.

<a name="6.0.7"></a>

# 6.0.7 (2024-01-04)

- Fixed logging issue.
- Fixed an issue with US states in the refund form

<a name="6.0.6"></a>

# 6.0.6 (2023-12-14)

General:
- Add support for logging.

<a name="6.0.5"></a>

# 6.0.5 (2023-10-26)

General:
- Fixes some texts related to Hopper/HTS.

<a name="6.0.4"></a>

# 6.0.4 (2023-10-16)

General:
- Errors description pushed by the sdk must be retrieved in UI project.

<a name="6.0.3"></a>

# 6.0.3 (2023-10-16)

General:
- In case of failure when calling an API endpoint, the translation of the error description is extracted directly from the HTTP response

<a name="6.0.2"></a>

# 6.0.2 (2023-10-04)

General:
- Replacement of the Hopper logo with HTS

<a name="6.0.1"></a>

# 6.0.1 (2023-09-18)

Security:
- Change the way to pass the HC Session ID when calling API endpoints

<a name="6.0.0"></a>

# 6.0.0 (2023-07-27)

### Major changes
- Added support for Angular 15


<a name="5.0.1"></a>

# 5.0.1 (2023-07-25)

General:
- Fixed the minimum requirements of the SDK

<a name="5.0.0"></a>

# 5.0.0 (2023-07-25)

### Major changes
- Added support for Angular 14

<a name="4.3.3"></a>

# 4.3.3 (2023-07-19)

General:
- Minor changes on the API


<a name="4.3.2"></a>

# 4.3.2 (2023-05-03)

General:
- Update errors labels

<a name="4.3.1"></a>

# 4.3.1 (2023-03-16)

General:
- Fixed the size of the "powered by hopper" logo

Exercise flow:
- Fixed an occasional issue that allowed skipping 2 steps at once.
- Fixed display of general information form on large screens.
- Added a new event when a step is completed.
- Improved rendering on mobile.

Offer banner large and Offer dialog:
- Display of offers respecting the order of the API response

<a name="4.3.0"></a>

# 4.3.0 (2023-02-24)

General:
- API migration to v1.1

<a name="4.2.31"></a>

# 4.2.31 (2023-02-23)
Offer banner large:
- Partially fixed the loading of icons on slow networks
- Fixed the spacing under the last choice ('decline' choice).

Offer dialog:
- Fixed a display issue with IOS 14+

<a name="4.2.30"></a>

# 4.2.30 (2023-02-14)
Offer banner large:
- Fixed an issue causing occasional HTTP errors 

<a name="4.2.29"></a>

# 4.2.29 (2023-02-03)
General:
- Added a "powered by" logo by language
- Removed the spanish
- Reduced spacings in mobile view

Exercise flow:
- Fixed the width of buttons in tablet view

Offer banner large:
- Fixed the display of the decline choice in mobile view

<a name="4.2.28"></a>

# 4.2.28 (2023-01-26)
General:
- Updated the hyperwallet url

<a name="4.2.27"></a>

# 4.2.27 (2023-01-26)
General:
- Updated the hyperwallet url

<a name="4.2.26"></a>

# 4.2.26 (2023-01-25)
General:
- Fixed the T&Cs url

<a name="4.2.25"></a>

# 4.2.25 (2023-01-24)
General:
- Fixed the date format in French

<a name="4.2.24"></a>

# 4.2.24 (2023-01-24)
General: 
- Improvements on mobile
- Fixed the date format in French

Offer Dialog:
- Removal of the warning sentence linked to the T&Cs

<a name="4.2.23"></a>

# 4.2.23 (2023-01-18)
Offer dialog:
- Updated the title of the dialog (label)

<a name="4.2.22"></a>

# 4.2.22 (2023-01-17)
Offer banner large:
- Fixed the display of the checkbox (Defect 40182)

Exercise flow:
- Improved the flow

<a name="4.2.21"></a>

# 4.2.21 (2023-01-04)
General:
- Application of final labels

<a name="4.2.20"></a>

# 4.2.20 (2022-12-21)
Exercise flow:
- RW-39650 defect: display the carrier code with the flight number

<a name="4.2.19"></a>

# 4.2.19 (2022-12-21)
General:
- Updated and Added new errors labels

Exercise flow:
- RW-39702 defect
- RW-39699 defect

<a name="4.2.18"></a>

# 4.2.18 (2022-12-13)
Exercise flow:
- Removed the spinner at the first offer-banner-large component loading's.

<a name="4.2.17"></a>

# 4.2.17 (2022-12-07)
Exercise flow: 
- Fixed component header (from accessibility point of view)

<a name="4.2.16"></a>

# 4.2.16 (2022-12-05)
Offer banner large:
- Css adjustment

<a name="4.2.15"></a>

# 4.2.15 (2022-12-02)
General:
- Updated and Added new errors labels

Offer banner large:
- Reduced the size of the image
- Reduced the size of the title
- Added some indents

<a name="4.2.14"></a>

# 4.2.14 (2022-11-29)
Offer dialog:
- Fixed imageBasePath issue

<a name="4.2.13"></a>

# 4.2.13 (2022-11-28)
Exercise flow:
- Removed payout 'in cash'
- Made date of birth empty and mandatory

<a name="4.2.12"></a>

# 4.2.12 (2022-11-24)
Exercise flow:
- Improved security on hyperwallet steps
- Fixed an issue with 'address' fields

General:
- Added new errors labels
- Added fare brand on itinerary slice and segment objects

<a name="4.2.11"></a>

# 4.2.11 (2022-11-16)
Offer Dialog & Offer Banner large:
- Fixed display of the percentage in Chinese
- Fixed margin between price and "per traveler" label

<a name="4.2.10"></a>

# 4.2.10 (2022-11-09)
Exercise flow:
- Fixed css

<a name="4.2.9"></a>

# 4.2.9 (2022-11-09)
Exercise flow:
- Improved the payment flow UI
- Restricted the country to Canada and currency to CAD in payment widget
- Added a warning message regarding the transfer method via bank account limited to Canada
- Added new parameter: contactFormUrl

Offer dialog:
- Improved accessibility

<a name="4.2.8"></a>

# 4.2.8 (2022-11-07)
General:
- Added all news errors labels - part 2
- Implements an output property in every components, to raise an event when an errors occurs into the SDK

Offer banner large and offer dialog:
- Added Incl. taxes label under the price
- Added link to Terms and conditions

<a name="4.2.7"></a>

# 4.2.7 (2022-10-24)
General:
- Added all news errors labels

Offer banner:
- Improved accessibility
- Fixed the display of the error message

Offer banner large:
- Reduced margin between error message and banner

<a name="4.2.6"></a>

# 4.2.6 (2022-10-20)
General:
- Added coverage percentage in returned offers and used it instead of computing it

<a name="4.2.5"></a>

# 4.2.5 (2022-10-18)
General:
- Replaced the "powered by" logo by "provided by" logo

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

