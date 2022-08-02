<a name="2.5.0"></a>

# 2.5.O (2022-XX-XXXX)

### Bug fixes / Small changes
- CFAR Exercise dialog:
    - Fixed a display issue in mobile view

### Minor changes
- CFAR Exercise dialog:
    - Improved itinerary display

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

