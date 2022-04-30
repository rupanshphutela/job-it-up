import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import { IJobPosterModel } from "../interfaces/IJobPosterModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class JobPosterModel {


    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                
                userId: Number,
                jobPosterId: Number,
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
            }, {collection: 'jobPoster'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IJobPosterModel>("JobPoster", this.schema);
    }

    public retrieveAllJobPosters(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
    public retrieveJobPosterDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {JobPosterModel};