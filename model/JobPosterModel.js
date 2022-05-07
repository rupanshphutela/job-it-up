"use strict";
exports.__esModule = true;
exports.JobPosterModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var JobPosterModel = /** @class */ (function () {
    function JobPosterModel() {
        this.createSchema();
        this.createModel();
    }
    JobPosterModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userId: String,
            jobPosterId: String,
            contactNo: String,
            fname: String,
            lname: String,
            email: String,
            referralCode: String,
            location: String,
            companyName: String,
            picture: String,
            companyLogo: String,
            Overview: String,
            website: String,
            industry: String,
            companySize: String,
            headquarters: String,
            founded: String
        }, { collection: 'jobPoster' });
    };
    JobPosterModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("JobPoster", this.schema);
    };
    JobPosterModel.prototype.retrieveAllJobPosters = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    JobPosterModel.prototype.retrieveJobPosterDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    JobPosterModel.prototype.deleteJobPoster = function (response, filter) {
        var query = this.model.deleteOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return JobPosterModel;
}());
exports.JobPosterModel = JobPosterModel;
