import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IWorkExperienceModel} from '../interfaces/IWorkExpModel';

let mongooseConnection = DataAccess.mongooseConnection;

class WorkExperienceModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                jobSeekerId: Number,
                companyName: String,
                role: String,
                fromDate: String,
                toDate: String
            }, {collection: 'workExp'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IWorkExperienceModel>("WorkExps", this.schema);
    }

    public retrieveAllWorkExp(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveWorkExpDetailsById(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

}
export {WorkExperienceModel};