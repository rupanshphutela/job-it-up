"use strict";
exports.__esModule = true;
exports.EducationModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var EducationModel = /** @class */ (function () {
    function EducationModel() {
        this.createSchema();
        this.createModel();
    }
    EducationModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            jobSeekerId: Number,
            education: [
                {
                    educationId: Number,
                    universityName: String,
                    degree: String,
                    fromDate: String,
                    toDate: String
                }
            ]
        }, { collection: 'education' });
    };
    EducationModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Educations", this.schema);
    };
    EducationModel.prototype.retrieveAllEducations = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    EducationModel.prototype.retrieveEducationDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return EducationModel;
}());
exports.EducationModel = EducationModel;
