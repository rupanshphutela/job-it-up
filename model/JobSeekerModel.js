"use strict";
exports.__esModule = true;
exports.JobSeekerModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var JobSeekerModel = /** @class */ (function () {
    function JobSeekerModel() {
        this.createSchema();
        this.createModel();
    }
    JobSeekerModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userId: Number,
            jobSeekerId: Number,
            bio: String,
            resume: String,
            picture: String,
            location: String,
            fname: String,
            lname: String,
            contactNo: String,
            email: String,
            referralCode: String,
            primarySkills: [String],
            otherSkills: [String],
            education: {
                educationId: Number,
                universityName: String,
                degree: String,
                fromDate: String,
                toDate: String
            }
        }, { collection: 'jobSeeker' });
    };
    JobSeekerModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("JobSeeker", this.schema);
    };
    JobSeekerModel.prototype.retrieveAllJobSeekers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    JobSeekerModel.prototype.retrieveJobSeekerDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return JobSeekerModel;
}());
exports.JobSeekerModel = JobSeekerModel;
