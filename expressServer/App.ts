import * as express from 'express';
import * as bodyParser from 'body-parser';
import {JobModel} from './model/JobModel';
import * as crypto from 'crypto';
import * as url from 'url';
import { JobSeekerModel } from './model/JobSeekerModel';
import { JobPosterModel } from './model/JobPosterModel';
import {JobApplicationModel} from './model/JobApplicationModel';
import {UserModel} from './model/UserModel';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Jobs:JobModel;
  public JobSeekers:JobSeekerModel;
  public JobPosters:JobPosterModel;
  public JobApplications:JobApplicationModel;
  public Users:UserModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Jobs = new JobModel();
    this.JobSeekers = new JobSeekerModel();
    this.JobPosters = new JobPosterModel();
    this.JobApplications=new JobApplicationModel();
    this.Users = new UserModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, DELETE, POST, PUT');
      res.header('Access-Control-Allow-Headers','content-type');
      next();
    });
    
  /*Job*/
  router.get('/app/job/', (req, res) => {
    console.log('Query All Jobs');
    this.Jobs.retrieveAllJobs(res);
  });

  /* Retrieve One Job Details*/
  router.get('/app/job/:jobId', (req, res) => {
    var id = req.params.jobId;
    console.log('Query Single job with id: ' + id);
    this.Jobs.retrieveJobDetails(res, {jobId: id});
});

