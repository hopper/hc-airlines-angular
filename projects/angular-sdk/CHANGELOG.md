<a name="2.2.0"></a>

# 2.2.0 (2022-07-29)

### Bug fixes
- General:
    - Fix date format
    - Adjust values of countryCode enum (Alpha-2)
- CFAR offer banner large:
    - Remove unused block 'choose or decline coverage'
    - Improve performance
    - Fix the descriptions (next to the check icon) to be displayed in the current language


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
- Fix labels issues on CFAR Offer Banner Large component
- Fix labels issues on CFAR Offer Banner component
- Add Author info

<a name="2.1.6"></a>

# 2.1.6 (2022-07-15)

### Bug fixes
- Fix architecture issue

<a name="2.1.5"></a>

# 2.1.5 (2022-07-15)

### Bug fixes
- Fix architecture issue

<a name="2.1.4"></a>

# 2.1.4 (2022-07-15)

### Bug fixes
- Fix architecture issue

<a name="2.1.3"></a>

# 2.1.3 (2022-07-15)

### Bug fixes
- Fix architecture issue

<a name="2.1.2"></a>

# 2.1.2 (2022-07-15)

### Bug fixes
- Fix Service Import issue

<a name="2.1.1"></a>

# 2.1.1 (2022-07-13)

### Bug fixes
- Fix licence issue
- Remove 'currentTheme' required field from "CFAR offer banner large" component
- Fix some descriptions mistakes

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
- Fix accessibility issue with the npm registry

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

