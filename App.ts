import * as express from 'express';
import * as bodyParser from 'body-parser';
import {JobModel} from './model/JobModel';
import * as crypto from 'crypto';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Jobs:JobModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Jobs = new JobModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    router.get('/app/job/', (req, res) => {
      console.log('Query All Jobs');
      this.Jobs.retrieveAllJobs(res);
  });

  router.post('/app/job/', (req, res) => {
    const id = crypto.randomBytes(16).toString("hex");
    console.log(req.body);
      var jsonObj = req.body;
      jsonObj.jobId = id;
      this.Jobs.model.create(jsonObj, (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
      res.send('{"id":"' + id + '"}');
  });

  router.get('/app/job/:jobId', (req, res) => {
    var id = req.params.listId;
    console.log('Query Single job with id: ' + id);
    this.Jobs.retrieveJobDetails(res, {listId: id});
});

    this.expressApp.use('/', router);
    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
  }
}
export {App};