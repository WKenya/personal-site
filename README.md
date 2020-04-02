# PersonalSite

![](https://github.com/WKenya/personal-site/workflows/Node%20CI/badge.svg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Docker

## Running through a container

If you want to run your local code on the docker container then run the command with the proper image tag:

`docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm {image_tag}`

If you want to just run the site using docker, then run the command with the proper image tag:

`docker container run --publish 4201:4200 --name personal-site {image_tag}`

## Building an image

If you want to build a new image of this then run the following command an specify the new image name with the version:

`docker image build -t {image_tag} .`