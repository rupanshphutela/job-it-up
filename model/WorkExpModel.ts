import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IWorkExpModel} from '../interfaces/IWorkExpModel';

let mongooseConnection = DataAccess.mongooseConnection;

class WorkExpModel {
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
        this.model = mongooseConnection.model<IWorkExpModel>("WorkExps", this.schema);
    }

    public retrieveAllWorkExp(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveWorkExpCount(response:any): any {
        console.log("retrieve Work Exp Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfLists) => {
            console.log("Work Experience: " + numberOfLists);
            response.json(numberOfLists) ;
        });
    }

}
export {WorkExpModel};