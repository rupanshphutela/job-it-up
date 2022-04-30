import * as express from 'express';
import * as bodyParser from 'body-parser';
import {JobModel} from './model/JobModel';
import * as crypto from 'crypto';
import { JobSeekerModel } from './model/JobSeekerModel';
import { JobPosterModel } from './model/JobPosterModel';
import {ApplicationsModel} from './model/ApplicationsModel';
import {EducationModel} from './model/EducationModel';
import {UserModel} from './model/UserModel';
import { WorkExpModel } from './model/WorkExpModel';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Jobs:JobModel;
  public JobSeekers:JobSeekerModel;
  public JobPosters:JobPosterModel;
  public Applications:ApplicationsModel;
  public Educations:EducationModel;
  public Users:UserModel;
  public workExp:WorkExpModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Jobs = new JobModel();
    this.JobSeekers = new JobSeekerModel();
    this.JobPosters = new JobPosterModel();
    this.Applications=new ApplicationsModel();
    this.Educations = new EducationModel();
    this.Users = new UserModel();
    this.workExp = new WorkExpModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

  /*Job*/
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
    var id = req.params.jobId;
    console.log('Query Single job with id: ' + id);
    this.Jobs.retrieveJobDetails(res, {jobId: id});
});

  /*Job Seeker*/
  router.get('/app/jobseeker/', (req, res) => {
    console.log('Query All Job Seekers');
    this.JobSeekers.retrieveAllJobSeekers(res);
  });

  router.post('/app/jobseeker/', (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  console.log(req.body);
    var jsonObj = req.body;
    jsonObj.jobSeekerId = id;
    this.JobSeekers.model.create(jsonObj, (err) => {
        if (err) {
            console.log('object creation failed');
        }
    });
    res.send('{"id":"' + id + '"}');
  });

  router.get('/app/jobSeeker/:jobSeekerId', (req, res) => {
  var id = req.params.jobSeekerId;
  console.log('Query Single Job Seeker with id: ' + id);
  this.JobSeekers.retrieveJobSeekerDetails(res, {jobSeekerId: id});
  });

  /*Job Poster*/
  router.get('/app/jobposter/', (req, res) => {
    console.log('Query All Job Posters');
    this.JobPosters.retrieveAllJobPosters(res);
  });

  router.post('/app/jobposter/', (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  console.log(req.body);
    var jsonObj = req.body;
    jsonObj.jobPosterId = id;
    this.JobPosters.model.create(jsonObj, (err) => {
        if (err) {
            console.log('object creation failed');
        }
    });
    res.send('{"id":"' + id + '"}');
  });

  router.get('/app/jobposter/:jobPosterId', (req, res) => {
  var id = req.params.jobPosterId;
  console.log('Query Single Job Poster with id: ' + id);
  this.JobPosters.retrieveJobPosterDetails(res, {jobPosterId: id});
  });
//get all jobs posted by job poster
router.get('/app/job/jobPoster/:jobPosterId', (req, res) => {
  var id = req.params.jobPosterId;
  console.log('Query applications of job poster with id: ' + id);
  this.Jobs.retrieveJobDetails(res, {jobPosterId: id});
});

//get all applications
router.get('/app/applications/', (req, res) => {
  console.log('Query All Applications');
  this.Applications.retrieveAllApplications(res);
});


//create a new application
router.post('/app/application/', (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  console.log(req.body);
    var jsonObj = req.body;
    jsonObj.applicationId = id;
    this.Applications.model.create(jsonObj, (err) => {
        if (err) {
            console.log('object creation failed');
        }
    });
    res.send('{"id":"' + id + '"}');
});
//get applications for a job 
router.get('/app/application/job/:jobId', (req, res) => {
  var id = req.params.jobId;
  console.log('Query applications for job  with id: ' + id);
  this.Applications.retrieveApplicationDetails(res, {jobId: id});
});
//get a single application
router.get('/app/application/:applicationId', (req, res) => {
  var id = req.params.applicationId;
  console.log('Query Single application with id: ' + id);
  this.Applications.retrieveApplicationDetails(res, {applicationId: id});
});

//Get list of users
router.get('/app/user/', (req, res) => {
  console.log('Query All users');
  this.Users.retrieveAllUsers(res);
});

//Create New User
router.post('/app/user/', (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  console.log(req.body);
    var jsonObj = req.body;
    jsonObj.userId = id;
    this.Users.model.create(jsonObj, (err) => {
        if (err) {
            console.log('object creation failed');
        }
    });
    res.send('{"id":"' + id + '"}');
});

//Get list of educations
router.get('/app/education/', (req, res) => {
  console.log('Query All educations');
  this.Educations.retrieveAllEducations(res);
});

//Create a new Education
router.post('/app/education/', (req, res) => {
const id = crypto.randomBytes(16).toString("hex");
console.log(req.body);
  var jsonObj = req.body;
  jsonObj.educationId = id;
  this.Educations.model.create(jsonObj, (err) => {
      if (err) {
          console.log('object creation failed');
      }
  });
  res.send('{"id":"' + id + '"}');
});

//get education for job seeker 
router.get('/app/education/jobSeeker/:jobSeekerId', (req, res) => {
  var id = req.params.jobSeekerId;
  console.log('Query education for jobSeeker with id: ' + id);
  this.Educations.retrieveEducationDetails(res, {jobSeekerId: id});
});

//get work exp. list
router.get('/app/workexp/', (req, res) => {
  console.log('Query All list');
  this.workExp.retrieveAllWorkExp(res);
});

//get count of work exp
router.get('/app/workexpcount', (req, res) => {
  console.log('Query the number of list elements in db',res);
  this.workExp.retrieveWorkExpCount(res);
});

    this.expressApp.use('/', router);
    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
  }
}
export {App};
