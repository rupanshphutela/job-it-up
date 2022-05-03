import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IApplicationsModel} from '../interfaces/IApplicationsModel';
import { STATUS_CODES } from "http";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ApplicationsModel {
    public schema:any;
    public innerSchema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                jobId : Number,
                jobSeekerId: Number,
                applicationId: Number,
                expectedSalary: String,
                resume:String,
                workAuthorization:String,
                status: String
            }, {collection: 'applications'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IApplicationsModel>("Applications", this.schema);
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
export {ApplicationsModel};