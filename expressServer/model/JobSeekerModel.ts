import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import { IJobSeekerModel } from "../interfaces/IJobSeekerModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class JobSeekerModel {


    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                
                userId: String,
                jobSeekerId: String,
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
                education: 
                {
                    educationId: String,
                    universityName: String,
                    degree: String,
                    fromDate: String,
                    toDate: String
                },
                workExperience:
                {
                    workExperienceId: String,
                    companyName: String,
                    role: String,
                    fromDate: String,
                    toDate: String,
                }
            }, {collection: 'jobSeeker'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IJobSeekerModel>("JobSeeker", this.schema);
    }

    public retrieveAllJobSeekers(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
    public retrieveJobSeekerDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {JobSeekerModel};