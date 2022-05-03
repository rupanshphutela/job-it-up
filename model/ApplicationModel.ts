import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IApplicationModel} from '../interfaces/IApplicationModel';
import { STATUS_CODES } from "http";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ApplicationModel {
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
                jobId : String,
                jobSeekerId: String,
                applicationId: String,
                expectedSalary: String,
                resume:String,
                workAuthorization:String,
                status: String
            }, {collection: 'application'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IApplicationModel>("Application", this.schema);
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
export {ApplicationModel};