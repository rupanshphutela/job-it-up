"use strict";
exports.__esModule = true;
exports.JobModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var JobModel = /** @class */ (function () {
    function JobModel() {
        this.createSchema();
        this.createModel();
    }
    JobModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            title: String,
            skills: [String],
            jobId: String,
            jobPosterId: String,
            location: String,
            description: String,
            salary: String,
            applyDeadline: String,
            startDate: String,
            endDate: String,
            experienceNeeded: String
        }, { collection: 'job' });
    };
    JobModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Jobs", this.schema);
    };
    JobModel.prototype.retrieveAllJobs = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    JobModel.prototype.retrieveJobsByJobPoster = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            console.log(itemArray);
            response.json(itemArray);
        });
    };
    JobModel.prototype.retrieveJobDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        console.log('Query  ' + query);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    JobModel.prototype.retrieveJobsBySearch = function (response, filter) {
        var query = this.model.find(filter);
        console.log('Query  ' + query);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    JobModel.prototype.deleteJob = function (response, filter) {
        var query = this.model.deleteOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return JobModel;
}());
exports.JobModel = JobModel;
