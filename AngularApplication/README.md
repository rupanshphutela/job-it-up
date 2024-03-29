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


## 0. Go to root folder(job-it-up)

## 1. To start mongo daemon 
mongod -port 3000 -dbpath ".\expressServer\data\db"

## 2. To start mongo client
mongo --port 3000 --authenticationDatabase admin

## 3. To load the database
load ('expressServer/createDB/createJobItUpSampleData.js');
load ('expressServer/createDB/createAdminUser.js');
exit

## 4. Compile Node/Express Server.  You may need to go to expressServer, expressServer/model & expressServer/interface subdirectories and compile the ts files.
cd expressServer
tsc AppServer.js

## 5. Execute Node/Express server on port 8080
go to project root directory (job-it-up)
node .\expressServer\AppServer.js 

## 6. To test server #3, try the following URL on the browser, while the server is running:
* http://localhost:8080/
* http://localhost:8080/app/jobposter

## 7. To start angular application
ng serve

## 8. Angular Application Route URLs:
http://localhost:4200/
http://localhost:4200/appliedJob
http://localhost:4200/applyjob/1

## 9. Google accounts
jobseekerteam6@gmail.com/nehu.1234
jobposterteam6@gmail.com/nehu.1234

Mongo account - https://cloud.mongodb.com/
Azure- https://portal.azure.com/?Microsoft_Azure_Education_correlationId=9a2eb02aafe449e4b283d191d3f90149&Microsoft_Azure_Education_newA4E=true&Microsoft_Azure_Education_asoSubGuid=8f9df028-1623-4aba-bfb1-fbb8a4bec339#@redhawks.onmicrosoft.com/resource/subscriptions/8f9df028-1623-4aba-bfb1-fbb8a4bec339/resourcegroups/WestUS/providers/Microsoft.Web/sites/JobItUp/appServices
Local Git azure credentials
digihuman/ansh@D2612N