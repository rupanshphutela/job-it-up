"use strict";
exports.__esModule = true;
exports.ApplicationsModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ApplicationsModel = /** @class */ (function () {
    function ApplicationsModel() {
        this.createSchema();
        this.createModel();
    }
    ApplicationsModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            jobId: Number,
            jobSeekerId: Number,
            applicationId: Number,
            expectedSalary: String,
            resume: String,
            workAuthorization: String,
            status: String
        }, { collection: 'applications' });
    };
    ApplicationsModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Applications", this.schema);
    };
    ApplicationsModel.prototype.retrieveApplicationDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ApplicationsModel.prototype.retrieveApplicationsOfSeeker = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ApplicationsModel.prototype.retrieveAllApplications = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return ApplicationsModel;
}());
exports.ApplicationsModel = ApplicationsModel;
