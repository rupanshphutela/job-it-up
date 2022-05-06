import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IJobApplicationModel} from '../interfaces/IJobApplicationModel';
import { STATUS_CODES } from "http";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class JobApplicationModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                jobId : String,
                jobSeekerId: String,
                jobApplicationId: String,
                expectedSalary: String,
                resume:String,
                workAuthorization:String,
                status: String
            }, {collection: 'jobApplication'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IJobApplicationModel>("JobApplication", this.schema);
    }
    
    public retrieveApplicationDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveApplicationsOfSeeker(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
    public retrieveAllApplications(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
   
  

}
export {JobApplicationModel};