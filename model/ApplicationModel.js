"use strict";
exports.__esModule = true;
exports.ApplicationModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ApplicationModel = /** @class */ (function () {
    function ApplicationModel() {
        this.createSchema();
        this.createModel();
    }
    ApplicationModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            jobId: String,
            jobSeekerId: String,
            applicationId: String,
            expectedSalary: String,
            resume: String,
            workAuthorization: String,
            status: String
        }, { collection: 'application' });
    };
    ApplicationModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Application", this.schema);
    };
    ApplicationModel.prototype.retrieveApplicationDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ApplicationModel.prototype.retrieveApplicationsOfSeeker = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ApplicationModel.prototype.retrieveAllApplications = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return ApplicationModel;
}());
exports.ApplicationModel = ApplicationModel;
