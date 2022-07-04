# HcAirlinesAngular

This repository contains all the Angular projects of the Hopper Cloud Airlines & Pss team

## Changelog

[Changelog](https://github.com/hopper/hc-airlines-angular/blob/main/CHANGELOG.md)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The purpose of this server is to serve as documentation for the integration of the various projects within Hopper's customers.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

If you want to build a specific project :

`ng build PROJECT_NAME`

## Publication

1. Update the `package.json version` of the project
2. Run `ng build PROJECT_NAME`
3. Move to `dist/PROJECT_NAME` folder
4. Run `npm pack` in order to generate a tgz file
5. Run `npm publish` to push the new version

## Update documentation

1. Run `ng build --base-href "https://hopper.github.io/hc-airlines-angular/"`
2. Run `npx angular-cli-ghpages --dir=dist/hc-airlines-angular`