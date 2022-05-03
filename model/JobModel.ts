import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IJobModel} from '../interfaces/IJobModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class JobModel {


    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                title: String,
                skills: [String],
                jobId: String,
                jobPosterId: String,
                location: String,
                description: String,
                salary: String,
                applyDeadline:String,
                startDate:String,
                endDate:String,
                experienceNeeded:String
            }, {collection: 'job'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IJobModel>("Jobs", this.schema);
    }

    public retrieveAllJobs(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
    public retrieveJobDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        console.log('Query  ' + query);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {JobModel};