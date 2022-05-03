"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var JobModel_1 = require("./model/JobModel");
var crypto = require("crypto");
var JobSeekerModel_1 = require("./model/JobSeekerModel");
var JobPosterModel_1 = require("./model/JobPosterModel");
var ApplicationsModel_1 = require("./model/ApplicationsModel");
var UserModel_1 = require("./model/UserModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Jobs = new JobModel_1.JobModel();
        this.JobSeekers = new JobSeekerModel_1.JobSeekerModel();
        this.JobPosters = new JobPosterModel_1.JobPosterModel();
        this.Applications = new ApplicationsModel_1.ApplicationsModel();
        this.Users = new UserModel_1.UserModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        /*Job*/
        router.get('/app/job/', function (req, res) {
            console.log('Query All Jobs');
            _this.Jobs.retrieveAllJobs(res);
        });
        router.post('/app/job/', function (req, res) {
            var id = crypto.randomBytes(16).toString("hex");
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.jobId = id;
            _this.Jobs.model.create(jsonObj, function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        router.get('/app/job/:jobId', function (req, res) {
            var id = req.params.jobId;
            console.log('Query Single job with id: ' + id);
            _this.Jobs.retrieveJobDetails(res, { jobId: id });
        });
        /*Job Seeker*/
        router.get('/app/jobseeker/', function (req, res) {
            console.log('Query All Job Seekers');
            _this.JobSeekers.retrieveAllJobSeekers(res);
        });
        router.post('/app/jobseeker/', function (req, res) {
            var id = crypto.randomBytes(16).toString("hex");
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.jobSeekerId = id;
            _this.JobSeekers.model.create(jsonObj, function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        router.get('/app/jobSeeker/:jobSeekerId', function (req, res) {
            var id = req.params.jobSeekerId;
            console.log('Query Single Job Seeker with id: ' + id);
            _this.JobSeekers.retrieveJobSeekerDetails(res, { jobSeekerId: id });
        });
        /*Job Poster*/
        router.get('/app/jobposter/', function (req, res) {
            console.log('Query All Job Posters');
            _this.JobPosters.retrieveAllJobPosters(res);
        });
        router.post('/app/jobposter/', function (req, res) {
            var id = crypto.randomBytes(16).toString("hex");
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.jobPosterId = id;
            _this.JobPosters.model.create(jsonObj, function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        router.get('/app/jobposter/:jobPosterId', function (req, res) {
            var id = req.params.jobPosterId;
            console.log('Query Single Job Poster with id: ' + id);
            _this.JobPosters.retrieveJobPosterDetails(res, { jobPosterId: id });
        });
        //get all jobs posted by job poster
        router.get('/app/job/jobPoster/:jobPosterId', function (req, res) {
            var id = req.params.jobPosterId;
            console.log('Query applications of job poster with id: ' + id);
            _this.Jobs.retrieveJobDetails(res, { jobPosterId: id });
        });
        //get all applications
        router.get('/app/applications/', function (req, res) {
            console.log('Query All Applications');
            _this.Applications.retrieveAllApplications(res);
        });
        //create a new application
        router.post('/app/application/', function (req, res) {
            var id = crypto.randomBytes(16).toString("hex");
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.applicationId = id;
            _this.Applications.model.create(jsonObj, function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        //get applications for a job 
        router.get('/app/application/job/:jobId', function (req, res) {
            var id = req.params.jobId;
            console.log('Query applications for job  with id: ' + id);
            _this.Applications.retrieveApplicationDetails(res, { jobId: id });
        });
        //get a single application
        router.get('/app/application/:applicationId', function (req, res) {
            var id = req.params.applicationId;
            console.log('Query Single application with id: ' + id);
            _this.Applications.retrieveApplicationDetails(res, { applicationId: id });
        });
        //Get list of users
        router.get('/app/user/', function (req, res) {
            console.log('Query All users');
            _this.Users.retrieveAllUsers(res);
        });
        //Create New User
        router.post('/app/user/', function (req, res) {
            var id = crypto.randomBytes(16).toString("hex");
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.userId = id;
            _this.Users.model.create(jsonObj, function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
