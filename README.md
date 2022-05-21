# JobItUp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 1. To start mongo demon 
mongod -port 3000 -dbpath ".\expressServer\createDB"

## 2. To start mongo server
cd expressServer
mongo --port 3000 --authenticationDatabase admin

## 3. To load the database
load ('createDB/createJobItUpSampleData.js');
load ('createDB/createAdminUser.js');
exit

## 4. Compile Node/Express Server.  You may need to go to all subdirectories and compile the ts files.
tsc AppServer.ts

## 5. Execute Node/Express server on port 8080
node AppServer.js 

## 6. To test server #3, try the following URL on the browser, while the server is running:
* http://localhost:8080/
* http://localhost:8080/app/jobposter

## 7. To start angular
ng serve
http://localhost:4200/
http://localhost:4200/appliedJob
http://localhost:4200/applyjob/1