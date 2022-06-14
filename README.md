# HcAirlinesAngular

This repository contains all the Angular projects of the Hopper Cloud Airlines & Pss team

## Development server
---

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The purpose of this server is to serve as documentation for the integration of the various projects within Hopper's customers.

## Build
---

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

If you want to build a specific project :

`ng build PROJECTNAME`

## Running unit tests
---

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
---

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Publishing
---

1. Update the `package.json version` of the project
2. Run `ng build PROJECTNAME`
3. Move to `dist/PROJECTNAME` folder
4. Run `npm pack` in order to generate a tgz file
5. Run `npm publish` to push the new version