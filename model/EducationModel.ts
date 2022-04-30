import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IEducationModel} from '../interfaces/IEducationModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class EducationModel {
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
                universityName: String,
                degree: String,
                fromDate: String,
                toDate: String,
            }, {collection: 'education'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IEducationModel>("Educations", this.schema);
    }

    public retrieveAllEducations(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveEducationDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

}
export {EducationModel};