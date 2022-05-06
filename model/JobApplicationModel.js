"use strict";
exports.__esModule = true;
exports.JobApplicationModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var JobApplicationModel = /** @class */ (function () {
    function JobApplicationModel() {
        this.createSchema();
        this.createModel();
    }
    JobApplicationModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            jobId: String,
            jobSeekerId: String,
            jobApplicationId: String,
            expectedSalary: String,
            resume: String,
            workAuthorization: String,
            status: String
        }, { collection: 'jobApplication' });
    };
    JobApplicationModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("JobApplication", this.schema);
    };
    JobApplicationModel.prototype.retrieveApplicationDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    JobApplicationModel.prototype.retrieveApplicationsOfSeeker = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    JobApplicationModel.prototype.retrieveAllApplications = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return JobApplicationModel;
}());
exports.JobApplicationModel = JobApplicationModel;