/* Retrieve Jobs by Job Poster*/
  router.get('/app/job/jobposter/:jobPosterId', (req, res) => {
    var id = req.params.jobPosterId;
    console.log('Query Jobs for Job Poster with id: ' + id);
    this.Jobs.retrieveJobsByJobPoster(res, {jobPosterId: id});
  });

  /* Retrieve Jobs by Search Criteria*/
  router.get('/app/jobs/', (req, res) => {
    var urlParts = url.parse(req.url, true);
    var query = urlParts.query;
    console.log(query)
      this.Jobs.retrieveJobsBySearch(res, query);  
  });

    /* Retrieve Jobs by Search Criteria for a specific Job Poster*/
    router.get('/app/jobs/jobposter/:jobPosterId/search', (req, res) => {
      var urlParts = url.parse(req.url, true);
      var id = req.params.jobPosterId;
      var query = urlParts.query;
      query.jobPosterId = id;
      console.log(query)
        this.Jobs.retrieveJobsBySearch(res, query);  
    });
  

  /* Retrieve Jobs with Applicants*/
  router.get('/app/job/jobposter/:jobPosterId', (req, res) => {
    var id = req.params.jobPosterId;
    console.log('Query Jobs with Applicants for jobposter with id: ' + id);
    this.Jobs.retrieveJobsWithApplicants(res, {jobPosterId: id, hasApplicants: "Y"});
  });

  /*Create a Job Post*/
  router.post('/app/job/', (req, res) => {
    const id = crypto.randomBytes(16).toString("hex");
    console.log(req.body);
      var jsonObj = req.body;
      jsonObj.jobId = id;
      this.Jobs.model.create(jsonObj, (err) => {
          if (err) {
              console.log('object creation failed');
              res.send('{"status":"' + 'failed to create job post' + '"}');
          }
          else{
            res.send('{"id":"' + id + '"}');
          }
      });
      
  });
  
  /*Update a Job*/
  router.put('/app/job/:jobId', (req, res) => {
   console.log("im in");
    var jobId = req.params.jobId;
    var body = req.body;
    this.Jobs.updateJob(res, jobId, body);
  });

  /*Delete Job and related Job Applications*/
  router.delete('/app/job/:jobId', (req, res) => {
    try{
      var id = req.params.jobId;
      console.log('Delete Job Application with jobId: ' + id);
      this.JobApplications.deleteJobApplicationsByJobId(null, {jobId: id});
  
      console.log('Delete Job Post with id: ' + id);
      this.Jobs.deleteJob(res, {jobId: id});
      }
      catch(err)
      {
        res.send('{"Error":"' + err + '"}');
      console.error('{"Error":"' + err + '"}');
  
      }
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


   /*Update a JobSeeker profile*/
   router.put('/app/JobSeeker/:JobSeekerId', (req, res) => {
     console.log("151: res", res);
     console.log("152: req", req);
     
    var JobSeekerId = req.params.JobSeekerId;
    console.log("155: JobSeekerId", JobSeekerId);

    var body = req.body;
    console.log("158: res.body", body);

    this.JobSeekers.updateJobSeekerProfile(res, JobSeekerId, body);
  });   
  
  /*Update a JobSeeker work experience*/
  router.put('/app/JobSeeker/:JobSeekerId/workExperience/:workExperienceId', (req, res) => {

    var JobSeekerId = req.params.JobSeekerId;
    var workExperienceId = req.params.workExperienceId;
    var body = req.body;
    this.JobSeekers.updateJobSeekerWorkExperience(res, JobSeekerId,workExperienceId, body);
  });

  /*Update a JobSeeker Education*/
  router.put('/app/JobSeeker/:JobSeekerId/education/:educationId', (req, res) => {

    var JobSeekerId = req.params.JobSeekerId;
    var educationId = req.params.educationId;
    var body = req.body;
    this.JobSeekers.updateJobSeekerEducation(res, JobSeekerId,educationId, body);
  });


  // delete job seeker profile.
  router.delete('/app/jobSeeker/:jobSeekerId', (req, res) => 
  {
    var id = req.params.jobSeekerId;
    var input={jobSeekerId: id};
    try
    {
      console.log('Delete Single Job seeker with id: ' + id);
      this.JobSeekers.deleteJobSeeker(res, input);
    }catch(err)
    {
      console.error('Error occurred while deleting job seeker with id:'+id);
    }
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

  // update details for specified job poster
  router.put('/app/jobPoster/:jobPosterId', (req, res) => 
  {
    var jobPosterId = req.params.jobPosterId;
    var body = req.body;
    this.JobPosters.updateJobPosterDetails(res, jobPosterId, body);
  });
  
  // get details for specified job poster
  router.get('/app/jobposter/:jobPosterId', (req, res) => {
  var id = req.params.jobPosterId;
  console.log('Query Single Job Poster with id: ' + id);
  this.JobPosters.retrieveJobPosterDetails(res, {jobPosterId: id});
  });

  // delete job poster and all related jobs and applications
  router.delete('/app/jobposter/:jobPosterId', (req, res) => 
  {
    var id = req.params.jobPosterId;
    var input={jobPosterId: id};
    try
    {
      console.log('Deleting applications for jobs posted by jobposterid:' + id) 
      this.JobApplications.deleteManyApplications(null, {jobId: id});
    }catch(err)
    {
      console.error('Error occurred while deleting applications for jobs posted by jobposter with id:'+id);
    }
    try
    {
      console.log('Deleting jobs posted by jobposterid:' + id) 
      this.Jobs.deleteManyJobs(null, input);
    }catch(err)
    {
      console.error('Error occurred while deleting jobs posted by jobposter with id:'+id);
    }
    try
    {
      console.log('Delete Single jobPoster with id: ' + id);
      this.JobPosters.deleteJobPoster(res, input);
    }catch(err)
    {
      console.error('Error occurred while deleting jobposter with id:'+id);
    }
  });

//get all jobs posted by job poster
router.get('/app/job/jobPoster/:jobPosterId', (req, res) => {
  var id = req.params.jobPosterId;
  console.log('Query applications of job poster with id: ' + id);
  this.Jobs.retrieveJobDetails(res, {jobPosterId: id});
});

//get all job applications
router.get('/app/jobApplication/', (req, res) => {
  console.log('Query All Applications');
  this.JobApplications.retrieveAllJobApplications(res);
});


//create a new job application
router.post('/app/jobApplication/', (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  console.log(req.body);
    var jsonObj = req.body;
    jsonObj.jobApplicationId = id; 
    this.JobApplications.model.create(jsonObj, (err) => {
        if (err) {
            console.log('object creation failed');
            res.send('{"status":"' + 'failed to create job application' + '"}');
        }
        else{
          console.log('job id from request body is ', req.body.jobId);
          res.send('{"id":"' + id + '"}');
          var jobId = req.body.jobId;
          this.Jobs.updateJob(null, jobId, {hasApplicants:"Y"});
        }
    });
});
//get job applications for a job 
router.get('/app/jobApplication/job/:jobId', (req, res) => {
  var id = req.params.jobId;
  console.log('Query applications for job  with id: ' + id);
  this.JobApplications.retrieveJobApplications(res, {jobId: id});
});
//get a single application
router.get('/app/jobApplication/:jobApplicationId', (req, res) => {
  var id = req.params.jobApplicationId;
  console.log('Query Single application with id: ' + id);
  this.JobApplications.retrieveJobApplications(res, {jobApplicationId: id});
});

//get job applications for a job seeker
router.get('/app/jobApplication/jobSeeker/:jobSeekerId', (req, res) => {
  var id = req.params.jobSeekerId;
  console.log('Query Single application with id: ' + id);
  this.JobApplications.retrieveJobApplications(res, {jobSeekerId: id});
});

//update job application
router.put('/app/jobApplication/:jobApplicationId', (req, res) => {

  this.JobApplications.model.findOneAndUpdate({jobApplicationId: req.params.jobApplicationId}, req.body, function (err, jobApp)  {   
    if (!jobApp)
    console.log('Could not fetch specified job application');
    else {
      jobApp.status =req.body.status;  
      jobApp.save(function(err) {
        if (err){
          console.log('error');
          res.send('Error : Status not updated');
        }
        else
        {
          console.log('success')
          res.send('Status updated');
        }
      });
    }
  });
});

//delete job application
router.delete('/app/jobApplication/:jobApplicationId', (req, res) => {
  var id = req.params.jobApplicationId;
  console.log('Query Single application with id: ' + id);
  this.JobApplications.deleteJobApplications(res, {jobApplicationId: id});
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

//get a single user
router.get('/app/user/:userId', (req, res) => {
  var id = req.params.userId;
  console.log('Query Single user with id: ' + id);
  this.Users.retrieveUserDetails(res, {userId: id});
});


    this.expressApp.use('/', router);
    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
  }
}
export {App};
