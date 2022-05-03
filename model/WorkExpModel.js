"use strict";
exports.__esModule = true;
exports.WorkExpModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var WorkExpModel = /** @class */ (function () {
    function WorkExpModel() {
        this.createSchema();
        this.createModel();
    }
    WorkExpModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            jobSeekerId: Number,
            companyName: String,
            role: String,
            fromDate: String,
            toDate: String
        }, { collection: 'workExp' });
    };
    WorkExpModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("WorkExps", this.schema);
    };
    WorkExpModel.prototype.retrieveAllWorkExp = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    WorkExpModel.prototype.retrieveWorkExpCount = function (response) {
        console.log("retrieve Work Exp Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfLists) {
            console.log("Work Experience: " + numberOfLists);
            response.json(numberOfLists);
        });
    };
    return WorkExpModel;
}());
exports.WorkExpModel = WorkExpModel;
